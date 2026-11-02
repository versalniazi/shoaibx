/**
 * Blog post data model. Each article is a typed object built from simple
 * content blocks, so new posts need no extra dependencies or CMS.
 * Copy `_template.ts` to start a new article, then register it in `index.ts`.
 */
export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string; id?: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "callout"; title: string; text: string };

export type Post = {
  slug: string;
  title: string;
  description: string;
  category: "Websites" | "SEO" | "Advertising" | "Marketing" | "Design" | "Conversion";
  /** ISO date, e.g. 2026-11-02 */
  publishedAt: string;
  updatedAt?: string;
  author: string;
  readingMinutes: number;
  /** Short list shown in the "Key takeaways" box. */
  takeaways: string[];
  body: Block[];
  /** Service page this article naturally leads to. */
  relatedService: { label: string; href: string };
};
