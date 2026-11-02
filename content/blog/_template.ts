import type { Post } from "./types";

/**
 * BLOG POST TEMPLATE
 * 1. Copy this file to `content/blog/your-article-slug.ts`.
 * 2. Fill in every field. Keep `description` to roughly 140–160 characters (it is the meta description).
 * 3. Import the post in `content/blog/index.ts` and add it to the `posts` array.
 * The article page, blog listing, sitemap, Open Graph tags and Article structured data update automatically.
 * Note: this template file itself is NOT registered, so it never appears on the site.
 */
const post: Post = {
  slug: "your-article-slug",
  title: "Your Article Title",
  description: "A one or two sentence summary of the article used for search results and social sharing.",
  category: "Marketing",
  publishedAt: "2026-01-01",
  author: "SHOAIBX Team",
  readingMinutes: 5,
  takeaways: ["First key point", "Second key point", "Third key point"],
  relatedService: { label: "Digital Marketing", href: "/services/digital-marketing" },
  body: [
    { type: "p", text: "Opening paragraph that sets out the problem the reader has." },
    { type: "h2", text: "First main section" },
    { type: "p", text: "Explain the idea clearly." },
    { type: "ul", items: ["Bullet one", "Bullet two"] },
    { type: "callout", title: "Practical tip", text: "A short, actionable tip." },
    { type: "h2", text: "Conclusion" },
    { type: "p", text: "Summarise and point the reader to a next step." },
  ],
};

export default post;
