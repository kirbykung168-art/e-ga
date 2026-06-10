'use client';

import { useReducedMotion } from 'framer-motion';

const TAGS = [
  'อีกา',
  'Local Breakfast',
  'Song Wat · est',
  'Mee Krob',
  'Pla Muek Nam Dum Manao',
  'Sukhumvit 23',
  'Sathorn 12',
  'Luv Seafood',
  '4.1 ★ · 749 reviews',
  'อิส_แฮพ_เพ่น',
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
        <circle cx="4.5" cy="4.5" r="1.6" fill="var(--lime)" />
      </svg>
    </span>
  );
}
