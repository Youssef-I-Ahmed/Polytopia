import SectionHeader from '../../../components/SectionHeader/SectionHeader';
import ProductCard from '../../../components/ProductCard/ProductCard';
import { useLanguage } from '../../../context/LanguageContext';
import { products } from '../../../data/products';

const ProductsPreview = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-brand-50">
      <div className="shell">
        <SectionHeader eyebrow={t('home.productsEyebrow')} title={t('home.productsTitle')} text={t('home.productsText')} />
        <div className="mt-12 grid gap-7 lg:grid-cols-3">
          {products.map((product) => <ProductCard key={product.slug} product={product} />)}
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;
