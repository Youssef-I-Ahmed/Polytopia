import { useLanguage } from '../../context/LanguageContext';

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'ar', label: 'AR' },
  { code: 'tr', label: 'TR' }
];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex rounded-full border border-brand-900/10 bg-white p-1 shadow-sm" aria-label="Language selector">
      {languages.map((item) => (
        <button
          key={item.code}
          type="button"
          onClick={() => setLanguage(item.code)}
          className={`rounded-full px-3 py-1.5 text-xs font-black transition ${language === item.code ? 'bg-brand-600 text-white shadow-sm' : 'text-brand-900 hover:bg-brand-50'}`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
