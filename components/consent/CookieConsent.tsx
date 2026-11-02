"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { useConsent } from "./ConsentProvider";

const categories = [
  {
    key: "necessary" as const,
    title: "Strictly necessary",
    description: "Required for the website to work, such as remembering your cookie choices and protecting forms from spam. These cannot be switched off.",
    locked: true,
  },
  {
    key: "analytics" as const,
    title: "Analytics",
    description: "Help us understand how visitors use the website (for example, Google Analytics) so we can improve it. Only loaded if you agree.",
  },
  {
    key: "marketing" as const,
    title: "Marketing",
    description: "Used to measure advertising campaigns and show relevant ads on other platforms (for example, Meta Pixel). Only loaded if you agree.",
  },
];

export function CookieConsent() {
  const { consent, ready, preferencesOpen, openPreferences, closePreferences, save } = useConsent();
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const bannerTitleId = useId();

  // When the preferences panel opens, start from the stored choice.
  const [wasOpen, setWasOpen] = useState(false);
  if (preferencesOpen !== wasOpen) {
    setWasOpen(preferencesOpen);
    if (preferencesOpen) {
      setAnalytics(consent?.analytics ?? false);
      setMarketing(consent?.marketing ?? false);
    }
  }

  useEffect(() => {
    if (!preferencesOpen) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const dialog = dialogRef.current;
    dialog?.querySelector<HTMLElement>("input, button")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePreferences();
      if (e.key === "Tab" && dialog) {
        const items = Array.from(dialog.querySelectorAll<HTMLElement>("button, input, a[href]")).filter((el) => !el.hasAttribute("disabled"));
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      previouslyFocused?.focus?.();
    };
  }, [preferencesOpen, closePreferences]);

  const showBanner = ready && !consent && !preferencesOpen;

  return (
    <>
      {showBanner && (
        <section
          aria-labelledby={bannerTitleId}
          className="fixed inset-x-3 bottom-3 z-[70] mx-auto max-w-3xl rounded-2xl border border-ink-100 bg-white p-5 shadow-[var(--shadow-lift)] sm:inset-x-6 sm:bottom-6 sm:p-6"
        >
          <div className="flex items-start gap-4">
            <span className="hidden size-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 sm:inline-flex">
              <Icon name="cookie" size={22} />
            </span>
            <div className="min-w-0">
              <h2 id={bannerTitleId} className="text-base font-bold">
                We value your privacy
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-ink-600">
                We use strictly necessary cookies to run this website. With your permission, we would also like to use analytics and marketing cookies to
                understand how the site is used and measure our advertising. You can change your choice at any time. Read our{" "}
                <Link href="/cookie-policy" className="text-link">
                  Cookie Policy
                </Link>
                .
              </p>
              <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                <button type="button" className="btn btn-primary" onClick={() => save({ analytics: true, marketing: true })}>
                  Accept All
                </button>
                <button type="button" className="btn btn-secondary" onClick={() => save({ analytics: false, marketing: false })}>
                  Reject Non-Essential
                </button>
                <button type="button" className="btn text-ink-700 underline underline-offset-4 hover:text-brand-700" onClick={openPreferences}>
                  Manage Preferences
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {preferencesOpen && (
        <div className="fixed inset-0 z-[80] flex items-end justify-center bg-ink-950/50 p-3 backdrop-blur-sm sm:items-center sm:p-6" onClick={closePreferences}>
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="max-h-[90dvh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 shadow-[var(--shadow-lift)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <h2 id={titleId} className="text-xl font-bold">
                Cookie preferences
              </h2>
              <button type="button" onClick={closePreferences} className="-m-2 rounded-full p-2 text-ink-500 hover:text-ink-900" aria-label="Close cookie preferences">
                <Icon name="x" size={20} />
              </button>
            </div>
            <p className="mt-2 text-sm text-ink-600">
              Choose which optional cookies you allow. Non-essential cookies stay off unless you switch them on.
            </p>
            <ul className="mt-5 space-y-3">
              {categories.map((c) => {
                const checked = c.key === "necessary" ? true : c.key === "analytics" ? analytics : marketing;
                const inputId = `consent-${c.key}`;
                return (
                  <li key={c.key} className="rounded-xl border border-ink-100 p-4">
                    <div className="flex items-center justify-between gap-4">
                      <label htmlFor={inputId} className="font-semibold text-ink-900">
                        {c.title}
                      </label>
                      <span className="relative inline-flex">
                        <input
                          id={inputId}
                          type="checkbox"
                          role="switch"
                          className="peer h-7 w-12 cursor-pointer appearance-none rounded-full bg-ink-200 transition checked:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-60"
                          checked={checked}
                          disabled={c.locked}
                          aria-describedby={`${inputId}-desc`}
                          onChange={(e) => (c.key === "analytics" ? setAnalytics(e.target.checked) : setMarketing(e.target.checked))}
                        />
                        <span aria-hidden className="pointer-events-none absolute top-1 left-1 size-5 rounded-full bg-white shadow transition peer-checked:translate-x-5" />
                      </span>
                    </div>
                    <p id={`${inputId}-desc`} className="mt-1.5 text-sm text-ink-600">
                      {c.description}
                      {c.locked && <span className="mt-1 block text-xs font-semibold text-ink-500">Always active</span>}
                    </p>
                  </li>
                );
              })}
            </ul>
            <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
              <button type="button" className="btn btn-secondary" onClick={() => save({ analytics: false, marketing: false })}>
                Reject Non-Essential
              </button>
              <button type="button" className="btn btn-secondary" onClick={() => save({ analytics: true, marketing: true })}>
                Accept All
              </button>
              <button type="button" className="btn btn-primary" onClick={() => save({ analytics, marketing })}>
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
