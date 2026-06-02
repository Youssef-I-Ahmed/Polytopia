import { useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import Style from './Navbar.module.css';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { useLanguage } from '../../context/LanguageContext';
import logo from '../../assets/images/polylogo.png';

function HomeHashLink({ hash, children, onClick }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    onClick?.();

    if (location.pathname !== '/') {
      navigate(`/${hash}`);
      return;
    }

    const element = document.querySelector(hash);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <button type="button" onClick={handleClick} className="nav-link">
      {children}
    </button>
  );
}

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  const closeMenu = () => setOpen(false);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b border-brand-900/10 ${Style.header}`}>
      <nav className="shell flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex items-center" aria-label="Polytopia home" onClick={closeMenu}>
          <img src={logo} alt="Polytopia Plastic Industries Company" className="h-14 w-auto" />
        </Link>

        <div className="nav-desktop hidden items-center gap-1 rounded-full border border-brand-900/10 bg-white px-2 py-2 shadow-sm lg:flex">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>{t('nav.home')}</NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>{t('nav.about')}</NavLink>
          <NavLink to="/products" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>{t('nav.products')}</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `btn btn-primary px-5 py-2.5 ${isActive ? 'ring-4 ring-brand-100' : ''}`}>{t('nav.contact')}</NavLink>
          <LanguageSwitcher />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className="rounded-full border border-brand-900/10 bg-white p-3 text-brand-900 shadow-sm"
            aria-label="Toggle menu"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="shell pb-5 lg:hidden">
          <div className="card flex flex-col gap-2 p-3">
            <NavLink onClick={closeMenu} to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>{t('nav.home')}</NavLink>
            <NavLink onClick={closeMenu} to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>{t('nav.about')}</NavLink>
            <NavLink onClick={closeMenu} to="/products" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>{t('nav.products')}</NavLink>
            <NavLink onClick={closeMenu} to="/contact" className={({ isActive }) => `btn btn-primary mt-2 ${isActive ? 'ring-4 ring-brand-100' : ''}`}>{t('nav.contact')}</NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
