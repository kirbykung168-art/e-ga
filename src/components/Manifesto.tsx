'use client';

import { BRAND, COPY } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import Reveal from './Reveal';

/**
 * Manifesto + Founder card.
 *
 * The founder block sits beneath the love-note: a signature-style monogram
 * (S.T. for Siriwan Tharananithikul), her name + role within the Closet
 * family, and a one-line ethos. No fabricated quote — the line is framed
 * as the brand's stance, not a verbatim attribution.
 */
export default function Manifesto() {
  const { locale } = useLocale();
  return (
    <section id="story" className="relative bg-soot text-bone py-28 lg:py-40 border-y border-[var(--rule)]">
      <div className="mx-auto max-w-[1180px] px-5 lg:px-10">
        <Reveal>
          <p className="eyebrow text-vermillion">{COPY.manifesto.eyebrow[locale]}</p>
          <h2
            className="display leading-[1.02] mt-6"
            style={{ fontSize: 'clamp(34px, 5.4vw, 84px)' }}
            lang={locale}
          >
            {COPY.manifesto.title[locale]}
          </h2>
          <span className="ink-rule wide mt-10 inline-block" />
        </Reveal>
        <Reveal delay={0.15}>
          <p
            className="font-sans text-[16px] leading-[1.95] text-bone/85 max-w-[64ch] mt-10"
            lang={locale}
          >
            <span className="display-italic text-vermillion text-[60px] leading-none float-left mr-3 -mt-2">{COPY.manifesto.body[locale].charAt(0)}</span>
            {COPY.manifesto.body[locale].slice(1)}
          </p>
        </Reveal>

        {/* Founder card — credentials moment. Editorial monogram +
            name + role + ethos. No portrait photo (kept honest;
            no fabricated source). */}
        <Reveal delay={0.3}>
          <figure className="mt-16 lg:mt-20 grid grid-cols-[auto_1fr] items-start gap-7 lg:gap-10 max-w-[64ch]">
            <FounderMonogram />
            <figcaption className="pt-1">
              <p className="font-sans text-[10.5px] uppercase tracking-[0.32em] text-brass">
                The founder
              </p>
              <p
                className="display leading-[1.15] text-bone mt-2"
                style={{ fontSize: 'clamp(20px, 2.2vw, 28px)' }}
                lang={locale}
              >
                {BRAND.founder}
              </p>
              <p
                className="font-sans text-[12px] uppercase tracking-[0.22em] text-bone/55 mt-2"
                lang={locale}
              >
                {COPY.manifesto.founderRole[locale]}
              </p>
              <p
                className="display-italic text-bone/80 mt-5 leading-[1.55]"
                style={{ fontSize: 'clamp(15px, 1.4vw, 18px)' }}
                lang={locale}
              >
                &ldquo;{COPY.manifesto.founderEthos[locale]}&rdquo;
              </p>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

/**
 * Editorial S.T. monogram — concentric rings + initials. Stands in for
 * a portrait without claiming likeness. Brass on ink, vermillion accent ring.
 */
function FounderMonogram() {
  return (
    <svg
      width="92"
      height="92"
      viewBox="0 0 92 92"
      aria-hidden
      className="shrink-0"
    >
      <circle cx="46" cy="46" r="44" fill="none" stroke="var(--brass)" strokeOpacity="0.55" strokeWidth="0.8" />
      <circle cx="46" cy="46" r="40" fill="none" stroke="var(--vermillion)" strokeOpacity="0.85" strokeWidth="0.6" strokeDasharray="2 3" />
      <circle cx="46" cy="46" r="34" fill="rgba(20,18,16,0.6)" />
      <text
        x="46"
        y="54"
        textAnchor="middle"
        fontFamily="var(--font-fraunces), Georgia, serif"
        fontStyle="italic"
        fontWeight="400"
        fontSize="28"
        fill="var(--bone)"
        letterSpacing="0.04em"
      >
        S·T
      </text>
      <text
        x="46"
        y="76"
        textAnchor="middle"
        fontFamily="var(--font-inter), Inter, sans-serif"
        fontSize="6"
        fill="var(--brass)"
        letterSpacing="0.32em"
      >
        SINCE 2019
      </text>
    </svg>
  );
}
