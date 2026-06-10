'use client';

import { BRAND, COPY, PRESS, REVIEWS } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import Reveal from './Reveal';

export default function PressWall() {
  const { locale } = useLocale();

  return (
    <section id="press" className="relative bg-soot text-bone py-28 lg:py-36 press-scan border-y border-[var(--rule)]">
      <div className="mx-auto max-w-[1480px] px-5 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-end mb-14">
          <Reveal>
            <p className="eyebrow text-lime">{COPY.press.eyebrow[locale]}</p>
            <h2
              className="display leading-[1.02] mt-5"
              style={{ fontSize: 'clamp(34px, 5vw, 76px)' }}
              lang={locale}
            >
              {COPY.press.title[locale]}
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="lg:ml-auto text-right">
              <p className="display text-[44px] leading-none text-lime tabular-nums">
                {BRAND.rating.score.toFixed(1)}<span className="text-bone/55 text-[18px] align-top ml-1">★</span>
              </p>
              <p className="font-sans text-[11px] uppercase tracking-[0.32em] text-bone/55 mt-2">
                {BRAND.rating.count.toLocaleString()} reviews · {BRAND.rating.source}
              </p>
            </div>
          </Reveal>
        </div>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 mb-16">
          {PRESS.map((p, i) => (
            <Reveal key={i} delay={(i % 3) * 0.07}>
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                data-cursor="hover"
                className="group block h-full bg-ink border border-[var(--rule)] p-6 lg:p-7 hover:border-lime transition-colors duration-500"
              >
                <p className="font-sans text-[10.5px] uppercase tracking-[0.32em] text-lime">{p.publication}</p>
                <p className="display italic text-[18px] leading-snug text-bone mt-4" lang={locale}>{p.headline[locale]}</p>
                <span className="font-sans text-[10.5px] tracking-[0.22em] uppercase text-bone/45 mt-5 inline-block">{p.date} →</span>
              </a>
            </Reveal>
          ))}
        </ul>

        {/* Review voices */}
        <div className="grid lg:grid-cols-3 gap-5 lg:gap-7">
          {REVIEWS.map((r, i) => (
            <Reveal key={i} delay={(i % 3) * 0.07}>
              <article className="border-l border-lime/60 pl-5">
                <p className="display italic text-[15px] leading-relaxed text-bone/85" lang={locale}>"{r.body[locale]}"</p>
                <p className="font-sans text-[10.5px] uppercase tracking-[0.32em] text-bone/55 mt-4">— {r.name}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
