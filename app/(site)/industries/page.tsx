import PageHeader from '@/components/PageHeader';
import IndustriesSection from '@/components/IndustriesSection';
import GalleryShowcase from '@/components/GalleryShowcase';

const caseStudies = [
  {
    industry: 'Aerospace & Defense',
    summary:
      'Forged titanium blisks for hypersonic propulsion validated with ultrasonic inspection and fully traceable supply chain.',
    outcome: 'Achieved 12% weight reduction while meeting AS9100D requirements.'
  },
  {
    industry: 'Energy & Power',
    summary: 'Nickel superalloy turbine discs forged and machined to support grid-scale energy storage.',
    outcome: 'Improved thermal cycling tolerance by 18% over legacy vendor.'
  },
  {
    industry: 'Advanced Industrial',
    summary: 'Precision gear segments supporting autonomous heavy-lift robotics with hardened surfaces.',
    outcome: 'Reduced lead time from 24 to 10 weeks with in-line machining and finishing.'
  }
];

export default function IndustriesPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Industries"
        title="Building critical hardware for ambitious industries"
        description="We partner with engineering leaders pushing the envelope in flight, energy, and autonomy to deliver forged components that perform when it matters."
      />
      <section className="border-b border-white/5 bg-slate-950/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-8 md:grid-cols-3">
            {caseStudies.map((study) => (
              <article key={study.industry} className="card-surface h-full rounded-[28px] p-8">
                <p className="text-xs uppercase tracking-[0.4em] text-forge-ember">{study.industry}</p>
                <p className="mt-4 text-sm text-slate-300">{study.summary}</p>
                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-slate-300">
                  <span className="text-forge-gold">Result:</span> {study.outcome}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <IndustriesSection />
      <GalleryShowcase />
    </div>
  );
}
