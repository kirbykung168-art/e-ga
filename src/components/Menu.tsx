'use client';

import { COPY, SMALL_MENU } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import Reveal from './Reveal';

export default function Menu() {
  const { locale } = useLocale();

  return (
    <section id="menu" className="relative bg-soot text-bone py-28 lg:py-36 border-y border-[var(--rule)]">
      <div className="mx-auto max-w-[1480px] px-5 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 items-end mb-14">
          <Reveal>
            <p className="eyebrow text-vermillion">{COPY.menu.eyebrow[locale]}</p>
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

        <Reveal>
          <p className="eyebrow text-bone/55 border-b border-[var(--rule)] pb-4 mb-7" lang={locale}>
            {COPY.menu.signatureLabel[locale]}
          </p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 lg:gap-7 mb-16">
          <Reveal className="md:col-span-2 md:row-span-1">
            <article className="relative h-full min-h-[320px] bg-crow border border-[var(--rule)] overflow-hidden p-7 lg:p-9 flex flex-col">
              {/* Heavier ink splatter — opacity 0.85, plus a second
                  turbulence layer of vermillion droplets for depth.
                  Plus a vermillion wash on the bottom-left so the card
                  has chromatic presence even without a photograph. */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(70% 60% at 20% 80%, rgba(168,48,42,0.22) 0%, rgba(168,48,42,0) 65%), radial-gradient(60% 50% at 80% 25%, rgba(193,140,61,0.10) 0%, rgba(193,140,61,0) 60%)',
                }}
              />
              <svg viewBox="0 0 600 400" className="absolute inset-0 w-full h-full opacity-90 pointer-events-none" aria-hidden>
                <defs>
                  <filter id="splat-2x" x="-10%" y="-10%" width="120%" height="120%">
                    <feTurbulence type="fractalNoise" baseFrequency="0.020" numOctaves="3" seed="3" />
                    <feDisplacementMap in="SourceGraphic" scale="78" />
                    <feGaussianBlur stdDeviation="0.8" />
                  </filter>
                  <filter id="splat-2x-fine" x="-10%" y="-10%" width="120%" height="120%">
                    <feTurbulence type="fractalNoise" baseFrequency="0.045" numOctaves="2" seed="11" />
                    <feDisplacementMap in="SourceGraphic" scale="32" />
                  </filter>
                </defs>
                <g filter="url(#splat-2x)" fill="#000">
                  <circle cx="170" cy="180" r="140" />
                  <circle cx="400" cy="230" r="110" />
                  <circle cx="510" cy="120" r="68"  />
                  <ellipse cx="300" cy="330" rx="80" ry="36" />
                </g>
                <g filter="url(#splat-2x-fine)" fill="rgba(168,48,42,0.55)">
                  <circle cx="90"  cy="120" r="14" />
                  <circle cx="120" cy="300" r="9"  />
                  <circle cx="450" cy="60"  r="8"  />
                  <circle cx="540" cy="280" r="11" />
                </g>
              </svg>
              {/* Brass architectural corner */}
              <span aria-hidden className="absolute pointer-events-none" style={{ top: 28, right: 28, width: 56, height: 1, background: 'var(--brass)', opacity: 0.7 }} />
              <span aria-hidden className="absolute pointer-events-none" style={{ top: 28, right: 28, width: 1, height: 56, background: 'var(--brass)', opacity: 0.7 }} />
              <div className="relative">
                <p className="font-sans text-[10.5px] uppercase tracking-[0.32em] text-vermillion">
                  Signature · 2×
                </p>
                <h3
                  className="display leading-[1.04] text-bone mt-3"
                  style={{ fontSize: 'clamp(32px, 4vw, 56px)', textShadow: '0 2px 14px rgba(0,0,0,0.7)' }}
                  lang={locale}
                >
                  {SMALL_MENU.signatures[1].name[locale]}
                </h3>
                <p className="font-sans text-[14px] leading-relaxed text-bone/85 mt-5 max-w-[44ch]" lang={locale}>
                  {SMALL_MENU.signatures[1].desc[locale]}
                </p>
              </div>
              <p className="relative mt-auto font-sans text-[10px] uppercase tracking-[0.32em] text-brass tabular-nums">
                Krabi · Andaman · daily
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <SignatureCard
              variant="single"
              photo="/images/mee-krob.jpg"
              photoAlt="Mee Krob e-ga — crispy rice noodles with prawn, tamarind glaze, lime, chilli, coriander, on a white plate with blue rim"
              name={SMALL_MENU.signatures[0].name[locale]}
              desc={SMALL_MENU.signatures[0].desc[locale]}
              price={SMALL_MENU.signatures[0].price}
              locale={locale}
            />
          </Reveal>
          <Reveal delay={0.16}>
            <SignatureCard
              variant="single"
              photo="/images/raw-prawn.jpg"
              photoAlt="Raw prawn over bitter-melon slices with a green seafood relish, quail eggs and mint, on a green-and-white striped plate"
              name={SMALL_MENU.signatures[2].name[locale]}
              desc={SMALL_MENU.signatures[2].desc[locale]}
              price={SMALL_MENU.signatures[2].price ?? '— ask'}
              locale={locale}
            />
          </Reveal>
        </div>

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
                <span className="font-sans text-[12px] tracking-wider text-brass tabular-nums whitespace-nowrap">{d.price}</span>
              ) : (
                <span className="font-sans text-[11px] tracking-[0.22em] uppercase text-bone/45">ask</span>
              )}
            </li>
          ))}
        </ul>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <p className="eyebrow text-bone/55 border-b border-[var(--rule)] pb-4 mb-7" lang={locale}>
              {COPY.menu.dessertLabel[locale]}
            </p>
            <ul className="grid gap-4">
              {SMALL_MENU.desserts.map((d, i) => (
                <li key={i} className="flex items-baseline justify-between gap-4">
                  <span className="display italic text-[18px] leading-snug text-bone" lang={locale}>{d.name[locale]}</span>
                  {('price' in d && d.price) && <span className="font-sans text-[12px] text-brass tabular-nums">{d.price}</span>}
                </li>
              ))}
            </ul>
            <a
              href="https://lin.ee/W4wRFeK"
              target="_blank"
              rel="noreferrer"
              data-cursor="hover"
              className="inline-flex mt-7 font-sans text-[11px] uppercase tracking-[0.32em] text-bone hover:text-vermillion underline underline-offset-8 decoration-bone/30 transition-colors duration-500"
              lang={locale}
            >
              {COPY.menu.dessertCTA[locale]}
            </a>
          </div>
          <div>
            <p className="eyebrow text-bone/55 border-b border-[var(--rule)] pb-4 mb-7" lang={locale}>
              {COPY.menu.drinkLabel[locale]}
            </p>
            <ul className="grid gap-4">
              {SMALL_MENU.drinks.map((d, i) => (
                <li key={i} className="flex items-baseline justify-between gap-4">
                  <span className="display text-[18px] leading-snug text-bone" lang={locale}>{d.name[locale]}</span>
                  {('price' in d && d.price) && <span className="font-sans text-[12px] text-brass tabular-nums">{d.price}</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function SignatureCard({
  variant, photo, photoAlt, name, desc, tag, price, locale,
}: {
  variant: 'hero' | 'single';
  photo: string;
  photoAlt: string;
  name: string;
  desc?: string;
  tag?: string;
  price?: string;
  locale: 'en' | 'th';
}) {
  const isHero = variant === 'hero';
  return (
    <article className={`relative h-full ${isHero ? 'min-h-[300px]' : 'min-h-[260px]'} bg-ink border border-[var(--rule)] overflow-hidden group`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={photo}
        alt={photoAlt}
        className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-[2000ms] ease-elegant group-hover:scale-[1.05]"
        style={{ filter: 'grayscale(8%) contrast(1.02) brightness(0.85)' }}
        loading="lazy"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(10,9,7,0.15) 0%, rgba(10,9,7,0.40) 60%, rgba(10,9,7,0.85) 100%), radial-gradient(80% 60% at 30% 35%, rgba(168,48,42,0.16) 0%, rgba(168,48,42,0) 65%)',
        }}
      />
      <div className={`relative h-full ${isHero ? 'p-7 lg:p-9' : 'p-6 lg:p-7'} flex flex-col`}>
        <p className="font-sans text-[10.5px] uppercase tracking-[0.32em] text-vermillion tabular-nums">
          {tag ?? price ?? ''}
        </p>
        <h3
          className="display leading-[1.06] text-bone mt-3 drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]"
          style={{ fontSize: isHero ? 'clamp(28px, 3.4vw, 44px)' : 'clamp(22px, 2.3vw, 30px)' }}
          lang={locale}
        >
          {name}
        </h3>
        {desc && (
          <p className={`font-sans ${isHero ? 'text-[14px]' : 'text-[13px]'} leading-relaxed text-bone/75 mt-3 max-w-[44ch] drop-shadow-[0_1px_8px_rgba(0,0,0,0.7)]`} lang={locale}>
            {desc}
          </p>
        )}
      </div>
    </article>
  );
}
