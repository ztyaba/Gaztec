import Link from 'next/link';
import { contactInfo } from '@/data/siteContent';

export default function ContactSection() {
  return (
    <section className="relative border-t border-white/5">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="rounded-[36px] border border-white/10 bg-slate-950/70 p-10">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <p className="section-title">Connect with our program team</p>
              <p className="text-base text-slate-300">
                Share your CAD, material requirements, or production goals and our engineers will follow up within one business day.
              </p>
              <div className="space-y-4 text-sm text-slate-300">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-forge-ember">Headquarters</p>
                  <p className="mt-1 whitespace-pre-line">{contactInfo.headquarters.address}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-forge-ember">Phone</p>
                  <p className="mt-1">{contactInfo.headquarters.phone}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-forge-ember">Email</p>
                  <Link href={`mailto:${contactInfo.headquarters.email}`} className="mt-1 inline-block text-forge-ember">
                    {contactInfo.headquarters.email}
                  </Link>
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-forge-ember focus:outline-none"
                    placeholder="Avery Santos"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-forge-ember focus:outline-none"
                    placeholder="StratLift Aerospace"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-forge-ember focus:outline-none"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  Project Overview
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-forge-ember focus:outline-none"
                  placeholder="Share timeline, materials, or key requirements"
                />
              </div>
              <button type="submit" className="button-primary w-full justify-center">
                Submit Inquiry
              </button>
              <p className="text-xs text-slate-500">
                By submitting this form you agree to receive communications from Gaztec Forge. We respect your inbox.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
