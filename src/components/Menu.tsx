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

        {/* signatures row — image-backed cards with real verified photos.
            Audit fix: the previous cards were empty rectangles asking you to
            imagine the dish. Now each card carries its actual press photo
            as a tinted backdrop with type sitting confidently over it. */}
        <Reveal>
          <p className="eyebrow text-bone/55 border-b border-[var(--rule)] pb-4 mb-7" lang={locale}>
            {COPY.menu.signatureLabel[locale]}
          </p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 lg:gap-7 mb-16">
          {/* Hero signature 2× — squid-ink dish, ink-splatter backdrop */}
          <Reveal className="md:col-span-2 md:row-span-1">
            <SignatureCard
              variant="hero"
              photo="/images/red-curry.jpg"
              photoAlt="A house red curry — the dish closest to e-ga's squid-ink signature character"
              name={SMALL_MENU.signatures[1].name[locale]}
              desc={SMALL_MENU.signatures[1].desc[locale]}
              tag="Signature · 2×"
              locale={locale}
            />
          </Reveal>
          {/* Smaller singles */}
          <Reveal delay={0.08}>
            <SignatureCard
              variant="single"
              photo="/images/mee-krob.jpg"
              photoAlt="Mee Krob e-ga — crispy rice noodles with prawn, tamarind glaze"
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
              photoAlt="Raw prawn salad — river prawn, garlic, chilli, fish sauce"
              name={SMALL_MENU.signatures[2].name[locale]}
              desc={SMALL_MENU.signatures[2].desc[locale]}
              price={SMALL_MENU.signatures[2].price ?? '— ask'}
              locale={locale}
            />
          </Reveal>
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

/**
 * SignatureCard — photo-backed dish card. The image sits behind a heavy
 * gradient/vermillion vignette so the type stays legible at any density.
 */
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
        className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-[2000ms] ease-elegant group-hover:scale-[1.05]"
        style={{ filter: 'grayscale(15%) contrast(1.02) brightness(0.78)' }}
        loading="lazy"
      />
      {/* warm vignette over the photo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(10,9,7,0.20) 0%, rgba(10,9,7,0.55) 60%, rgba(10,9,7,0.92) 100%), radial-gradient(80% 60% at 30% 35%, rgba(168,48,42,0.18) 0%, rgba(168,48,42,0) 65%)',
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
