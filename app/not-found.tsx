import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950/80 px-6 text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-forge-ember">
        404
      </span>
      <h1 className="mt-6 text-4xl font-semibold text-white">Page not found</h1>
      <p className="mt-4 max-w-lg text-base text-slate-300">
        The page you are looking for may have moved. Explore our services and programs to discover how Gaztec Forge can support your mission.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link href="/" className="button-primary">
          Return Home
        </Link>
        <Link href="/contact" className="button-outline">
          Contact Team
        </Link>
      </div>
    </div>
  );
}
