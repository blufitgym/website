import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#3b7dbf',
          blueDark: '#2a5f96',
          blueLight: '#5a9fd4',
          blueGlow: 'rgba(59,125,191,0.15)',
          pink: '#d44474',
          black: '#080c10',
          dark: '#0d1117',
          dark2: '#111827',
          card: '#161e2d',
          card2: '#1a2538',
          muted: '#6b7280',
          light: '#9ca3af',
          offwhite: '#e8edf5',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      letterSpacing: {
        display: '0.02em',
        wide: '0.12em',
        widest: '0.22em',
      },
      boxShadow: {
        glow: '0 4px 24px rgba(37,211,102,0.4)',
      },
    },
  },
  plugins: [],
};

export default config;
