import type { StatItem, ThemeConfig } from "@/types";

interface StatsCardProps {
  stat: StatItem;
  theme: ThemeConfig;
}

function getTrendClass(trend: string) {
  if (trend.trim().startsWith("-")) {
    return "bg-rose-50 text-rose-700";
  }

  if (trend === "0%" || trend === "0") {
    return "bg-slate-100 text-slate-600";
  }

  return "bg-emerald-50 text-emerald-700";
}

function getCardClass(cardStyle: ThemeConfig["cardStyle"]) {
  switch (cardStyle) {
    case "bordered":
      return "border border-slate-200 bg-white";
    case "gradient":
      return "border border-white/60 bg-white/90 shadow-lg shadow-slate-200/30";
    case "minimal":
      return "border border-slate-200/70 bg-slate-50/80";
    case "accent":
      return "border border-slate-200 bg-white shadow-sm";
    case "lift":
      return "border border-slate-200 bg-white shadow-sm transition-transform duration-200 hover:-translate-y-1";
    default:
      return "border border-slate-200 bg-white shadow-sm";
  }
}

export function StatsCard({ stat, theme }: StatsCardProps) {
  return (
    <article
      className={`rounded-3xl p-6 ${getCardClass(theme.cardStyle)}`}
      style={{
        boxShadow: theme.cardStyle === "shadow" || theme.cardStyle === "accent" ? `0 18px 50px -35px ${theme.borderStrong}` : undefined,
      }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500">{stat.label}</p>
          <p className="mt-4 text-3xl font-bold tracking-tight text-slate-950">{stat.value}</p>
        </div>
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${getTrendClass(stat.trend)}`}>
          {stat.trend}
        </span>
      </div>
      <div className="mt-6 h-1.5 rounded-full" style={{ backgroundColor: theme.surfaceStrong }}>
        <div
          className="h-full rounded-full"
          style={{
            width: stat.trend.trim().startsWith("-") ? "34%" : "68%",
            backgroundImage: `linear-gradient(90deg, ${theme.primary} 0%, ${theme.secondary} 100%)`,
          }}
        />
      </div>
    </article>
  );
}
