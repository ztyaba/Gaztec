import { processTimeline } from '@/data/siteContent';

export default function ProcessTimeline() {
  return (
    <section className="relative isolate border-b border-white/10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,rgba(236,72,153,0.15),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="max-w-2xl space-y-4">
          <p className="section-eyebrow">Program cadence</p>
          <h2 className="section-title text-white">A proven launchpad process</h2>
          <p className="section-subtitle">
            Every engagement follows a transparent, milestone-driven approach to ensure technical readiness and schedule
            certainty. The same pod that engineers the concept sees it through qualification and production.
          </p>
        </div>
        <div className="mt-16 grid gap-12 lg:grid-cols-[0.4fr,1.6fr]">
          <div className="rounded-[32px] border border-white/10 bg-slate-900/70 p-8 shadow-panel">
            <p className="text-sm text-slate-300">
              Gain real-time visibility into progress with our secure operations portal, live telemetry, and proactive
              communication touchpoints every week.
            </p>
            <div className="mt-8 space-y-5 text-sm text-slate-300">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Tools</p>
                <p className="mt-1 text-base text-slate-100">Digital twins · SPC dashboards · Change control</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Visibility</p>
                <p className="mt-1 text-base text-slate-100">Forge cell telemetry · Quality checkpoints · Logistics</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute left-5 top-0 hidden h-full border-l border-dashed border-white/20 lg:block" />
            <div className="space-y-8">
              {processTimeline.map((stage, index) => (
                <div
                  key={stage.phase}
                  className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 p-8 backdrop-blur"
                >
                  <div className="absolute -left-12 top-1/2 hidden h-px w-10 -translate-y-1/2 bg-gradient-to-r from-transparent via-white/50 to-transparent lg:block" />
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:gap-8">
                    <div className="flex items-center gap-4 text-xs uppercase tracking-[0.45em] text-slate-400">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-rose-500/80 to-indigo-500/70 text-base font-semibold text-white">
                        {index + 1}
                      </span>
                      <span>{stage.phase}</span>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-white">{stage.title}</h3>
                      <p className="text-sm text-slate-300">{stage.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
