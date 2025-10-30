import { processTimeline } from '@/data/siteContent';

export default function ProcessTimeline() {
  return (
    <section className="relative border-b border-t border-white/5">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,rgba(249,115,22,0.12),transparent_55%)]" />
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl space-y-4">
          <p className="section-eyebrow text-xs font-semibold uppercase tracking-[0.4em] text-forge-ember">Program cadence</p>
          <h2 className="section-title text-white">A proven launchpad process</h2>
          <p className="section-subtitle">
            Every engagement follows a transparent, milestone-driven approach to ensure technical readiness and schedule
            certainty. The same pod that engineers the concept sees it through qualification and production.
          </p>
        </div>
        <div className="mt-14 grid gap-10 lg:grid-cols-[0.35fr,1.65fr]">
          <div className="rounded-[28px] border border-white/10 bg-slate-950/70 p-6 backdrop-blur">
            <p className="text-sm text-slate-300">
              Gain real-time visibility into progress with our secure operations portal, live telemetry, and proactive
              communication touchpoints every week.
            </p>
            <div className="mt-6 space-y-4 text-sm text-slate-400">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Tools</p>
                <p className="mt-1 text-base text-slate-200">Digital twins · SPC dashboards · Change control</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Visibility</p>
                <p className="mt-1 text-base text-slate-200">Forge cell telemetry · Quality checkpoints · Logistics</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute left-4 top-0 hidden h-full border-l border-dashed border-white/20 lg:block" />
            <div className="space-y-8">
              {processTimeline.map((stage, index) => (
                <div key={stage.phase} className="relative rounded-[26px] border border-white/10 bg-slate-950/70 p-6 backdrop-blur">
                  <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:gap-6">
                    <div className="flex items-center gap-4 text-xs uppercase tracking-[0.4em] text-slate-400">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-base font-semibold text-white">
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
