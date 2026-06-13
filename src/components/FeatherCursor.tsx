'use client';

import { useEffect, useRef } from 'react';

/**
 * Feather drift — desktop only, very subtle.
 *
 * v3 redesign after user feedback that the previous build felt heavy:
 *   - no longer hides the native cursor (was the biggest distraction —
 *     replacing the OS pointer with a custom SVG made clicks feel laggy
 *     and inconsistent across nav vs body)
 *   - no lead element — the system cursor does its job
 *   - feathers drift much more sparsely (every 520ms vs 220ms) so they
 *     read as occasional atmosphere rather than a constant trail
 *   - max 3 in-flight, smaller (8px), shorter life (700ms), lower opacity
 *   - gated to viewports ≥ 1280px so laptops/mobiles don't see it at all
 *   - still hidden on touch / coarse pointer / prefers-reduced-motion
 *
 * The crow's-feather concept is preserved; the volume is dialled down.
 */
export default function FeatherCursor() {
  const fieldRef   = useRef<HTMLDivElement>(null);
  const xRef = useRef(0);
  const yRef = useRef(0);
  const lastShedRef = useRef(0);
  const lastMoveRef = useRef(0);
  const activeRef   = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const narrow  = window.innerWidth < 1280;
    if (isTouch || reduced || narrow) return;

    const field = fieldRef.current!;
    let raf = 0;
    const MAX_FEATHERS = 3;
    const SHED_MS = 520;
    const FEATHER_LIFE_MS = 700;
    const IDLE_MS = 140; // stop shedding when the user pauses

    const onMove = (e: MouseEvent) => {
      xRef.current = e.clientX;
      yRef.current = e.clientY;
      lastMoveRef.current = performance.now();
    };

    const shed = (x: number, y: number) => {
      if (x < 0 || y < 0 || x > window.innerWidth || y > window.innerHeight) return;
      const f = document.createElement('span');
      f.className = 'cursor-feather';
      const tilt = (Math.random() * 50 - 25).toFixed(1);
      f.style.setProperty('--tilt', `${tilt}deg`);
      // offset slightly behind the cursor so it never sits under the click
      f.style.left = `${x + 6}px`;
      f.style.top  = `${y + 8}px`;
      field.appendChild(f);
      activeRef.current.push(f);
      while (activeRef.current.length > MAX_FEATHERS) {
        const old = activeRef.current.shift();
        if (old) old.remove();
      }
      window.setTimeout(() => {
        f.remove();
        const i = activeRef.current.indexOf(f);
        if (i >= 0) activeRef.current.splice(i, 1);
      }, FEATHER_LIFE_MS);
    };

    const tick = () => {
      const now = performance.now();
      const movingRecently = now - lastMoveRef.current < IDLE_MS;
      if (movingRecently && now - lastShedRef.current > SHED_MS) {
        shed(xRef.current, yRef.current);
        lastShedRef.current = now;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      activeRef.current.forEach((n) => n.remove());
      activeRef.current = [];
    };
  }, []);

  return (
    <>
      <div
        ref={fieldRef}
        aria-hidden
        className="fixed inset-0 pointer-events-none z-[120]"
      />
      <style jsx global>{`
        .cursor-feather {
          position: absolute;
          width: 8px; height: 8px;
          background: var(--chalk);
          opacity: 0.28;
          mix-blend-mode: lighten;
          -webkit-mask-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'><path d='M5 1 C 6 3, 7 6, 8 9 C 6 8, 5 8, 5 10 C 5 8, 4 8, 2 9 C 3 6, 4 3, 5 1 Z' fill='black'/></svg>");
                  mask-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'><path d='M5 1 C 6 3, 7 6, 8 9 C 6 8, 5 8, 5 10 C 5 8, 4 8, 2 9 C 3 6, 4 3, 5 1 Z' fill='black'/></svg>");
          -webkit-mask-size: 100% 100%;
                  mask-size: 100% 100%;
          animation: featherFall 0.7s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
        }
        @keyframes featherFall {
          0%   { transform: translate(0, 0) rotate(var(--tilt, 0deg)); opacity: 0.28; }
          100% { transform: translate(0, 44px) rotate(calc(var(--tilt, 0deg) + 28deg)); opacity: 0; }
        }
      `}</style>
    </>
  );
}
