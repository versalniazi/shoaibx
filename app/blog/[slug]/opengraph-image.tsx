import { getPost, posts } from "@/content/blog";
import { ogSize, renderOg } from "@/lib/og/render";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "SHOAIBX LIMITED insights article";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  return renderOg({ eyebrow: `Insights · ${post?.category ?? "Article"}`, title: post?.title ?? "SHOAIBX Insights", footer: "SHOAIBX LIMITED · Insights" });
}
