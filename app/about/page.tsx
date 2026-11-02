import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Icon, type IconName } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/seo";
import { registeredOfficeOneLine, site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "About Us — UK Digital Marketing & Technology",
  description:
    "SHOAIBX LIMITED is a UK-registered digital marketing and technology company helping startups and growing businesses with websites, ads and SEO.",
  path: "/about",
});

const values: { icon: IconName; title: string; text: string }[] = [
  { icon: "shield", title: "Honesty", text: "We give realistic advice, avoid exaggerated promises and never guarantee results we cannot control." },
  { icon: "eye", title: "Transparency", text: "Clear prices, written scopes and plain-English reporting, so you always know what you are paying for." },
  { icon: "target", title: "Focus on outcomes", text: "We measure success by your business objectives — enquiries, sales and visibility — not vanity metrics." },
  { icon: "sparkles", title: "Quality craft", text: "Modern, accessible and well-built work that reflects well on your business and stands the test of time." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={
          <>
            Your partner for <span className="gradient-text">digital growth</span>
          </>
        }
        intro={`${site.legalName} is a UK-registered digital marketing and technology services company. We help startups, small businesses, entrepreneurs, e-commerce brands and established companies build a stronger presence online.`}
        breadcrumbs={[{ name: "About", path: "/about" }]}
      >
        <ButtonLink href="/contact" size="lg" arrow>
          Book a Consultation
        </ButtonLink>
        <ButtonLink href="/services" variant="secondary" size="lg">
          Our Services
        </ButtonLink>
      </PageHero>

      <section className="py-20 sm:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-2">
          <div data-reveal>
            <p className="eyebrow mb-4">Who we are</p>
            <h2 className="text-3xl font-bold sm:text-4xl">Digital services, joined up</h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-ink-600" data-reveal>
            <p>
              Growing a business online usually involves several moving parts: a website that converts, marketing that builds awareness, advertising that reaches the right
              people, and search visibility that compounds over time. When these are handled separately, they often pull in different directions.
            </p>
            <p>
              We bring website development, digital marketing, online advertising and SEO together under one roof, so your digital activity works as a single, coherent
              plan — with clear objectives and honest reporting.
            </p>
            <p>
              We work remotely with businesses across the United Kingdom, keeping communication simple by email, telephone and video call.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ink-50 py-20 sm:py-24">
        <div className="container-site">
          <SectionHeading eyebrow="Our values" title="What you can expect from us" />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <li key={v.title} className="card p-6" data-reveal style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}>
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-white">
                  <Icon name={v.icon} size={22} />
                </span>
                <h3 className="mt-4 text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{v.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-site">
          <SectionHeading eyebrow="How we work" title="A structured, collaborative process" />
          <div className="mt-12">
            <ProcessSteps />
          </div>
        </div>
      </section>

      <section className="bg-ink-50 py-20 sm:py-24">
        <div className="container-site">
          <div className="card mx-auto max-w-4xl p-8 sm:p-10" data-reveal>
            <h2 className="text-2xl font-bold">Company information</h2>
            <dl className="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {[
                ["Registered name", site.legalName],
                ["Company number", site.companyNumber],
                ["Company type", site.companyType],
                ["Registered in", site.registeredIn],
                ["Registered office", registeredOfficeOneLine],
                ["Email", site.email],
                ["Telephone", site.phoneDisplay],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-sm text-ink-500">{k}</dt>
                  <dd className="mt-1 font-semibold break-words text-ink-900">
                    {k === "Email" ? (
                      <a className="text-link" href={`mailto:${v}`}>
                        {v}
                      </a>
                    ) : k === "Telephone" ? (
                      <a className="text-link" href={site.phoneHref}>
                        {v}
                      </a>
                    ) : (
                      v
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-sm text-ink-500">
              The registered office is our official company address and is not a customer-facing office. Meetings are held by video call or by arrangement. You can verify our
              details on the{" "}
              <a href={site.companiesHouseUrl} target="_blank" rel="noopener noreferrer" className="text-link">
                Companies House register<span className="sr-only"> (opens in a new tab)</span>
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
