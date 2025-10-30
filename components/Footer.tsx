import Link from 'next/link';
import { navigation, contactInfo } from '@/data/siteContent';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16 md:flex-row md:justify-between">
        <div className="space-y-4 max-w-md">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-forge-ember to-forge-gold text-lg font-bold text-slate-950 shadow-glow">
              GZ
            </span>
            <div>
              <p className="text-xl font-semibold">Gaztec Forge</p>
              <p className="text-sm text-slate-400">Forging high-integrity metal components since 1979.</p>
            </div>
          </div>
          <p className="text-sm text-slate-400">
            We partner with visionary engineering teams to craft forged solutions that withstand the harshest environments on and off the planet.
          </p>
          <div className="flex gap-4">
            {contactInfo.social.map((item) => (
              <Link key={item.name} href={item.href} className="text-sm text-slate-400 transition hover:text-forge-ember">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="grid flex-1 grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-400">Navigate</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="transition hover:text-forge-ember">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-400">Capabilities</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>Closed-die forging</li>
              <li>Machining & finishing</li>
              <li>Material science lab</li>
              <li>Program management</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-400">Headquarters</h3>
            <p className="mt-4 text-sm text-slate-300 whitespace-pre-line">
              {contactInfo.headquarters.address}
            </p>
            <p className="mt-2 text-sm text-slate-300">{contactInfo.headquarters.phone}</p>
            <Link href={`mailto:${contactInfo.headquarters.email}`} className="mt-2 block text-sm text-forge-ember">
              {contactInfo.headquarters.email}
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 bg-slate-950/80 py-6">
        <p className="mx-auto max-w-6xl px-6 text-xs uppercase tracking-[0.3em] text-slate-500">© {new Date().getFullYear()} Gaztec Forge. Engineered with precision.</p>
      </div>
    </footer>
  );
}
