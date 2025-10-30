import { industries } from '@/data/siteContent';

export default function IndustriesSection() {
  return (
    <section className="relative border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl space-y-4">
          <p className="section-title">Trusted across demanding industries</p>
          <p className="section-subtitle">
            We co-develop solutions with aerospace primes, energy disruptors, and industrial innovators to accelerate certification and scale.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {industries.map((industry) => (
            <div key={industry.name} className="card-surface h-full rounded-[28px] p-8">
              <p className="text-sm uppercase tracking-[0.4em] text-forge-ember">{industry.name}</p>
              <p className="mt-4 text-base text-slate-300">{industry.description}</p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <p className="mt-4 text-xs uppercase tracking-[0.3em] text-slate-500">Programs in development</p>
              <p className="mt-2 text-2xl font-semibold text-white">12 active engagements</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
