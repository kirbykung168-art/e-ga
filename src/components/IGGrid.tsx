'use client';

import { BRAND, COPY, IG_GRID } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import Reveal from './Reveal';

/**
 * "Latest from the kitchen" — surfaces the verified press / e-ga photo
 * archive as an Instagram-style mosaic. Each tile links out to the live
 * @ega_bangkok grid. Owner can swap the curated set in content.ts as
 * the IG feed evolves.
 */
export default function IGGrid() {
  const { locale } = useLocale();
  return (
    <section className="relative bg-soot text-bone py-24 lg:py-32 border-y border-[var(--rule)]">
      <div className="mx-auto max-w-[1480px] px-5 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-6 lg:items-end justify-between mb-10 lg:mb-14">
          <Reveal>
            <p className="eyebrow text-vermillion">{COPY.ig.eyebrow[locale]}</p>
            <h2
              className="display leading-[1.02] mt-5"
              style={{ fontSize: 'clamp(30px, 4.4vw, 64px)' }}
              lang={locale}
            >
              {COPY.ig.title[locale]}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noreferrer"
              data-cursor="hover"
              className="font-sans text-[11.5px] uppercase tracking-[0.32em] text-bone hover:text-vermillion underline underline-offset-8 decoration-bone/30 transition-colors duration-500"
            >
              {COPY.ig.cta[locale]}
            </a>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 lg:gap-3.5">
          {IG_GRID.map((p, i) => (
            <Reveal key={i} delay={(i % 4) * 0.05}>
              <a
                href={p.postUrl}
                target="_blank"
                rel="noreferrer"
                data-cursor="hover"
                className="group relative block aspect-square overflow-hidden bg-ink border border-[var(--rule)]"
                aria-label={p.caption[locale]}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.photo}
                  alt={p.caption[locale]}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1800ms] ease-elegant group-hover:scale-[1.06]"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(10,9,7,0.05) 0%, rgba(10,9,7,0.65) 100%)',
                  }}
                />
                <p
                  className="absolute bottom-3 left-3 right-3 font-sans text-[10.5px] uppercase tracking-[0.22em] text-bone opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  lang={locale}
                >
                  {p.caption[locale]}
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
