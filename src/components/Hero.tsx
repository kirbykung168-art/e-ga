'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { BRAND, COPY } from '@/lib/content';
import { useLocale } from './LanguageProvider';

/**
 * HERO — signature ink-drop moment.
 *
 * Layout: asymmetric, weighted LEFT (per the divergence matrix — this is
 * the only e-ga-style hero in the batch).
 *
 *   left column:  big editorial type stack + body + CTAs
 *   right column: a large ink-drop animation that blooms into a small
 *                 portrait crop (lab-19.jpg — verified Samurai Gourmet
 *                 dining room photograph), framed in an off-set black plate.
 *
 * The wordmark itself reveals letter-by-letter as the ink dries.
 */
export default function Hero() {
  const { locale } = useLocale();
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y       = useTransform(scrollYProgress, [0, 1], ['0%', '14%']);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.5]);

  // Crow glides across based on scroll
  const crowX = useTransform(scrollYProgress, [0, 1], ['-20vw', '120vw']);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden bg-ink"
    >
      {/* gliding crow svg — pinned within hero section; clipped by overflow-hidden
          so it doesn't leak smudges into later sections. Top placed higher so
          it skims above the headline rather than crossing it. */}
      <motion.div
        aria-hidden
        style={{ x: crowX }}
        className="pointer-events-none absolute left-0 top-[15%] z-[5] w-[36px] h-[36px] text-bone/55"
      >
        <svg viewBox="0 0 80 80" fill="currentColor">
          <path d="M16 50 C 22 30, 50 22, 64 36 L 70 34 L 60 44 C 54 52, 46 58, 36 58 C 28 58, 22 56, 16 50 Z" />
          <circle cx="56" cy="38" r="1.5" fill="var(--ink)" />
          <path d="M20 48 C 24 56, 30 60, 36 62 L 28 64 Z" />
        </svg>
      </motion.div>

      <div className="relative z-10 mx-auto max-w-[1480px] px-5 lg:px-10 pt-[120px] lg:pt-[140px] pb-16 lg:pb-24 grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center">
        {/* left: type stack */}
        <div>
          <motion.p
            initial={reduced ? false : { opacity: 0, letterSpacing: '0.6em' }}
            animate={{ opacity: 1, letterSpacing: '0.48em' }}
            transition={{ duration: 1.4, delay: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
            className="font-sans uppercase mb-7 text-lime"
            style={{ fontSize: 10.5, fontWeight: 500 }}
            lang={locale}
          >
            {COPY.hero.eyebrow[locale]}
          </motion.p>

          <h1
            className="display leading-[1.02] text-bone"
            style={{ fontSize: 'clamp(38px, 5.8vw, 92px)' }}
            lang={locale}
          >
            <InkLine text={COPY.hero.title[locale]} delay={0.2} />
            {' '}
            <span className="display-italic text-lime">
              <InkLine text={COPY.hero.titleAccent[locale]} delay={0.5} />
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 1.4, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <span className="ink-rule wide mt-10" />
            <p
              className="font-sans text-[15px] leading-[1.85] text-bone/75 max-w-[44ch] mt-8"
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
                className="font-sans text-[11.5px] uppercase tracking-[0.32em] text-bone/85 hover:text-lime transition-colors duration-300 underline underline-offset-8 decoration-bone/40 decoration-[0.5px]"
                lang={locale}
                data-cursor="hover"
              >
                {COPY.hero.ctaScroll[locale]}
              </a>
            </div>
          </motion.div>
        </div>

        {/* right: ink-drop reveals the verified press image */}
        <motion.div
          style={{ y, opacity }}
          className="relative aspect-[3/4] lg:aspect-[4/5] max-w-[520px] mx-auto lg:ml-auto w-full"
        >
          {/* ink plate behind */}
          <div className="absolute -left-6 -top-6 lg:-left-10 lg:-top-10 right-8 bottom-8 bg-crow border border-[var(--rule)]" />
          {/* the ink-bleed window */}
          <motion.div
            className="absolute inset-0 overflow-hidden"
            initial={reduced ? false : { clipPath: 'circle(0% at 50% 50%)' }}
            animate={{ clipPath: 'circle(70% at 50% 50%)' }}
            transition={{ duration: 1.8, delay: 0.7, ease: [0.7, 0, 0.3, 1] }}
          >
            <Image
              src="/images/lab-19.jpg"
              alt="e-ga LAB at 829 Song Wat Road — verified press photograph"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={88}
              className="object-cover object-center"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'linear-gradient(180deg, rgba(10,9,7,0.10) 0%, rgba(10,9,7,0) 25%, rgba(10,9,7,0) 70%, rgba(10,9,7,0.45) 100%)',
              }}
            />
          </motion.div>

          {/* corner brass */}
          <span className="absolute pointer-events-none" style={{ top: 8, left: 8, width: 20, height: 20, borderTop: '1px solid var(--bone)', borderLeft: '1px solid var(--bone)' }} />
          <span className="absolute pointer-events-none" style={{ bottom: 8, right: 8, width: 20, height: 20, borderBottom: '1px solid var(--bone)', borderRight: '1px solid var(--bone)' }} />

          {/* caption */}
          <p className="absolute -bottom-7 left-0 font-sans text-[10px] uppercase tracking-[0.32em] text-bone/55">
            829 Song Wat Rd · est. as the lab
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/**
 * InkLine — fades each character in left-to-right with a small Y rise
 * (kept tiny so it doesn't flex line height).
 */
function InkLine({ text, delay = 0 }: { text: string; delay?: number }) {
  const reduced = useReducedMotion();
  const words = text.split(' ');
  let idx = 0;
  return (
    <span aria-label={text}>
      <span aria-hidden>
        {words.map((word, wi) => (
          <span key={wi} className="inline-block whitespace-nowrap" style={{ marginRight: '0.25em' }}>
            {Array.from(word).map((ch, ci) => {
              const d = delay + idx++ * 0.026;
              return (
                <motion.span
                  key={ci}
                  initial={reduced ? false : { opacity: 0, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, filter: 'blur(0px)' }}
                  transition={{ duration: 0.7, delay: d, ease: [0.22, 0.61, 0.36, 1] }}
                  style={{ display: 'inline-block' }}
                >
                  {ch}
                </motion.span>
              );
            })}
          </span>
        ))}
      </span>
    </span>
  );
}
