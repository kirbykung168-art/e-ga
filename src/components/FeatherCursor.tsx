'use client';

import { useEffect, useRef } from 'react';

/**
 * Feather-fall cursor — desktop only.
 *
 * Render budget v2 (fixes from production audit):
 *   - shed interval increased to 220ms (was 90ms) — far less DOM churn
 *   - feather lifetime cut to 900ms (was 1500ms) — clears fast
 *   - max in-flight feathers capped at 6 — oldest removed beyond that
 *   - mix-blend-mode: lighten — looks airier on the ink background and
 *     doesn't leave the streak artifacts the previous difference blend made
 *   - lead cursor uses bg + mask instead of inline SVG to avoid the heavy
 *     z-index stacking that was causing top-left ghosting at scroll
 *
 * Disabled on touch / coarse pointer / prefers-reduced-motion.
 */
export default function FeatherCursor() {
  const leadRef    = useRef<HTMLDivElement>(null);
  const fieldRef   = useRef<HTMLDivElement>(null);
  const xRef = useRef(0);
  const yRef = useRef(0);
  const lastShedRef = useRef(0);
  const activeRef   = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || reduced) return;

    // Mark the body so globals.css can hide the native cursor only when the
    // feather actually mounts (was unconditionally hidden before).
    document.body.classList.add('feather-active');

    const lead  = leadRef.current!;
    const field = fieldRef.current!;
    let raf = 0;
    let displayX = window.innerWidth / 2;
    let displayY = window.innerHeight / 2;
    const MAX_FEATHERS = 6;
    const SHED_MS = 220;
    const FEATHER_LIFE_MS = 900;

    const onMove = (e: MouseEvent) => {
      xRef.current = e.clientX;
      yRef.current = e.clientY;
    };

    const onEnter = (e: Event) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      if (t.closest('a, button, [data-cursor="hover"]')) lead.classList.add('cursor-on');
    };
    const onLeave = (e: Event) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      if (t.closest('a, button, [data-cursor="hover"]')) lead.classList.remove('cursor-on');
    };

    const shed = (x: number, y: number) => {
      // bound to viewport — never shed off-screen
      if (x < 0 || y < 0 || x > window.innerWidth || y > window.innerHeight) return;
      const f = document.createElement('span');
      f.className = 'cursor-feather';
      const tilt = (Math.random() * 60 - 30).toFixed(1);
      f.style.setProperty('--tilt', `${tilt}deg`);
      f.style.left = `${x}px`;
      f.style.top  = `${y}px`;
      field.appendChild(f);
      activeRef.current.push(f);
      // cap in-flight feathers
      while (activeRef.current.length > MAX_FEATHERS) {
        const old = activeRef.current.shift();
        if (old) old.remove();
      }
      // schedule self-removal
      window.setTimeout(() => {
        f.remove();
        const i = activeRef.current.indexOf(f);
        if (i >= 0) activeRef.current.splice(i, 1);
      }, FEATHER_LIFE_MS);
    };

    const tick = () => {
      // ease lead toward cursor
      displayX += (xRef.current - displayX) * 0.20;
      displayY += (yRef.current - displayY) * 0.20;
      lead.style.transform = `translate3d(${displayX - 9}px, ${displayY - 9}px, 0)`;
      const now = performance.now();
      if (now - lastShedRef.current > SHED_MS) {
        shed(displayX, displayY);
        lastShedRef.current = now;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover', onEnter);
    document.addEventListener('mouseout',  onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onEnter);
      document.removeEventListener('mouseout',  onLeave);
      activeRef.current.forEach((n) => n.remove());
      activeRef.current = [];
      document.body.classList.remove('feather-active');
    };
  }, []);

  return (
    <>
      <div
        ref={fieldRef}
        aria-hidden
        className="fixed inset-0 pointer-events-none z-[120]"
      />
      <div
        ref={leadRef}
        aria-hidden
        className="cursor-lead fixed top-0 left-0 w-[18px] h-[18px] pointer-events-none z-[121] transition-[width,height,filter] duration-300 ease-out"
      />
      <style jsx global>{`
        .cursor-lead {
          background: var(--bone);
          -webkit-mask-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'><path d='M9 1 C 11 6, 13 10, 14 15 C 12 14, 10 13, 9 17 C 8 13, 6 14, 4 15 C 5 10, 7 6, 9 1 Z' fill='black'/></svg>");
                  mask-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'><path d='M9 1 C 11 6, 13 10, 14 15 C 12 14, 10 13, 9 17 C 8 13, 6 14, 4 15 C 5 10, 7 6, 9 1 Z' fill='black'/></svg>");
          -webkit-mask-size: 100% 100%;
                  mask-size: 100% 100%;
          mix-blend-mode: lighten;
        }
        .cursor-lead.cursor-on {
          background: var(--lime);
          filter: drop-shadow(0 0 14px rgba(201, 210, 74, 0.5));
        }
        .cursor-feather {
          position: absolute;
          width: 10px; height: 10px;
          background: var(--ash);
          opacity: 0.6;
          mix-blend-mode: lighten;
          -webkit-mask-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'><path d='M5 1 C 6 3, 7 6, 8 9 C 6 8, 5 8, 5 10 C 5 8, 4 8, 2 9 C 3 6, 4 3, 5 1 Z' fill='black'/></svg>");
                  mask-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'><path d='M5 1 C 6 3, 7 6, 8 9 C 6 8, 5 8, 5 10 C 5 8, 4 8, 2 9 C 3 6, 4 3, 5 1 Z' fill='black'/></svg>");
          -webkit-mask-size: 100% 100%;
                  mask-size: 100% 100%;
          animation: featherFall 0.9s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
        }
        @keyframes featherFall {
          0%   { transform: translate(0, 0) rotate(var(--tilt, 0deg)); opacity: 0.6; }
          100% { transform: translate(0, 64px) rotate(calc(var(--tilt, 0deg) + 40deg)); opacity: 0; }
        }
      `}</style>
    </>
  );
}
