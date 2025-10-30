import Image from 'next/image';
import { gallery } from '@/data/siteContent';

export default function GalleryShowcase() {
  return (
    <section className="relative border-t border-white/5">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08),transparent_60%)]" />
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-4">
            <p className="section-title">Inside the forge</p>
            <p className="section-subtitle">
              Explore the digitally connected production floor that keeps complex programs moving forward.
            </p>
          </div>
          <p className="max-w-sm text-sm text-slate-400">
            Secure remote monitoring gives you live access to press status, quality checkpoints, and shipment milestones.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {gallery.map((item) => (
            <figure key={item.title} className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5">
              <Image src={item.image} alt={item.title} width={520} height={360} className="h-48 w-full object-cover" />
              <figcaption className="p-6">
                <p className="text-base font-semibold text-white">{item.title}</p>
                <p className="mt-2 text-sm text-slate-300">{item.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
