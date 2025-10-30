import { industries } from '@/data/siteContent';

export default function IndustriesSection() {
  return (
    <section className="relative border-b border-t border-white/5">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.1),transparent_60%)]" />
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[1.4fr,0.8fr]">
          <div>
            <div className="max-w-2xl space-y-4">
              <p className="section-eyebrow text-xs font-semibold uppercase tracking-[0.4em] text-forge-ember">
                Industry alignment
              </p>
              <h2 className="section-title text-white">Trusted across demanding industries</h2>
              <p className="section-subtitle">
                We co-develop solutions with aerospace primes, energy disruptors, and industrial innovators to accelerate
                certification and scale while maintaining full traceability.
              </p>
            </div>
            <div className="mt-12 space-y-6">
              {industries.map((industry) => (
                <article key={industry.name} className="flex flex-col gap-6 rounded-[28px] border border-white/10 bg-slate-950/70 p-6 backdrop-blur md:flex-row md:items-center">
                  <div className="flex-1 space-y-3">
                    <p className="text-xs uppercase tracking-[0.4em] text-forge-ember">{industry.name}</p>
                    <p className="text-sm text-slate-300">{industry.description}</p>
                  </div>
                  <div className="flex items-center gap-6 text-sm text-slate-400">
                    <div>
                      <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Programs</p>
                      <p className="mt-1 text-xl font-semibold text-white">12 active</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Certification path</p>
                      <p className="mt-1 text-base text-slate-300">AS9100, Nadcap</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <aside className="h-full rounded-[32px] border border-white/10 bg-slate-950/70 p-8 backdrop-blur">
            <p className="text-sm uppercase tracking-[0.4em] text-forge-ember">Program visibility</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">A shared control room for your mission</h3>
            <p className="mt-4 text-sm text-slate-300">
              Access secure dashboards that stream production telemetry, milestone status, and quality documentation for every
              work order.
            </p>
            <div className="mt-6 space-y-5 text-sm text-slate-400">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Live updates</p>
                <p className="mt-1 text-base text-slate-200">Furnace cycle, press load, machining status</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Quality gates</p>
                <p className="mt-1 text-base text-slate-200">CMM, NDT, certifications, shipping paperwork</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Collaboration</p>
                <p className="mt-1 text-base text-slate-200">Secure comments, approvals, and change control</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
