import SectionHeader from '../../../components/SectionHeader/SectionHeader';
import { useLanguage } from '../../../context/LanguageContext';
import { galleryImages } from '../../../data/products';
import Style from '../Home.module.css';

const GallerySection = () => {
  const { t } = useLanguage();

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="shell">
        <SectionHeader eyebrow={t('home.galleryEyebrow')} title={t('home.galleryTitle')} text={t('home.galleryText')} />

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {galleryImages.map((image, index) => (
            <div
              key={image.src}
              className={`${Style.galleryItem} overflow-hidden rounded-[1.6rem] bg-brand-50 shadow-soft ${index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''}`}
            >
              <img src={image.src} alt={image.alt} className="h-full min-h-48 w-full object-cover transition duration-700 hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
