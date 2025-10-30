import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './data/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        forge: {
          charcoal: '#101418',
          steel: '#1F2933',
          ember: '#F97316',
          gold: '#FACC15',
          frost: '#38BDF8'
        }
      },
      fontFamily: {
        sans: ['var(--font-plus-jakarta)', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 35px rgba(236, 72, 153, 0.35)',
        panel: '0 30px 80px rgba(15, 23, 42, 0.35)'
      }
    }
  },
  plugins: []
};

export default config;
