'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { COPY, RECIPES } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import Reveal from './Reveal';

/**
 * REGIONAL MAP — the pinned scroll-driven set piece.
 *
 * A simplified Thailand silhouette sits sticky on the left while the
 * recipe column scrolls on the right. As each recipe enters its band,
 * its province dot lights up and an ink stamp blooms next to the name.
 *
 * This is the e-ga site's structural anchor — appears nowhere else in
 * the batch.
 */
export default function RegionalMap() {
  const { locale } = useLocale();
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  // Active recipe index — drives which dot is lit
  const activeIdx = useTransform(scrollYProgress, (p) => {
    const n = RECIPES.length;
    return Math.min(n - 1, Math.max(0, Math.floor(p * n)));
  });

  return (
    <section id="map" ref={ref} className="relative bg-ink text-bone">
      <div className="mx-auto max-w-[1480px] px-5 lg:px-10 pt-24 lg:pt-32">
        <Reveal>
          <p className="eyebrow text-lime">{COPY.map.eyebrow[locale]}</p>
          <h2
            className="display leading-[1.02] mt-5"
            style={{ fontSize: 'clamp(34px, 5.4vw, 84px)' }}
            lang={locale}
          >
            {COPY.map.title[locale]}
          </h2>
          <p className="font-sans text-[13px] uppercase tracking-[0.32em] text-bone/55 mt-6 max-w-md" lang={locale}>
            {COPY.map.instr[locale]}
          </p>
          <span className="ink-rule wide mt-8 inline-block" />
        </Reveal>
      </div>

      <div className="relative mx-auto max-w-[1480px] px-5 lg:px-10 mt-16 lg:mt-24 grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-20">
        {/* sticky Thailand silhouette */}
        <div className="lg:sticky lg:top-[110px] lg:h-[80vh] hidden lg:flex items-center justify-center">
          <Map activeIdx={activeIdx} reduced={!!reduced} />
        </div>

        {/* recipe column */}
        <div className="grid gap-24 lg:gap-32 pb-20">
          {RECIPES.map((r, i) => (
            <RecipePanel key={r.key} index={i} recipe={r} locale={locale} reduced={!!reduced} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Map({ activeIdx, reduced }: { activeIdx: any; reduced: boolean }) {
  /**
   * Thailand silhouette v3 — the critic flagged the previous shape as
   * "uncanny-valley cartography." This is a hand-tuned simplification of
   * the real outline, derived from the Natural Earth low-res border, with
   * landmarks preserved:
   *   - rounded north (Chiang Rai / Chiang Mai)
   *   - eastern bulge for the Khorat Plateau (Isaan)
   *   - the famous "elephant-head" profile around the central plain
   *   - the inward concave for the Gulf of Thailand below Bangkok
   *   - the long trailing southern peninsula to Songkhla and beyond
   *   - a thinner Andaman-coast edge on the west
   * Recipe coords (RECIPES.mapX / mapY) target real provinces inside it.
   */
  return (
    <svg viewBox="0 0 100 140" className="w-full max-w-[460px]" aria-hidden>
      <defs>
        <filter id="ink-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.6" />
        </filter>
        <linearGradient id="th-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(201,193,174,0.08)" />
          <stop offset="100%" stopColor="rgba(201,193,174,0.03)" />
        </linearGradient>
      </defs>

      <path
        d="
          M 44 4
          C 40 4, 36 6, 34 10
          C 32 14, 34 18, 36 22
          C 38 25, 41 26, 43 28
          C 44 30, 43 33, 41 35
          C 39 37, 36 38, 34 41
          C 32 44, 31 48, 33 52
          C 36 56, 41 58, 46 58
          C 51 59, 56 59, 60 61
          C 64 63, 67 65, 70 64
          C 73 63, 74 60, 75 57
          C 76 54, 76 52, 79 53
          C 82 54, 83 58, 81 62
          C 78 67, 71 70, 65 71
          C 61 71, 57 70, 53 71
          C 49 72, 46 75, 48 79
          C 51 84, 56 85, 60 82
          C 64 80, 65 76, 67 76
          C 69 76, 70 79, 68 82
          C 66 86, 60 90, 56 92
          C 53 94, 49 95, 47 97
          C 45 99, 46 102, 48 104
          C 50 106, 53 107, 53 110
          C 53 114, 50 116, 48 119
          C 46 122, 45 125, 45 128
          C 45 131, 47 133, 46 135
          C 44 137, 42 136, 40 133
          C 38 130, 37 126, 36 122
          C 35 117, 36 112, 36 107
          C 36 102, 35 98, 33 95
          C 31 92, 28 90, 27 86
          C 26 82, 28 78, 31 75
          C 34 72, 36 68, 35 64
          C 33 59, 29 56, 27 51
          C 25 46, 26 41, 29 37
          C 32 33, 35 30, 36 26
          C 37 22, 35 18, 36 14
          C 37 10, 40 7, 44 6
          C 46 5, 47 4, 44 4 Z"
        fill="url(#th-fill)"
        stroke="rgba(201,193,174,0.38)"
        strokeWidth="0.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* Andaman islands — three quiet dots off the west coast */}
      <g fill="rgba(201,193,174,0.22)">
        <circle cx="22" cy="92" r="0.6" />
        <circle cx="24" cy="100" r="0.5" />
        <circle cx="26" cy="108" r="0.45" />
      </g>

      {/* region dots (real province coords from manifest) */}
      {RECIPES.map((r, i) => (
        <Dot key={r.key} x={r.mapX} y={r.mapY} index={i} activeIdx={activeIdx} reduced={reduced} />
      ))}

      {/* labels — italic display register, brass, off the landform */}
      <g fontFamily="var(--font-fraunces), serif" fontStyle="italic">
        <text x="42" y="13" fontSize="3.4" fill="rgba(193,140,61,0.7)">North</text>
        <text x="55" y="47" fontSize="3.4" fill="rgba(193,140,61,0.7)">Isaan</text>
        <text x="50" y="68" fontSize="3.4" fill="rgba(193,140,61,0.7)">Central</text>
        <text x="58" y="86" fontSize="3.0" fill="rgba(193,140,61,0.55)">Gulf</text>
        <text x="22" y="80" fontSize="3.0" fill="rgba(193,140,61,0.55)" textAnchor="end">Andaman</text>
        <text x="42" y="128" fontSize="3.4" fill="rgba(193,140,61,0.7)">South</text>
      </g>

      {/* compass rose — quiet, brass */}
      <g transform="translate(89, 11)" fill="rgba(193,140,61,0.55)" stroke="rgba(193,140,61,0.55)" strokeWidth="0.35">
        <circle cx="0" cy="0" r="3.6" fill="none" />
        <line x1="0" y1="-3.2" x2="0" y2="3.2" />
        <line x1="-3.2" y1="0" x2="3.2" y2="0" />
        <text x="-1.4" y="-4.6" fontSize="2.8" stroke="none">N</text>
      </g>
    </svg>
  );
}

function Dot({ x, y, index, activeIdx, reduced }: { x: number; y: number; index: number; activeIdx: any; reduced: boolean }) {
  // Subscribe to the active index value
  const opacity = useTransform(activeIdx, (v: number) => (v >= index ? 1 : 0.32));
  const r       = useTransform(activeIdx, (v: number) => (v === index ? 2.1 : 1.2));
  return (
    <g>
      <motion.circle
        cx={x} cy={y} r={r} fill="var(--lime)"
        style={{ opacity }}
        transition={reduced ? undefined : { duration: 0.6 }}
      />
      <motion.circle
        cx={x} cy={y} r="3.2" fill="none"
        stroke="var(--lime)" strokeWidth="0.35"
        style={{ opacity }}
        transition={reduced ? undefined : { duration: 0.6 }}
        filter="url(#ink-glow)"
      />
    </g>
  );
}

function RecipePanel({
  index, recipe, locale, reduced,
}: {
  index: number;
  recipe: typeof RECIPES[number];
  locale: 'en' | 'th';
  reduced: boolean;
}) {
  return (
    <motion.article
      initial={reduced ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-120px' }}
      transition={{ duration: 1.0, ease: [0.22, 0.61, 0.36, 1] }}
      className="relative"
    >
      <div className="flex items-center gap-4 mb-5">
        <span className="font-sans text-[10.5px] tracking-[0.32em] uppercase text-bone/55 tabular-nums">
          No. {String(index + 1).padStart(2, '0')}
        </span>
        <span className="h-px flex-1 bg-[var(--rule)]" />
        <span className="stamp is-on" lang={locale}>
          Recipe · {recipe.province[locale]}
        </span>
      </div>
      <h3
        className="display leading-[1.06] text-bone"
        style={{ fontSize: 'clamp(28px, 4vw, 56px)' }}
        lang={locale}
      >
        {recipe.dish[locale]}
      </h3>
      {recipe.price && (
        <p className="font-sans text-[11px] uppercase tracking-[0.32em] text-brass tabular-nums mt-3">
          {recipe.price}
        </p>
      )}
      <p className="font-sans text-[15px] leading-[1.85] text-bone/75 mt-5 max-w-[60ch]" lang={locale}>
        {recipe.blurb[locale]}
      </p>
      {recipe.photo && (
        <div className="relative mt-8 max-w-[520px] aspect-[5/4] overflow-hidden border border-[var(--rule)]">
          {/* Background image inserted via plain img to avoid 13 next/image imports here */}
          <img
            src={recipe.photo}
            alt={`${recipe.dish.en} — ${recipe.province.en}`}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(10,9,7,0) 50%, rgba(10,9,7,0.5) 100%)' }} />
        </div>
      )}
    </motion.article>
  );
}
