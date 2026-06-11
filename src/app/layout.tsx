import type { Metadata } from 'next';
import { Fraunces, Inter, Noto_Serif_Thai } from 'next/font/google';
import './globals.css';
import { BRAND, BRANCHES } from '@/lib/content';
import { LanguageProvider } from '@/components/LanguageProvider';
import HtmlLangSync from '@/components/HtmlLangSync';

const fraunces = Fraunces({
  subsets: ['latin'], weight: ['300', '400', '500'], style: ['normal', 'italic'],
  variable: '--font-fraunces', display: 'swap',
});
const inter = Inter({
  subsets: ['latin'], weight: ['300', '400', '500'],
  variable: '--font-inter', display: 'swap',
});
const notoThai = Noto_Serif_Thai({
  subsets: ['thai'], weight: ['400', '500', '600'],
  variable: '--font-noto-thai', display: 'swap',
});

const SITE = 'https://e-ga.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: 'e-ga · อีกา — Regional Thai recipes, Bangkok',
  description: "Local breakfasts from across Thailand — Song Wat, Sathorn 12, Sukhumvit 23. In the family of It's Happened to be a Closet.",
  keywords: ['e-ga', 'อีกา', 'ega bangkok', 'Song Wat restaurant', "It's Happened to be a Closet", 'Thai regional cuisine', 'Mee Krob e-ga', 'Pla Muek Nam Dum Manao'],
  openGraph: {
    title: 'e-ga · อีกา — Regional Thai recipes, Bangkok',
    description: 'Local breakfasts from across Thailand.',
    type: 'website', siteName: 'e-ga', url: SITE,
    images: ['/og.jpg'],
  },
  twitter: { card: 'summary_large_image', images: ['/og.jpg'] },
  alternates: { canonical: SITE },
};

const JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'FoodEstablishment',
  name: 'e-ga',
  alternateName: ['อีกา', 'e-ga LAB'],
  url: SITE,
  servesCuisine: ['Thai', 'Regional Thai', 'Southern Thai'],
  priceRange: '฿฿',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: BRAND.rating.score,
    reviewCount: BRAND.rating.count,
  },
  location: BRANCHES.map((b) => ({
    '@type': 'Restaurant',
    name: `e-ga · ${b.name.en}`,
    address: { '@type': 'PostalAddress', streetAddress: b.address.en },
    telephone: b.phoneTel,
    openingHours: 'Mo-Su 08:00-22:00',
  })),
  sameAs: [BRAND.instagramUrl, BRAND.facebookUrl, BRAND.linktreeUrl],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" translate="no" className={`${fraunces.variable} ${inter.variable} ${notoThai.variable}`}>
      <head>
        {/* Prevent Chrome / Google auto-translate. Without this, a visitor
            whose browser is set to auto-translate Thai sees the page's
            Thai copy mangled into Chrome's literal English, bypassing our
            curated EN strings. */}
        <meta name="google" content="notranslate" />
        <meta name="robots" content="notranslate" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSONLD) }}
        />
      </head>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-bone focus:text-ink focus:px-4 focus:py-3 focus:text-[11px] focus:tracking-[0.28em] focus:uppercase">
          Skip to content
        </a>
        <LanguageProvider>
          <HtmlLangSync />
          <main id="main">{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
}
