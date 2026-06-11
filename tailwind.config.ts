import type { Config } from 'tailwindcss';

/**
 * Palette REWRITE (audit fix v3):
 *   The previous lime accent was reading "code-editor IDE", not "Bangkok
 *   crow on Song Wat". Replaced with a heritage vermillion (Thai chili
 *   red) as the primary accent + a warm brass for prices and metal
 *   highlights. The ink/bone/soot ground remains.
 *
 *   - vermillion #A8302A — saturated Thai red, warehouse signage, dried
 *     chili, lacquer. Carries weight without screaming.
 *   - brass     #C18C3D — for prices, italic display moments, warm metal.
 *   - oxblood   #5E1A18 — deep tertiary; hairlines, stamp ink.
 *
 *   Note: lime kept in the named scale only so any legacy reference
 *   compiles, but it's never used in production styles.
 */
const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink:       '#0A0907',
        soot:      '#141210',
        crow:      '#1A1814',
        bone:      '#F2EBD8',
        rice:      '#F8F4E7',
        // primary accent — Thai vermillion
        vermillion:'#A8302A',
        ember:     '#C75A2A',
        oxblood:   '#5E1A18',
        // warm metal
        brass:     '#C18C3D',
        brass_lt:  '#D9AC65',
        // legacy alias (compile safety)
        lime:      '#A8302A',
        ash:       '#8B847A',
        chalk:     '#C9C1AE',
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
