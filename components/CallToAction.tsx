import Link from 'next/link';
import { ctaBanner } from '@/data/siteContent';

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,rgba(249,115,22,0.14),transparent_70%)]" />
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="gradient-border rounded-[40px] bg-slate-950/80 p-1">
          <div className="rounded-[36px] bg-gradient-to-r from-slate-950/80 via-slate-900/80 to-slate-950/80 p-10 text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-forge-ember">Partner with Gaztec</p>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">{ctaBanner.title}</h2>
            <p className="mt-4 text-base text-slate-300">{ctaBanner.description}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href={ctaBanner.primaryCta.href} className="button-primary">
                {ctaBanner.primaryCta.label}
              </Link>
              <Link href={ctaBanner.secondaryCta.href} className="button-outline">
                {ctaBanner.secondaryCta.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
