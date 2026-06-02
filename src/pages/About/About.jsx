import { FiCheckCircle, FiTarget, FiUsers } from 'react-icons/fi';
import { TbRecycle } from 'react-icons/tb';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Button from '../../components/Button/Button';
import { useLanguage } from '../../context/LanguageContext';
import { site } from '../../data/siteData';
import Style from './About.module.css';
import factoryFront from '../../assets/images/factory-front-real.webp';
import factorySign from '../../assets/images/factory-sign.webp';
import factoryExterior from '../../assets/images/factory-exterior.webp';
import transparentPellets from '../../assets/images/pellets-transparent.webp';
import rawBags from '../../assets/images/raw-bags.webp';

const About = () => {
  const { t } = useLanguage();
  const values = t('about.values');
  const points = t('about.points');

  return (
    <>
      <section className="section-padding bg-white">
        <div className="shell grid items-center gap-14 lg:grid-cols-2">
          <div className="relative">
            <div className="grid grid-cols-2 gap-3 overflow-hidden rounded-[2rem] shadow-soft">
              <img src={factoryFront} alt="Polytopia factory exterior" className="h-56 w-full object-cover" />
              <img src={factorySign} alt="Polytopia signage" className="h-56 w-full object-cover" />
              <img src={factoryExterior} alt="Factory context" className="h-56 w-full object-cover" />
              <img src={transparentPellets} alt="Recycled plastic pellets" className="h-56 w-full object-cover" />
            </div>
            <div className={`${Style.imageNote} absolute -bottom-7 max-w-xs rounded-[1.5rem] border border-white/70 bg-white p-5 shadow-green`}>
              <p className="text-sm font-black text-brand-800">HDPE • PP • LDPE • LLDPE</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">Competitive supply for manufacturers and industrial buyers.</p>
            </div>
          </div>

          <div>
            <SectionHeader eyebrow={t('about.eyebrow')} title={t('about.title')} align="left" />
            <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
            </div>
            <ul className="mt-8 grid gap-3">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm font-bold text-slate-700">
                  <FiCheckCircle className="mt-1 shrink-0 text-brand-600" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={site.docs.companyProfile} download className="btn btn-primary">{t('common.downloadProfile')}</Button>
              <Button href="/#process" className="btn border border-brand-900/10 bg-white text-brand-900 hover:bg-brand-50">{t('nav.process')}</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-50">
        <div className="shell grid gap-6 lg:grid-cols-3">
          <div className="card p-8">
            <TbRecycle className="mb-7 text-4xl text-brand-600" />
            <h3 className="text-2xl font-black tracking-[-0.04em] text-brand-950">{t('about.missionTitle')}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">{t('about.missionText')}</p>
          </div>
          <div className="card p-8">
            <FiTarget className="mb-7 text-4xl text-brand-600" />
            <h3 className="text-2xl font-black tracking-[-0.04em] text-brand-950">{t('about.visionTitle')}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">{t('about.visionText')}</p>
          </div>
          <div className="card p-8">
            <FiUsers className="mb-7 text-4xl text-brand-600" />
            <h3 className="text-2xl font-black tracking-[-0.04em] text-brand-950">{t('about.whoTitle')}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">{t('about.whoText')}</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="shell grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="eyebrow mb-4">{t('about.eyebrow')}</p>
            <h2 className="h2">{t('about.whyTitle')}</h2>
            <p className="lead mt-5">{t('about.whyText')}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {values.map((value) => (
                <div key={value.title} className="rounded-[1.25rem] border border-brand-900/10 bg-brand-50 p-5">
                  <h3 className="font-black text-brand-950">{value.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{value.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-brand-950 shadow-soft">
            <video className="h-full min-h-[430px] w-full object-cover" src={site.video.factory} autoPlay muted loop playsInline poster={rawBags} />
            <div className="bg-brand-950 p-5 text-center text-sm font-black text-white">Factory logistics and material handling</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
