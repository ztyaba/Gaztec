import { strategicPillars } from '@/data/siteContent';

export default function StrategicPillars() {
  return (
    <section className="relative border-b border-white/5">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.12),transparent_55%)]" />
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-3xl space-y-4">
          <p className="section-eyebrow text-xs font-semibold uppercase tracking-[0.4em] text-forge-ember">How we partner</p>
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
