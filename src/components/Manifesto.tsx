'use client';

import { BRAND, COPY } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import Reveal from './Reveal';

/**
 * Manifesto + Founder card.
 *
 * Founder portrait is rendered as an editorial single-line illustration
 * (SVG) rather than a photograph. Reason: Siriwan Tharananithikul has
 * publicly declined magazine photography (per the Read The Cloud feature
 * about her, Jan 2025 — readthecloud.co/siriwan-tharananithikul). A
 * fabricated photoreal portrait of a real, privacy-conscious person
 * would be a violation of her stated preference. The linework approach
 * communicates "founder" without claiming likeness.
 */
export default function Manifesto() {
  const { locale } = useLocale();
  return (
    <section id="story" className="relative bg-soot text-bone py-28 lg:py-40 border-y border-[var(--rule)]">
      <div className="mx-auto max-w-[1180px] px-5 lg:px-10">
        <Reveal>
          <p className="eyebrow text-vermillion">{COPY.manifesto.eyebrow[locale]}</p>
          <h2
            className="display leading-[1.02] mt-6"
            style={{ fontSize: 'clamp(34px, 5.4vw, 84px)' }}
            lang={locale}
          >
            {COPY.manifesto.title[locale]}
          </h2>
          <span className="ink-rule wide mt-10 inline-block" />
        </Reveal>
        <Reveal delay={0.15}>
          <p
            className="font-sans text-[16px] leading-[1.95] text-bone/85 max-w-[64ch] mt-10"
            lang={locale}
          >
            <span className="display-italic text-vermillion text-[60px] leading-none float-left mr-3 -mt-2">{COPY.manifesto.body[locale].charAt(0)}</span>
            {COPY.manifesto.body[locale].slice(1)}
          </p>
        </Reveal>

        {/* Founder card — editorial portrait + credentials */}
        <Reveal delay={0.3}>
          <figure className="mt-16 lg:mt-20 grid grid-cols-[auto_1fr] items-start gap-8 lg:gap-12 max-w-[68ch]">
            <FounderPortrait />
            <figcaption className="pt-3">
              <p className="font-sans text-[10.5px] uppercase tracking-[0.32em] text-brass">
                The founder
              </p>
              <p
                className="display leading-[1.15] text-bone mt-2"
                style={{ fontSize: 'clamp(22px, 2.4vw, 30px)' }}
                lang={locale}
              >
                {BRAND.founder}
              </p>
              <p
                className="font-sans text-[12px] uppercase tracking-[0.22em] text-bone/55 mt-2"
                lang={locale}
              >
                {COPY.manifesto.founderRole[locale]}
              </p>
              <p
                className="display-italic text-bone/80 mt-5 leading-[1.55]"
                style={{ fontSize: 'clamp(15px, 1.4vw, 18px)' }}
                lang={locale}
              >
                &ldquo;{COPY.manifesto.founderEthos[locale]}&rdquo;
              </p>
              <p className="font-sans text-[10px] uppercase tracking-[0.28em] text-bone/35 mt-5">
                Illustration · not a likeness
              </p>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

/**
 * Editorial single-line portrait — abstract designer figure with a
 * thread/clothing-rack motif and a vermillion accent dot. Linework only,
 * never photoreal. Designed to read at small sizes; SVG so it scales
 * without raster artifacts.
 */
function FounderPortrait() {
  return (
    <svg
      width="148"
      height="180"
      viewBox="0 0 148 180"
      aria-label="Editorial illustration of the founder — not a likeness"
      className="shrink-0"
    >
      <defs>
        <linearGradient id="fp-paper" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="rgba(242,235,216,0.06)" />
          <stop offset="100%" stopColor="rgba(242,235,216,0.02)" />
        </linearGradient>
        <filter id="fp-grain" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" />
          <feColorMatrix values="0 0 0 0 0.95   0 0 0 0 0.92   0 0 0 0 0.85   0 0 0 0.04 0" />
        </filter>
      </defs>

      {/* Paper card frame */}
      <rect x="2" y="2" width="144" height="176" rx="2" fill="url(#fp-paper)" stroke="var(--brass)" strokeOpacity="0.45" strokeWidth="0.6" />
      <rect x="2" y="2" width="144" height="176" rx="2" fill="transparent" filter="url(#fp-grain)" />

      {/* Top-right vermillion ledger dot */}
      <circle cx="132" cy="14" r="3" fill="var(--vermillion)" />

      {/* Eyebrow caption */}
      <text x="10" y="18" fontFamily="var(--font-inter), Inter, sans-serif" fontSize="5" letterSpacing="0.32em" fill="var(--brass)">
        PLATE I
      </text>

      {/* Portrait — single-line head + shoulders, abstract */}
      <g
        fill="none"
        stroke="var(--bone)"
        strokeOpacity="0.78"
        strokeWidth="0.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Hair / crown sweep */}
        <path d="M 48 56
                 C 48 38, 60 28, 74 28
                 C 90 28, 102 40, 102 58
                 C 102 60, 102 62, 101 64" />
        {/* Face oval — soft Picasso single-line */}
        <path d="M 60 70
                 C 58 80, 60 92, 68 100
                 C 76 106, 88 104, 92 96
                 C 96 88, 96 78, 94 70" />
        {/* Chignon at nape */}
        <path d="M 100 60 C 108 60, 112 66, 108 74 C 104 80, 96 78, 95 72" />
        {/* Brow + closed eye (gestural) */}
        <path d="M 70 78 C 73 76, 78 76, 80 78" />
        <path d="M 85 78 C 88 76, 92 76, 93 78" />
        {/* Lip — single curve, vermillion */}
        <path d="M 76 92 C 80 94, 86 94, 89 92" stroke="var(--vermillion)" strokeOpacity="0.9" strokeWidth="0.9" />
        {/* Neckline */}
        <path d="M 72 104 L 70 116 C 66 122, 56 124, 48 124" />
        <path d="M 88 104 L 90 116 C 94 122, 104 124, 112 124" />
        {/* Shoulder seam — designer's mark */}
        <path d="M 48 124 L 48 158" />
        <path d="M 112 124 L 112 158" />
        <path d="M 48 138 L 112 138" />
      </g>

      {/* Thread spool — bottom-left, brass */}
      <g stroke="var(--brass)" strokeWidth="0.7" fill="none" strokeOpacity="0.7">
        <ellipse cx="22" cy="158" rx="6" ry="2" />
        <line x1="16" y1="158" x2="16" y2="166" />
        <line x1="28" y1="158" x2="28" y2="166" />
        <ellipse cx="22" cy="166" rx="6" ry="2" />
        <path d="M 22 158 C 24 162, 24 164, 22 166" />
      </g>
      {/* Thread crossing the page — brass to vermillion */}
      <path d="M 28 162 C 50 160, 90 168, 128 162"
            fill="none" stroke="var(--vermillion)" strokeOpacity="0.55" strokeWidth="0.5" strokeDasharray="1.5 2" />

      {/* Bottom ledger */}
      <line x1="10" y1="172" x2="138" y2="172" stroke="var(--brass)" strokeOpacity="0.5" strokeWidth="0.4" />
      <text x="74" y="166" textAnchor="middle" fontFamily="var(--font-fraunces), Georgia, serif" fontStyle="italic" fontSize="6" fill="var(--bone)" fillOpacity="0.75">
        Siriwan
      </text>
    </svg>
  );
}
