import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/sections/CTASection";
import { FAQList } from "@/components/sections/FAQList";
import { PageHero } from "@/components/sections/PageHero";
import { PricingCard } from "@/components/sections/PricingCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { externalCosts, formatPrice, packages, starterLimitations } from "@/lib/pricing";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Pricing & Packages — Websites, SEO & Ads from £15",
  description:
    "Fixed-price packages: SEO audit £15, health check £25, SEO starter £49, ads setup £59, landing page £99 and starter websites from £150. No hidden costs.",
  path: "/pricing",
});

const pricingFaqs = [
  { question: "Are there any hidden costs?", answer: "No. Each package lists what is included and what is not. External costs such as domains, hosting, premium plugins, third-party subscriptions and advertising spend are always separate unless we include them in a written quote." },
  { question: "How do I pay?", answer: "After you send an enquiry, we confirm the scope and send a written quote or order confirmation with payment details. Work starts once the order is confirmed and payment terms have been agreed. See our Terms and Conditions for details." },
  { question: "What if my project needs more than a package includes?", answer: "We will tell you before any extra work starts and provide a separate written quote. Nothing is added to your bill without your agreement." },
  { question: "Can I combine packages?", answer: "Yes. For example, many clients pair a Landing Page Design with an Advertising Setup. Mention the packages you are interested in when you get in touch." },
  { question: "When does the turnaround time start?", answer: "Turnaround times are typical working-day estimates that start once we have your order confirmation, any agreed payment and the content and access we need. We will confirm your timeline in writing." },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing & Packages"
        title={
          <>
            Clear prices. <span className="gradient-text">No surprises.</span>
          </>
        }
        intro="Fixed-price packages for common needs, from a £15 SEO Quick Audit to a starter business website from £150. Every package lists its deliverables, turnaround, revisions and exclusions."
        breadcrumbs={[{ name: "Pricing", path: "/pricing" }]}
      >
        <ButtonLink href="#packages" size="lg" arrow>
          View Packages
        </ButtonLink>
        <ButtonLink href="/contact" variant="secondary" size="lg">
          Request a Custom Quote
        </ButtonLink>
      </PageHero>

      <section id="packages" className="scroll-mt-20 py-20 sm:py-24">
        <div className="container-site">
          <h2 className="sr-only">Service packages</h2>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {packages.map((p) => (
              <PricingCard key={p.id} pkg={p} detailed />
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center text-sm text-ink-500">
            All prices are in pounds sterling (GBP £) and are one-time payments for the scope described. Any VAT that applies will be shown clearly on your quote and
            invoice. Turnaround times are typical estimates in working days and are confirmed in writing before work starts.
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-ink-50 py-20 sm:py-24">
        <div className="container-site">
          <SectionHeading eyebrow="Compare" title="Packages at a glance" />
          <div className="mt-10 overflow-x-auto rounded-[var(--radius-card)] border border-ink-100 bg-white shadow-[var(--shadow-soft)]" data-reveal>
            <table className="w-full min-w-[720px] text-left text-sm">
              <caption className="sr-only">Comparison of SHOAIBX service packages</caption>
              <thead className="bg-ink-50 text-ink-900">
                <tr>
                  {["Package", "Price", "Billing", "Turnaround", "Pages / campaigns", "Revisions", ""].map((h, i) => (
                    <th key={i} scope="col" className="px-5 py-4 font-semibold">
                      {h || <span className="sr-only">Action</span>}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-100">
                {packages.map((p) => (
                  <tr key={p.id}>
                    <th scope="row" className="px-5 py-4 font-semibold text-ink-900">
                      {p.name}
                    </th>
                    <td className="px-5 py-4 font-display font-bold whitespace-nowrap text-ink-900">{formatPrice(p)}</td>
                    <td className="px-5 py-4">{p.billing}</td>
                    <td className="px-5 py-4">{p.turnaround}</td>
                    <td className="px-5 py-4">{p.scope}</td>
                    <td className="px-5 py-4">{p.revisions}</td>
                    <td className="px-5 py-4">
                      <Link href={`/contact?service=${p.serviceValue}&package=${p.id}`} className="text-link whitespace-nowrap">
                        Enquire<span className="sr-only"> about {p.name}</span>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Starter limitations + external costs */}
      <section className="py-20 sm:py-24">
        <div className="container-site grid gap-8 lg:grid-cols-2">
          <div className="card p-8 sm:p-10" data-reveal>
            <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
              <Icon name="info" size={22} />
            </span>
            <h2 className="mt-5 text-2xl font-bold">About the Business Website Starter</h2>
            <p className="mt-3 text-ink-600">
              The Business Website Starter is designed to give new and small businesses a professional online presence at an accessible price. To keep it affordable, its scope is deliberately limited:
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              {starterLimitations.map((l) => (
                <li key={l} className="flex gap-3">
                  <Icon name="check" size={18} strokeWidth={2.25} className="mt-0.5 shrink-0 text-brand-600" />
                  <span className="text-ink-700">{l}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="on-dark rounded-[var(--radius-card)] bg-ink-950 p-8 sm:p-10" data-reveal>
            <span className="inline-flex size-11 items-center justify-center rounded-xl bg-white/10 text-accent-300">
              <Icon name="pound" size={22} />
            </span>
            <h2 className="mt-5 text-2xl font-bold text-white">External costs are separate</h2>
            <p className="mt-3 text-ink-300">Unless specifically included in your written quote, the following are not part of our package prices and are paid to the relevant provider:</p>
            <ul className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
              {externalCosts.map((c) => (
                <li key={c} className="flex gap-3 text-ink-200">
                  <Icon name="x" size={18} className="mt-0.5 shrink-0 text-accent-400" />
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-ink-300">
              Need something bigger? Larger websites, e-commerce, ongoing marketing and advertising management are quoted individually.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ink-50 py-20 sm:py-24">
        <div className="container-site max-w-4xl">
          <SectionHeading eyebrow="FAQs" title="Pricing questions" />
          <div className="mt-10" data-reveal>
            <FAQList faqs={pricingFaqs} />
          </div>
        </div>
      </section>

      <CTASection title="Need a custom quote?" text="Tell us about your project and we will send a clear, written quote with no obligation." primary={{ label: "Get a Free Quote", href: "/contact" }} secondary={{ label: "Explore Services", href: "/services" }} />
    </>
  );
}
