'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { heroContent, heroHighlights, partnerLogos } from '@/data/siteContent';

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/5">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[5%] top-[-160px] h-[420px] w-[420px] rounded-full bg-gradient-to-br from-forge-ember/40 via-forge-gold/30 to-transparent blur-3xl" />
        <div className="absolute right-[-120px] top-[40%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.25),transparent)] blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-28 md:pt-32">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex-1 space-y-8"
          >
            <span className="section-eyebrow inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold">
              {heroContent.eyebrow}
            </span>
            <h1 className="text-balance text-4xl font-semibold leading-tight text-white md:text-6xl">
              {heroContent.title}
            </h1>
            <p className="max-w-xl text-lg text-slate-300">{heroContent.description}</p>
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
                <div key={stat.label} className="rounded-[26px] border border-white/10 bg-white/5 p-6">
                  <p className="text-3xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.3em] text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="pt-10">
              <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Trusted by mission leaders</p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-300">
                {partnerLogos.map((partner) => (
                  <span
                    key={partner}
                    className="rounded-full border border-white/5 bg-white/5 px-4 py-2 font-medium text-slate-200 backdrop-blur"
                  >
                    {partner}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
            className="flex flex-1 items-center justify-center"
          >
            <div className="gradient-border w-full max-w-[460px] rounded-[36px] bg-slate-900/70 p-1">
              <div className="relative overflow-hidden rounded-[30px] bg-slate-950/80 p-8">
                <div className="absolute inset-x-8 top-8 h-48 rounded-full bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.2),transparent)]" />
                <div className="relative space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.5em] text-slate-400">Forge Cell 07</p>
                      <h2 className="mt-2 text-2xl font-semibold text-white">Isothermal Press Control</h2>
                    </div>
                    <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">Live telemetry</span>
                  </div>
                  <Image
                    src="/images/forge-cell.svg"
                    alt="Illustration of Gaztec forging cell"
                    width={480}
                    height={360}
                    className="w-full rounded-[24px] border border-white/10 bg-slate-950/60 object-cover"
                  />
                  <div className="grid gap-4 text-sm text-slate-300 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-[0.4em] text-forge-ember">Core temp</p>
                      <p className="mt-2 text-xl font-semibold text-white">2050°F</p>
                      <p className="mt-1 text-xs text-slate-400">Adaptive die heating engaged</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-[0.4em] text-forge-ember">Press load</p>
                      <p className="mt-2 text-xl font-semibold text-white">9,800 tons</p>
                      <p className="mt-1 text-xs text-slate-400">Cycle 3 of 5 complete</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {heroHighlights.map((item) => (
            <div key={item.title} className="rounded-[26px] border border-white/10 bg-slate-950/70 p-6 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.4em] text-forge-ember">{item.title}</p>
              <p className="mt-4 text-sm text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
