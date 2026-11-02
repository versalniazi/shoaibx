import Link from "next/link";
import { breadcrumbSchema } from "@/lib/schema";
import { Icon } from "./Icon";
import { JsonLd } from "./JsonLd";

export type Crumb = { name: string; path: string };

/** Visible breadcrumb trail plus matching BreadcrumbList structured data. Home is added automatically. */
export function Breadcrumbs({ items, dark = false }: { items: Crumb[]; dark?: boolean }) {
  const all = [{ name: "Home", path: "/" }, ...items];
  return (
    <>
      <JsonLd data={breadcrumbSchema(all)} />
      <nav aria-label="Breadcrumb" className="text-sm">
        <ol className="flex flex-wrap items-center gap-1.5">
          {all.map((c, i) => {
            const last = i === all.length - 1;
            return (
              <li key={c.path} className="flex items-center gap-1.5">
                {i > 0 && <Icon name="chevronDown" size={14} className={`-rotate-90 ${dark ? "text-ink-500" : "text-ink-300"}`} />}
                {last ? (
                  <span aria-current="page" className={`font-semibold ${dark ? "text-white" : "text-ink-900"}`}>
                    {c.name}
                  </span>
                ) : (
                  <Link href={c.path} className={`transition ${dark ? "text-ink-300 hover:text-white" : "text-ink-500 hover:text-brand-700"}`}>
                    {c.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
