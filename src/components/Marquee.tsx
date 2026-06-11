'use client';

import { useReducedMotion } from 'framer-motion';

const TAGS = [
  'Local Breakfast',
  'Mee Krob e-ga',
  'Pla Muek Nam Dum Manao',
  'Raw Prawn Salad',
  'Kanom Krok',
  'Kua Kling',
  'Sour Curry',
  'River Prawn',
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
