import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { Icon } from "@/components/ui/Icon";
import { formatDate, posts } from "@/content/blog";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Insights — Digital Marketing, SEO & Website Advice",
  description:
    "Practical articles on websites, SEO, online advertising, conversion optimisation and digital marketing for UK startups and small businesses.",
  path: "/blog",
});

export default function BlogPage() {
  const [featured, ...rest] = posts;
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={
          <>
            Practical advice for <span className="gradient-text">growing online</span>
          </>
        }
        intro="Clear, jargon-free guidance on websites, SEO, advertising and digital marketing — written for business owners, not marketers."
        breadcrumbs={[{ name: "Insights", path: "/blog" }]}
      />

      <section className="py-20 sm:py-24">
        <div className="container-site">
          <article className="on-dark group relative grid overflow-hidden rounded-[2rem] bg-ink-950 lg:grid-cols-2" data-reveal>
            <div aria-hidden className="relative min-h-56 overflow-hidden bg-gradient-to-br from-brand-600 via-brand-700 to-accent-600">
              <div className="bg-grid-dark absolute inset-0" />
              <Icon name="sparkles" size={140} strokeWidth={1} className="absolute right-8 bottom-6 text-white/25" />
            </div>
            <div className="p-8 sm:p-12">
              <p className="text-xs font-semibold tracking-wider text-accent-300 uppercase">Latest · {featured.category}</p>
              <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                <Link href={`/blog/${featured.slug}`} className="after:absolute after:inset-0 after:content-['']">
                  {featured.title}
                </Link>
              </h2>
              <p className="mt-4 leading-relaxed text-ink-300">{featured.description}</p>
              <p className="mt-6 text-sm text-ink-400">
                <time dateTime={featured.publishedAt}>{formatDate(featured.publishedAt)}</time> · {featured.readingMinutes} min read
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-300 group-hover:text-white">
                Read article <Icon name="arrowRight" size={16} />
              </span>
            </div>
          </article>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <article key={p.slug} className="card card-hover group relative flex flex-col p-7" data-reveal>
                <p className="text-xs font-semibold tracking-wider text-brand-700 uppercase">{p.category}</p>
                <h2 className="mt-3 text-xl font-bold group-hover:text-brand-700">
                  <Link href={`/blog/${p.slug}`} className="after:absolute after:inset-0 after:content-['']">
                    {p.title}
                  </Link>
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-600">{p.description}</p>
                <p className="mt-6 text-xs text-ink-500">
                  <time dateTime={p.publishedAt}>{formatDate(p.publishedAt)}</time> · {p.readingMinutes} min read
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Want advice specific to your business?" text="Book a free consultation and we will look at your website and marketing with fresh eyes." primary={{ label: "Book a Consultation", href: "/contact" }} />
    </>
  );
}
