"use client";

import { useConsent } from "./ConsentProvider";

export function CookieSettingsButton({ className = "", label = "Cookie settings" }: { className?: string; label?: string }) {
  const { openPreferences } = useConsent();
  return (
    <button type="button" onClick={openPreferences} className={className}>
      {label}
    </button>
  );
}
