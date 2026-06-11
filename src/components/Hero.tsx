'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { BRAND, COPY } from '@/lib/content';
import { useLocale } from './LanguageProvider';

/**
 * HERO v3 — palette + voice + signature reset (audit critic pass).
 *
 *  Photo: switched from the busy lab-19 "spread" to sawasdee-ega.jpg —
 *    the verified Sawasdee shot of e-ga Luv Seafood with the brand's
 *    hand-illustrated crab + octopus mascots on the shophouse window.
 *    Editorial. Atmospheric. Brand-coherent. The cartoon characters
 *    carry the witty/mischievous voice the brand actually has.
 *
 *  Headline: Thai-first ("กินเช้า / จากทั่วไทย"), the founder's verbatim
 *    line. The English ("Local breakfast, from across Thailand.") is the
 *    response, set in italic Fraunces with NO colour change — the italic
 *    does the work alone. Lime stripped from the type.
 *
 *  Signature: replaced the geometric circle-clip wipe with a real SVG
 *    turbulence-displaced ink mask. The photo bleeds into view through
 *    organic, watercolour-fed edges, not a clean disc.
 */
export default function Hero() {
  const { locale } = useLocale();
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y       = useTransform(scrollYProgress, [0, 1], ['0%', '14%']);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.5]);
  // crow glide — kept, but stays inside the section thanks to overflow-hidden
  const crowX = useTransform(scrollYProgress, [0, 1], ['-20vw', '120vw']);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden bg-ink"
    >
      {/* gliding crow */}
      <motion.div
        aria-hidden
        style={{ x: crowX }}
        className="pointer-events-none absolute left-0 top-[14%] z-[5] w-[36px] h-[36px] text-bone/55"
      >
        <svg viewBox="0 0 80 80" fill="currentColor">
          <path d="M16 50 C 22 30, 50 22, 64 36 L 70 34 L 60 44 C 54 52, 46 58, 36 58 C 28 58, 22 56, 16 50 Z" />
          <circle cx="56" cy="38" r="1.5" fill="var(--ink)" />
          <path d="M20 48 C 24 56, 30 60, 36 62 L 28 64 Z" />
        </svg>
      </motion.div>

      <div className="relative z-10 mx-auto max-w-[1480px] px-5 lg:px-10 pt-[120px] lg:pt-[140px] pb-16 lg:pb-24 grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-20 items-center">
        {/* left: type stack */}
        <div>
          <motion.p
            initial={reduced ? false : { opacity: 0, letterSpacing: '0.6em' }}
            animate={{ opacity: 1, letterSpacing: '0.42em' }}
            transition={{ duration: 1.4, delay: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
            className="font-sans uppercase mb-8 text-vermillion"
            style={{ fontSize: 10.5, fontWeight: 500 }}
            lang={locale}
          >
            {COPY.hero.eyebrow[locale]}
          </motion.p>

          {/* Bilingual headline — TH leads at large display weight, EN
              under it in italic for the response. */}
          <h1 className="display leading-[1.02] text-bone" lang="th">
            <span className="thai block font-normal" style={{ fontSize: 'clamp(48px, 7.8vw, 116px)', lineHeight: 1 }}>
              {locale === 'th' ? COPY.hero.title.th : 'กินเช้า'}
            </span>
            <span className="thai block font-normal mt-1" style={{ fontSize: 'clamp(34px, 5.4vw, 80px)', lineHeight: 1.05, color: 'var(--brass-lt)' }}>
              {locale === 'th' ? COPY.hero.titleAccent.th : 'จากทั่วไทย'}
            </span>
            {/* English response — quieter, in italic Fraunces, ash white */}
            <span className="block display-italic mt-6 text-bone/85" style={{ fontSize: 'clamp(20px, 2.2vw, 30px)', lineHeight: 1.2 }} lang="en">
              {COPY.hero.title.en} {COPY.hero.titleAccent.en}
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 1.0, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <span className="ink-rule wide mt-10" />
            <p
              className="font-sans text-[15px] leading-[1.85] text-bone/75 max-w-[52ch] mt-8"
              lang={locale}
            >
              {COPY.hero.body[locale]}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href={BRAND.lineReserveUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-solid"
                lang={locale}
                data-cursor="hover"
              >
                {COPY.hero.ctaReserve[locale]} <span className="btn-arrow">→</span>
              </a>
              <a
                href="#map"
                className="font-sans text-[11.5px] uppercase tracking-[0.32em] text-bone/85 hover:text-vermillion transition-colors duration-300 underline underline-offset-8 decoration-bone/30 decoration-[0.5px]"
                lang={locale}
                data-cursor="hover"
              >
                {COPY.hero.ctaScroll[locale]}
              </a>
            </div>
          </motion.div>
        </div>

        {/* right: real ink-bleed reveal — SVG mask driven by feTurbulence
            + feDisplacementMap. The mask grows from a center point and
            the edges are organic, watercolour-fed, not a clean circle. */}
        <motion.div
          style={{ y, opacity }}
          className="relative aspect-[3/4] lg:aspect-[5/7] max-w-[520px] mx-auto lg:ml-auto w-full"
        >
          {/* offset back-plate */}
          <div className="absolute -left-6 -top-6 lg:-left-10 lg:-top-10 right-8 bottom-8 bg-crow border border-[var(--rule)]" />

          <InkMaskedImage
            src="/images/sawasdee-ega.jpg"
            alt="e-ga Luv Seafood at Song Wat — hand-illustrated octopus and crab mascots on the window, vintage shophouse interior. Verified press photograph (Thai Airways Sawasdee, May 2025)."
            reduced={!!reduced}
          />

          {/* hairline brass corners */}
          <span className="absolute pointer-events-none" style={{ top: 8, left: 8, width: 22, height: 22, borderTop: '1px solid var(--brass)', borderLeft: '1px solid var(--brass)' }} />
          <span className="absolute pointer-events-none" style={{ bottom: 8, right: 8, width: 22, height: 22, borderBottom: '1px solid var(--brass)', borderRight: '1px solid var(--brass)' }} />

          {/* caption — credits the publication, location, and the year */}
          <p className="absolute -bottom-7 left-0 font-sans text-[10px] uppercase tracking-[0.32em] text-bone/55">
            e-ga Luv Seafood · Song Wat · ph. Sawasdee 2025
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/**
 * InkMaskedImage — the photo reveals through an SVG mask whose edges are
 * displaced by feTurbulence, growing radially from center. This is the
 * actual ink-bleed the brief asked for (and the critic flagged the
 * absence of). Pure SVG / CSS — no canvas, no shader.
 */
function InkMaskedImage({ src, alt, reduced }: { src: string; alt: string; reduced: boolean }) {
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ maskImage: 'url(#ink-bleed-mask)', WebkitMaskImage: 'url(#ink-bleed-mask)' }}>
      <motion.div
        className="absolute inset-0"
        initial={reduced ? false : { scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.0, delay: 0.4, ease: [0.7, 0, 0.3, 1] }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          quality={88}
          className="object-cover object-center"
        />
        {/* warm-grade veil — pulls colour temperature toward the brand */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(10,9,7,0.08) 0%, rgba(10,9,7,0) 25%, rgba(10,9,7,0) 65%, rgba(10,9,7,0.55) 100%), radial-gradient(80% 60% at 50% 35%, rgba(168,48,42,0.10) 0%, rgba(168,48,42,0) 60%)',
          }}
        />
      </motion.div>

      {/* The mask itself — a turbulence-displaced radial blob that grows
          from 0 to full. Lives at page level so it can be referenced by
          url(#ink-bleed-mask). */}
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden>
        <defs>
          <filter id="ink-displace" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.012 0.018" numOctaves="2" seed="7" />
            <feDisplacementMap in="SourceGraphic" scale="42" />
            <feGaussianBlur stdDeviation="0.6" />
          </filter>
          <mask id="ink-bleed-mask" maskContentUnits="objectBoundingBox">
            <g filter="url(#ink-displace)">
              <circle cx="0.5" cy="0.5" r="0.66" fill="white">
                {!reduced && (
                  <animate
                    attributeName="r"
                    from="0.04"
                    to="0.72"
                    begin="0.3s"
                    dur="1.8s"
                    fill="freeze"
                    calcMode="spline"
                    keyTimes="0; 1"
                    keySplines="0.7 0 0.3 1"
                  />
                )}
              </circle>
            </g>
          </mask>
        </defs>
      </svg>
    </div>
  );
}
