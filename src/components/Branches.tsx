'use client';

import { useState } from 'react';
import { BRANCHES, COPY, SISTER } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import Reveal from './Reveal';

const BRANCH_PHOTO: Record<string, { src: string; alt: string }> = {
  'song-wat':     { src: '/images/lab-19.jpg',         alt: 'e-ga LAB · Song Wat — the full house table, brass curry pot, eight plates. Verified Samurai Gourmet press shoot.' },
  'sathorn-12':   { src: '/images/mee-krob.jpg',       alt: 'e-ga / Sathorn 12 — the signature mee krob plated with prawn, lime, herbs. Verified press shoot.' },
  'sukhumvit-23': { src: '/images/pineapple-chili.jpg', alt: 'e-ga / Sukhumvit 23 — house pineapple with chilli-salt-sugar dip on banana leaf. Verified press shoot.' },
};

const BRANCH_TODAY: Record<string, { en: string; th: string }> = {
  'song-wat':     { en: 'today · mee krob + raw prawn',             th: 'วันนี้ · หมี่กรอบ + กุ้งแช่น้ำปลา' },
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
            // Precise embed using lat/lng — pin lands exactly on the room.
            const mapsSrc = `https://www.google.com/maps?q=${b.lat},${b.lng}&z=17&output=embed`;
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
                    <div className="flap-face absolute inset-0 overflow-hidden bg-crow border border-[var(--rule)]">
                      {photo && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          className="absolute inset-0 w-full h-full object-cover opacity-55"
                          style={{ filter: 'grayscale(10%) contrast(0.98) brightness(0.88)' }}
                          loading="lazy"
                        />
                      )}
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background:
                            'linear-gradient(180deg, rgba(10,9,7,0.15) 0%, rgba(10,9,7,0.5) 60%, rgba(10,9,7,0.92) 100%), radial-gradient(80% 60% at 35% 40%, rgba(168,48,42,0.18) 0%, rgba(168,48,42,0) 70%)',
                        }}
                      />
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

                    {/* BACK — precise Maps embed (lat/lng) + tel + delivery row */}
                    <div className="flap-face flap-back absolute inset-0 bg-bone text-ink flex flex-col">
                      {/* Maps iframe takes the top 45% so the room is recognisable */}
                      <div className="relative w-full" style={{ height: '38%' }}>
                        <iframe
                          title={`${b.name.en} map`}
                          src={mapsSrc}
                          className="absolute inset-0 w-full h-full grayscale-[0.4] contrast-[1.05]"
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          allowFullScreen
                        />
                      </div>
                      <div className="p-6 flex flex-col gap-2 flex-1">
                        <p className="font-sans text-[10px] uppercase tracking-[0.32em] text-ash">
                          {b.label[locale]}
                        </p>
                        <p className="display text-[20px] leading-tight" lang={locale}>{b.name[locale]}</p>
                        <p className="font-sans text-[11.5px] leading-relaxed">{b.address[locale]}</p>
                        <p className="font-sans text-[11px] uppercase tracking-[0.16em] mt-1 text-vermillion tabular-nums">
                          {b.hours[locale]}
                        </p>
                        <a
                          href={`tel:${b.phoneTel}`}
                          className="font-sans text-[13px] underline underline-offset-4 decoration-ash mt-1"
                          data-cursor="hover"
                        >
                          {b.phoneDisplay}
                        </a>

                        {/* Delivery row */}
                        <div className="flex items-center gap-3 mt-auto pt-3 border-t border-ash/30">
                          <span className="font-sans text-[9px] uppercase tracking-[0.32em] text-ash">Deliver</span>
                          <a
                            href={b.delivery.grabFood}
                            target="_blank" rel="noreferrer"
                            data-cursor="hover"
                            className="font-sans text-[10px] uppercase tracking-[0.28em] text-ink hover:text-vermillion"
                          >GrabFood ↗</a>
                          <a
                            href={b.delivery.lineMan}
                            target="_blank" rel="noreferrer"
                            data-cursor="hover"
                            className="font-sans text-[10px] uppercase tracking-[0.28em] text-ink hover:text-vermillion"
                          >LINE MAN ↗</a>
                          <a
                            href={`https://www.google.com/maps/search/?api=1&query=${b.lat},${b.lng}`}
                            target="_blank" rel="noreferrer"
                            data-cursor="hover"
                            className="ml-auto font-sans text-[10px] uppercase tracking-[0.28em] text-ink hover:text-vermillion"
                          >Directions →</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>

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
