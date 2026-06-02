import { FiCheckCircle } from 'react-icons/fi';
import SectionHeader from '../../../components/SectionHeader/SectionHeader';
import { useLanguage } from '../../../context/LanguageContext';

const IndustriesSection = () => {
  const { t } = useLanguage();
  const industries = t('home.industries');

  return (
    <section className="section-padding bg-white">
      <div className="shell grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeader
          eyebrow={t('home.industriesEyebrow')}
          title={t('home.industriesTitle')}
          text={t('home.industriesText')}
          align="left"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((item) => (
            <div key={item} className="card p-5">
              <FiCheckCircle className="mb-5 text-2xl text-brand-600" />
              <p className="font-extrabold text-brand-950">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
