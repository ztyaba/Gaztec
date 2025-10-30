import { processTimeline } from '@/data/siteContent';

export default function ProcessTimeline() {
  return (
    <section className="relative border-t border-white/5">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,rgba(249,115,22,0.12),transparent_55%)]" />
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-4">
            <p className="section-title">A proven launchpad process</p>
            <p className="section-subtitle">
              Every engagement follows a transparent, milestone-driven approach to ensure technical readiness and schedule certainty.
            </p>
          </div>
          <p className="max-w-sm text-sm text-slate-400">
            Gain real-time visibility into progress with our secure customer operations portal and dedicated program manager.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {processTimeline.map((stage, index) => (
            <div key={stage.phase} className="relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/80 p-8">
              <div className="absolute inset-0 opacity-40" style={{ background: 'radial-gradient(circle at top, rgba(249, 115, 22, 0.18), transparent 65%)' }} />
              <div className="relative">
                <p className="text-xs uppercase tracking-[0.5em] text-slate-400">Phase {index + 1}</p>
                <h3 className="mt-4 text-xl font-semibold text-white">{stage.title}</h3>
                <p className="mt-4 text-sm text-slate-300">{stage.description}</p>
              </div>
              <div className="absolute bottom-8 right-8 text-5xl font-semibold text-forge-ember/30">{stage.phase}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
