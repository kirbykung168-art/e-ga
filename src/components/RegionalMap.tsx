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
  // viewBox 0..100 wide, 0..140 tall — a roughly Thailand-shaped silhouette
  return (
    <svg viewBox="0 0 100 140" className="w-full max-w-[420px]" aria-hidden>
      <defs>
        <filter id="ink-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.4" />
        </filter>
      </defs>
      {/* simplified Thailand outline — abstract, art-directed */}
      <path
        d="M48 6 C 60 8, 64 18, 60 28 C 58 36, 54 38, 56 46 C 60 54, 70 56, 70 62 C 70 68, 56 70, 54 76 C 52 84, 60 90, 58 96 C 56 102, 50 102, 46 108 C 42 116, 44 124, 38 132 C 32 138, 26 132, 30 126 C 38 116, 38 108, 36 100 C 32 92, 28 88, 30 80 C 32 70, 40 64, 38 56 C 34 46, 32 38, 36 28 C 38 18, 40 8, 48 6 Z"
        fill="rgba(201,193,174,0.04)"
        stroke="rgba(201,193,174,0.32)"
        strokeWidth="0.4"
      />

      {/* region dots */}
      {RECIPES.map((r, i) => (
        <Dot key={r.key} x={r.mapX} y={r.mapY} index={i} activeIdx={activeIdx} reduced={reduced} />
      ))}

      {/* compass mark */}
      <g transform="translate(86, 14)" fill="rgba(201,193,174,0.45)" stroke="rgba(201,193,174,0.45)" strokeWidth="0.4">
        <circle cx="0" cy="0" r="4" fill="none" />
        <text x="-1.6" y="-5.2" fontSize="3.2" stroke="none" fill="rgba(201,193,174,0.65)">N</text>
        <line x1="0" y1="-3" x2="0" y2="3" />
        <line x1="-3" y1="0" x2="3" y2="0" />
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
        {recipe.price && (
          <span className="display-italic text-lime text-[0.55em] ml-3 align-baseline">{recipe.price}</span>
        )}
      </h3>
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
