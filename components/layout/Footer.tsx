import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Icon } from "@/components/ui/Icon";
import { CookieSettingsButton } from "@/components/consent/CookieSettingsButton";
import { registeredOfficeOneLine, serviceNav, site } from "@/lib/site";

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Pricing & Packages", href: "/pricing" },
  { label: "Our Work", href: "/portfolio" },
  { label: "Insights", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const socials = Object.entries(site.social).filter(([, url]) => url);
  return (
    <footer className="on-dark relative overflow-hidden bg-ink-950 text-ink-300">
      <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-brand-600/20 blur-3xl" />
      <div className="container-site relative py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" aria-label={`${site.legalName} — home`} className="inline-block rounded-lg">
              <Logo variant="dark" className="h-10 w-auto" />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-300">
              Website development, digital marketing, online advertising and SEO for startups, small businesses and growing UK companies.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <a href={`mailto:${site.email}`} className="inline-flex items-center gap-3 text-white transition hover:text-accent-300">
                  <Icon name="mail" size={18} className="text-accent-400" /> {site.email}
                </a>
              </li>
              <li>
                <a href={site.phoneHref} className="inline-flex items-center gap-3 text-white transition hover:text-accent-300">
                  <Icon name="phone" size={18} className="text-accent-400" /> {site.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>

          <nav aria-label="Services" className="lg:col-span-3">
            <h2 className="font-display text-sm font-semibold tracking-wider text-white uppercase">Services</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {serviceNav.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="transition hover:text-white">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company" className="lg:col-span-2">
            <h2 className="font-display text-sm font-semibold tracking-wider text-white uppercase">Company</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Legal" className="lg:col-span-3">
            <h2 className="font-display text-sm font-semibold tracking-wider text-white uppercase">Legal</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <CookieSettingsButton className="transition hover:text-white" />
              </li>
            </ul>
            {socials.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-3 text-sm">
                {socials.map(([name, url]) => (
                  <li key={name}>
                    <a href={url} target="_blank" rel="noopener noreferrer" className="capitalize transition hover:text-white">
                      {name === "x" ? "X (Twitter)" : name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </nav>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-xs leading-relaxed text-ink-400">
          <p>
            <strong className="font-semibold text-ink-200">{site.legalName}</strong> is a {site.companyType.toLowerCase()} registered in {site.registeredIn}.
            Company number{" "}
            <a href={site.companiesHouseUrl} target="_blank" rel="noopener noreferrer" className="underline decoration-white/30 underline-offset-2 hover:text-white">
              {site.companyNumber}
            </a>
            . Registered office: {registeredOfficeOneLine}. The registered office is not a customer-facing office; please contact us by email or telephone.
          </p>
          <p className="mt-3">© {year} {site.legalName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
