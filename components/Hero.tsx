'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { heroContent, heroHighlights, partnerLogos } from '@/data/siteContent';

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/10">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b from-rose-500/20 via-fuchsia-500/10 to-transparent blur-3xl" />
        <div className="absolute left-[-25%] top-[35%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25),transparent)] blur-3xl" />
        <div className="absolute right-[-15%] top-[10%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.25),transparent)] blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-28 sm:pt-32 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-10"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.45em] text-slate-200">
              {heroContent.eyebrow}
            </div>
            <h1 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              {heroContent.title}
            </h1>
            <p className="max-w-2xl text-lg text-slate-300 lg:text-xl">{heroContent.description}</p>
            <div className="flex flex-wrap gap-4">
              <Link href={heroContent.primaryCta.href} className="button-primary">
                {heroContent.primaryCta.label}
              </Link>
              <Link href={heroContent.secondaryCta.href} className="button-outline">
                {heroContent.secondaryCta.label}
              </Link>
            </div>
            <div className="grid gap-4 pt-8 sm:grid-cols-3">
              {heroContent.stats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-white/15 bg-slate-900/70 p-6 shadow-panel">
                  <p className="text-3xl font-semibold text-white sm:text-4xl">{stat.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.35em] text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="space-y-3 pt-10">
              <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Trusted by innovators</p>
              <div className="flex flex-wrap gap-3 text-sm text-slate-300">
                {partnerLogos.map((partner) => (
                  <span
                    key={partner}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 font-medium text-slate-100 backdrop-blur"
                  >
                    {partner}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-xl">
              <div className="absolute -left-10 top-6 h-32 w-32 rounded-full bg-gradient-to-br from-rose-500/40 to-transparent blur-2xl" />
              <div className="gradient-border rounded-[36px] bg-slate-900/70 p-1">
                <div className="relative overflow-hidden rounded-[32px] bg-slate-950/70 p-8">
                  <div className="absolute inset-x-10 top-8 h-36 rounded-full bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.35),transparent)]" />
                  <div className="relative space-y-6">
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <p className="text-xs uppercase tracking-[0.5em] text-slate-400">Forge Cell 07</p>
                        <h2 className="mt-3 text-2xl font-semibold text-white">Isothermal Press Control</h2>
                      </div>
                      <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">Live telemetry</span>
                    </div>
                    <Image
                      src="/images/forge-cell.svg"
                      alt="Illustration of Gaztec forging cell"
                      width={520}
                      height={360}
                      className="w-full rounded-[24px] border border-white/10 bg-slate-950/70 object-cover"
                    />
                    <div className="grid gap-4 text-sm text-slate-300 sm:grid-cols-2">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                        <p className="text-xs uppercase tracking-[0.4em] text-rose-300">Core temp</p>
                        <p className="mt-2 text-xl font-semibold text-white">2050°F</p>
                        <p className="mt-1 text-xs text-slate-400">Adaptive die heating engaged</p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                        <p className="text-xs uppercase tracking-[0.4em] text-rose-300">Press load</p>
                        <p className="mt-2 text-xl font-semibold text-white">9,800 tons</p>
                        <p className="mt-1 text-xs text-slate-400">Cycle 3 of 5 complete</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {heroHighlights.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/10 to-transparent p-6 shadow-panel"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-300">{item.title}</p>
              <p className="mt-4 text-sm text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
