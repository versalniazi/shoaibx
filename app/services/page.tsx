import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/seo";
import { services } from "@/lib/services";

export const metadata: Metadata = buildMetadata({
  title: "Our Services — Websites, Marketing, Ads & SEO",
  description:
    "Website design and development, digital marketing, Google Ads and social advertising, SEO and website maintenance services for UK businesses.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={
          <>
            Digital services that work <span className="gradient-text">better together</span>
          </>
        }
        intro="Choose a single service or combine them into a joined-up plan. Every engagement starts with understanding your business and agreeing clear, measurable objectives."
        breadcrumbs={[{ name: "Services", path: "/services" }]}
      >
        <ButtonLink href="/contact" size="lg" arrow>
          Get a Free Quote
        </ButtonLink>
        <ButtonLink href="/pricing" variant="secondary" size="lg">
          View Packages
        </ButtonLink>
      </PageHero>

      <section className="py-20 sm:py-24">
        <div className="container-site space-y-8">
          {services.map((s, i) => (
            <article key={s.slug} className="card grid gap-8 overflow-hidden p-7 sm:p-10 lg:grid-cols-[0.9fr_1.1fr]" data-reveal>
              <div>
                <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-[var(--shadow-glow)]">
                  <Icon name={s.icon} size={28} />
                </span>
                <p className="mt-6 text-sm font-semibold text-brand-700">0{i + 1}</p>
                <h2 className="mt-1 text-2xl font-bold sm:text-3xl">
                  <Link href={s.path} className="hover:text-brand-700">
                    {s.name}
                  </Link>
                </h2>
                <p className="mt-4 leading-relaxed text-ink-600">{s.cardSummary}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <ButtonLink href={s.path} arrow>
                    Explore {s.shortName}
                  </ButtonLink>
                  <ButtonLink href={`/contact?service=${s.primaryCta.service}`} variant="secondary">
                    {s.primaryCta.label}
                  </ButtonLink>
                </div>
              </div>
              <ul className="grid content-start gap-3 sm:grid-cols-2">
                {s.features.map((f) => (
                  <li key={f.title} className="flex gap-3 rounded-xl bg-ink-50 p-4">
                    <Icon name={f.icon} size={20} className="mt-0.5 shrink-0 text-brand-600" />
                    <span className="text-sm font-semibold text-ink-800">{f.title}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-ink-50 py-20 sm:py-24">
        <div className="container-site">
          <SectionHeading eyebrow="Our process" title="How every project runs" />
          <div className="mt-12">
            <ProcessSteps />
          </div>
        </div>
      </section>

      <CTASection title="Not sure which service you need?" text="Tell us what you want to achieve and we will recommend the right mix of services for your goals and budget." primary={{ label: "Book a Consultation", href: "/contact" }} />
    </>
  );
}
