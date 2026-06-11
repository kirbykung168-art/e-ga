'use client';

import { EVENTS } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import Reveal from './Reveal';

/**
 * EVENTS — Sukhumvit 23 / Closet venue for private dinners + workshops.
 * Surfacing this as its own card opens a high-margin revenue stream
 * that wasn't on the page before.
 */
export default function Events() {
  const { locale } = useLocale();
  return (
    <section id="events" className="relative bg-ink text-bone py-20 lg:py-28">
      <div className="mx-auto max-w-[1480px] px-5 lg:px-10">
        <Reveal>
          <article className="relative border border-vermillion/40 bg-soot overflow-hidden">
            {/* warm vignette so the card sings, not just floats */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'radial-gradient(60% 70% at 80% 30%, rgba(168,48,42,0.16) 0%, rgba(168,48,42,0) 70%), radial-gradient(50% 60% at 20% 90%, rgba(193,140,61,0.10) 0%, rgba(193,140,61,0) 70%)',
              }}
            />
            <div className="relative grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 p-8 lg:p-12">
              <div>
                <p className="eyebrow text-vermillion">{EVENTS.eyebrow[locale]}</p>
                <h2
                  className="display leading-[1.04] mt-5"
                  style={{ fontSize: 'clamp(28px, 3.8vw, 52px)' }}
                  lang={locale}
                >
                  {EVENTS.title[locale]}
                </h2>
                <p
                  className="font-sans text-[15px] leading-[1.85] text-bone/80 mt-6 max-w-[52ch]"
                  lang={locale}
                >
                  {EVENTS.body[locale]}
                </p>
              </div>

              <div className="flex flex-col">
                <p className="font-sans text-[10.5px] uppercase tracking-[0.32em] text-brass mb-5">
                  {locale === 'th' ? 'ขนาดงานที่จัดได้' : 'Capacity'}
                </p>
                <ul className="space-y-3 mb-8">
                  {EVENTS.capacityLines.map((c, i) => (
                    <li
                      key={i}
                      className="flex items-baseline gap-4 border-b border-[var(--rule)] pb-3"
                    >
                      <span className="display text-[18px] leading-snug text-bone" lang={locale}>
                        {c[locale]}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href={EVENTS.enquireUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="hover"
                  className="mt-auto inline-flex w-fit items-center gap-3 font-sans text-[11.5px] uppercase tracking-[0.32em] text-bone bg-vermillion px-7 py-4 hover:bg-bone hover:text-ink transition-colors duration-500"
                  lang={locale}
                >
                  {locale === 'th' ? 'สอบถาม / จัดงาน' : 'Enquire on LINE'} →
                </a>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
