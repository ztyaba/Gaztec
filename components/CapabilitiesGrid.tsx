import { capabilities } from '@/data/siteContent';

export default function CapabilitiesGrid() {
  return (
    <section className="relative border-b border-t border-white/5">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.12),transparent_55%)]" />
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
          <div className="rounded-[32px] border border-white/10 bg-slate-950/70 p-8 backdrop-blur">
            <p className="section-eyebrow text-xs font-semibold uppercase tracking-[0.4em] text-forge-ember">Integrated floor</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Core capabilities at a glance</h2>
            <p className="mt-4 text-sm text-slate-300">
              Integrated forging, machining, finishing, and inspection eliminate inter-plant transfers while unlocking rapid
              iteration across the product lifecycle.
            </p>
            <div className="mt-6 rounded-[26px] border border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Quality ecosystem</p>
              <p className="mt-2 text-lg text-slate-200">AS9100D · Nadcap · ISO 9001:2015 · ITAR</p>
              <p className="mt-3 text-xs text-slate-500">
                Digital traceability from billet pedigree through final inspection packaged for audits and flight approvals.
              </p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map((capability) => (
              <div key={capability} className="rounded-[24px] border border-white/10 bg-slate-950/60 p-6 backdrop-blur">
                <p className="text-sm text-slate-200">{capability}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
