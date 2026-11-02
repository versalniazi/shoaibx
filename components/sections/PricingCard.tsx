import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { formatPrice, type Package } from "@/lib/pricing";

export function PricingCard({ pkg, detailed = false, headingLevel = 3 }: { pkg: Package; detailed?: boolean; headingLevel?: 2 | 3 }) {
  const H = headingLevel === 2 ? "h2" : "h3";
  const Sub = headingLevel === 2 ? "h3" : "h4";
  const enquiryHref = `/contact?service=${pkg.serviceValue}&package=${pkg.id}`;
  return (
    <article
      id={pkg.id}
      className={`relative flex scroll-mt-28 flex-col rounded-[var(--radius-card)] border p-7 transition duration-300 hover:-translate-y-1 ${
        pkg.highlight ? "border-brand-300 bg-white shadow-[var(--shadow-lift)] ring-4 ring-brand-100" : "border-ink-100 bg-white shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lift)]"
      }`}
      data-reveal
    >
      {pkg.highlight && (
        <span className="absolute -top-3 left-7 rounded-full bg-gradient-to-r from-brand-600 to-accent-500 px-3 py-1 text-xs font-bold text-white">
          Popular starting point
        </span>
      )}
      <p className="text-xs font-semibold tracking-wider text-brand-700 uppercase">{pkg.category}</p>
      <H className="mt-2 text-xl font-bold">{pkg.name}</H>
      <p className="mt-2 text-sm leading-relaxed text-ink-600">{pkg.summary}</p>
      <p className="mt-5 flex items-baseline gap-2">
        <span className="font-display text-4xl font-extrabold text-ink-900">{formatPrice(pkg)}</span>
        <span className="text-sm text-ink-500">{pkg.billing.toLowerCase()}</span>
      </p>

      <Sub className="mt-6 font-sans text-sm font-semibold text-ink-900">What&apos;s included</Sub>
      <ul className="mt-3 space-y-2.5 text-sm">
        {pkg.deliverables.map((d) => (
          <li key={d} className="flex gap-2.5">
            <Icon name="check" size={18} className="mt-0.5 shrink-0 text-brand-600" strokeWidth={2.25} />
            <span>{d}</span>
          </li>
        ))}
      </ul>

      {detailed && (
        <>
          <dl className="mt-6 grid gap-3 rounded-xl bg-ink-50 p-4 text-sm">
            {[
              ["Billing", pkg.billing],
              ["Typical turnaround", pkg.turnaround],
              ["Pages / campaigns", pkg.scope],
              ["Revisions", pkg.revisions],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4">
                <dt className="text-ink-500">{k}</dt>
                <dd className="text-right font-semibold text-ink-900">{v}</dd>
              </div>
            ))}
          </dl>
          <Sub className="mt-5 font-sans text-sm font-semibold text-ink-900">Not included</Sub>
          <ul className="mt-2 space-y-1.5 text-sm text-ink-600">
            {pkg.exclusions.map((x) => (
              <li key={x} className="flex gap-2.5">
                <Icon name="x" size={16} className="mt-0.5 shrink-0 text-ink-400" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-ink-500">Best for: {pkg.bestFor}</p>
        </>
      )}

      <div className="mt-auto pt-7">
        <Link href={enquiryHref} className={`btn w-full ${pkg.highlight ? "btn-primary" : "btn-secondary"}`}>
          {pkg.cta}
          <span className="sr-only"> — {pkg.name}</span>
        </Link>
      </div>
    </article>
  );
}
