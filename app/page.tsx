import type { Metadata } from "next";
import Link from "next/link";
import { HeroVisual } from "@/components/illustrations/HeroVisual";
import { CTASection } from "@/components/sections/CTASection";
import { FAQList } from "@/components/sections/FAQList";
import { PricingCard } from "@/components/sections/PricingCard";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Icon, type IconName } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { posts, formatDate } from "@/content/blog";
import { homeFaqs } from "@/lib/faqs";
import { packages } from "@/lib/pricing";
import { buildMetadata } from "@/lib/seo";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Digital Marketing Agency UK | Websites, Ads & SEO | SHOAIBX",
  absoluteTitle: true,
  description:
    "SHOAIBX LIMITED helps UK businesses grow online with website design and development, digital marketing, Google Ads, social advertising and SEO.",
  path: "/",
});

const reasons: { icon: IconName; title: string; text: string }[] = [
  { icon: "layers", title: "Professional digital solutions", text: "Websites, marketing, advertising and SEO from one partner, planned to work together rather than in isolation." },
  { icon: "code", title: "Modern website development", text: "Fast, secure, mobile-responsive websites built with current technologies and search best practice." },
  { icon: "chart", title: "Data-informed marketing", text: "Decisions guided by analytics and testing, with tracking set up so results can actually be measured." },
  { icon: "pound", title: "Transparent service packages", text: "Clear fixed prices, deliverables and exclusions — and written quotes before any custom work begins." },
  { icon: "chat", title: "Responsive customer support", text: "Straightforward communication by email and phone, with plain-English explanations and no jargon." },
  { icon: "target", title: "Focus on measurable objectives", text: "We agree goals such as enquiries, sales or visibility upfront and report honestly against them." },
];

const audiences = ["Startups", "Small businesses", "Entrepreneurs", "E-commerce brands", "Established companies"];

