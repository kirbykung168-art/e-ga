'use client';

import { useEffect, useState } from 'react';
import { COPY, BRAND } from '@/lib/content';
import { useLocale } from './LanguageProvider';

export default function Nav() {
  const { locale, setLocale } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-[80] transition-all duration-500 ease-elegant ${
        scrolled ? 'backdrop-blur-md bg-ink/85 border-b border-[var(--rule)]' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-[1480px] px-5 lg:px-10 h-[68px] flex items-center justify-between gap-6">
        {/* split-flap brand mark */}
        <a href="#top" aria-label={BRAND.name} className="flex items-baseline gap-3" data-cursor="hover">
          <span className="display text-bone text-[22px] lg:text-[24px] leading-none tracking-tight">
            e-ga
          </span>
          <span className="thai text-[12.5px] text-chalk leading-none">{BRAND.nameTh}</span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {COPY.nav.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-cursor="hover"
              className="font-sans text-[11px] uppercase tracking-[0.32em] text-bone/75 hover:text-vermillion transition-colors duration-500"
              lang={locale}
            >
              {item.label[locale]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 lg:gap-5">
          <div className="flex items-center text-[10.5px] uppercase tracking-[0.32em] text-bone/75">
            <button
              onClick={() => setLocale('en')}
              data-cursor="hover"
              className={`px-2 py-1 transition-colors ${locale === 'en' ? 'text-vermillion' : 'hover:text-bone'}`}
            >EN</button>
            <span className="text-bone/30">·</span>
            <button
              onClick={() => setLocale('th')}
              data-cursor="hover"
              className={`px-2 py-1 transition-colors ${locale === 'th' ? 'text-vermillion' : 'hover:text-bone'}`}
            >TH</button>
          </div>

          <a
            href={BRAND.lineReserveUrl}
            target="_blank"
            rel="noreferrer"
            data-cursor="hover"
            className="hidden md:inline-flex font-sans text-[10.5px] uppercase tracking-[0.32em] text-ink bg-bone px-4 py-2.5 hover:bg-vermillion transition-colors duration-500"
            lang={locale}
          >
            {COPY.nav.reserve[locale]} →
          </a>

          <button
            type="button"
            className="lg:hidden text-bone/85"
            aria-expanded={open}
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            data-cursor="hover"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <line x1="2"  y1={open ? 11 : 7}  x2="20" y2={open ? 11 : 7}  stroke="currentColor" strokeWidth="1.3" style={{ transformOrigin: 'center', transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.35s' }} />
              <line x1="2" y1={open ? 11 : 15} x2="20" y2={open ? 11 : 15} stroke="currentColor" strokeWidth="1.3" style={{ transformOrigin: 'center', transform: open ? 'rotate(-45deg)' : 'none', transition: 'transform 0.35s' }} />
            </svg>
          </button>
        </div>
      </div>

      {/* mobile drawer */}
      {open && (
        <div className="lg:hidden border-t border-[var(--rule)] bg-ink/95 backdrop-blur-md">
          <div className="px-5 py-8 grid gap-5">
            {COPY.nav.items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-sans text-[12.5px] uppercase tracking-[0.28em] text-bone/85"
                lang={locale}
              >
                {item.label[locale]}
              </a>
            ))}
            <a
              href={BRAND.lineReserveUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="font-sans text-[11px] uppercase tracking-[0.32em] text-ink bg-bone px-4 py-3 inline-block w-fit"
              lang={locale}
            >
              {COPY.nav.reserve[locale]} →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
