import type { ThemeConfig } from "@/types";

interface CTASectionProps {
  headline: string;
  subtitle: string;
  buttonText: string;
  theme: ThemeConfig;
}

export function CTASection({ headline, subtitle, buttonText, theme }: CTASectionProps) {
  return (
    <section
      id="cta"
      className="relative overflow-hidden rounded-[2rem] px-6 py-10 text-white md:px-10 md:py-14"
      style={{ backgroundImage: `${theme.heroGlow}, ${theme.heroGradient}` }}
    >
      <div className="ambient-grid pointer-events-none absolute inset-0 opacity-20" />
      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-white/70">Call to action</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">{headline}</h2>
          <p className="mt-4 text-base leading-7 text-white/78">{subtitle}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Responsive UI", "Interactive filters", "Supabase-ready"].map((item) => (
              <span key={item} className="rounded-full border border-white/12 bg-white/10 px-3 py-1 text-xs font-medium text-white/78">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#records"
            className="rounded-full px-6 py-3 text-sm font-semibold text-slate-950 transition-transform duration-200 hover:-translate-y-0.5"
            style={{ backgroundColor: theme.accent }}
          >
            {buttonText}
          </a>
          <a
            href="#top"
            className="rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/14"
          >
            Review top section
          </a>
        </div>
      </div>
    </section>
  );
}
