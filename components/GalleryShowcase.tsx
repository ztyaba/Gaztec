import Image from 'next/image';
import { gallery } from '@/data/siteContent';

export default function GalleryShowcase() {
  return (
    <section className="relative isolate border-b border-white/10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.12),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl space-y-4">
            <p className="section-eyebrow">Inside the forge</p>
    <section className="relative border-b border-t border-white/5">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08),transparent_60%)]" />
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl space-y-4">
            <p className="section-eyebrow text-xs font-semibold uppercase tracking-[0.4em] text-forge-ember">Inside the forge</p>
            <h2 className="section-title text-white">Digitally connected production floor</h2>
            <p className="section-subtitle">
              Explore the automated cells, metrology labs, and thermal processing suites that keep complex programs moving
              forward.
            </p>
          </div>
          <p className="max-w-sm text-sm text-slate-300">
          <p className="max-w-sm text-sm text-slate-400">
            Secure remote monitoring gives you live access to press status, quality checkpoints, and shipment milestones so
            there are no surprises between builds.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {gallery.map((item) => (
            <figure
              key={item.title}
              className="flex h-full flex-col overflow-hidden rounded-[30px] border border-white/10 bg-slate-950/65 backdrop-blur"
            >
              <Image src={item.image} alt={item.title} width={520} height={360} className="h-48 w-full object-cover" />
              <figcaption className="flex flex-1 flex-col gap-3 p-6">
                <p className="text-sm uppercase tracking-[0.4em] text-slate-400">{item.title}</p>
                <p className="text-sm text-slate-300">{item.description}</p>
                <div className="mt-auto h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Telemetry feed</p>
                <p className="text-sm text-slate-200">Live metrics: temperature · cycle time · quality gates</p>
            <figure key={item.title} className="flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/70 backdrop-blur">
              <Image src={item.image} alt={item.title} width={520} height={360} className="h-48 w-full object-cover" />
              <figcaption className="flex flex-1 flex-col gap-3 p-6">
                <p className="text-sm uppercase tracking-[0.4em] text-forge-ember">{item.title}</p>
                <p className="text-sm text-slate-300">{item.description}</p>
                <div className="mt-auto h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Telemetry feed</p>
                <p className="text-sm text-slate-300">Live metrics: temperature · cycle time · quality gates</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
