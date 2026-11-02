"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { Icon } from "@/components/ui/Icon";
import { mainNav, serviceNav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const servicesRef = useRef<HTMLLIElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Close menus whenever the route changes (adjusting state during render).
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMobileOpen(false);
    setServicesOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (mobileOpen) {
        setMobileOpen(false);
        menuButtonRef.current?.focus();
      }
      setServicesOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) setServicesOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, [mobileOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`));

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || mobileOpen ? "border-ink-100 bg-white/90 backdrop-blur-xl" : "border-transparent bg-white/70 backdrop-blur"
      }`}
    >
      <a
        href="#main"
        className="sr-only z-[60] rounded-lg bg-brand-600 px-4 py-2 font-semibold text-white focus:not-sr-only focus:absolute focus:top-3 focus:left-3"
      >
        Skip to main content
      </a>
      <div className="container-site flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]">
        <Link href="/" className="shrink-0 rounded-lg" aria-label={`${site.legalName} — home`}>
          <Logo className="h-9 w-auto lg:h-10" />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            <li ref={servicesRef} className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <div className="flex items-center">
                <Link
                  href="/services"
                  className={`rounded-full py-2 pr-1 pl-4 text-sm font-semibold transition hover:text-brand-700 ${isActive("/services") ? "text-brand-700" : "text-ink-800"}`}
                  aria-current={pathname === "/services" ? "page" : undefined}
                >
                  Services
                </Link>
                <button
                  type="button"
                  className="rounded-full p-2 text-ink-600 transition hover:text-brand-700"
                  aria-expanded={servicesOpen}
                  aria-controls="services-menu"
                  aria-label="Show service pages"
                  onClick={() => setServicesOpen((v) => !v)}
                >
                  <Icon name="chevronDown" size={16} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
              </div>
              <div
                id="services-menu"
                className={`absolute top-full left-1/2 w-[34rem] -translate-x-1/2 pt-3 transition duration-200 ${
                  servicesOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
                }`}
              >
                <ul className="card grid grid-cols-2 gap-1 p-3">
                  {serviceNav.map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        className="block rounded-xl p-3 transition hover:bg-brand-50"
                        aria-current={pathname === s.href ? "page" : undefined}
                      >
                        <span className="block text-sm font-semibold text-ink-900">{s.label}</span>
                        <span className="mt-0.5 block text-xs text-ink-500">{s.description}</span>
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link href="/services" className="flex h-full items-center gap-2 rounded-xl bg-ink-50 p-3 text-sm font-semibold text-brand-700 transition hover:bg-brand-50">
                      View all services <Icon name="arrowRight" size={16} />
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            {mainNav.slice(1).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition hover:text-brand-700 ${isActive(item.href) ? "text-brand-700" : "text-ink-800"}`}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/contact" className="btn btn-primary hidden sm:inline-flex">
            Get a Free Quote
          </Link>
          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-ink-200 text-ink-900 lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
            <Icon name={mobileOpen ? "x" : "menu"} size={22} />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        hidden={!mobileOpen}
        className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-ink-100 bg-white lg:hidden"
      >
        <nav aria-label="Mobile" className="container-site py-6">
          <p className="mb-2 text-xs font-semibold tracking-wider text-ink-500 uppercase">Services</p>
          <ul className="mb-6 grid gap-1">
            {serviceNav.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="flex items-center justify-between rounded-xl px-3 py-3 font-semibold text-ink-900 hover:bg-brand-50">
                  {s.label}
                  <Icon name="arrowRight" size={18} className="text-ink-400" />
                </Link>
              </li>
            ))}
          </ul>
          <ul className="grid gap-1 border-t border-ink-100 pt-4">
            {[{ label: "Home", href: "/" }, ...mainNav].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block rounded-xl px-3 py-3 text-lg font-semibold ${isActive(item.href) ? "bg-brand-50 text-brand-700" : "text-ink-900"}`}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.label === "Services" ? "All Services" : item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 grid gap-3">
            <Link href="/contact" className="btn btn-primary btn-lg w-full">
              Get a Free Quote
            </Link>
            <a href={site.phoneHref} className="btn btn-secondary btn-lg w-full">
              <Icon name="phone" size={18} /> {site.phoneDisplay}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
