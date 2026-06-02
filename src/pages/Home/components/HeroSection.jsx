import { FiArrowRight } from 'react-icons/fi';
import Button from '../../../components/Button/Button';
import { useLanguage } from '../../../context/LanguageContext';
import TrustCards from './TrustCards';
import Style from '../Home.module.css';
import heroFactory from '../../../assets/images/hero-factory.webp';
import whiteLogo from '../../../assets/images/polylogowhite.png';

const HeroSection = () => {
  const { t, dir } = useLanguage();

  const heroStyle = {
    backgroundImage: `linear-gradient(90deg, rgba(3, 36, 23, 0.93), rgba(3, 36, 23, 0.74), rgba(3, 36, 23, 0.48)), url(${heroFactory})`,
  };

  return (
    <section className={`${Style.hero} relative overflow-hidden`} style={heroStyle}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-950/10 to-brand-950/90" />

      <div className="shell relative grid min-h-[calc(100vh-5rem)] items-center gap-12 py-20 lg:grid-cols-[1fr_0.9fr]">
        <div className="max-w-3xl">
          <p className="eyebrow mb-5 text-brand-200 reveal">{t('home.heroEyebrow')}</p>
          <h1 className="h1 reveal reveal-delay-1">{t('home.heroTitle')}</h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-white reveal reveal-delay-2 sm:text-lg">{t('home.heroLead')}</p>

          <div className="mt-9 flex flex-wrap items-center gap-3 reveal reveal-delay-3">
            <Button to="/products" className="btn btn-primary">
              {t('common.exploreProducts')} <FiArrowRight className={dir === 'rtl' ? 'rotate-180' : ''} />
            </Button>
            <Button to="/contact" className="btn btn-outline">
              {t('common.contactSales')}
            </Button>
          </div>
        </div>

        <div className="reveal reveal-delay-2">
          <div className="dark-card p-5 sm:p-7">
            <div className="mb-7 flex items-center gap-4">
              <img src={whiteLogo} alt="Polytopia" className="h-14 w-auto" />
            </div>
            <TrustCards />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
