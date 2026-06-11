'use client';

import { BRAND, COPY, PRESS, REVIEWS } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import Reveal from './Reveal';

/**
 * Press wall v3 — restructured for hierarchy.
 *
 * Audit fix: the previous press grid weighted all five publications
 * equally. Time Out (global) read the same as Soimilk (small Thai blog).
 * Now:
 *   - one HERO quote at scale (Samurai Gourmet's "best Thai in Bangkok")
 *   - the rating block sits next to it as a paired credential
 *   - the other publications drop to a quiet typographic strip below
 *     (italic Fraunces, no boxes, with hover underlines)
 *   - reviewer voices below in a 3-up grid (unchanged)
 *
 * Rating source: now credited to Google Reviews (the actual source)
 * rather than to the Foodplacee aggregator. Fixed in content.ts.
 */
export default function PressWall() {
  const { locale } = useLocale();

  // Pick the strongest single quote — Samurai Gourmet's clean superlative.
  const hero = PRESS.find((p) => p.publication === 'Samurai Gourmet') ?? PRESS[0];
  const rest = PRESS.filter((p) => p !== hero);

  return (
    <section id="press" className="relative bg-soot text-bone py-28 lg:py-36 press-scan border-y border-[var(--rule)]">
      <div className="mx-auto max-w-[1480px] px-5 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-end mb-14">
          <Reveal>
            <p className="eyebrow text-vermillion">{COPY.press.eyebrow[locale]}</p>
            <h2
              className="display leading-[1.02] mt-5 max-w-[14ch]"
              style={{ fontSize: 'clamp(34px, 5vw, 72px)' }}
              lang={locale}
            >
              {COPY.press.title[locale]}
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="lg:ml-auto text-right">
              <p className="display text-[64px] leading-none text-brass_lt tabular-nums">
                {BRAND.rating.score.toFixed(1)}<span className="text-bone/45 text-[22px] align-top ml-1">★</span>
              </p>
              <p className="font-sans text-[10.5px] uppercase tracking-[0.32em] text-bone/55 mt-2">
                {BRAND.rating.count.toLocaleString()} reviews · {BRAND.rating.source}
              </p>
            </div>
          </Reveal>
        </div>

        {/* HERO quote — single most-prestigious press line at scale */}
        <Reveal>
          <figure className="border-l-2 border-vermillion pl-7 lg:pl-10 max-w-[1100px] mb-20 lg:mb-24">
            <blockquote
              className="display italic leading-[1.18] text-bone"
              style={{ fontSize: 'clamp(28px, 4vw, 56px)' }}
              lang={locale}
            >
              {hero.headline[locale]}
            </blockquote>
            <figcaption className="font-sans text-[11px] uppercase tracking-[0.42em] text-vermillion mt-6">
              — {hero.publication}{hero.date ? ` · ${hero.date}` : ''}
            </figcaption>
          </figure>
        </Reveal>

        {/* The other publications — typographic strip, no boxes */}
        <Reveal delay={0.1}>
          <p className="font-sans text-[10px] uppercase tracking-[0.42em] text-bone/45 mb-5">
            Also written about in
          </p>
          <ul className="flex flex-wrap gap-x-10 gap-y-3 items-baseline pb-6 border-b border-[var(--rule)] mb-16">
            {rest.map((p) => (
              <li key={p.publication}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="hover"
                  className="group inline-flex items-baseline gap-3"
                >
                  <span className="display italic text-[20px] lg:text-[24px] text-bone/80 group-hover:text-brass_lt transition-colors duration-500">
                    {p.publication}
                  </span>
                  {p.date && (
                    <span className="font-sans text-[10px] tracking-[0.32em] uppercase text-bone/40 group-hover:text-bone/60 transition-colors duration-500">
                      {p.date}
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Review voices */}
        <div className="grid lg:grid-cols-3 gap-5 lg:gap-7">
          {REVIEWS.map((r, i) => (
            <Reveal key={i} delay={(i % 3) * 0.07}>
              <article className="border-l border-vermillion/55 pl-5">
                <p className="display italic text-[15.5px] leading-relaxed text-bone/85" lang={locale}>"{r.body[locale]}"</p>
                <p className="font-sans text-[10.5px] uppercase tracking-[0.32em] text-bone/55 mt-4">— {r.name}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
