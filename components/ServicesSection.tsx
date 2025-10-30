import { services } from '@/data/siteContent';

export default function ServicesSection() {
  return (
    <section className="relative border-t border-white/5" id="capabilities">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.12),transparent_55%)]" />
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col gap-6 pb-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-4">
            <p className="section-title">Full-spectrum forging services</p>
            <p className="section-subtitle">
              From billets to flight-ready assemblies, we blend advanced automation with the craft of master forgers.
            </p>
          </div>
          <p className="max-w-sm text-sm text-slate-400">
            Each program is paired with a dedicated customer integration pod who shepherds the work from design review to delivery.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.name} className="card-surface h-full rounded-[30px] p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-2xl">
                {service.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{service.name}</h3>
              <p className="mt-4 text-sm text-slate-300">{service.description}</p>
              <ul className="mt-6 space-y-3 text-sm text-slate-400">
                {service.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 flex-none rounded-full bg-forge-ember" />
                    <span>{highlight}</span>
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
