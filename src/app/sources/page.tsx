import Link from 'next/link';
import { SOURCES, BRAND } from '@/lib/content';

export const metadata = {
  title: 'Sources · e-ga',
  description: 'Every claim on this site, paired with its press URL. Verifiable, citation by citation.',
};

/**
 * /sources — appendix listing every factual claim on the site with
 * its press URL. Builds trust that this site isn't fabricated, it's
 * a research-backed asset.
 */
export default function SourcesPage() {
  return (
    <main className="min-h-screen bg-ink text-bone py-24 lg:py-32">
      <div className="mx-auto max-w-[1100px] px-5 lg:px-10">
        <Link
          href="/"
          className="inline-block font-sans text-[11px] uppercase tracking-[0.32em] text-bone/55 hover:text-vermillion mb-12 underline underline-offset-8 decoration-bone/30"
        >
          ← back to e-ga
        </Link>

        <p className="eyebrow text-vermillion">Appendix</p>
        <h1
          className="display leading-[1.02] mt-5 max-w-[18ch]"
          style={{ fontSize: 'clamp(40px, 6vw, 88px)' }}
        >
          What we verified.
        </h1>
        <p className="font-sans text-[15px] leading-[1.85] text-bone/75 mt-8 max-w-[60ch]">
          Every fact on the e-ga site — addresses, phone numbers, dishes, prices,
          press quotes, the rating — has a citation. This page lists them all,
          paired with the source URL. Click any link to read the original press
          piece.
        </p>
        <p className="font-sans text-[12.5px] uppercase tracking-[0.28em] text-brass mt-6">
          {SOURCES.length} citations · {BRAND.name} · {new Date().getFullYear()}
        </p>

        <ul className="mt-14 lg:mt-20 grid gap-6">
          {SOURCES.map((s, i) => (
            <li
              key={i}
              className="grid grid-cols-[auto_1fr] gap-x-6 items-baseline border-b border-[var(--rule)] pb-5"
            >
              <span className="font-sans text-[10.5px] uppercase tracking-[0.32em] text-bone/45 tabular-nums">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <p className="display text-[18px] leading-snug text-bone">{s.claim}</p>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-baseline gap-3 mt-2 font-sans text-[12px] uppercase tracking-[0.22em] text-vermillion hover:text-brass_lt transition-colors duration-300"
                >
                  {s.publication}
                  <span className="font-sans text-[10px] tracking-[0.32em] text-bone/45 normal-case truncate">{s.url}</span>
                  <span className="text-bone/40">↗</span>
                </a>
              </div>
            </li>
          ))}
        </ul>

        <p className="font-sans text-[12px] leading-relaxed text-bone/55 mt-16 max-w-[60ch]">
          If anything on the live site is inaccurate, tell us and we&apos;ll fix it within
          24 hours. The data is editable in a single file
          (<code className="text-brass">src/lib/content.ts</code>) — no codebase
          surgery required.
        </p>
      </div>
    </main>
  );
}
