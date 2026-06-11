'use client';

import { useEffect } from 'react';
import { useLocale } from './LanguageProvider';

/**
 * Syncs the <html lang="..."> attribute to the active locale. Layout is
 * a server component so it can't reactively change html attributes —
 * this little client effect handles it.
 *
 * Also adds `translate="no"` while we're at it, paired with the meta
 * tags in layout, to fully shut off browser auto-translation.
 */
export default function HtmlLangSync() {
  const { locale } = useLocale();
  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.documentElement.lang = locale;
    document.documentElement.setAttribute('translate', 'no');
  }, [locale]);
  return null;
}
