import { testimonials } from '@/data/siteContent';

export default function Testimonials() {
  return (
    <section className="relative isolate border-b border-white/10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,rgba(79,70,229,0.18),transparent_65%)]" />
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <p className="section-eyebrow">Partner voices</p>
    <section className="relative border-b border-t border-white/5">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,rgba(249,115,22,0.12),transparent_65%)]" />
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-3xl space-y-4">
          <p className="section-eyebrow text-xs font-semibold uppercase tracking-[0.4em] text-forge-ember">Partner voices</p>
          <h2 className="section-title text-white">What our collaborators say</h2>
          <p className="section-subtitle">
            Our customers count on us to de-risk critical components and keep programs on schedule with unmatched transparency.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.name}
              className="flex h-full flex-col justify-between rounded-[32px] border border-white/10 bg-slate-950/65 p-8 backdrop-blur"
            >
            <blockquote key={testimonial.name} className="flex h-full flex-col justify-between rounded-[30px] border border-white/10 bg-slate-950/70 p-8 backdrop-blur">
              <p className="text-lg text-slate-100">“{testimonial.quote}”</p>
              <footer className="mt-6 text-sm text-slate-400">
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p>{testimonial.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
