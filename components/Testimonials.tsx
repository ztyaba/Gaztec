import { testimonials } from '@/data/siteContent';

export default function Testimonials() {
  return (
    <section className="relative border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-4">
            <p className="section-title">What partners say</p>
            <p className="section-subtitle">
              Our customers count on us to de-risk critical components and keep programs on schedule.
            </p>
          </div>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.name} className="card-surface h-full rounded-[28px] p-8">
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
