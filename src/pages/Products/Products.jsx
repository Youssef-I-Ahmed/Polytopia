import SectionHeader from '../../components/SectionHeader/SectionHeader';
import ProductCard from '../../components/ProductCard/ProductCard';
import { useLanguage } from '../../context/LanguageContext';
import { products } from '../../data/products';
import Style from './Products.module.css';

const Products = () => {
  const { t } = useLanguage();

  return (
    <>
      <section className={`section-padding bg-white ${Style.productsIntro}`}>
        <div className="shell">
          <SectionHeader eyebrow={t('products.pageEyebrow')} title={t('products.pageTitle')} text={t('products.pageText')} />
          <div className="mt-12 grid gap-7 lg:grid-cols-3">
            {products.map((product) => <ProductCard key={product.slug} product={product} />)}
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-950 text-white">
        <div className="shell grid gap-8 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product.slug} className="dark-card p-6">
              <div className="flex items-center gap-4">
                <img src={product.cardImage} alt={t(`products.${product.translationKey}.name`)} className="h-16 w-16 rounded-2xl object-cover" />
                <div>
                  <p className="text-sm font-black text-brand-200">{product.code}</p>
                  <h3 className="text-xl font-black text-white">{t(`products.${product.translationKey}.name`)}</h3>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <span key={color.nameKey} className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold text-white/80">
                    {t(`products.colorNames.${color.nameKey}`)}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Products;
