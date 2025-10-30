'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { heroContent } from '@/data/siteContent';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-br from-forge-ember/40 via-forge-gold/40 to-forge-frost/30 blur-3xl" />
        <div className="absolute right-[15%] top-[20%] h-60 w-60 rounded-full bg-forge-frost/30 blur-3xl" />
      </div>
      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-16 px-6 pb-24 pt-8 md:flex-row md:items-end">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex-1 space-y-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
            {heroContent.eyebrow}
          </span>
          <h1 className="text-balance text-4xl font-semibold leading-tight text-white md:text-5xl">
            {heroContent.title}
          </h1>
          <p className="max-w-xl text-lg text-slate-300">{heroContent.description}</p>
          <div className="flex flex-wrap gap-3">
            <Link href={heroContent.primaryCta.href} className="button-primary">
              {heroContent.primaryCta.label}
            </Link>
            <Link href={heroContent.secondaryCta.href} className="button-outline">
              {heroContent.secondaryCta.label}
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-4 pt-6 text-sm">
            {heroContent.stats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/5 p-5 text-center">
                <p className="text-2xl font-semibold text-white">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          className="flex flex-1 items-center justify-center"
        >
          <div className="gradient-border rounded-[34px] bg-slate-900/60 p-1">
            <div className="relative h-[360px] w-full max-w-[420px] overflow-hidden rounded-[28px] bg-slate-950/80 p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(248,250,252,0.08),transparent_60%)]" />
              <div className="relative flex h-full flex-col justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.4em] text-forge-ember">Forge Cell 07</p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">Isothermal Press Control</h2>
                  <p className="mt-2 text-sm text-slate-400">Maintaining alloy integrity at 2050°F with adaptive die heating.</p>
                </div>
                <Image
                  src="/images/forge-cell.svg"
                  alt="Illustration of Gaztec forging cell"
                  width={480}
                  height={360}
                  className="w-full rounded-3xl border border-white/10 bg-slate-950/60 object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
