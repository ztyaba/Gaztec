import PageHeader from '@/components/PageHeader';
import ServicesSection from '@/components/ServicesSection';
import ProcessTimeline from '@/components/ProcessTimeline';
import Testimonials from '@/components/Testimonials';

const serviceDetails = [
  {
    title: 'Closed-Die Forging Suites',
    description:
      'Five digitally linked press lines up to 11,000 tons with adaptive process control, billet heating analytics, and integrated die traceability.',
    metrics: ['100% billet tracking', 'Adaptive tonnage monitoring', 'Predictive maintenance insights']
  },
  {
    title: 'Precision Machining & Finishing',
    description:
      'Multi-axis machining, EDM, grinding, and polishing combined with robotic finishing cells for tight tolerance, production-ready delivery.',
    metrics: ['0.0005” machining tolerance', '24/7 unattended machining', 'Integrated CMM verification']
  },
  {
    title: 'Materials & Quality Lab',
    description:
      'Nadcap-certified lab with tensile, hardness, ultrasonic, and chemical analysis plus on-staff metallurgists providing root cause insights.',
    metrics: ['Rapid alloy characterization', 'Failure analysis & reporting', 'NIST-traceable calibration']
  }
];

export default function ServicesPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Capabilities"
        title="A vertically integrated forge for modern programs"
        description="Your components move from raw material to validated hardware without leaving our campus, accelerating readiness and reducing supply chain risk."
      />
      <section className="border-b border-white/5 bg-slate-950/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-8 md:grid-cols-3">
            {serviceDetails.map((service) => (
              <article key={service.title} className="card-surface h-full rounded-[28px] p-8">
                <h2 className="text-xl font-semibold text-white">{service.title}</h2>
                <p className="mt-4 text-sm text-slate-300">{service.description}</p>
                <ul className="mt-6 space-y-2 text-xs uppercase tracking-[0.3em] text-slate-500">
                  {service.metrics.map((metric) => (
                    <li key={metric} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[11px] text-slate-300">
                      {metric}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ServicesSection />
      <ProcessTimeline />
      <Testimonials />
    </div>
  );
}
