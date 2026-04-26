"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { BrandMark } from "@/components/BrandMark";
import type { ThemeConfig } from "@/types";

interface NavbarProps {
  appName: string;
  domain: string;
  theme: ThemeConfig;
}

function getNavShellClass(navStyle: ThemeConfig["navStyle"]) {
  switch (navStyle) {
    case "solid":
      return "border border-slate-200/80 bg-white/92 text-slate-900 shadow-[0_18px_48px_-34px_rgba(15,23,42,0.35)]";
    case "dark":
      return "border border-white/10 bg-slate-950/92 text-white shadow-[0_26px_60px_-40px_rgba(2,6,23,0.82)]";
    case "glass":
      return "border border-white/55 bg-white/55 text-slate-900 shadow-[0_26px_60px_-40px_rgba(15,23,42,0.34)] backdrop-blur-2xl";
    case "gradient":
      return "border border-white/10 bg-slate-950/78 text-white shadow-[0_26px_60px_-40px_rgba(2,6,23,0.78)]";
    case "solid-dark":
      return "border border-white/10 bg-slate-950 text-white shadow-[0_26px_60px_-40px_rgba(2,6,23,0.82)]";
    default:
      return "border border-white/60 bg-white/76 text-slate-900 shadow-[0_24px_56px_-38px_rgba(15,23,42,0.32)] backdrop-blur-xl";
  }
}

const navItems = [
  { href: "#overview", label: "Overview" },
  { href: "#features", label: "Features" },
  { href: "#records", label: "Data" },
  { href: "#cta", label: "CTA" },
];

function getActionButtonClass(darkText: boolean) {
  return darkText
    ? "bg-white text-slate-950 hover:bg-white/88"
    : "bg-slate-950 text-white hover:bg-slate-800";
}

export function Navbar({ appName, domain, theme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const darkText = theme.navStyle === "dark" || theme.navStyle === "gradient" || theme.navStyle === "solid-dark";
  const badgeClass = darkText
    ? "border border-white/15 bg-white/10 text-white/80"
    : "border border-slate-200 bg-white/75 text-slate-600";
  const linkClass = darkText ? "text-white/78 hover:text-white" : "text-slate-600 hover:text-slate-950";

  return (
    <header className="sticky top-4 z-40 px-4 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className={`rounded-[1.75rem] px-4 py-3 md:px-6 ${getNavShellClass(theme.navStyle)}`}>
          <div className="flex items-center justify-between gap-4">
            <a href="#top" className="group flex min-w-0 items-center gap-3">
              <BrandMark appName={appName} domain={domain} theme={theme} />
            </a>

            <nav className="hidden items-center gap-2 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  className={`rounded-full px-4 py-2 text-sm transition-all duration-200 hover:-translate-y-0.5 ${linkClass}`}
                  href={item.href}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <div className={`rounded-full px-3 py-1 text-xs font-medium ${badgeClass}`}>{domain}</div>
              <a
                href="#records"
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 ${getActionButtonClass(darkText)}`}
              >
                Open preview
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <button
              type="button"
              aria-label={isOpen ? "Close navigation" : "Open navigation"}
              className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl border transition-colors md:hidden ${darkText ? "border-white/15 bg-white/10 text-white hover:bg-white/14" : "border-slate-200 bg-white/80 text-slate-950 hover:bg-white"}`}
              onClick={() => setIsOpen((currentValue) => !currentValue)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          <div
            className={`grid overflow-hidden transition-all duration-300 md:hidden ${isOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
          >
            <div className="min-h-0">
              <div className={`rounded-[1.5rem] border px-4 py-4 ${darkText ? "border-white/10 bg-white/6" : "border-slate-200 bg-slate-50/90"}`}>
                <div className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      className={`rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${darkText ? "text-white/82 hover:bg-white/10" : "text-slate-700 hover:bg-white"}`}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between gap-3">
                  <div className={`rounded-full px-3 py-1 text-xs font-medium ${badgeClass}`}>{domain}</div>
                  <a
                    href="#records"
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 ${getActionButtonClass(darkText)}`}
                    onClick={() => setIsOpen(false)}
                  >
                    Open preview
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
