import type { ThemeConfig } from "@/types";

interface BrandMarkProps {
  appName: string;
  domain?: string;
  theme: ThemeConfig;
  mode?: "full" | "compact";
  inverted?: boolean;
}

function getInitials(appName: string) {
  return appName
    .split(" ")
    .map((segment) => segment.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function BrandMark({
  appName,
  domain,
  theme,
  mode = "full",
  inverted = false,
}: BrandMarkProps) {
  const initials = getInitials(appName);
  const headingColor = inverted ? "#ffffff" : theme.text;
  const detailColor = inverted ? "rgba(255, 255, 255, 0.7)" : theme.softText;

  return (
    <div className="flex items-center gap-3">
      <div className="relative h-12 w-12 shrink-0">
        <div
          className="absolute inset-0 rounded-[1.1rem] shadow-[0_18px_40px_-24px_rgba(15,23,42,0.45)]"
          style={{
            backgroundImage: `linear-gradient(145deg, ${theme.primary} 0%, ${theme.secondary} 100%)`,
          }}
        />
        <div
          className="absolute inset-[3px] rounded-[0.95rem] border backdrop-blur-xl"
          style={{
            borderColor: inverted ? "rgba(255,255,255,0.28)" : theme.borderStrong,
            backgroundColor: inverted ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.82)",
          }}
        />
        <div
          className="absolute inset-[9px] rounded-[0.7rem] border"
          style={{
            borderColor: inverted ? "rgba(255,255,255,0.36)" : theme.secondary,
          }}
        />
        <div className="absolute left-1.5 top-1.5 h-2.5 w-2.5 rounded-full bg-white/80 shadow-[0_0_18px_rgba(255,255,255,0.85)]" />
        <div className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-white/60" />
        <span
          className="absolute inset-x-0 bottom-2 text-center text-sm font-black tracking-[0.28em]"
          style={{ color: headingColor }}
        >
          {initials}
        </span>
      </div>

      {mode === "full" ? (
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold" style={{ color: headingColor }}>
            {appName}
          </p>
          {domain ? (
            <p className="truncate text-xs" style={{ color: detailColor }}>
              {domain}
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
