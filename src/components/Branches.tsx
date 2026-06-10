'use client';

import { useState } from 'react';
import { BRANCHES, COPY, SISTER } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import Reveal from './Reveal';

/**
 * Branch switcher — split-flap board.
 *
 * Three branch cards sit on a black slat board. Hover/click a card → it
 * "flips" with a real CSS 3D rotateX, revealing the branch's full
 * address + hours + phone. The three flap independently.
 *
 * Plus a sister-restaurant strip for e-ga Luv Seafood beneath.
 */
export default function Branches() {
  const { locale } = useLocale();
  const [open, setOpen] = useState<string | null>(BRANCHES[0].key);

  return (
    <section id="branches" className="relative bg-ink text-bone py-28 lg:py-36">
      <div className="mx-auto max-w-[1480px] px-5 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:items-end justify-between mb-14">
          <Reveal>
            <p className="eyebrow text-lime">{COPY.branches.eyebrow[locale]}</p>
            <h2
              className="display leading-[1.02] mt-5"
              style={{ fontSize: 'clamp(34px, 5vw, 76px)' }}
              lang={locale}
            >
              {COPY.branches.title[locale]}
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="font-sans text-[12.5px] uppercase tracking-[0.32em] text-bone/55 max-w-md">
              Tap a board · split-flap to flip · ทรงวาด · สาทร 12 · สุขุมวิท 23
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-5 lg:gap-7">
          {BRANCHES.map((b) => {
            const isOn = open === b.key;
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
                    {/* FRONT */}
                    <div className="flap-face absolute inset-0 bg-crow border border-[var(--rule)] p-7 flex flex-col">
                      <p className="font-sans text-[10.5px] uppercase tracking-[0.32em] text-lime">
                        {b.label[locale]}
                      </p>
                      <h3 className="display leading-[1.02] text-bone mt-4" style={{ fontSize: 'clamp(34px, 4.4vw, 60px)' }} lang={locale}>
                        {b.name[locale]}
                      </h3>
                      <p className="thai text-[14px] leading-relaxed text-bone/70 mt-4">{b.note[locale]}</p>
                      <span className="mt-auto font-sans text-[10.5px] uppercase tracking-[0.32em] text-bone/55">
                        Flip the slat →
                      </span>
                    </div>
                    {/* BACK */}
                    <div className="flap-face flap-back absolute inset-0 bg-bone text-ink p-7 flex flex-col gap-3">
                      <p className="font-sans text-[10px] uppercase tracking-[0.32em] text-ash">
                        {b.label[locale]}
                      </p>
                      <p className="display text-[20px] leading-tight" lang={locale}>{b.name[locale]}</p>
                      <p className="font-sans text-[12.5px] leading-relaxed">{b.address[locale]}</p>
                      <p className="font-sans text-[12px] uppercase tracking-[0.16em] mt-2">{b.hours[locale]}</p>
                      <a
                        href={`tel:${b.phoneTel}`}
                        className="font-sans text-[13px] underline underline-offset-4 decoration-ash mt-2"
                        data-cursor="hover"
                      >
                        {b.phoneDisplay}
                      </a>
                      <div className="mt-auto flex flex-col gap-2">
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(b.mapsQuery)}`}
                          target="_blank" rel="noreferrer"
                          className="font-sans text-[10.5px] uppercase tracking-[0.28em] text-ink hover:text-lime"
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
              <p className="font-sans text-[10.5px] uppercase tracking-[0.32em] text-lime">{COPY.branches.sisterLabel[locale]}</p>
              <h3 className="display text-[26px] leading-tight mt-2" lang={locale}>{SISTER.name[locale]}</h3>
              <p className="font-sans text-[13.5px] leading-relaxed text-bone/75 mt-2 max-w-prose" lang={locale}>
                {SISTER.description[locale]}
              </p>
            </div>
            <a
              href={`tel:${SISTER.phoneTel}`}
              data-cursor="hover"
              className="font-sans text-[13px] uppercase tracking-[0.22em] text-bone hover:text-lime underline underline-offset-8 decoration-bone/40"
            >
              {SISTER.phoneDisplay}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
