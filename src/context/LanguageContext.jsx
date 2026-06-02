import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext(null);
const fallbackLanguage = 'en';

function getNestedValue(obj, path) {
  return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => localStorage.getItem('polytopia-language') || fallbackLanguage);

  useEffect(() => {
    const selected = translations[language] || translations[fallbackLanguage];
    document.documentElement.lang = language;
    document.documentElement.dir = selected.meta.dir;
    document.body.dir = selected.meta.dir;
    localStorage.setItem('polytopia-language', language);
  }, [language]);

  const value = useMemo(() => {
    const selected = translations[language] || translations[fallbackLanguage];
    const fallback = translations[fallbackLanguage];

    return {
      language,
      setLanguage,
      dir: selected.meta.dir,
      t(path, options = {}) {
        const value = getNestedValue(selected, path) ?? getNestedValue(fallback, path) ?? path;
        if (Array.isArray(value)) return value;
        if (typeof value !== 'string') return value;
        return Object.entries(options).reduce((text, [key, replacement]) => text.replaceAll(`{${key}}`, replacement), value);
      }
    };
  }, [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
}
