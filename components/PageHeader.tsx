import type { ReactNode } from 'react';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
}

export default function PageHeader({ eyebrow, title, description, actions }: PageHeaderProps) {
  return (
    <header className="relative border-b border-white/5 bg-slate-950/40">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),transparent_60%)]" />
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 pb-20 pt-24 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-forge-ember">{eyebrow}</p>
          <h1 className="text-4xl font-semibold text-white md:text-5xl">{title}</h1>
          <p className="text-lg text-slate-300">{description}</p>
        </div>
        {actions && <div className="flex flex-col gap-3 md:items-end">{actions}</div>}
      </div>
    </header>
  );
}
