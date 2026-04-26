import { ArrowRight, type LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";
import type { FeatureItem, ThemeConfig } from "@/types";

interface FeatureCardProps {
  feature: FeatureItem;
  theme: ThemeConfig;
}

function getCardClass(cardStyle: ThemeConfig["cardStyle"]) {
  switch (cardStyle) {
    case "bordered":
      return "border border-slate-200 bg-white";
    case "gradient":
      return "border border-white/60 bg-white/90";
    case "minimal":
      return "border border-slate-200/70 bg-slate-50/80";
    case "accent":
      return "border border-slate-200 bg-white";
    case "lift":
      return "border border-slate-200 bg-white transition-transform duration-200 hover:-translate-y-1";
    default:
      return "border border-slate-200 bg-white";
  }
}

export function FeatureCard({ feature, theme }: FeatureCardProps) {
  const iconMap = Icons as unknown as Record<string, LucideIcon>;
  const Icon = iconMap[feature.icon] ?? Icons.Sparkles;

  return (
    <article
      className={`group relative overflow-hidden rounded-3xl p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${getCardClass(theme.cardStyle)}`}
      style={{
        boxShadow: theme.cardStyle === "gradient" ? `0 24px 45px -38px ${theme.secondaryStrong}` : undefined,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `linear-gradient(150deg, ${theme.primarySoft} 0%, transparent 44%, ${theme.secondarySoft} 100%)`,
        }}
      />
      <div
        className="relative flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3"
        style={{
          background: `linear-gradient(135deg, ${theme.primarySoft} 0%, ${theme.secondarySoft} 100%)`,
        }}
      >
        <Icon className="h-5 w-5" style={{ color: theme.primary }} />
      </div>
      <div className="relative">
        <h3 className="mt-5 text-lg font-semibold text-slate-950">{feature.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{feature.description}</p>
        <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold" style={{ color: theme.primary }}>
          Inspect flow
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </article>
  );
}
