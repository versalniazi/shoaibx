import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/sections/CTASection";
import { FAQList } from "@/components/sections/FAQList";
import { PageHero } from "@/components/sections/PageHero";
import { PricingCard } from "@/components/sections/PricingCard";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/ui/JsonLd";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { posts } from "@/content/blog";
import { packages } from "@/lib/pricing";
import { serviceSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { getService, services } from "@/lib/services";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({ title: service.metaTitle, description: service.metaDescription, path: service.path, absoluteTitle: false });
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = packages.filter((p) => service.relatedPackages.includes(p.id));
  const otherServices = services.filter((s) => s.slug !== service.slug);
  const relatedPosts = posts.filter((p) => p.relatedService.href === service.path).slice(0, 2);
  const ctaHref = `/contact?service=${service.primaryCta.service}`;

  return (
    <>
      <JsonLd data={serviceSchema(service)} />
      <PageHero
        eyebrow={service.heroEyebrow}
        title={
          <>
            {service.heroTitle} <span className="gradient-text">{service.heroHighlight}</span>
          </>
        }
        intro={service.heroText}
        breadcrumbs={[
          { name: "Services", path: "/services" },
          { name: service.shortName, path: service.path },
        ]}
        aside={
          <div className="card relative p-8">
            <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-[var(--shadow-glow)]">
              <Icon name={service.icon} size={28} />
            </span>
            <p className="mt-6 font-display text-lg font-bold text-ink-900">Who this is for</p>
            <ul className="mt-4 space-y-3">
              {service.audiences.map((a) => (
                <li key={a} className="flex gap-3 text-sm text-ink-700">
                  <Icon name="checkCircle" size={20} className="shrink-0 text-brand-600" /> {a}
                </li>
              ))}
            </ul>
          </div>
        }
      >
        <ButtonLink href={ctaHref} size="lg" arrow>
          {service.primaryCta.label}
        </ButtonLink>
        <ButtonLink href="/pricing" variant="secondary" size="lg">
          View Pricing
        </ButtonLink>
      </PageHero>

      {/* Intro */}
      <section className="py-20 sm:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-2">
          <div data-reveal>
            <h2 className="text-3xl font-bold sm:text-4xl">{service.introHeading}</h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-ink-600" data-reveal>
            {service.intro.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-ink-50 py-20 sm:py-24">
        <div className="container-site">
          <SectionHeading eyebrow="What we offer" title={`${service.name} services`} />
          <ul className={`mt-12 grid gap-5 sm:grid-cols-2 ${service.features.length % 3 === 0 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
            {service.features.map((f, i) => (
              <li key={f.title} className="card card-hover p-6" data-reveal style={{ ["--reveal-delay" as string]: `${(i % 4) * 70}ms` }}>
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon name={f.icon} size={22} />
                </span>
                <h3 className="mt-4 text-lg font-bold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{f.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Deliverables + honesty note */}
      <section className="py-20 sm:py-24">
        <div className="container-site grid gap-8 lg:grid-cols-2">
          <div className="card p-8 sm:p-10" data-reveal>
            <h2 className="text-2xl font-bold">{service.deliverablesHeading}</h2>
            <ul className="mt-6 space-y-4">
              {service.deliverables.map((d) => (
                <li key={d} className="flex gap-3">
                  <Icon name="check" size={20} strokeWidth={2.25} className="mt-0.5 shrink-0 text-brand-600" />
                  <span className="text-ink-700">{d}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="on-dark flex flex-col justify-between rounded-[var(--radius-card)] bg-ink-950 p-8 sm:p-10" data-reveal>
            <div>
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-white/10 text-accent-300">
                <Icon name="shield" size={22} />
              </span>
              <h2 className="mt-5 text-2xl font-bold text-white">Our honest commitment</h2>
              <p className="mt-4 leading-relaxed text-ink-300">{service.honestyNote}</p>
            </div>
            <Link href="/terms-and-conditions" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-300 hover:text-white">
              Read our terms <Icon name="arrowRight" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-ink-50 py-20 sm:py-24">
        <div className="container-site">
          <SectionHeading eyebrow="Our approach" title="How we deliver" />
          <div className="mt-12">
            <ProcessSteps steps={service.approach} />
          </div>
        </div>
      </section>

      {/* Packages */}
      {related.length > 0 && (
        <section className="py-20 sm:py-24">
          <div className="container-site">
            <SectionHeading eyebrow="Fixed-price options" title="Related packages" intro="Prefer a fixed price? These packages are a simple way to get started." />
            <div className={`mt-12 grid gap-6 ${related.length === 3 ? "lg:grid-cols-3" : "md:grid-cols-2 lg:mx-auto lg:max-w-4xl"}`}>
              {related.map((p) => (
                <PricingCard key={p.id} pkg={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="bg-ink-50 py-20 sm:py-24">
        <div className="container-site max-w-4xl">
          <SectionHeading eyebrow="FAQs" title="Frequently asked questions" />
          <div className="mt-10" data-reveal>
            <FAQList faqs={service.faqs} />
          </div>
        </div>
      </section>

      {/* Related links */}
      <section className="py-20 sm:py-24">
        <div className="container-site grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">Explore other services</h2>
            <ul className="mt-6 grid gap-3">
              {otherServices.map((s) => (
                <li key={s.slug}>
                  <Link href={s.path} className="card card-hover group flex items-center gap-4 p-4">
                    <span className="inline-flex size-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                      <Icon name={s.icon} size={20} />
                    </span>
                    <span className="flex-1 font-semibold text-ink-900">{s.name}</span>
                    <Icon name="arrowRight" size={18} className="text-ink-400 transition group-hover:translate-x-1 group-hover:text-brand-600" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {relatedPosts.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold">Related insights</h2>
              <ul className="mt-6 grid gap-3">
                {relatedPosts.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/blog/${p.slug}`} className="card card-hover block p-5">
                      <span className="text-xs font-semibold tracking-wider text-brand-700 uppercase">{p.category}</span>
                      <span className="mt-1 block font-display text-lg font-bold text-ink-900">{p.title}</span>
                      <span className="mt-1 block text-sm text-ink-600">{p.readingMinutes} min read</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <CTASection
        title={`Ready to get started with ${service.shortName}?`}
        text="Tell us about your business and goals. We will reply with honest recommendations and a clear quote — no obligation."
        primary={{ label: service.primaryCta.label, href: ctaHref }}
      />
    </>
  );
}
