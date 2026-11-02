import { Icon } from "@/components/ui/Icon";

/**
 * Decorative hero illustration: a website, a growth chart and channel tiles.
 * Purely illustrative — it contains no performance figures or client data.
 */
export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]" aria-hidden="true">
      <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-tr from-brand-600/30 via-transparent to-accent-500/30 blur-3xl" />

      {/* Browser window */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink-900/80 shadow-2xl backdrop-blur">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="size-2.5 rounded-full bg-white/20" />
          <span className="size-2.5 rounded-full bg-white/20" />
          <span className="size-2.5 rounded-full bg-white/20" />
          <span className="ml-3 h-5 flex-1 rounded-full bg-white/5" />
        </div>
        <div className="grid gap-4 p-5 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <div className="h-3 w-40 rounded-full bg-white/80" />
              <div className="h-3 w-28 rounded-full bg-white/30" />
            </div>
            <div className="h-8 w-24 rounded-full bg-gradient-to-r from-brand-500 to-accent-500" />
          </div>

          {/* Growth chart */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div className="mb-3 flex items-center justify-between">
              <div className="h-2.5 w-24 rounded-full bg-white/40" />
              <div className="flex gap-1.5">
                <span className="h-2.5 w-8 rounded-full bg-brand-400/70" />
                <span className="h-2.5 w-8 rounded-full bg-accent-400/70" />
              </div>
            </div>
            <svg viewBox="0 0 400 150" className="h-auto w-full">
              <defs>
                <linearGradient id="hv-area" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#6A55FF" stopOpacity=".45" />
                  <stop offset="1" stopColor="#6A55FF" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="hv-line" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor="#8A78FF" />
                  <stop offset="1" stopColor="#45DAF7" />
                </linearGradient>
              </defs>
              {[30, 70, 110].map((y) => (
                <line key={y} x1="0" x2="400" y1={y} y2={y} stroke="white" strokeOpacity=".06" />
              ))}
              <path d="M0 128 C40 120 60 112 90 108 S150 96 180 88 S240 80 270 60 S340 40 400 18 V150 H0Z" fill="url(#hv-area)" />
              <path
                d="M0 128 C40 120 60 112 90 108 S150 96 180 88 S240 80 270 60 S340 40 400 18"
                fill="none"
                stroke="url(#hv-line)"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeDasharray="600"
                className="animate-draw"
                style={{ ["--len" as string]: 600 }}
              />
              <path d="M0 138 C60 134 120 130 180 124 S300 112 400 96" fill="none" stroke="#45DAF7" strokeOpacity=".45" strokeWidth="2" strokeDasharray="5 6" />
              <circle cx="400" cy="18" r="6" fill="#45DAF7" />
              <circle cx="400" cy="18" r="12" fill="#45DAF7" fillOpacity=".2" />
            </svg>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[
              { icon: "search" as const, label: "SEO" },
              { icon: "target" as const, label: "Ads" },
              { icon: "megaphone" as const, label: "Social" },
            ].map((t) => (
              <div key={t.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
                <Icon name={t.icon} size={18} className="text-accent-300" />
                <div className="mt-2 text-xs font-semibold text-white/80">{t.label}</div>
                <div className="mt-2 h-1.5 rounded-full bg-white/10">
                  <div className="h-1.5 w-2/3 rounded-full bg-gradient-to-r from-brand-400 to-accent-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating cards */}
      <div className="animate-float absolute -bottom-6 -left-4 hidden items-center gap-3 rounded-2xl border border-white/10 bg-white p-3 pr-5 shadow-xl sm:flex">
        <span className="inline-flex size-10 items-center justify-center rounded-xl bg-growth-400/30 text-ink-900">
          <Icon name="smartphone" size={20} />
        </span>
        <div>
          <div className="text-xs font-semibold text-ink-900">Mobile-ready</div>
          <div className="text-[11px] text-ink-500">Responsive by default</div>
        </div>
      </div>
      <div className="animate-float absolute -top-5 -right-3 hidden items-center gap-3 rounded-2xl border border-white/10 bg-white p-3 pr-5 shadow-xl [animation-delay:-3.5s] sm:flex">
        <span className="inline-flex size-10 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
          <Icon name="gauge" size={20} />
        </span>
        <div>
          <div className="text-xs font-semibold text-ink-900">Built for speed</div>
          <div className="text-[11px] text-ink-500">Performance-first</div>
        </div>
      </div>
    </div>
  );
}
