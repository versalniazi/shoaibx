import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/sections/CTASection";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/ui/JsonLd";
import { formatDate, getPost, posts, type Block } from "@/content/blog";
import { articleSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return buildMetadata({ title: post.title, description: post.description, path: `/blog/${post.slug}`, type: "article", publishedTime: post.publishedAt });
}

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

function RenderBlock({ block }: { block: Block }) {
  switch (block.type) {
    case "p":
      return <p>{block.text}</p>;
    case "h2":
      return <h2 id={block.id ?? slugify(block.text)}>{block.text}</h2>;
    case "h3":
      return <h3>{block.text}</h3>;
    case "ul":
      return (
        <ul>
          {block.items.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol>
          {block.items.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ol>
      );
    case "quote":
      return <blockquote>{block.text}</blockquote>;
    case "callout":
      return (
        <aside className="not-prose rounded-2xl border border-brand-200 bg-brand-50 p-6">
          <p className="flex items-center gap-2 font-display font-bold text-brand-800">
            <Icon name="sparkles" size={18} /> {block.title}
          </p>
          <p className="mt-2 text-ink-700">{block.text}</p>
        </aside>
      );
  }
}

export default async function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const headings = post.body.filter((b): b is Extract<Block, { type: "h2" }> => b.type === "h2");
  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <JsonLd data={articleSchema(post)} />
      <article>
        <header className="relative overflow-hidden border-b border-ink-100 bg-ink-50">
          <div aria-hidden className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
          <div aria-hidden className="absolute -top-32 -right-24 size-[28rem] rounded-full bg-brand-300/30 blur-3xl" />
          <div className="container-site relative max-w-4xl py-12 sm:py-16">
            <Breadcrumbs
              items={[
                { name: "Insights", path: "/blog" },
                { name: post.title, path: `/blog/${post.slug}` },
              ]}
            />
            <p className="eyebrow mt-8">{post.category}</p>
            <h1 className="mt-5 text-4xl leading-[1.1] font-extrabold sm:text-5xl">{post.title}</h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-600 sm:text-xl">{post.description}</p>
            <p className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink-500">
              <span>By {post.author}</span>
              <span aria-hidden>·</span>
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              <span aria-hidden>·</span>
              <span>{post.readingMinutes} min read</span>
            </p>
          </div>
        </header>

        <div className="container-site grid max-w-6xl gap-12 py-14 lg:grid-cols-[1fr_280px] lg:py-20">
          <div className="min-w-0">
            <section aria-labelledby="takeaways" className="card mb-10 p-6 sm:p-7">
              <h2 id="takeaways" className="text-lg font-bold">
                Key takeaways
              </h2>
              <ul className="mt-4 space-y-2.5">
                {post.takeaways.map((t) => (
                  <li key={t} className="flex gap-3 text-ink-700">
                    <Icon name="checkCircle" size={20} className="mt-0.5 shrink-0 text-brand-600" /> {t}
                  </li>
                ))}
              </ul>
            </section>
            <div className="prose-site">
              {post.body.map((b, i) => (
                <RenderBlock key={i} block={b} />
              ))}
            </div>
            <div className="mt-12 flex flex-col gap-4 rounded-2xl bg-ink-950 p-7 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-display text-lg font-bold text-white">Need help with {post.relatedService.label.toLowerCase()}?</p>
              <ButtonLink href={post.relatedService.href} variant="light" arrow>
                Explore the service
              </ButtonLink>
            </div>
          </div>

          <aside className="hidden lg:block">
            <nav aria-label="On this page" className="sticky top-28">
              <p className="text-xs font-semibold tracking-wider text-ink-500 uppercase">On this page</p>
              <ul className="mt-4 space-y-2.5 border-l border-ink-100 text-sm">
                {headings.map((h) => (
                  <li key={h.text}>
                    <a href={`#${h.id ?? slugify(h.text)}`} className="-ml-px block border-l-2 border-transparent pl-4 text-ink-600 hover:border-brand-500 hover:text-brand-700">
                      {h.text}
                    </a>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn btn-primary mt-8 w-full">
                Get a Free Quote
              </Link>
            </nav>
          </aside>
        </div>
      </article>

      <section className="border-t border-ink-100 bg-ink-50 py-16 sm:py-20">
        <div className="container-site">
          <h2 className="text-2xl font-bold sm:text-3xl">More insights</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {more.map((p) => (
              <article key={p.slug} className="card card-hover group relative p-6">
                <p className="text-xs font-semibold tracking-wider text-brand-700 uppercase">{p.category}</p>
                <h3 className="mt-2 text-lg font-bold group-hover:text-brand-700">
                  <Link href={`/blog/${p.slug}`} className="after:absolute after:inset-0 after:content-['']">
                    {p.title}
                  </Link>
                </h3>
                <p className="mt-3 text-xs text-ink-500">{p.readingMinutes} min read</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
