import type { Metadata } from 'next';
import './globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plus-jakarta'
});

export const metadata: Metadata = {
  title: {
    default: 'Gaztec Forge | Precision Metal Forging Experts',
    template: '%s | Gaztec Forge'
  },
  description:
    'Gaztec Forge delivers precision metal forging, machining, and finishing for aerospace, energy, and industrial innovators. Discover our capabilities and expertise.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${plusJakarta.variable} bg-forge-charcoal text-slate-100 min-h-screen font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