export default function HomePage() {
  const previewPackages = packages.filter((p) => ["seo-starter", "landing-page", "business-website-starter"].includes(p.id));
  return (
    <>
      {/* HERO */}
      <section className="on-dark relative isolate overflow-hidden bg-ink-950">
        <div aria-hidden className="bg-grid-dark absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top_right,black_25%,transparent_70%)]" />
        <div aria-hidden className="absolute -top-40 right-0 -z-10 size-[40rem] rounded-full bg-brand-600/30 blur-3xl" />
        <div aria-hidden className="absolute -bottom-48 -left-32 -z-10 size-[34rem] rounded-full bg-accent-500/20 blur-3xl" />
        <div className="container-site grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div>
            <p className="eyebrow mb-6">
              <span className="size-1.5 rounded-full bg-growth-400" /> UK digital marketing &amp; technology services
            </p>
            <h1 className="text-[2.6rem] leading-[1.04] font-extrabold text-white sm:text-6xl lg:text-[4.25rem]">
              Digital Solutions That <span className="gradient-text">Move Your Business</span> Forward.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-300 sm:text-xl">
              {site.legalName} helps businesses grow online through professional website development, strategic digital marketing, online advertising,
              and search engine optimisation.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" size="lg" arrow>
                Get a Free Consultation
              </ButtonLink>
              <ButtonLink href="/services" variant="outline-light" size="lg">
                Explore Our Services
              </ButtonLink>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-ink-300">
              {["Transparent fixed-price packages", "No long-term contracts on packages", "UK registered company"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Icon name="checkCircle" size={18} className="text-accent-400" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <HeroVisual />
        </div>
      </section>

      {/* AUDIENCE STRIP */}
      <section aria-label="Who we work with" className="border-b border-ink-100 bg-white">
        <div className="container-site flex flex-col items-center gap-4 py-7 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-sm font-semibold text-ink-500">A digital growth partner for</p>
          <ul className="flex flex-wrap justify-center gap-2">
            {audiences.map((a) => (
              <li key={a} className="rounded-full border border-ink-100 bg-ink-50 px-4 py-1.5 text-sm font-semibold text-ink-700">
                {a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 sm:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="What we do"
            title={
              <>
                Everything you need to <span className="gradient-text">grow online</span>
              </>
            }
            intro="From your first website to your next advertising campaign, we provide the digital services that help businesses attract, convert and keep customers."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} title={s.shortName} description={s.cardSummary} href={s.path} icon={s.icon} delay={i * 70} />
            ))}
            <div className="flex flex-col justify-between rounded-[var(--radius-card)] bg-gradient-to-br from-brand-600 to-brand-800 p-7 text-white" data-reveal>
              <div>
                <h3 className="text-xl font-bold text-white">Not sure where to start?</h3>
                <p className="mt-3 leading-relaxed text-brand-100">
                  Book a free consultation and we will recommend the services that best fit your goals and budget.
                </p>
              </div>
              <Link href="/contact" className="btn btn-light mt-6 self-start">
                Book a Consultation <Icon name="arrowRight" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative overflow-hidden bg-ink-50 py-20 sm:py-28">
        <div aria-hidden className="bg-grid absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className="container-site relative grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              align="left"
              eyebrow="Why choose us"
              title="A reliable partner for honest, measurable digital growth"
              intro="We believe good digital work should be clear, accountable and focused on your real business objectives — not vanity metrics or empty promises."
            />
            <div className="mt-8" data-reveal>
              <ButtonLink href="/about" variant="secondary" arrow>
                More about us
              </ButtonLink>
            </div>
          </div>
          <ul className="grid gap-5 sm:grid-cols-2">
            {reasons.map((r, i) => (
              <li key={r.title} className="card p-6" data-reveal style={{ ["--reveal-delay" as string]: `${(i % 2) * 90}ms` }}>
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon name={r.icon} size={22} />
                </span>
                <h3 className="mt-4 text-lg font-bold">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{r.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 sm:py-28">
        <div className="container-site">
          <SectionHeading eyebrow="How we work" title="A clear five-step process" intro="Every project follows a structured process, so you always know what is happening, what comes next and what it will cost." />
          <div className="mt-14">
            <ProcessSteps />
          </div>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section className="bg-gradient-to-b from-white via-brand-50/50 to-white py-20 sm:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Pricing"
            title="Simple packages with clear prices"
            intro="Start with a fixed-price package and scale up when you are ready. Every package lists exactly what is — and is not — included."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {previewPackages.map((p) => (
              <PricingCard key={p.id} pkg={p} />
            ))}
          </div>
          <p className="mt-10 text-center" data-reveal>
            <Link href="/pricing" className="text-link">
              See all six packages, turnaround times and exclusions
            </Link>
          </p>
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="py-20 sm:py-28">
        <div className="container-site">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading align="left" eyebrow="Insights" title="Practical advice for growing online" />
            <ButtonLink href="/blog" variant="secondary" arrow className="self-start sm:self-auto">
              All articles
            </ButtonLink>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {posts.slice(0, 3).map((p) => (
              <article key={p.slug} className="card card-hover group relative flex flex-col p-7" data-reveal>
                <p className="text-xs font-semibold tracking-wider text-brand-700 uppercase">{p.category}</p>
                <h3 className="mt-3 text-xl font-bold group-hover:text-brand-700">
                  <Link href={`/blog/${p.slug}`} className="after:absolute after:inset-0 after:content-['']">
                    {p.title}
                  </Link>
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-600">{p.description}</p>
                <p className="mt-6 text-xs text-ink-500">
                  <time dateTime={p.publishedAt}>{formatDate(p.publishedAt)}</time> · {p.readingMinutes} min read
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-ink-50 py-20 sm:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading align="left" eyebrow="FAQs" title="Frequently asked questions" intro="Can't find what you're looking for? Get in touch and we'll be happy to help." />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row" data-reveal>
              <ButtonLink href="/contact" arrow>
                Ask a Question
              </ButtonLink>
              <a href={site.phoneHref} className="btn btn-secondary">
                <Icon name="phone" size={18} /> Call us
              </a>
            </div>
          </div>
          <div data-reveal>
            <FAQList faqs={homeFaqs} />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
