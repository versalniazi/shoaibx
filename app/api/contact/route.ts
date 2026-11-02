import { NextResponse, type NextRequest } from "next/server";
import { budgetOptions, contactSchema, labelFor, serviceOptions } from "@/lib/contact-schema";
import { packages } from "@/lib/pricing";
import { configuredProvider, sendMail } from "@/lib/server/mailer";
import { rateLimit } from "@/lib/server/rate-limit";
import { site } from "@/lib/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MIN_FILL_MS = 3000; // humans take longer than 3 seconds to complete the form
const MAX_FILL_MS = 1000 * 60 * 60 * 24;

const escapeHtml = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
const oneLine = (s: string) => s.replace(/[\r\n]+/g, " ").trim();

function clientIp(req: NextRequest) {
  return req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "unknown";
}

function sameOrigin(req: NextRequest) {
  const origin = req.headers.get("origin");
  if (!origin) return true; // some privacy tools strip Origin; other checks still apply
  try {
    return new URL(origin).host === req.headers.get("host");
  } catch {
    return false;
  }
}

async function verifyTurnstile(token: string | undefined, ip: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true; // optional extra layer
  if (!token) return false;
  const body = new URLSearchParams({ secret, response: token, remoteip: ip });
  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", { method: "POST", body, signal: AbortSignal.timeout(8000) });
  const data = (await res.json().catch(() => ({}))) as { success?: boolean };
  return data.success === true;
}

const fail = (status: number, message: string, extra: Record<string, unknown> = {}) => NextResponse.json({ ok: false, message, ...extra }, { status });

export async function POST(req: NextRequest) {
  if (!sameOrigin(req)) return fail(403, "This request could not be verified.");
  if (!req.headers.get("content-type")?.includes("application/json")) return fail(415, "Unsupported request format.");

  const ip = clientIp(req);
  const limit = rateLimit(`contact:${ip}`);
  if (!limit.ok) {
    return NextResponse.json(
      { ok: false, message: "Too many enquiries have been sent from this connection. Please try again later or email us directly." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfter) } },
    );
  }

  let raw: Record<string, unknown>;
  try {
    const text = await req.text();
    if (text.length > 20000) return fail(413, "Your message is too long.");
    raw = JSON.parse(text);
  } catch {
    return fail(400, "Invalid request.");
  }

  // --- Spam protection -------------------------------------------------------
  // 1. Honeypot: a visually hidden field real visitors never fill in.
  // 2. Timing: submissions faster than a human could type are rejected.
  // We return a generic success-shaped response to bots so they don't adapt,
  // but nothing is sent and nothing is stored.
  const honeypot = typeof raw.companyFax === "string" ? raw.companyFax : "";
  const startedAt = Number(raw.startedAt);
  const elapsed = Date.now() - startedAt;
  if (honeypot.trim() !== "" || !Number.isFinite(startedAt) || elapsed < MIN_FILL_MS || elapsed > MAX_FILL_MS) {
    return NextResponse.json({ ok: true, filtered: true });
  }
  if (!(await verifyTurnstile(typeof raw.turnstileToken === "string" ? raw.turnstileToken : undefined, ip))) {
    return fail(400, "Please complete the security check and try again.");
  }

  // --- Server-side validation (authoritative) --------------------------------
  const stringFields = ["fullName", "businessName", "email", "phone", "website", "service", "budget", "message", "packageRef"] as const;
  const input = {
    ...Object.fromEntries(stringFields.map((k) => [k, typeof raw[k] === "string" ? raw[k] : ""])),
    consent: raw.consent === true,
  };
  const parsed = contactSchema.safeParse(input);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form");
      fieldErrors[key] ??= issue.message;
    }
    return fail(422, "Please check the highlighted fields.", { fieldErrors });
  }
  const d = parsed.data;

  if (!configuredProvider()) {
    console.error("[contact] No email provider configured — set RESEND_API_KEY or SMTP_* environment variables.");
    return fail(503, `Our enquiry form is temporarily unavailable. Please email us at ${site.email} or call ${site.phoneDisplay}.`);
  }

  const pkg = packages.find((p) => p.id === d.packageRef);
  const rows: [string, string][] = [
    ["Name", d.fullName],
    ["Business", d.businessName || "—"],
    ["Email", d.email],
    ["Phone", d.phone || "—"],
    ["Website", d.website || "—"],
    ["Service", labelFor(serviceOptions, d.service)],
    ["Package", pkg ? `${pkg.name} (£${pkg.price}${pkg.priceFrom ? "+" : ""})` : "—"],
    ["Budget", labelFor(budgetOptions, d.budget)],
    ["Privacy consent", "Yes"],
    ["Submitted", new Date().toLocaleString("en-GB", { timeZone: "Europe/London" })],
  ];

  const text = `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\nProject description:\n${d.message}\n`;
  const html = `<div style="font-family:Arial,sans-serif;font-size:15px;color:#0b1124">
<h2 style="margin:0 0 16px">New website enquiry</h2>
<table cellpadding="6" style="border-collapse:collapse">${rows
    .map(([k, v]) => `<tr><td style="color:#5b6478;vertical-align:top">${k}</td><td><strong>${escapeHtml(v)}</strong></td></tr>`)
    .join("")}</table>
<h3 style="margin:24px 0 8px">Project description</h3>
<p style="white-space:pre-wrap;line-height:1.5">${escapeHtml(d.message)}</p>
<p style="color:#8a93a8;font-size:12px;margin-top:24px">Sent from the ${escapeHtml(site.legalName)} website contact form. Reply directly to respond to the enquirer.</p>
</div>`;

  try {
    await sendMail({
      to: process.env.CONTACT_TO_EMAIL || site.email,
      from: process.env.CONTACT_FROM_EMAIL || `${site.legalName} Website <onboarding@resend.dev>`,
      replyTo: d.email,
      subject: oneLine(`New enquiry: ${labelFor(serviceOptions, d.service)} — ${d.fullName}${d.businessName ? ` (${d.businessName})` : ""}`).slice(0, 180),
      text,
      html,
    });
  } catch (err) {
    console.error("[contact] Failed to send enquiry email:", err);
    return fail(502, `Sorry, we couldn't send your enquiry just now. Please try again, or email us at ${site.email}.`);
  }

  return NextResponse.json({ ok: true });
}

export function GET() {
  return fail(405, "Method not allowed.");
}
