"use client";

import Link from "next/link";
import Script from "next/script";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { Icon } from "@/components/ui/Icon";
import { budgetOptions, contactSchema, serviceOptions } from "@/lib/contact-schema";
import { packages } from "@/lib/pricing";
import { site } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";
type Errors = Partial<Record<string, string>>;

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

const fieldOrder = ["fullName", "businessName", "email", "phone", "website", "service", "budget", "message", "consent"];

export function ContactForm() {
  const params = useSearchParams();
  const formRef = useRef<HTMLFormElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLHeadingElement>(null);
  const [startedAt] = useState(() => Date.now());
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [serverMessage, setServerMessage] = useState("");

  const presetService = serviceOptions.some((o) => o.value === params.get("service")) ? params.get("service")! : "";
  const presetPackage = packages.find((p) => p.id === params.get("package"));

  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  function collect() {
    const fd = new FormData(formRef.current!);
    const get = (k: string) => String(fd.get(k) ?? "");
    return {
      fullName: get("fullName"),
      businessName: get("businessName"),
      email: get("email"),
      phone: get("phone"),
      website: get("website"),
      service: get("service"),
      budget: get("budget"),
      message: get("message"),
      packageRef: get("packageRef"),
      consent: fd.get("consent") === "on",
      companyFax: get("companyFax"),
      turnstileToken: get("cf-turnstile-response"),
      startedAt,
    };
  }

  function focusFirstError(errs: Errors) {
    const first = fieldOrder.find((f) => errs[f]);
    if (first) formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
    else summaryRef.current?.focus();
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === "submitting") return;
    setServerMessage("");
    const data = collect();
    const result = contactSchema.safeParse(data);
    if (!result.success) {
      const errs: Errors = {};
      for (const issue of result.error.issues) errs[String(issue.path[0])] ??= issue.message;
      setErrors(errs);
      setStatus("error");
      focusFirstError(errs);
      return;
    }
    setErrors({});
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; message?: string; fieldErrors?: Errors };
      if (res.ok && json.ok) {
        setStatus("success");
        formRef.current?.reset();
        return;
      }
      setErrors(json.fieldErrors ?? {});
      setServerMessage(json.message ?? "Something went wrong. Please try again.");
      setStatus("error");
      requestAnimationFrame(() => (json.fieldErrors ? focusFirstError(json.fieldErrors) : summaryRef.current?.focus()));
    } catch {
      setServerMessage(`We couldn't reach our server. Please check your connection, or email us at ${site.email}.`);
      setStatus("error");
      requestAnimationFrame(() => summaryRef.current?.focus());
    }
  }

  const clearError = (name: string) => errors[name] && setErrors((e) => ({ ...e, [name]: undefined }));

  if (status === "success") {
    return (
      <div className="card p-8 text-center sm:p-12" role="status">
        <span className="mx-auto inline-flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-accent-500 text-white">
          <Icon name="check" size={32} strokeWidth={2.5} />
        </span>
        <h2 ref={successRef} tabIndex={-1} className="mt-6 text-2xl font-bold outline-none">
          Thank you — your enquiry has been sent
        </h2>
        <p className="mx-auto mt-3 max-w-md text-ink-600">
          We have received your message and will reply by email, usually within one to two working days. If your enquiry is urgent, call us on{" "}
          <a href={site.phoneHref} className="text-link">
            {site.phoneDisplay}
          </a>
          .
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/services" className="btn btn-secondary">
            Explore Services
          </Link>
          <button type="button" className="btn btn-primary" onClick={() => setStatus("idle")}>
            Send another enquiry
          </button>
        </div>
      </div>
    );
  }

  const errorCount = Object.values(errors).filter(Boolean).length;
  const describe = (name: string, hint?: boolean) => [hint ? `${name}-hint` : "", errors[name] ? `${name}-error` : ""].filter(Boolean).join(" ") || undefined;
  const err = (name: string) =>
    errors[name] ? (
      <p id={`${name}-error`} className="field-error">
        {errors[name]}
      </p>
    ) : null;

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="card p-6 sm:p-10" aria-describedby="form-required-note">
      {TURNSTILE_SITE_KEY && <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="lazyOnload" />}
      <h2 className="text-2xl font-bold">Send us an enquiry</h2>
      <p id="form-required-note" className="mt-2 text-sm text-ink-500">
        Fields marked <span aria-hidden="true" className="text-red-600">*</span>
        <span className="sr-only">with an asterisk</span> are required.
      </p>

      <div ref={summaryRef} tabIndex={-1} aria-live="assertive" className="outline-none">
        {(serverMessage || errorCount > 0) && status === "error" && (
          <div className="mt-6 flex gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800" role="alert">
            <Icon name="info" size={20} className="mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold">{serverMessage || `Please correct ${errorCount} ${errorCount === 1 ? "field" : "fields"} below.`}</p>
              {serverMessage && (
                <p className="mt-1">
                  You can also email{" "}
                  <a href={`mailto:${site.email}`} className="underline">
                    {site.email}
                  </a>
                  .
                </p>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="field-label">
            Full name <span aria-hidden="true" className="text-red-600">*</span>
          </label>
          <input id="fullName" name="fullName" type="text" autoComplete="name" required maxLength={100} className="field" aria-invalid={!!errors.fullName} aria-describedby={describe("fullName")} onInput={() => clearError("fullName")} />
          {err("fullName")}
        </div>
        <div>
          <label htmlFor="businessName" className="field-label">
            Business name
          </label>
          <input id="businessName" name="businessName" type="text" autoComplete="organization" maxLength={120} className="field" aria-invalid={!!errors.businessName} aria-describedby={describe("businessName")} />
          {err("businessName")}
        </div>
        <div>
          <label htmlFor="email" className="field-label">
            Email address <span aria-hidden="true" className="text-red-600">*</span>
          </label>
          <input id="email" name="email" type="email" autoComplete="email" required maxLength={160} className="field" aria-invalid={!!errors.email} aria-describedby={describe("email")} onInput={() => clearError("email")} />
          {err("email")}
        </div>
        <div>
          <label htmlFor="phone" className="field-label">
            Phone number
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" maxLength={30} className="field" aria-invalid={!!errors.phone} aria-describedby={describe("phone")} onInput={() => clearError("phone")} />
          {err("phone")}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="website" className="field-label">
            Current website URL
          </label>
          <input id="website" name="website" type="text" inputMode="url" autoComplete="url" placeholder="www.yourbusiness.co.uk" maxLength={200} className="field" aria-invalid={!!errors.website} aria-describedby={describe("website", true)} onInput={() => clearError("website")} />
          <p id="website-hint" className="mt-1.5 text-xs text-ink-500">
            Leave blank if you don&apos;t have a website yet.
          </p>
          {err("website")}
        </div>
        <div>
          <label htmlFor="service" className="field-label">
            Service required <span aria-hidden="true" className="text-red-600">*</span>
          </label>
          <select id="service" name="service" required defaultValue={presetPackage ? presetPackage.serviceValue : presetService} className="field" aria-invalid={!!errors.service} aria-describedby={describe("service")} onChange={() => clearError("service")}>
            <option value="" disabled>
              Please choose…
            </option>
            {serviceOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          {err("service")}
        </div>
        <div>
          <label htmlFor="budget" className="field-label">
            Approximate budget <span aria-hidden="true" className="text-red-600">*</span>
          </label>
          <select id="budget" name="budget" required defaultValue="" className="field" aria-invalid={!!errors.budget} aria-describedby={describe("budget")} onChange={() => clearError("budget")}>
            <option value="" disabled>
              Please choose…
            </option>
            {budgetOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          {err("budget")}
        </div>

        {presetPackage && (
          <div className="flex items-center gap-3 rounded-xl bg-brand-50 p-4 text-sm text-brand-900 sm:col-span-2">
            <Icon name="checkCircle" size={20} className="shrink-0 text-brand-600" />
            <p>
              Enquiring about: <strong>{presetPackage.name}</strong> (£{presetPackage.price}
              {presetPackage.priceFrom ? "+" : ""}, {presetPackage.billing.toLowerCase()})
            </p>
          </div>
        )}
        <input type="hidden" name="packageRef" value={presetPackage?.id ?? ""} />

        <div className="sm:col-span-2">
          <label htmlFor="message" className="field-label">
            Project description <span aria-hidden="true" className="text-red-600">*</span>
          </label>
          <textarea id="message" name="message" rows={6} required maxLength={5000} className="field resize-y" placeholder="Tell us about your business, what you would like to achieve and any deadlines." aria-invalid={!!errors.message} aria-describedby={describe("message")} onInput={() => clearError("message")} />
          {err("message")}
        </div>

        {/* Honeypot — hidden from people and assistive technology; bots tend to fill it in. */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
          <label htmlFor="companyFax">Leave this field empty</label>
          <input id="companyFax" name="companyFax" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        {TURNSTILE_SITE_KEY && (
          <div className="sm:col-span-2">
            <div className="cf-turnstile" data-sitekey={TURNSTILE_SITE_KEY} data-theme="light" />
          </div>
        )}

        <div className="sm:col-span-2">
          <div className="flex gap-3">
            <input id="consent" name="consent" type="checkbox" required className="mt-1 size-5 shrink-0 cursor-pointer rounded border-ink-300 accent-brand-600" aria-invalid={!!errors.consent} aria-describedby={describe("consent")} onChange={() => clearError("consent")} />
            <label htmlFor="consent" className="text-sm text-ink-700">
              I have read the{" "}
              <Link href="/privacy-policy" className="text-link" target="_blank">
                Privacy Policy<span className="sr-only"> (opens in a new tab)</span>
              </Link>{" "}
              and agree to {site.legalName} using my details to respond to this enquiry. <span aria-hidden="true" className="text-red-600">*</span>
            </label>
          </div>
          {err("consent")}
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="btn btn-primary btn-lg" disabled={status === "submitting"} aria-disabled={status === "submitting"}>
          {status === "submitting" ? (
            <>
              <span className="size-4 animate-spin rounded-full border-2 border-white/40 border-t-white" aria-hidden="true" /> Sending…
            </>
          ) : (
            <>
              Submit Enquiry <Icon name="arrowRight" size={18} />
            </>
          )}
        </button>
        <p className="flex items-center gap-2 text-xs text-ink-500">
          <Icon name="lock" size={16} /> Your details are sent securely and never sold.
        </p>
      </div>
    </form>
  );
}
