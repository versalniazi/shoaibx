"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { clearNonEssentialCookies, readConsent, writeConsent, type ConsentState } from "@/lib/consent";

type Ctx = {
  consent: ConsentState | null;
  /** True once the stored choice has been read in the browser. */
  ready: boolean;
  preferencesOpen: boolean;
  openPreferences: () => void;
  closePreferences: () => void;
  save: (choice: { analytics: boolean; marketing: boolean }) => void;
};

const ConsentContext = createContext<Ctx | null>(null);

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<ConsentState | null>(null);
  const [ready, setReady] = useState(false);
  const [preferencesOpen, setPreferencesOpen] = useState(false);

  useEffect(() => {
    // Reading a cookie is a browser-only side effect, so it must happen after hydration.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setConsent(readConsent());
    setReady(true);
  }, []);

  const save = useCallback((choice: { analytics: boolean; marketing: boolean }) => {
    const previous = readConsent();
    const next = writeConsent(choice);
    setConsent(next);
    setPreferencesOpen(false);
    const withdrawn = (previous?.analytics && !choice.analytics) || (previous?.marketing && !choice.marketing);
    if (withdrawn) {
      // Scripts already running cannot be unloaded, so clear their cookies and reload cleanly.
      clearNonEssentialCookies();
      window.location.reload();
    }
  }, []);

  const value = useMemo<Ctx>(
    () => ({
      consent,
      ready,
      preferencesOpen,
      openPreferences: () => setPreferencesOpen(true),
      closePreferences: () => setPreferencesOpen(false),
      save,
    }),
    [consent, ready, preferencesOpen, save],
  );

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>;
}

export function useConsent() {
  const ctx = useContext(ConsentContext);
  if (!ctx) throw new Error("useConsent must be used inside ConsentProvider");
  return ctx;
}
