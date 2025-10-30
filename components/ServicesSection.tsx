import { operationsMetrics, services } from '@/data/siteContent';

export default function ServicesSection() {
  return (
    <section className="relative isolate border-y border-white/10" id="capabilities">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.18),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[0.85fr,1.15fr] lg:items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="section-eyebrow">Integrated capability stack</p>
              <h2 className="section-title text-white">Full-spectrum forging services</h2>
              <p className="section-subtitle">
                From billets to flight-ready assemblies, we blend advanced automation with artisanal technique to accelerate
                mission-critical programs and deliver unwavering consistency.
              </p>
            </div>
            <div className="rounded-[32px] border border-white/10 bg-slate-900/70 p-10 shadow-panel">
              <p className="text-sm text-slate-300">
                Each program is paired with a dedicated integration pod combining metallurgy, operations, and quality leads to
                navigate every milestone with clarity and velocity.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {operationsMetrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-2xl font-semibold text-white sm:text-3xl">{metric.value}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.35em] text-slate-400">{metric.label}</p>
                    <p className="mt-2 text-xs text-slate-400">{metric.description}</p>
    <section className="relative border-b border-t border-white/5" id="capabilities">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.12),transparent_55%)]" />
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr,1.9fr] lg:items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="section-eyebrow text-xs font-semibold uppercase tracking-[0.4em] text-forge-ember">
                Integrated capability stack
              </p>
              <h2 className="section-title text-white">Full-spectrum forging services</h2>
              <p className="section-subtitle">
                From billets to flight-ready assemblies, we blend advanced automation with the craft of master forgers to bring
                mission-critical programs online faster.
              </p>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-slate-950/70 p-8">
              <p className="text-sm text-slate-300">
                Each program is paired with a dedicated customer integration pod that shepherds the work from design review to
                delivery while keeping stakeholders aligned.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {operationsMetrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-white/5 bg-white/5 p-4">
                    <p className="text-2xl font-semibold text-white">{metric.value}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.3em] text-slate-400">{metric.label}</p>
                    <p className="mt-2 text-xs text-slate-500">{metric.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.name}
                className="group h-full rounded-3xl border border-white/10 bg-slate-950/60 p-8 backdrop-blur transition hover:border-white/20"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500/70 to-indigo-500/60 text-2xl text-white shadow-glow">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article key={service.name} className="group h-full rounded-[30px] border border-white/10 bg-slate-950/60 p-8 backdrop-blur">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-forge-ember/70 to-forge-gold/50 text-2xl text-slate-950 shadow-glow">
                  {service.icon}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{service.name}</h3>
                <p className="mt-4 text-sm text-slate-300">{service.description}</p>
                <ul className="mt-6 space-y-3 text-sm text-slate-400">
                  {service.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 flex-none rounded-full bg-white/70" />
                    <li key={highlight} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 flex-none rounded-full bg-forge-ember/80" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
