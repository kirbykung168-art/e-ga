'use client';

import { useReducedMotion } from 'framer-motion';
import { SMALL_MENU } from '@/lib/content';

// Marquee v4 (audit fix): derive the tape from the live menu data, so
// when a dish is renamed in content.ts the marquee never goes stale.
// Three signatures + the first six larger plates, locale-agnostic
// (English names, since the marquee uppercase styling kills Thai).
const TAGS: string[] = [
  ...SMALL_MENU.signatures.map((s) => s.name.en),
  ...SMALL_MENU.larger.slice(0, 6).map((p) => p.name.en),
];

export default function Marquee() {
  const reduced = useReducedMotion();
  const list = [...TAGS, ...TAGS, ...TAGS];
  if (reduced) {
    return (
      <div className="bg-ink border-y border-[var(--rule)] overflow-hidden">
        <div className="flex items-center gap-10 py-4 px-6 flex-wrap justify-center">
          {TAGS.map((t, i) => <Tag key={i}>{t}</Tag>)}
        </div>
      </div>
    );
  }
  return (
    <div className="crow-marquee bg-ink border-y border-[var(--rule)] overflow-hidden">
      <div className="crow-marquee-track flex items-center gap-10 py-4 whitespace-nowrap">
        {list.map((t, i) => <Tag key={i}>{t}</Tag>)}
      </div>
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-10 font-sans text-[11.5px] uppercase tracking-[0.32em] text-bone/70">
      {children}
      <svg width="9" height="9" viewBox="0 0 9 9" aria-hidden>
        <circle cx="4.5" cy="4.5" r="1.6" fill="var(--brass)" />
      </svg>
    </span>
  );
}
