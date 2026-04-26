import { ArrowUpRight } from "lucide-react";

interface FooterProps {
  appName: string;
}

export function Footer({ appName }: FooterProps) {
  return (
    <footer className="border-t border-slate-200/80 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-slate-500 md:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-16">
        <div>
          <p className="font-medium text-slate-700">{appName}</p>
          <p className="mt-1">Portfolio build with local dummy data and a Supabase-ready structure.</p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="#top"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 font-medium text-slate-700 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
          >
            Back to top
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <p className="font-medium text-slate-700">Developed by @balrev</p>
        </div>
      </div>
    </footer>
  );
}
