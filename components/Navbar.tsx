import type { ThemeConfig } from "@/types";

interface NavbarProps {
  appName: string;
  domain: string;
  theme: ThemeConfig;
}

function getNavShellClass(navStyle: ThemeConfig["navStyle"]) {
  switch (navStyle) {
    case "solid":
      return "border border-slate-200 bg-white/90 text-slate-900 shadow-sm";
    case "dark":
      return "border border-white/10 bg-slate-950/92 text-white shadow-lg shadow-slate-950/20";
    case "glass":
      return "border border-white/60 bg-white/55 text-slate-900 shadow-xl shadow-slate-200/40 backdrop-blur-xl";
    case "gradient":
      return "border border-white/10 bg-slate-950/75 text-white shadow-lg shadow-slate-950/25";
    case "solid-dark":
      return "border border-white/10 bg-slate-950 text-white shadow-lg shadow-slate-950/30";
    default:
      return "border border-white/60 bg-white/72 text-slate-900 shadow-lg shadow-slate-200/40 backdrop-blur-xl";
  }
}

function getLogoStyle(theme: ThemeConfig) {
  return {
    backgroundImage: `linear-gradient(135deg, ${theme.primary} 0%, ${theme.secondary} 100%)`,
  };
}

export function Navbar({ appName, domain, theme }: NavbarProps) {
  const initials = appName
    .split(" ")
    .map((segment) => segment.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();
  const darkText = theme.navStyle === "dark" || theme.navStyle === "gradient" || theme.navStyle === "solid-dark";
  const badgeClass = darkText
    ? "border border-white/15 bg-white/10 text-white/80"
    : "border border-slate-200 bg-white/70 text-slate-600";
  const linkClass = darkText ? "text-white/80 hover:text-white" : "text-slate-600 hover:text-slate-950";

  return (
    <header className="sticky top-4 z-40 px-4 md:px-8 lg:px-12">
      <div className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 py-3 md:px-6 ${getNavShellClass(theme.navStyle)}`}>
        <a href="#top" className="flex items-center gap-3">
          <div
            className="flex h-11 w-11 items-center justify-center rounded-2xl text-sm font-bold text-white"
            style={getLogoStyle(theme)}
          >
            {initials}
          </div>
          <div>
            <p className="text-sm font-semibold">{appName}</p>
            <p className={`text-xs ${darkText ? "text-white/60" : "text-slate-500"}`}>{domain}</p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          <a className={`text-sm transition-colors ${linkClass}`} href="#overview">
            Overview
          </a>
          <a className={`text-sm transition-colors ${linkClass}`} href="#features">
            Features
          </a>
          <a className={`text-sm transition-colors ${linkClass}`} href="#records">
            Data
          </a>
          <a className={`text-sm transition-colors ${linkClass}`} href="#cta">
            CTA
          </a>
        </nav>

        <div className={`rounded-full px-3 py-1 text-xs font-medium ${badgeClass}`}>{domain}</div>
      </div>
    </header>
  );
}
