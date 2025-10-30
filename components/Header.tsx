'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navigation } from '@/data/siteContent';

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 }
};

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${
        scrolled ? 'border-b border-white/10 bg-slate-950/70 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-indigo-500 text-xl font-bold text-white shadow-glow">
            GZ
          </span>
          <div>
            <p className="text-lg font-semibold tracking-tight">Gaztec Forge</p>
            <p className="text-xs text-slate-400">Precision Forging Collective</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`transition hover:text-white ${pathname === item.href ? 'text-white' : 'text-slate-200'}`}
            >
              {item.name}
            </Link>
          ))}
          <Link href="/contact" className="button-primary text-sm">
            Start a Project
          </Link>
        </nav>
        <button
          className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 text-slate-100 md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span className="absolute block h-0.5 w-6 transform bg-white transition-all duration-300" style={{ top: mobileOpen ? '50%' : '40%', rotate: mobileOpen ? '45deg' : '0deg' }} />
          <span className={`absolute block h-0.5 w-6 bg-white transition ${mobileOpen ? 'opacity-0' : 'opacity-100'}`} style={{ top: '50%' }} />
          <span className="absolute block h-0.5 w-6 transform bg-white transition-all duration-300" style={{ top: mobileOpen ? '50%' : '60%', rotate: mobileOpen ? '-45deg' : '0deg' }} />
        </button>
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={navVariants}
            className="border-t border-white/10 bg-slate-950/95 px-6 pb-6 pt-2 md:hidden"
          >
            <div className="flex flex-col gap-4 text-base">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href} className="text-slate-200" data-active={pathname === item.href}>
                  {item.name}
                </Link>
              ))}
              <Link href="/contact" className="button-primary w-full justify-center">
                Start a Project
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
