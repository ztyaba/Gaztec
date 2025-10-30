import Link from 'next/link';
import { ctaBanner } from '@/data/siteContent';

export default function CallToAction() {
  return (
    <section className="relative isolate border-t border-white/10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,rgba(236,72,153,0.2),transparent_70%)]" />
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="gradient-border rounded-[48px] bg-slate-950/80 p-1">
          <div className="rounded-[44px] bg-gradient-to-r from-slate-950/85 via-slate-900/75 to-slate-950/85 p-12">
            <div className="grid gap-10 lg:grid-cols-[1.15fr,0.85fr] lg:items-center">
              <div className="space-y-5">
                <p className="text-xs uppercase tracking-[0.45em] text-slate-400">Partner with Gaztec</p>
                <h2 className="text-3xl font-semibold text-white md:text-4xl">{ctaBanner.title}</h2>
                <p className="text-base text-slate-300">{ctaBanner.description}</p>
                <div className="flex flex-wrap gap-4">
                  <Link href={ctaBanner.primaryCta.href} className="button-primary">
                    {ctaBanner.primaryCta.label}
                  </Link>
                  <Link href={ctaBanner.secondaryCta.href} className="button-outline">
                    {ctaBanner.secondaryCta.label}
                  </Link>
                </div>
              </div>
              <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 text-sm text-slate-300">
                <p className="text-xs uppercase tracking-[0.4em] text-slate-500">What to expect</p>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 flex-none rounded-full bg-white/70" />
                    <span>Collaborative design alignment workshop with metallurgy, forging, and machining leads.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 flex-none rounded-full bg-white/70" />
                    <span>Actionable readiness roadmap and risk assessment tailored to your program milestones.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 flex-none rounded-full bg-white/70" />
                    <span>Access to our secure portal with example telemetry, reports, and communication cadence.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
