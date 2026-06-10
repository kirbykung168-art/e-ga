'use client';

import { useEffect, useState } from 'react';

/**
 * Easter egg — type "ega" anywhere and a black ink wash blooms across the
 * screen and dissolves, leaving a small crow stamp in the corner for 4s.
 */
export default function EasterEgg() {
  const [fire, setFire] = useState(false);
  useEffect(() => {
    let buf = '';
    const target = 'ega';
    const onKey = (e: KeyboardEvent) => {
      // ignore typing in inputs
      const t = e.target as HTMLElement | null;
      if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || (t as HTMLElement).isContentEditable)) return;
      if (e.key.length !== 1) return;
      buf = (buf + e.key.toLowerCase()).slice(-target.length);
      if (buf === target) {
        setFire(true);
        window.setTimeout(() => setFire(false), 2400);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      {fire && (
        <div
          aria-hidden
          className="fixed inset-0 z-[200] pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 50%, var(--ink) 0%, var(--ink) 28%, rgba(10,9,7,0.4) 60%, transparent 80%)',
            animation: 'ink-bloom-eg 2.2s cubic-bezier(0.7, 0, 0.3, 1) forwards',
          }}
        />
      )}
      {fire && (
        <div
          aria-hidden
          className="fixed z-[201] pointer-events-none"
          style={{
            right: 28, bottom: 28,
            color: 'var(--bone)',
            opacity: 0,
            animation: 'crow-stamp 2.4s 0.6s cubic-bezier(0.22, 0.61, 0.36, 1) forwards',
          }}
        >
          <svg width="64" height="64" viewBox="0 0 80 80" fill="currentColor">
            {/* simple crow mark */}
            <path d="M20 50 C 26 28, 52 24, 64 36 L 68 36 L 60 42 C 56 50, 48 56, 38 56 C 30 56, 24 54, 20 50 Z" />
            <circle cx="58" cy="36" r="1.6" fill="var(--ink)" />
          </svg>
        </div>
      )}
      <style jsx global>{`
        @keyframes ink-bloom-eg {
          0%   { opacity: 0; transform: scale(0.2); }
          25%  { opacity: 1; transform: scale(1.2); }
          80%  { opacity: 0.85; transform: scale(1.4); }
          100% { opacity: 0; transform: scale(1.6); }
        }
        @keyframes crow-stamp {
          0%   { opacity: 0; transform: scale(1.6) rotate(-12deg); }
          25%  { opacity: 1; transform: scale(1)   rotate(-6deg); }
          80%  { opacity: 1; transform: scale(1)   rotate(-6deg); }
          100% { opacity: 0; transform: scale(1.04) rotate(-6deg); }
        }
      `}</style>
    </>
  );
}
