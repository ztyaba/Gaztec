import PageHeader from '@/components/PageHeader';
import CapabilitiesGrid from '@/components/CapabilitiesGrid';
import GalleryShowcase from '@/components/GalleryShowcase';
import ProcessTimeline from '@/components/ProcessTimeline';

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        eyebrow="About Gaztec"
        title="Forging excellence for over four decades"
        description="Gaztec Forge emerged from a collective of aerospace metallurgists and master forgers committed to creating a new benchmark for quality, speed, and transparency."
      />
      <section className="border-b border-white/5 bg-slate-950/30">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Our story</h2>
            <p className="text-base text-slate-300">
              Founded in 1979, Gaztec Forge began as a skunkworks project tackling impossible titanium components for experimental aircraft. Today we combine Industry 4.0 automation with artisanal expertise to deliver forged parts that withstand the most unforgiving environments.
            </p>
            <p className="text-base text-slate-300">
              With in-house die design, rapid prototyping, and fully traceable supply chains, we partner from concept through sustainment to keep your mission on schedule.
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Certifications</h2>
            <div className="grid gap-3 text-sm text-slate-300">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                AS9100D &amp; ISO 9001:2015 Quality Management
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Nadcap Accredited Heat Treatment &amp; NDT</div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">ITAR Registered Secure Facility</div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Cybersecurity Maturity Level 3 Compliant</div>
            </div>
          </div>
        </div>
      </section>
      <CapabilitiesGrid />
      <GalleryShowcase />
      <ProcessTimeline />
    </div>
  );
}
