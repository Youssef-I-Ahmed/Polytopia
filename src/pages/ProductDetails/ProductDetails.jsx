import { Link, Navigate, useParams } from 'react-router-dom';
import { FiArrowLeft, FiDownload, FiFileText, FiInfo, FiPackage } from 'react-icons/fi';
import ContactButtons from '../../components/ContactButtons/ContactButtons';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Button from '../../components/Button/Button';
import { useLanguage } from '../../context/LanguageContext';
import { products } from '../../data/products';
import { site } from '../../data/siteData';
import Style from './ProductDetails.module.css';

const ProductDetails = () => {
  const { slug } = useParams();
  const { t, dir } = useLanguage();
  const product = products.find((item) => item.slug === slug);

  if (!product) return <Navigate to="/products" replace />;

  const base = `products.${product.translationKey}`;
  const types = t(`${base}.types`);
  const features = t(`${base}.features`);
  const applications = t(`${base}.applications`);
  const productName = t(`${base}.fullName`);

  return (
    <>
      <section className="bg-white py-10">
        <div className="shell">
          <Link to="/products" className="inline-flex items-center gap-2 text-sm font-black text-brand-700 hover:text-brand-900">
            <FiArrowLeft className={dir === 'rtl' ? 'rotate-180' : ''} /> {t('common.backToProducts')}
          </Link>

          <div className="mt-10 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="card overflow-hidden p-3">
              <img src={product.heroImage} alt={productName} className={`${Style.heroImage} h-[420px] w-full rounded-[1.35rem] object-cover`} />
            </div>

            <div>
              <p className="eyebrow mb-4">{product.code}</p>
              <h1 className="text-5xl font-black leading-[1] tracking-[-0.06em] text-brand-950 lg:text-6xl">{productName}</h1>
              <p className="lead mt-6">{t(`${base}.description`)}</p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {features.map((feature) => (
                  <div key={feature} className="rounded-2xl bg-brand-50 p-4 text-sm font-bold text-brand-900">
                    <FiInfo className="mb-2 text-brand-600" /> {feature}
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <ContactButtons productName={productName} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-50">
        <div className="shell grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div className="card p-7">
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-black text-brand-950"><FiPackage /> {t('products.galleryTitle')}</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {product.colors.map((color) => (
                <div key={color.nameKey} className="overflow-hidden rounded-[1.25rem] border border-brand-900/10 bg-white">
                  <img src={color.image} alt={t(`products.colorNames.${color.nameKey}`)} className="h-36 w-full object-cover" />
                  <div className="p-3 text-center text-sm font-black text-brand-900">{t(`products.colorNames.${color.nameKey}`)}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-7">
            <h2 className="mb-6 text-2xl font-black text-brand-950">{t('products.applicationsTitle')}</h2>
            <ul className="space-y-4">
              {applications.map((item) => (
                <li key={item} className="flex gap-3 rounded-2xl bg-brand-50 p-4 text-sm font-bold text-brand-900">
                  <span className="mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full bg-brand-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-2xl bg-brand-950 p-5 text-sm leading-7 text-white/80">
              {t('products.quoteHelp')}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionHeader eyebrow={product.code} title={t('products.typesTitle')} align="left" />
            <div className="mt-8 grid gap-6">
              {types.map((type, index) => (
                <article key={type.title} className="card grid overflow-hidden md:grid-cols-[230px_1fr]">
                  <img src={product.typeImages[index]} alt={type.title} className="h-full min-h-48 w-full object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-black text-brand-800">{type.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{type.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="card overflow-hidden p-6">
              <h2 className="mb-5 flex items-center gap-3 text-2xl font-black text-brand-950"><FiFileText /> {t('products.specsTitle')}</h2>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[520px] text-left text-sm">
                  <thead className="bg-brand-900 text-white">
                    <tr>
                      <th className="px-4 py-3">{t('products.table.property')}</th>
                      <th className="px-4 py-3">{t('products.table.method')}</th>
                      <th className="px-4 py-3">{t('products.table.unit')}</th>
                      <th className="px-4 py-3">{t('products.table.value')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.specs.map(([property, method, unit, value]) => (
                      <tr key={property} className="border-b border-brand-900/10 odd:bg-brand-50/70">
                        <td className="px-4 py-3 font-bold">{t(`products.table.${property}`)}</td>
                        <td className="px-4 py-3">{method}</td>
                        <td className="px-4 py-3">{unit}</td>
                        <td className="px-4 py-3 font-black text-brand-700">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-xs leading-6 text-slate-500">{t('products.dataNote')}</p>
              <Button href={site.docs.datasheet} download className="btn btn-primary mt-5 w-full"><FiDownload /> {t('common.downloadDatasheet')}</Button>
            </div>

            <div className="card p-6">
              <h2 className="mb-5 text-2xl font-black text-brand-950">{t('products.samplesTitle')}</h2>
              <div className="grid grid-cols-3 gap-3">
                {product.sampleImages.map((image) => (
                  <img key={image} src={image} alt="Sample product" className="h-28 w-full rounded-2xl object-cover" />
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
