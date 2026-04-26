interface FooterProps {
  appName: string;
}

export function Footer({ appName }: FooterProps) {
  return (
    <footer className="border-t border-slate-200/80 bg-white/80">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-8 text-sm text-slate-500 md:px-8 lg:px-16 lg:flex-row lg:items-center lg:justify-between">
        <p>{new Date().getFullYear()} {appName}. Portfolio build with local dummy data.</p>
        <p className="font-medium text-slate-700">Developed by @balrev</p>
      </div>
    </footer>
  );
}
