'use client';

import { useEffect, useState } from 'react';
import { BRAND } from '@/lib/content';

/**
 * Sticky social-proof strip — bottom-left small lozenge that fades in
 * after first scroll and stays. Shows rating + IG + LINE.
 */
export default function StickyProof() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div
      aria-hidden={!show}
      className={`fixed bottom-5 left-5 z-[60] flex items-center gap-3 px-4 py-3 bg-ink/85 backdrop-blur-md border border-[var(--rule)] text-bone transition-all duration-700 ease-elegant ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'
      }`}
    >
      <span className="font-sans text-[11px] tracking-[0.18em] uppercase text-lime tabular-nums">
        {BRAND.rating.score.toFixed(1)} ★
      </span>
      <span className="h-3 w-px bg-bone/30" />
      <span className="font-sans text-[10px] uppercase tracking-[0.32em] text-bone/60 tabular-nums">
        {BRAND.rating.count.toLocaleString()} reviews
      </span>
      <span className="h-3 w-px bg-bone/30 hidden sm:inline-block" />
      <a
        href={BRAND.instagramUrl}
        target="_blank" rel="noreferrer"
        data-cursor="hover"
        className="hidden sm:inline-block font-sans text-[10px] uppercase tracking-[0.32em] text-bone hover:text-lime transition-colors duration-300"
      >IG</a>
      <a
        href={BRAND.lineReserveUrl}
        target="_blank" rel="noreferrer"
        data-cursor="hover"
        className="hidden sm:inline-block font-sans text-[10px] uppercase tracking-[0.32em] text-bone hover:text-lime transition-colors duration-300"
      >LINE</a>
    </div>
  );
}
