'use client';

import { BRAND, COPY } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import Reveal from './Reveal';

export default function Reserve() {
  const { locale } = useLocale();
  return (
    <section className="relative bg-bone text-ink py-24 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1180px] px-5 lg:px-10 text-center">
        <Reveal>
          <h2 className="display leading-[1.06]" style={{ fontSize: 'clamp(34px, 5vw, 72px)' }} lang={locale}>
            {COPY.reserve.title[locale]}
          </h2>
          <p className="font-sans text-[13.5px] tracking-[0.12em] uppercase text-ash mt-5" lang={locale}>
            {COPY.reserve.body[locale]}
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href={BRAND.lineReserveUrl}
              target="_blank"
              rel="noreferrer"
              data-cursor="hover"
              className="font-sans text-[11.5px] uppercase tracking-[0.28em] bg-ink text-bone px-8 py-4 hover:bg-lime hover:text-ink transition-colors duration-500"
              lang={locale}
            >
              {COPY.reserve.line[locale]} →
            </a>
            <a
              href={BRAND.lineMan}
              target="_blank"
              rel="noreferrer"
              data-cursor="hover"
              className="font-sans text-[11.5px] uppercase tracking-[0.28em] text-ink hover:text-ash underline underline-offset-8 decoration-ink/40 decoration-[0.5px]"
              lang={locale}
            >
              {COPY.reserve.delivery[locale]}
            </a>
            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noreferrer"
              data-cursor="hover"
              className="font-sans text-[11.5px] uppercase tracking-[0.28em] text-ink hover:text-ash underline underline-offset-8 decoration-ink/40 decoration-[0.5px]"
              lang={locale}
            >
              {COPY.reserve.dm[locale]}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
