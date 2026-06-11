'use client';

import { useEffect, useState } from 'react';
import { BRAND } from '@/lib/content';

/**
 * Sticky social-proof strip.
 *
 * Audit fix v2: was overlapping section content because the lozenge sat
 * at fixed bottom-left and the press wall + reserve sections also have
 * info at bottom-left. Now:
 *   - bottom-right, smaller footprint
 *   - hides itself once the user reaches the reserve / footer section
 *     (so it never overlaps the page's own social-proof block)
 *   - mobile compact: shows just rating; full content from md up
 */
export default function StickyProof() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      // top: appear after hero
      const past = y > 600;
      // bottom: hide once we're within 900px of document end (= near reserve/footer)
      const remaining = document.documentElement.scrollHeight - (y + window.innerHeight);
      const nearEnd = remaining < 900;
      setShow(past && !nearEnd);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      aria-hidden={!show}
      className={`fixed bottom-5 right-5 z-[60] flex items-center gap-3 px-3.5 py-2.5 bg-ink/90 backdrop-blur-md border border-[var(--rule)] text-bone transition-all duration-700 ease-elegant ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'
      }`}
    >
      <span className="font-sans text-[10.5px] tracking-[0.18em] uppercase text-lime tabular-nums">
        {BRAND.rating.score.toFixed(1)} ★
      </span>
      <span className="h-3 w-px bg-bone/30 hidden md:inline-block" />
      <span className="font-sans text-[9.5px] uppercase tracking-[0.32em] text-bone/60 tabular-nums hidden md:inline-block">
        {BRAND.rating.count.toLocaleString()} reviews
      </span>
      <span className="h-3 w-px bg-bone/30 hidden md:inline-block" />
      <a
        href={BRAND.lineReserveUrl}
        target="_blank" rel="noreferrer"
        data-cursor="hover"
        className="hidden md:inline-block font-sans text-[9.5px] uppercase tracking-[0.32em] text-bone hover:text-lime transition-colors duration-300"
      >Reserve</a>
    </div>
  );
}
