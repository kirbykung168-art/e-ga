'use client';

import { APINKRABBIT, COPY } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import Reveal from './Reveal';

/**
 * A Pink Rabbit Cake Shop — the verified bakery sister inside e-ga LAB
 * (Song Wat) and as a standalone (A Pink Rabbit + Bob, Sukhumvit 23).
 * Surfacing this as its own section closes a real revenue stream that
 * was missing from the page entirely.
 */
export default function APinkRabbit() {
  const { locale } = useLocale();
  return (
    <section
      id="bakery"
      className="relative bg-soot text-bone py-28 lg:py-36 border-y border-[var(--rule)]"
    >
      <div className="mx-auto max-w-[1480px] px-5 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start mb-14">
          <Reveal>
            <p className="eyebrow text-vermillion">{COPY.bakery.eyebrow[locale]}</p>
            <h2
              className="display leading-[1.02] mt-5"
              style={{ fontSize: 'clamp(34px, 5vw, 76px)' }}
              lang={locale}
            >
              {COPY.bakery.title[locale]}
            </h2>
            <p
              className="font-sans text-[13.5px] uppercase tracking-[0.28em] text-brass mt-6"
              lang={locale}
            >
              {APINKRABBIT.tagline[locale]}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p
              className="font-sans text-[15.5px] leading-[1.9] text-bone/80 max-w-[58ch]"
              lang={locale}
            >
              {APINKRABBIT.body[locale]}
            </p>
            <a
              href={APINKRABBIT.preOrderUrl}
              target="_blank"
              rel="noreferrer"
              data-cursor="hover"
              className="inline-flex items-center gap-3 mt-8 font-sans text-[11.5px] uppercase tracking-[0.32em] text-ink bg-bone px-7 py-4 hover:bg-vermillion hover:text-bone transition-colors duration-500"
              lang={locale}
            >
              {locale === 'th' ? 'จองเค้กผ่าน LINE' : 'Pre-order on LINE'} →
            </a>
          </Reveal>
        </div>

        {/* Two locations + the cake list */}
        <div className="grid lg:grid-cols-[1fr_1fr_1.2fr] gap-7 lg:gap-12">
          {APINKRABBIT.locations.map((loc, i) => (
            <Reveal key={loc.key} delay={i * 0.08}>
              <article className="border border-[var(--rule)] bg-ink p-7 h-full flex flex-col">
                <p className="font-sans text-[10.5px] uppercase tracking-[0.32em] text-vermillion">
                  {locale === 'th' ? 'สาขา' : 'Location'}
                </p>
                <h3 className="display text-[22px] leading-snug mt-3" lang={locale}>{loc.name[locale]}</h3>
                <p className="font-sans text-[13px] leading-relaxed text-bone/75 mt-3" lang={locale}>
                  {loc.address[locale]}
                </p>
                <p className="font-sans text-[11.5px] uppercase tracking-[0.18em] text-brass mt-4 tabular-nums">
                  {loc.hours[locale]}
                </p>
                {'facebookUrl' in loc && loc.facebookUrl && (
                  <a
                    href={loc.facebookUrl}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="hover"
                    className="mt-auto inline-flex font-sans text-[10.5px] uppercase tracking-[0.28em] text-bone/75 hover:text-vermillion transition-colors duration-500"
                  >
                    Facebook →
                  </a>
                )}
              </article>
            </Reveal>
          ))}
          <Reveal delay={0.2}>
            <article className="border border-vermillion/45 bg-ink p-7 h-full">
              <p className="font-sans text-[10.5px] uppercase tracking-[0.32em] text-vermillion">
                {locale === 'th' ? 'เค้กของวันนี้' : 'Cakes that sell out'}
              </p>
              <ul className="mt-5 space-y-3.5">
                {APINKRABBIT.cakes.map((c, i) => (
                  <li key={i} className="display italic text-[18px] leading-snug text-bone" lang={locale}>
                    {c[locale]}
                  </li>
                ))}
              </ul>
              <p className="font-sans text-[11.5px] leading-relaxed text-bone/55 mt-6" lang={locale}>
                {locale === 'th'
                  ? '* คนต่อแถวก่อนถึงโต๊ะที่อีกามักเป็นเพราะของหวานเหล่านี้ จองล่วงหน้าได้ผ่าน LINE'
                  : '* The queue at e-ga is for these. Reserve via LINE before your table.'}
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
