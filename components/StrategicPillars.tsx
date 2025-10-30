import { strategicPillars } from '@/data/siteContent';

export default function StrategicPillars() {
  return (
    <section className="relative isolate border-b border-white/10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(236,72,153,0.16),transparent_55%)]" />
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[0.65fr,1.35fr] lg:items-start">
          <div className="space-y-6">
            <p className="section-eyebrow">How we partner</p>
            <h2 className="section-title text-white">Engineering pillars for every engagement</h2>
            <p className="section-subtitle">
              Our multidisciplinary pods combine design intelligence, precision operations, and long-term stewardship so every
              program launches with confidence and scales with momentum.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-[18px] top-0 hidden h-full w-px bg-gradient-to-b from-white/30 via-white/10 to-transparent lg:block" />
            <div className="grid gap-8 lg:grid-cols-3">
              {strategicPillars.map((pillar) => (
                <article
                  key={pillar.title}
                  className="relative flex h-full flex-col rounded-3xl border border-white/10 bg-slate-950/65 p-8 backdrop-blur"
                >
                  <div className="flex items-center gap-4">
                    <span className="hidden h-3 w-3 rounded-full bg-gradient-to-br from-rose-500 to-indigo-500 lg:block" />
                    <h3 className="text-lg font-semibold text-white">{pillar.title}</h3>
                  </div>
                  <p className="mt-4 text-sm text-slate-300">{pillar.description}</p>
                  <ul className="mt-6 space-y-3 text-sm text-slate-400">
                    {pillar.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 flex-none rounded-full bg-white/70" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
    <section className="relative border-b border-white/5">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.12),transparent_55%)]" />
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-3xl space-y-4">
          <p className="section-eyebrow text-xs font-semibold uppercase tracking-[0.4em] text-forge-ember">
            How we partner
          </p>
          <h2 className="section-title text-white">Engineering pillars for every engagement</h2>
          <p className="section-subtitle">
            Our multidisciplinary pods combine design intelligence, precision operations, and long-term stewardship to deliver
            hardware that performs on the first launch and every launch after.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {strategicPillars.map((pillar) => (
            <article key={pillar.title} className="rounded-[28px] border border-white/10 bg-slate-950/70 p-8 backdrop-blur">
              <h3 className="text-lg font-semibold text-white">{pillar.title}</h3>
              <p className="mt-4 text-sm text-slate-300">{pillar.description}</p>
              <ul className="mt-6 space-y-3 text-sm text-slate-400">
                {pillar.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 flex-none rounded-full bg-forge-ember/80" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
