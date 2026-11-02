import type { DemoProject } from "@/lib/portfolio";

/** Generated mock-up artwork for demonstration projects (no client imagery). */
export function ProjectMockup({ project }: { project: DemoProject }) {
  const { bg, primary, accent, ink } = project.palette;
  return (
    <svg viewBox="0 0 480 300" className="h-auto w-full" role="img" aria-label={`Illustrative mock-up of the ${project.title} demonstration project`}>
      <rect width="480" height="300" fill={bg} />
      <rect x="30" y="26" width="420" height="274" rx="14" fill="#fff" stroke={ink} strokeOpacity=".08" />
      <rect x="30" y="26" width="420" height="30" rx="14" fill={ink} fillOpacity=".04" />
      <circle cx="50" cy="41" r="4" fill={ink} fillOpacity=".2" />
      <circle cx="64" cy="41" r="4" fill={ink} fillOpacity=".2" />
      <circle cx="78" cy="41" r="4" fill={ink} fillOpacity=".2" />
      <rect x="50" y="70" width="60" height="8" rx="4" fill={ink} />
      {[0, 1, 2].map((i) => (
        <rect key={i} x={300 + i * 42} y="71" width="32" height="6" rx="3" fill={ink} fillOpacity=".25" />
      ))}
      {project.layout === "hero-split" && (
        <g>
          <rect x="50" y="104" width="170" height="14" rx="7" fill={ink} />
          <rect x="50" y="126" width="140" height="14" rx="7" fill={ink} />
          <rect x="50" y="152" width="160" height="7" rx="3.5" fill={ink} fillOpacity=".3" />
          <rect x="50" y="166" width="120" height="7" rx="3.5" fill={ink} fillOpacity=".3" />
          <rect x="50" y="188" width="90" height="26" rx="13" fill={primary} />
          <rect x="250" y="98" width="180" height="130" rx="14" fill={accent} />
          <circle cx="340" cy="163" r="40" fill={primary} fillOpacity=".85" />
          <circle cx="340" cy="163" r="22" fill={bg} />
          {[0, 1, 2].map((i) => (
            <rect key={i} x={50 + i * 130} y="244" width="120" height="40" rx="10" fill={bg} />
          ))}
        </g>
      )}
      {project.layout === "shop-grid" && (
        <g>
          <rect x="50" y="96" width="380" height="50" rx="12" fill={primary} />
          <rect x="70" y="112" width="150" height="10" rx="5" fill="#fff" />
          <rect x="70" y="128" width="100" height="6" rx="3" fill="#fff" fillOpacity=".6" />
          {[0, 1, 2, 3].map((i) => (
            <g key={i}>
              <rect x={50 + i * 97} y="160" width="87" height="86" rx="10" fill={accent} fillOpacity={0.5 + i * 0.12} />
              <rect x={50 + i * 97} y="254" width="60" height="7" rx="3.5" fill={ink} />
              <rect x={50 + i * 97} y="267" width="34" height="7" rx="3.5" fill={primary} />
            </g>
          ))}
        </g>
      )}
      {project.layout === "landing" && (
        <g>
          <rect x="50" y="100" width="210" height="16" rx="8" fill={ink} />
          <rect x="50" y="124" width="170" height="16" rx="8" fill={ink} />
          <rect x="50" y="152" width="190" height="7" rx="3.5" fill={ink} fillOpacity=".3" />
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <circle cx="56" cy={182 + i * 20} r="6" fill={primary} />
              <rect x="70" y={178 + i * 20} width={130 - i * 15} height="7" rx="3.5" fill={ink} fillOpacity=".45" />
            </g>
          ))}
          <rect x="280" y="96" width="150" height="178" rx="14" fill={bg} stroke={primary} strokeOpacity=".2" />
          {[0, 1, 2].map((i) => (
            <rect key={i} x="296" y={116 + i * 36} width="118" height="24" rx="7" fill="#fff" stroke={ink} strokeOpacity=".12" />
          ))}
          <rect x="296" y="230" width="118" height="28" rx="14" fill={primary} />
        </g>
      )}
      {project.layout === "dashboard" && (
        <g>
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <rect x={50 + i * 130} y="96" width="120" height="56" rx="10" fill={bg} />
              <rect x={64 + i * 130} y="110" width="50" height="6" rx="3" fill={ink} fillOpacity=".35" />
              <rect x={64 + i * 130} y="126" width="70" height="12" rx="6" fill={i === 1 ? accent : primary} />
            </g>
          ))}
          <rect x="50" y="164" width="250" height="114" rx="10" fill={bg} />
          <path d="M66 258 C100 250 120 236 150 230 S200 206 230 196 S270 186 286 176" fill="none" stroke={primary} strokeWidth="3.5" strokeLinecap="round" />
          <path d="M66 266 C110 262 160 254 200 246 S260 236 286 228" fill="none" stroke={accent} strokeWidth="2.5" strokeDasharray="5 5" />
          <rect x="312" y="164" width="118" height="114" rx="10" fill={bg} />
          {[0, 1, 2, 3].map((i) => (
            <rect key={i} x="326" y={180 + i * 22} width={88 - i * 14} height="9" rx="4.5" fill={i % 2 ? accent : primary} fillOpacity=".85" />
          ))}
        </g>
      )}
    </svg>
  );
}
