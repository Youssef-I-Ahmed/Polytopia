import { FiGlobe, FiPackage, FiShield } from 'react-icons/fi';
import { TbRecycle } from 'react-icons/tb';
import { useLanguage } from '../../../context/LanguageContext';

const TrustCards = () => {
  const { t } = useLanguage();

  const cards = [
    { key: 'recycling', icon: TbRecycle },
    { key: 'quality', icon: FiShield },
    { key: 'alex', icon: FiPackage },
    { key: 'shipping', icon: FiGlobe },
  ];

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {cards.map(({ key, icon: Icon }, index) => (
        <div key={key} className="dark-card p-5 reveal" style={{ animationDelay: `${0.15 + index * 0.07}s` }}>
          <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-500 text-xl text-white">
            <Icon />
          </div>
          <h3 className="font-black text-white">{t(`home.trust.${key}.title`)}</h3>
          <p className="mt-2 text-sm leading-6 text-white/80">{t(`home.trust.${key}.text`)}</p>
        </div>
      ))}
    </div>
  );
};

export default TrustCards;
