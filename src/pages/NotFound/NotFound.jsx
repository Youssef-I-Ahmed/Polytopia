import Button from '../../components/Button/Button';
import { useLanguage } from '../../context/LanguageContext';

const NotFound = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-white text-center">
      <div className="shell max-w-2xl">
        <p className="eyebrow mb-4">404</p>
        <h1 className="h2">Page not found</h1>
        <p className="lead mt-5">The page you are looking for is not available.</p>
        <Button to="/" className="btn btn-primary mt-8">{t('nav.home')}</Button>
      </div>
    </section>
  );
};

export default NotFound;
