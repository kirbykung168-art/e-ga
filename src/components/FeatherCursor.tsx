'use client';

import { useEffect, useRef } from 'react';

/**
 * Feather-fall cursor — desktop only.
 *
 * The "cursor" is a small feather silhouette that follows the mouse.
 * Every ~80ms we shed a softly drifting feather trail-particle.
 *
 * Disabled on touch / coarse pointer / prefers-reduced-motion.
 * Hover targets (a, button, [data-cursor="hover"]) make the lead feather
 * grow + glow lime (the brand accent) — the only place the lime fires.
 */
export default function FeatherCursor() {
  const leadRef  = useRef<HTMLDivElement>(null);
  const fieldRef = useRef<HTMLDivElement>(null);
  const xRef = useRef(0);
  const yRef = useRef(0);
  const lastShedRef = useRef(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || reduced) return;

    const lead  = leadRef.current!;
    const field = fieldRef.current!;
    let raf = 0;
    let displayX = window.innerWidth / 2;
    let displayY = window.innerHeight / 2;

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
      const f = document.createElement('span');
      f.className = 'cursor-feather';
      const tilt = (Math.random() * 60 - 30).toFixed(1);
      f.style.setProperty('--tilt', `${tilt}deg`);
      f.style.left = `${x}px`;
      f.style.top  = `${y}px`;
      field.appendChild(f);
      window.setTimeout(() => f.remove(), 1500);
    };

    const tick = () => {
      // ease lead toward cursor
      displayX += (xRef.current - displayX) * 0.18;
      displayY += (yRef.current - displayY) * 0.18;
      lead.style.transform = `translate3d(${displayX - 9}px, ${displayY - 9}px, 0)`;
      // shed every ~90ms
      const now = performance.now();
      if (now - lastShedRef.current > 90) {
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
        className="cursor-lead fixed top-0 left-0 w-[18px] h-[18px] pointer-events-none z-[121] transition-[width,height,filter,background] duration-300 ease-out"
      >
        <svg viewBox="0 0 18 18" width="18" height="18">
          <path d="M9 1 C 11 6, 13 10, 14 15 C 12 14, 10 13, 9 17 C 8 13, 6 14, 4 15 C 5 10, 7 6, 9 1 Z" fill="currentColor" />
        </svg>
      </div>
      <style jsx global>{`
        .cursor-lead { color: var(--bone); mix-blend-mode: difference; }
        .cursor-lead.cursor-on {
          color: var(--lime);
          filter: drop-shadow(0 0 12px rgba(201, 210, 74, 0.55));
        }
        .cursor-feather {
          position: absolute;
          width: 12px; height: 12px;
          color: var(--ash);
          opacity: 0.85;
          animation: featherFall 1.45s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
        }
        .cursor-feather::before {
          content: '';
          display: block;
          width: 12px; height: 12px;
          background: currentColor;
          -webkit-mask-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'><path d='M6 1 C 7 4, 8 7, 9 11 C 7 10, 6 9, 6 12 C 6 9, 5 10, 3 11 C 4 7, 5 4, 6 1 Z' fill='black'/></svg>");
                  mask-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'><path d='M6 1 C 7 4, 8 7, 9 11 C 7 10, 6 9, 6 12 C 6 9, 5 10, 3 11 C 4 7, 5 4, 6 1 Z' fill='black'/></svg>");
        }
        @keyframes featherFall {
          0% { transform: translate(0, 0) rotate(var(--tilt, 0deg)); opacity: 0.9; }
          100% {
            transform:
              translate(calc(var(--tilt, 0deg) * 0.5), 80px)
              rotate(calc(var(--tilt, 0deg) + 50deg));
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}
