export const CONSENT_COOKIE = "shoaibx_consent";
export const CONSENT_VERSION = 1;
/** Consent is re-requested after this many days (ICO guidance suggests periodic refresh). */
export const CONSENT_MAX_AGE_DAYS = 180;

export type ConsentState = {
  v: number;
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  /** ISO timestamp of when the choice was made. */
  ts: string;
};

export function readConsent(): ConsentState | null {
  if (typeof document === "undefined") return null;
  const raw = document.cookie.split("; ").find((c) => c.startsWith(`${CONSENT_COOKIE}=`));
  if (!raw) return null;
  try {
    const parsed = JSON.parse(decodeURIComponent(raw.slice(CONSENT_COOKIE.length + 1))) as ConsentState;
    if (parsed.v !== CONSENT_VERSION) return null;
    return { ...parsed, necessary: true };
  } catch {
    return null;
  }
}

export function writeConsent(choice: { analytics: boolean; marketing: boolean }): ConsentState {
  const state: ConsentState = { v: CONSENT_VERSION, necessary: true, analytics: choice.analytics, marketing: choice.marketing, ts: new Date().toISOString() };
  const secure = location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${CONSENT_COOKIE}=${encodeURIComponent(JSON.stringify(state))}; Max-Age=${CONSENT_MAX_AGE_DAYS * 86400}; Path=/; SameSite=Lax${secure}`;
  return state;
}

/** Removes analytics/marketing cookies set by third parties after consent is withdrawn. */
export function clearNonEssentialCookies() {
  const prefixes = ["_ga", "_gid", "_gat", "_gcl", "_fbp", "_fbc"];
  const host = location.hostname;
  const domains = ["", host, `.${host}`, `.${host.split(".").slice(-2).join(".")}`];
  document.cookie.split("; ").forEach((c) => {
    const name = c.split("=")[0];
    if (!prefixes.some((p) => name.startsWith(p))) return;
    domains.forEach((d) => {
      document.cookie = `${name}=; Max-Age=0; Path=/${d ? `; Domain=${d}` : ""}`;
    });
  });
}
