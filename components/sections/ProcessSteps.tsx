const defaultSteps = [
  { title: "Discovery", description: "We learn about your business, audience, competitors and goals through a free consultation." },
  { title: "Strategy", description: "We recommend a clear plan with scope, timeline and transparent pricing agreed in writing." },
  { title: "Design & Development", description: "We create your website, campaigns or content, sharing progress for your feedback." },
  { title: "Launch", description: "We test thoroughly, then go live — with tracking in place so results can be measured." },
  { title: "Optimisation", description: "We review performance and recommend improvements based on real data." },
];

export function ProcessSteps({ steps = defaultSteps }: { steps?: { title: string; description: string }[] }) {
  const cols = steps.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-5";
  return (
    <ol className={`relative grid gap-5 sm:grid-cols-2 ${cols}`}>
      {steps.map((s, i) => (
        <li key={s.title} className="card relative p-6" data-reveal style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}>
          <span className="font-display text-sm font-bold tracking-widest text-brand-600">
            STEP {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-3 text-lg font-bold">{s.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-600">{s.description}</p>
          <span aria-hidden className="absolute inset-x-6 bottom-0 h-1 rounded-t-full bg-gradient-to-r from-brand-500 to-accent-500" style={{ opacity: 0.35 + i * 0.13 }} />
        </li>
      ))}
    </ol>
  );
}
