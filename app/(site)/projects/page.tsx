import PageHeader from '@/components/PageHeader';
import GalleryShowcase from '@/components/GalleryShowcase';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';

const milestones = [
  {
    title: 'Hypersonic flight hardware',
    description: 'Delivered forged and machined titanium structural elements with full digital thread documentation.',
    metric: '6-month concept-to-flight qualification'
  },
  {
    title: 'Fusion energy prototype',
    description: 'Produced nickel alloy vacuum chamber rings with zero-defect radiographic inspection results.',
    metric: '0 nonconformances across 480 inspections'
  },
  {
    title: 'Autonomous heavy-lift robotics',
    description: 'Manufactured hardened gear systems enabling precise motion control in harsh field conditions.',
    metric: 'Reduced field failure rate by 42%'
  }
];

const qualityHighlights = [
  'AS9100D certified quality management system',
  'Advanced NDT including ultrasonic, magnetic particle, and radiographic testing',
  'Automated statistical process control with live dashboards',
  'Customer collaboration portal with secure document exchange'
];

export default function ProjectsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Projects"
        title="Programs that demand precision and reliability"
        description="We deliver flight-critical, energy-intensive, and mission-ready hardware with repeatable quality and responsive communication."
      />
      <section className="border-b border-white/5 bg-slate-950/40" id="quality">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[3fr_2fr]">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Program milestones</h2>
            <div className="space-y-6">
              {milestones.map((milestone) => (
                <article key={milestone.title} className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                  <h3 className="text-lg font-semibold text-white">{milestone.title}</h3>
                  <p className="mt-3 text-sm text-slate-300">{milestone.description}</p>
                  <p className="mt-4 text-xs uppercase tracking-[0.3em] text-forge-ember">{milestone.metric}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Quality playbook</h2>
            <ul className="space-y-4 text-sm text-slate-300">
              {qualityHighlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-none rounded-full bg-forge-gold" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <div className="rounded-3xl border border-forge-ember/40 bg-forge-ember/10 p-6 text-sm text-slate-200">
              <p className="text-xs uppercase tracking-[0.4em] text-forge-ember">Digital traceability</p>
              <p className="mt-3">Our customers access heat history, inspection data, and shipment milestones through the Gaztec Nexus portal.</p>
            </div>
          </div>
        </div>
      </section>
      <GalleryShowcase />
      <Testimonials />
      <CallToAction />
    </div>
  );
}
