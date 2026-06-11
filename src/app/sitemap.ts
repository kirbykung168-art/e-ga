import type { MetadataRoute } from 'next';
import { BRAND } from '@/lib/content';

const BASE = `https://${BRAND.domain}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${BASE}/`,        lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/sources`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ];
}
