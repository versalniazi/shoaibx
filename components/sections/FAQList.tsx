import { faqSchema } from "@/lib/schema";
import type { FAQ } from "@/lib/services";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/ui/JsonLd";

/** Accessible accordion built on native <details>, plus FAQPage structured data. */
export function FAQList({ faqs, withSchema = true }: { faqs: FAQ[]; withSchema?: boolean }) {
  return (
    <>
      {withSchema && <JsonLd data={faqSchema(faqs)} />}
      <div className="divide-y divide-ink-100 rounded-[var(--radius-card)] border border-ink-100 bg-white shadow-[var(--shadow-soft)]">
        {faqs.map((f) => (
          <details key={f.question} className="group px-5 sm:px-7 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left font-display text-base font-semibold text-ink-900 sm:text-lg">
              <h3 className="text-base sm:text-lg">{f.question}</h3>
              <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition group-open:rotate-45">
                <Icon name="plus" size={18} />
              </span>
            </summary>
            <p className="-mt-1 pb-6 leading-relaxed text-ink-600">{f.answer}</p>
          </details>
        ))}
      </div>
    </>
  );
}
