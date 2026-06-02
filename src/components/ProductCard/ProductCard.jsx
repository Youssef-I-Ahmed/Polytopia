import { FiArrowRight } from 'react-icons/fi';
import Button from '../Button/Button';
import { useLanguage } from '../../context/LanguageContext';

const ProductCard = ({ product }) => {
  const { t, dir } = useLanguage();
  const translationPath = `products.${product.translationKey}`;

  return (
    <article className="group card overflow-hidden transition duration-300 hover:-translate-y-2 hover:shadow-green">
      <div className="relative h-64 overflow-hidden bg-brand-50">
        <img
          src={product.cardImage}
          alt={t(`${translationPath}.name`)}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />
        <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-sm font-black text-brand-800 shadow-sm">
          {product.code}
        </div>
      </div>

      <div className="p-7">
        <h3 className="text-2xl font-black tracking-[-0.04em] text-brand-950">{t(`${translationPath}.name`)}</h3>
        <p className="mt-3 min-h-[76px] text-sm leading-7 text-slate-600">{t(`${translationPath}.short`)}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {product.colors.slice(0, 5).map((color) => (
            <span key={color.nameKey} className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-800">
              {t(`products.colorNames.${color.nameKey}`)}
            </span>
          ))}
        </div>

        <Button to={`/products/${product.slug}`} className="btn btn-primary mt-7 w-full">
          {t('common.viewDetails')} <FiArrowRight className={dir === 'rtl' ? 'rotate-180' : ''} />
        </Button>
      </div>
    </article>
  );
};

export default ProductCard;
