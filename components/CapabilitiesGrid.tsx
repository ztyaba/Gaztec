import { capabilities } from '@/data/siteContent';

export default function CapabilitiesGrid() {
  return (
    <section className="relative border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl space-y-4">
          <p className="section-title">Core capabilities at a glance</p>
          <p className="section-subtitle">
            Integrated forging, machining, and finishing reduces transfer risk while enabling rapid iteration across the product lifecycle.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {capabilities.map((capability) => (
            <div key={capability} className="rounded-[24px] border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-slate-300">{capability}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
