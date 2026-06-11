'use client';

import { useState } from 'react';
import { BRANCHES, COPY, SISTER } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import Reveal from './Reveal';

/**
 * Branch switcher v3 — split-flap board.
 *
 * Audit fix: the previous flap cards had 60% empty middles and asked the
 * visitor to flip a blank front. Now each card front carries:
 *   - an atmospheric photograph as background (different per branch,
 *     drawn from the verified press archive)
 *   - a today's-special line in a small departure-board glyph row
 *   - a clear FLIP prompt at the bottom — the visitor flips into the
 *     detailed address/hours/phone face
 */

// Branch hero photographs — picked to differentiate the three rooms.
const BRANCH_PHOTO: Record<string, { src: string; alt: string }> = {
  'song-wat':     { src: '/images/lab-19.jpg',       alt: 'e-ga LAB · Song Wat — verified press photograph of the original' },
  'sathorn-12':   { src: '/images/raw-prawn.jpg',    alt: 'e-ga Sathorn 12 — raw prawn salad, signature lunch plate' },
  'sukhumvit-23': { src: '/images/river-prawn.jpg',  alt: 'e-ga Sukhumvit 23 — river prawn, inside It\'s Happened to be a Closet' },
};

const BRANCH_TODAY: Record<string, { en: string; th: string }> = {
  'song-wat':     { en: 'today · mee krob + river prawn',          th: 'วันนี้ · หมี่กรอบ + กุ้งแม่น้ำ' },
  'sathorn-12':   { en: 'today · khao tom kradook moo from 08:00',  th: 'วันนี้ · ข้าวต้มกระดูกหมู เริ่ม 08:00' },
  'sukhumvit-23': { en: 'today · pla muek nam dum manao',           th: 'วันนี้ · ปลาหมึกน้ำดำมะนาว' },
};

export default function Branches() {
  const { locale } = useLocale();
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="branches" className="relative bg-ink text-bone py-28 lg:py-36">
      <div className="mx-auto max-w-[1480px] px-5 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:items-end justify-between mb-14">
          <Reveal>
            <p className="eyebrow text-vermillion">{COPY.branches.eyebrow[locale]}</p>
            <h2
              className="display leading-[1.02] mt-5"
              style={{ fontSize: 'clamp(34px, 5vw, 76px)' }}
              lang={locale}
            >
              {COPY.branches.title[locale]}
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="font-sans text-[11.5px] uppercase tracking-[0.32em] text-bone/55 max-w-md">
              Tap a board · split-flap to flip · ทรงวาด · สาทร 12 · สุขุมวิท 23
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-5 lg:gap-7">
          {BRANCHES.map((b) => {
            const isOn = open === b.key;
            const photo = BRANCH_PHOTO[b.key];
            const today = BRANCH_TODAY[b.key];
            return (
              <Reveal key={b.key}>
                <button
                  type="button"
                  data-cursor="hover"
                  onClick={() => setOpen(isOn ? null : b.key)}
                  className={`flap relative w-full aspect-[5/6] block ${isOn ? 'is-on' : ''}`}
                  aria-expanded={isOn}
                >
                  <div className="flap-card absolute inset-0 w-full h-full">
                    {/* FRONT — photo background + departure-board line + name */}
                    <div className="flap-face absolute inset-0 overflow-hidden bg-crow border border-[var(--rule)]">
                      {/* atmospheric photo, very desaturated to keep type legible */}
                      {photo && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          className="absolute inset-0 w-full h-full object-cover opacity-55"
                          style={{ filter: 'grayscale(40%) contrast(0.95) brightness(0.78)' }}
                          loading="lazy"
                        />
                      )}
                      {/* warm vermillion vignette + bottom fade */}
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background:
                            'linear-gradient(180deg, rgba(10,9,7,0.15) 0%, rgba(10,9,7,0.5) 60%, rgba(10,9,7,0.92) 100%), radial-gradient(80% 60% at 35% 40%, rgba(168,48,42,0.18) 0%, rgba(168,48,42,0) 70%)',
                        }}
                      />
                      {/* content stack */}
                      <div className="relative h-full p-7 flex flex-col">
                        <p className="font-sans text-[10.5px] uppercase tracking-[0.32em] text-vermillion">
                          {b.label[locale]}
                        </p>
                        <h3
                          className="display leading-[1.02] text-bone mt-4 drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]"
                          style={{ fontSize: 'clamp(34px, 4.4vw, 56px)' }}
                          lang={locale}
                        >
                          {b.name[locale]}
                        </h3>
                        <p className="thai text-[13px] leading-relaxed text-bone/80 mt-4 max-w-[28ch] drop-shadow-[0_1px_8px_rgba(0,0,0,0.7)]">
                          {b.note[locale]}
                        </p>

                        {/* departure-board row */}
                        <div className="mt-auto">
                          <span className="block h-px bg-vermillion/45 mb-3" />
                          <p className="font-sans text-[10px] uppercase tracking-[0.28em] text-brass_lt tabular-nums">
                            {today?.[locale]}
                          </p>
                          <span className="mt-3 inline-block font-sans text-[10.5px] uppercase tracking-[0.32em] text-bone/55">
                            Flip the slat →
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* BACK — the actual address card */}
                    <div className="flap-face flap-back absolute inset-0 bg-bone text-ink p-7 flex flex-col gap-3">
                      <p className="font-sans text-[10px] uppercase tracking-[0.32em] text-ash">
                        {b.label[locale]}
                      </p>
                      <p className="display text-[22px] leading-tight" lang={locale}>{b.name[locale]}</p>
                      <p className="font-sans text-[12.5px] leading-relaxed">{b.address[locale]}</p>
                      <p className="font-sans text-[12px] uppercase tracking-[0.16em] mt-2">{b.hours[locale]}</p>
                      <a
                        href={`tel:${b.phoneTel}`}
                        className="font-sans text-[13.5px] underline underline-offset-4 decoration-ash mt-2"
                        data-cursor="hover"
                      >
                        {b.phoneDisplay}
                      </a>
                      <div className="mt-auto flex flex-col gap-2">
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(b.mapsQuery)}`}
                          target="_blank" rel="noreferrer"
                          className="font-sans text-[10.5px] uppercase tracking-[0.28em] text-ink hover:text-vermillion"
                          data-cursor="hover"
                        >Open in Maps →</a>
                      </div>
                    </div>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>

        {/* Sister restaurant strip */}
        <Reveal delay={0.2}>
          <div className="mt-12 border border-[var(--rule)] bg-soot grid sm:grid-cols-[1fr_auto] items-center gap-6 px-7 py-6">
            <div>
              <p className="font-sans text-[10.5px] uppercase tracking-[0.32em] text-vermillion">{COPY.branches.sisterLabel[locale]}</p>
              <h3 className="display text-[26px] leading-tight mt-2" lang={locale}>{SISTER.name[locale]}</h3>
              <p className="font-sans text-[13.5px] leading-relaxed text-bone/75 mt-2 max-w-prose" lang={locale}>
                {SISTER.description[locale]}
              </p>
            </div>
            <a
              href={`tel:${SISTER.phoneTel}`}
              data-cursor="hover"
              className="font-sans text-[13.5px] uppercase tracking-[0.22em] text-bone hover:text-brass_lt underline underline-offset-8 decoration-bone/30"
            >
              {SISTER.phoneDisplay}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
