'use client';

import { COPY } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import Reveal from './Reveal';

export default function Manifesto() {
  const { locale } = useLocale();
  return (
    <section id="story" className="relative bg-soot text-bone py-28 lg:py-40 border-y border-[var(--rule)]">
      <div className="mx-auto max-w-[1180px] px-5 lg:px-10">
        <Reveal>
          <p className="eyebrow text-lime">{COPY.manifesto.eyebrow[locale]}</p>
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
            <span className="display-italic text-lime text-[60px] leading-none float-left mr-3 -mt-2">{COPY.manifesto.body[locale].charAt(0)}</span>
            {COPY.manifesto.body[locale].slice(1)}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
