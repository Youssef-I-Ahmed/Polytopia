import { Link } from 'react-router-dom';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { useLanguage } from '../../context/LanguageContext';
import { site } from '../../data/siteData';
import logo from '../../assets/images/polylogo.png';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-brand-900/10 bg-white">
      <div className="shell grid gap-10 py-12 lg:grid-cols-[1.3fr_0.7fr_0.9fr]">
        <div>
          <img src={logo} alt="Polytopia" className="h-14 w-auto" />
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-600">{t('footer.text')}</p>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-brand-900">{t('footer.quick')}</h3>
          <div className="mt-5 grid gap-3 text-sm font-bold text-slate-600">
            <Link to="/" className="hover:text-brand-700">{t('nav.home')}</Link>
            <Link to="/about" className="hover:text-brand-700">{t('nav.about')}</Link>
            <Link to="/products" className="hover:text-brand-700">{t('footer.products')}</Link>
            <Link to="/contact" className="hover:text-brand-700">{t('footer.contact')}</Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-brand-900">{t('footer.contact')}</h3>
          <div className="mt-5 space-y-4 text-sm text-slate-600">
            <p className="flex items-start gap-3"><FiMapPin className="mt-1 shrink-0 text-brand-600" /> <span>{site.location}</span></p>
            <p className="flex items-center gap-3"><FiMail className="text-brand-600" /> <a href={`mailto:${site.email}`} className="font-bold hover:text-brand-700">{site.email}</a></p>
            <p className="flex items-center gap-3"><FiPhone className="text-brand-600" /> <span className="font-bold">{site.whatsapp} / {site.phone}</span></p>
          </div>
        </div>
      </div>

      <div className="border-t border-brand-900/10 py-5 text-center text-xs font-semibold text-slate-500">
        {t('footer.copy')}
      </div>
    </footer>
  );
};

export default Footer;
