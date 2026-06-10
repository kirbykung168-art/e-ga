import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // ink-black editorial palette, sampled from @ega_bangkok grid
        ink:    '#0A0907',
        soot:   '#141210',
        bone:   '#F2EBD8',
        rice:   '#F8F4E7',
        lime:   '#C9D24A', // lone accent — from the squid-ink dish lime
        crow:   '#1A1814',
        ash:    '#8B847A',
        chalk:  '#C9C1AE',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Fraunces', 'Georgia', 'serif'],
        sans:    ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        thai:    ['var(--font-noto-thai)', 'Noto Serif Thai', 'serif'],
      },
      letterSpacing: {
        eyebrow: '0.32em',
        eyebrowXL: '0.48em',
      },
      transitionTimingFunction: {
        elegant: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
        ink:     'cubic-bezier(0.7, 0, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
export default config;
