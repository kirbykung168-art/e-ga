'use client';

import { COPY, SMALL_MENU } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import Reveal from './Reveal';

/**
 * BENTO MENU — the signature 2× tile is the squid-ink dish.
 *
 *   row 1: [ signature dish 2× wide ]  [ signature ] [ signature ]
 *   row 2: a 3-column "from the kitchen" list
 *   row 3: dessert + drinks side by side
 */
export default function Menu() {
  const { locale } = useLocale();

  return (
    <section id="menu" className="relative bg-soot text-bone py-28 lg:py-36 border-y border-[var(--rule)]">
      <div className="mx-auto max-w-[1480px] px-5 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 items-end mb-14">
          <Reveal>
            <p className="eyebrow text-lime">{COPY.menu.eyebrow[locale]}</p>
            <h2
              className="display leading-[1.02] mt-5"
              style={{ fontSize: 'clamp(34px, 5vw, 76px)' }}
              lang={locale}
            >
              {COPY.menu.title[locale]}
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="font-sans text-[15px] leading-[1.85] text-bone/75 max-w-md lg:ml-auto" lang={locale}>
              {COPY.menu.intro[locale]}
            </p>
          </Reveal>
        </div>

        {/* signatures row — 2x squid-ink dish */}
        <Reveal>
          <p className="eyebrow text-bone/55 border-b border-[var(--rule)] pb-4 mb-7" lang={locale}>
            {COPY.menu.signatureLabel[locale]}
          </p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 lg:gap-7 mb-16">
          {/* Bento hero — Pla Muek (squid ink) 2× tile */}
          <Reveal className="md:col-span-2 md:row-span-1">
            <article className="relative h-full min-h-[260px] bg-ink border border-[var(--rule)] p-7 lg:p-9 overflow-hidden">
              {/* an actual SVG ink splatter background */}
              <svg viewBox="0 0 600 400" className="absolute inset-0 w-full h-full opacity-50 pointer-events-none" aria-hidden>
                <defs>
                  <filter id="splat">
                    <feTurbulence type="fractalNoise" baseFrequency="0.025" numOctaves="3" />
                    <feDisplacementMap in="SourceGraphic" scale="50" />
                  </filter>
                </defs>
                <g filter="url(#splat)">
                  <circle cx="160" cy="200" r="110" fill="rgba(10,9,7,1)" />
                  <circle cx="380" cy="240" r="80"  fill="rgba(10,9,7,1)" />
                  <circle cx="500" cy="160" r="60"  fill="rgba(10,9,7,1)" />
                </g>
              </svg>
              <div className="relative">
                <p className="font-sans text-[10.5px] uppercase tracking-[0.32em] text-lime">Signature 2×</p>
                <h3 className="display leading-[1.06] text-bone mt-3" style={{ fontSize: 'clamp(28px, 3.6vw, 48px)' }} lang={locale}>
                  {SMALL_MENU.signatures[1].name[locale]}
                </h3>
                <p className="font-sans text-[13.5px] leading-relaxed text-bone/70 mt-4 max-w-[44ch]" lang={locale}>
                  {SMALL_MENU.signatures[1].desc[locale]}
                </p>
              </div>
            </article>
          </Reveal>
          {[SMALL_MENU.signatures[0], SMALL_MENU.signatures[2]].map((d, i) => (
            <Reveal key={i} delay={(i + 1) * 0.08}>
              <article className="h-full min-h-[260px] bg-ink border border-[var(--rule)] p-6 lg:p-7">
                <p className="font-sans text-[10.5px] uppercase tracking-[0.32em] text-lime tabular-nums">
                  {d.price ?? ''}
                </p>
                <h3 className="display leading-[1.08] text-bone mt-3" style={{ fontSize: 'clamp(22px, 2.3vw, 30px)' }} lang={locale}>
                  {d.name[locale]}
                </h3>
                <p className="font-sans text-[13px] leading-relaxed text-bone/65 mt-3" lang={locale}>
                  {d.desc[locale]}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* from the kitchen — 3 column */}
        <Reveal>
          <p className="eyebrow text-bone/55 border-b border-[var(--rule)] pb-4 mb-7" lang={locale}>
            {COPY.menu.plateLabel[locale]}
          </p>
        </Reveal>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-5 mb-20">
          {SMALL_MENU.larger.map((d, i) => (
            <li key={i} className="flex items-baseline justify-between gap-4 border-b border-[var(--rule)] pb-3">
              <span className="display text-[18px] leading-snug text-bone" lang={locale}>{d.name[locale]}</span>
              {('price' in d && d.price) ? (
                <span className="font-sans text-[12px] tracking-wider text-lime tabular-nums whitespace-nowrap">{d.price}</span>
              ) : (
                <span className="font-sans text-[11px] tracking-[0.22em] uppercase text-bone/45">ask</span>
              )}
            </li>
          ))}
        </ul>

        {/* desserts + drinks */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <p className="eyebrow text-bone/55 border-b border-[var(--rule)] pb-4 mb-7" lang={locale}>
              {COPY.menu.dessertLabel[locale]}
            </p>
            <ul className="grid gap-4">
              {SMALL_MENU.desserts.map((d, i) => (
                <li key={i} className="flex items-baseline justify-between gap-4">
                  <span className="display italic text-[18px] leading-snug text-bone" lang={locale}>{d.name[locale]}</span>
                  {('price' in d && d.price) && <span className="font-sans text-[12px] text-lime tabular-nums">{d.price}</span>}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow text-bone/55 border-b border-[var(--rule)] pb-4 mb-7" lang={locale}>
              {COPY.menu.drinkLabel[locale]}
            </p>
            <ul className="grid gap-4">
              {SMALL_MENU.drinks.map((d, i) => (
                <li key={i} className="flex items-baseline justify-between gap-4">
                  <span className="display text-[18px] leading-snug text-bone" lang={locale}>{d.name[locale]}</span>
                  {('price' in d && d.price) && <span className="font-sans text-[12px] text-lime tabular-nums">{d.price}</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
