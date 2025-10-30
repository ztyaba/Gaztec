import { industries } from '@/data/siteContent';

export default function IndustriesSection() {
  return (
    <section className="relative isolate border-b border-white/10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.18),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.35fr,0.75fr] lg:items-start">
          <div>
            <div className="max-w-2xl space-y-4">
              <p className="section-eyebrow">Industry alignment</p>
              <h2 className="section-title text-white">Trusted across demanding industries</h2>
              <p className="section-subtitle">
                We co-develop solutions with aerospace primes, energy disruptors, and industrial innovators to accelerate
                certification, deliver perfect traceability, and keep programs flying.
              </p>
            </div>
            <div className="mt-12 space-y-6">
              {industries.map((industry) => (
                <article
                  key={industry.name}
                  className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-slate-950/70 p-8 backdrop-blur md:flex-row md:items-center"
                >
                  <div className="flex-1 space-y-3">
                    <p className="text-xs uppercase tracking-[0.4em] text-slate-400">{industry.name}</p>
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
          <aside className="h-full rounded-[36px] border border-white/10 bg-gradient-to-br from-white/5 via-white/10 to-transparent p-10 shadow-panel">
            <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Program visibility</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">A shared control room for your mission</h3>
            <p className="mt-5 text-sm text-slate-300">
              Access secure dashboards that stream production telemetry, milestone status, and quality documentation for every
              work order in real time.
            </p>
            <div className="mt-6 space-y-5 text-sm text-slate-300">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Live updates</p>
                <p className="mt-1 text-base text-slate-100">Furnace cycle, press load, machining status</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Quality gates</p>
                <p className="mt-1 text-base text-slate-100">CMM, NDT, certifications, shipping paperwork</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Collaboration</p>
                <p className="mt-1 text-base text-slate-100">Secure comments, approvals, and change control</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
