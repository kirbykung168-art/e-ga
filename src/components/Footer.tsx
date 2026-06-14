'use client';

import { BRAND, BRANCHES, COPY } from '@/lib/content';
import { useLocale } from './LanguageProvider';

export default function Footer() {
  const { locale } = useLocale();
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-bone border-t border-[var(--rule)] pt-16 pb-10">
      <div className="mx-auto max-w-[1480px] px-5 lg:px-10 grid lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
        <div>
          <a href="#top" className="display text-[28px] hover:text-vermillion transition-colors duration-500" aria-label={BRAND.name}>
            e-ga <span className="thai text-[16px] text-chalk align-top">{BRAND.nameTh}</span>
          </a>
          <p className="font-sans text-[12.5px] leading-relaxed text-bone/65 max-w-sm mt-4" lang={locale}>
            {COPY.footer.tagline[locale]}
          </p>
          <p className="font-sans text-[10.5px] uppercase tracking-[0.32em] text-bone/45 mt-5">
            Group: {BRAND.group[locale]}
          </p>
        </div>

        <nav className="flex flex-col gap-2.5">
          <p className="eyebrow text-vermillion mb-2">Browse</p>
          {COPY.nav.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-cursor="hover"
              className="font-sans text-[12px] uppercase tracking-[0.24em] text-bone/70 hover:text-vermillion transition-colors duration-300"
              lang={locale}
            >
              {item.label[locale]}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-2.5">
          <p className="eyebrow text-vermillion mb-2">Branches</p>
          {BRANCHES.map((b) => (
            <a
              key={b.key}
              href={`tel:${b.phoneTel}`}
              data-cursor="hover"
              className="font-sans text-[12px] uppercase tracking-[0.24em] text-bone/70 hover:text-vermillion transition-colors duration-300"
            >
              {b.name[locale]} · {b.phoneDisplay}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-2.5">
          <p className="eyebrow text-vermillion mb-2">Follow</p>
          <a href={BRAND.instagramUrl} target="_blank" rel="noreferrer" data-cursor="hover" className="font-sans text-[12px] uppercase tracking-[0.24em] text-bone/70 hover:text-vermillion">Instagram · @ega_bangkok</a>
          <a href={BRAND.facebookUrl} target="_blank" rel="noreferrer" data-cursor="hover" className="font-sans text-[12px] uppercase tracking-[0.24em] text-bone/70 hover:text-vermillion">Facebook</a>
          <a href={BRAND.linktreeUrl} target="_blank" rel="noreferrer" data-cursor="hover" className="font-sans text-[12px] uppercase tracking-[0.24em] text-bone/70 hover:text-vermillion">Linktree</a>
          <a href={BRAND.lineReserveUrl} target="_blank" rel="noreferrer" data-cursor="hover" className="font-sans text-[12px] uppercase tracking-[0.24em] text-bone/70 hover:text-vermillion">LINE OA</a>
        </div>
      </div>

      <hr className="border-[var(--rule)] mt-12" />

      <div className="mx-auto max-w-[1480px] px-5 lg:px-10 mt-7 grid md:grid-cols-3 gap-3 text-[10.5px] tracking-[0.28em] uppercase text-bone/45">
        <p>© {year} {BRAND.name}. {COPY.footer.rights[locale]}</p>
        <p className="text-center">Try typing <span className="text-vermillion">e-g-a</span> on any key</p>
        <p className="md:text-right">829 Song Wat Rd · Bangkok</p>
      </div>
    </footer>
  );
}
