import { BrandMark } from "@/components/BrandMark";
import type { ProjectData } from "@/types";

interface HeroSectionProps {
  data: ProjectData;
}

function getHeroContainerClass(heroLayout: ProjectData["theme"]["heroLayout"]) {
  switch (heroLayout) {
    case "left":
      return "grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center";
    case "split":
      return "grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center";
    default:
      return "mx-auto max-w-5xl text-center";
  }
}

function renderPreviewPanel(data: ProjectData) {
  return (
    <div className="space-y-4">
      <div
        className="floating-card rounded-[1.75rem] border border-white/10 bg-white/10 p-6 text-white backdrop-blur-sm"
        style={{ boxShadow: `0 24px 45px -34px ${data.theme.secondaryStrong}` }}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm text-white/70">Live snapshot</p>
            <p className="mt-2 text-2xl font-semibold">{data.stats[0]?.value}</p>
          </div>
          <span className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold text-white/80">
            {data.stats[0]?.trend}
          </span>
        </div>

        <div className="mt-6 space-y-3">
          {data.tableRows.slice(0, 3).map((row) => (
            <div key={row.id} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 px-4 py-3 transition-transform duration-300 hover:translate-x-1">
              <div>
                <p className="text-sm font-medium text-white">{Object.values(row)[1]}</p>
                <p className="text-xs text-white/60">{Object.values(row)[2]}</p>
              </div>
              <span className="text-xs font-semibold text-white/75">{row.status}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {data.stats.slice(1, 3).map((stat) => (
          <div key={stat.label} className="floating-card rounded-[1.5rem] border border-white/10 bg-white/10 px-5 py-4 text-white backdrop-blur-sm">
            <p className="text-xs uppercase tracking-[0.2em] text-white/60">{stat.label}</p>
            <p className="mt-3 text-xl font-semibold">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function HeroSection({ data }: HeroSectionProps) {
  const centered = data.theme.heroLayout === "centered";
  const shellClass = getHeroContainerClass(data.theme.heroLayout);

  return (
    <section id="top" className="px-4 pt-8 md:px-8 lg:px-12">
      <div
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] px-6 py-14 text-white md:px-10 md:py-20 lg:px-14"
        style={{
          backgroundImage: `${data.theme.heroEdge}, ${data.theme.heroGlow}, ${data.theme.heroGradient}`,
        }}
      >
        <div className="ambient-grid pointer-events-none absolute inset-0 opacity-25" />
        <div
          className="pointer-events-none absolute -left-16 top-8 h-40 w-40 rounded-full blur-3xl animate-drift"
          style={{ backgroundColor: data.theme.secondary }}
        />
        <div
          className="pointer-events-none absolute bottom-0 right-0 h-48 w-48 rounded-full blur-3xl animate-drift"
          style={{ backgroundColor: data.theme.accentSoft }}
        />
        <div className={shellClass}>
          <div className={`relative ${centered ? undefined : "max-w-2xl"}`}>
            <div className={`flex ${centered ? "justify-center" : "justify-start"}`}>
              <BrandMark appName={data.appName} domain={data.domain} theme={data.theme} inverted />
            </div>

            <div className={`flex flex-wrap gap-3 ${centered ? "justify-center" : "justify-start"}`}>
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white/80">
                {data.domain}
              </span>
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">
                Supabase-ready
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">{data.heroHeadline}</h1>
            <p className={`mt-5 text-base leading-8 text-white/78 md:text-lg ${centered ? "mx-auto max-w-3xl" : "max-w-2xl"}`}>
              {data.heroSubtitle}
            </p>

            <div className={`mt-8 flex flex-wrap gap-4 ${centered ? "justify-center" : "justify-start"}`}>
              <a
                href="#records"
                className="rounded-full px-6 py-3 text-sm font-semibold text-slate-950 transition-transform duration-200 hover:-translate-y-0.5"
                style={{ backgroundColor: data.theme.accent }}
              >
                {data.ctaButtonText}
              </a>
              <a
                href="#features"
                className="rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/14"
              >
                Review features
              </a>
            </div>

            {centered ? (
              <div className="mt-12 grid gap-4 md:grid-cols-4">
                {data.stats.map((stat) => (
                  <div key={stat.label} className="floating-card rounded-[1.5rem] border border-white/10 bg-white/10 px-5 py-4 text-left backdrop-blur-sm">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/60">{stat.label}</p>
                    <p className="mt-3 text-2xl font-semibold">{stat.value}</p>
                    <p className="mt-2 text-sm text-white/70">{stat.trend}</p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          {!centered ? renderPreviewPanel(data) : null}
        </div>
      </div>
    </section>
  );
}
