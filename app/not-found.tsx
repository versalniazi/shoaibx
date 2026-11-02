import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { serviceNav } from "@/lib/site";

export const metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      <div className="container-site relative max-w-2xl text-center">
        <p className="gradient-text font-display text-7xl font-extrabold sm:text-8xl">404</p>
        <h1 className="mt-4 text-3xl font-bold sm:text-4xl">We couldn&apos;t find that page</h1>
        <p className="mt-4 text-lg text-ink-600">The page may have moved or no longer exists. Try one of these instead:</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/" arrow>
            Back to Home
          </ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Contact Us
          </ButtonLink>
        </div>
        <ul className="mt-10 flex flex-wrap justify-center gap-2">
          {serviceNav.map((s) => (
            <li key={s.href}>
              <Link href={s.href} className="inline-block rounded-full border border-ink-200 px-4 py-2 text-sm font-semibold text-ink-700 hover:border-brand-300 hover:text-brand-700">
                {s.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
