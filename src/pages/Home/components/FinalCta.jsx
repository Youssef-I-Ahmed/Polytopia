import ContactButtons from '../../../components/ContactButtons/ContactButtons';
import { useLanguage } from '../../../context/LanguageContext';

const FinalCta = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-brand-950 text-white">
      <div className="shell grid items-center gap-10 lg:grid-cols-[1fr_auto]">
        <div>
          <p className="eyebrow mb-4 text-brand-200">{t('nav.contact')}</p>
          <h2 className="text-4xl font-black tracking-[-0.05em] sm:text-5xl">{t('home.finalCtaTitle')}</h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/72">{t('home.finalCtaText')}</p>
        </div>
        <ContactButtons variant="light" />
      </div>
    </section>
  );
};

export default FinalCta;
