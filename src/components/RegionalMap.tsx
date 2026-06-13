'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { COPY, RECIPES } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import Reveal from './Reveal';

export default function RegionalMap() {
  const { locale } = useLocale();
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  const activeIdx = useTransform(scrollYProgress, (p) => {
    const n = RECIPES.length;
    return Math.min(n - 1, Math.max(0, Math.floor(p * n)));
  });

  return (
    <section id="map" ref={ref} className="relative bg-ink text-bone">
      <div className="mx-auto max-w-[1480px] px-5 lg:px-10 pt-24 lg:pt-32">
        <Reveal>
          <p className="eyebrow text-vermillion">{COPY.map.eyebrow[locale]}</p>
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
        <div className="lg:sticky lg:top-[110px] lg:h-[80vh] hidden lg:flex items-center justify-center">
          <Map activeIdx={activeIdx} reduced={!!reduced} />
        </div>

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

      {/* Thailand silhouette v4 — elephant-head + trunk profile */}
      <path
        d="
          M 42 4
          C 39 4, 36 6, 34 9
          C 32 13, 33 17, 36 20
          C 39 23, 42 24, 44 26
          C 45 28, 45 30, 44 32
          C 41 34, 38 35, 36 38
          C 33 42, 32 47, 34 52
          C 36 55, 40 56, 44 56
          C 48 56, 52 55, 55 56
          C 60 57, 64 58, 68 59
          C 72 60, 76 60, 79 58
          C 81 55, 81 51, 80 49
          C 79 47, 77 46, 78 44
          C 80 43, 83 44, 84 47
          C 84 51, 82 56, 79 60
          C 75 65, 70 67, 65 67
          C 60 67, 56 65, 52 65
          C 48 65, 45 67, 43 70
          C 41 73, 41 76, 43 79
          C 46 83, 51 85, 55 84
          C 58 83, 60 80, 62 80
          C 64 80, 65 82, 64 84
          C 62 89, 58 93, 53 95
          C 49 97, 45 98, 43 101
          C 41 104, 43 108, 45 110
          C 47 112, 49 114, 48 117
          C 47 121, 44 124, 43 128
          C 42 131, 42 134, 41 136
          C 39 137, 37 135, 36 132
          C 35 128, 36 124, 37 121
          C 38 117, 39 113, 38 109
          C 37 105, 35 102, 33 99
          C 31 96, 29 92, 28 88
          C 28 84, 30 81, 32 78
          C 35 74, 36 70, 35 66
          C 33 61, 30 58, 28 53
          C 26 48, 26 43, 28 38
          C 30 33, 33 30, 34 26
          C 35 22, 33 18, 33 14
          C 34 10, 37 7, 41 6
          C 43 5, 44 4, 42 4 Z"
        fill="url(#th-fill)"
        stroke="rgba(201,193,174,0.40)"
        strokeWidth="0.55"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      <g fill="rgba(201,193,174,0.22)">
        <circle cx="22" cy="92" r="0.6" />
        <circle cx="24" cy="100" r="0.5" />
        <circle cx="26" cy="108" r="0.45" />
      </g>

      {RECIPES.map((r, i) => (
        <Dot key={r.key} x={r.mapX} y={r.mapY} index={i} activeIdx={activeIdx} reduced={reduced} />
      ))}

      {/* The five culinary regions of Thailand named in the Lufthansa
          "In My Hood: Song Wat" piece (Note Pongsuang, Jan 2026):
          North · Northeast (Isaan) · Central · East · South. Previous
          build labelled "Gulf" and "Andaman" as regions — they're seas,
          not culinary regions. Fixed. */}
      <g fontFamily="var(--font-fraunces), serif" fontStyle="italic">
        <text x="44" y="14" fontSize="3.4" fill="rgba(193,140,61,0.7)">North</text>
        <text x="58" y="40" fontSize="3.4" fill="rgba(193,140,61,0.7)">Isaan</text>
        <text x="46" y="62" fontSize="3.4" fill="rgba(193,140,61,0.7)">Central</text>
        <text x="64" y="72" fontSize="3.2" fill="rgba(193,140,61,0.7)">East</text>
        <text x="40" y="118" fontSize="3.4" fill="rgba(193,140,61,0.7)">South</text>
      </g>

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
  const opacity = useTransform(activeIdx, (v: number) => (v >= index ? 1 : 0.32));
  const r       = useTransform(activeIdx, (v: number) => (v === index ? 2.1 : 1.2));
  return (
    <g>
      <motion.circle
        cx={x} cy={y} r={r} fill="var(--vermillion)"
        style={{ opacity }}
        transition={reduced ? undefined : { duration: 0.6 }}
      />
      <motion.circle
        cx={x} cy={y} r="3.2" fill="none"
        stroke="var(--vermillion)" strokeWidth="0.35"
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
          {/* eslint-disable-next-line @next/next/no-img-element */}
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
