'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Locale = 'en' | 'th';
const LangCtx = createContext<{ locale: Locale; setLocale: (l: Locale) => void }>({
  locale: 'en',
  setLocale: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');
  useEffect(() => {
    const saved = (typeof window !== 'undefined' && (localStorage.getItem('ega.locale') as Locale)) || null;
    if (saved === 'en' || saved === 'th') setLocaleState(saved);
  }, []);
  const setLocale = (l: Locale) => {
    setLocaleState(l);
    if (typeof window !== 'undefined') localStorage.setItem('ega.locale', l);
  };
  return <LangCtx.Provider value={{ locale, setLocale }}>{children}</LangCtx.Provider>;
}

export function useLocale() { return useContext(LangCtx); }
