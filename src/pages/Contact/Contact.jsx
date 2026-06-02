import { useState } from 'react';
import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import ContactButtons from '../../components/ContactButtons/ContactButtons';
import { useLanguage } from '../../context/LanguageContext';
import { site } from '../../data/siteData';
import { products } from '../../data/products';
import { createEmailLink, createWhatsAppLink } from '../../utils/contactLinks';
import Style from './Contact.module.css';

const initialForm = {
  name: '',
  company: '',
  phone: '',
  product: '',
  quantity: '',
  message: '',
};

const Contact = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState(initialForm);

  const update = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = createEmailLink(form.product, form);
  };

  return (
    <>
      <section className={`${Style.contactHero} bg-brand-950 py-16 text-white`}>
        <div className="shell grid items-center gap-10 rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-soft backdrop-blur lg:grid-cols-[0.9fr_1fr] lg:p-10">
          <div>
            <p className="eyebrow mb-4 text-brand-200">{t('contact.eyebrow')}</p>
            <h1 className="text-5xl font-black leading-[1] tracking-[-0.06em] lg:text-6xl">{t('contact.title')}</h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/72">{t('contact.text')}</p>
            <div className="mt-8">
              <ContactButtons variant="light" />
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[1.4rem] border border-white/14 bg-white/8 p-5">
              <div className="flex items-start gap-4">
                <FiMapPin className="mt-1 text-2xl text-brand-300" />
                <div><h3 className="font-black">{t('contact.locationLabel')}</h3><p className="mt-2 leading-7 text-white/70">{t('contact.location')}</p></div>
              </div>
            </div>

            <div className="rounded-[1.4rem] border border-white/14 bg-white/8 p-5">
              <div className="flex items-start gap-4">
                <FiMail className="mt-1 text-2xl text-brand-300" />
                <div>
                  <h3 className="font-black">{t('contact.emailLabel')}</h3>
                  <a href={`mailto:${site.email}`} className="mt-2 block font-bold text-white/80 hover:text-white">{site.email}</a>
                  <a href={`mailto:${site.secondaryEmail}`} className="block font-bold text-white/80 hover:text-white">{site.secondaryEmail}</a>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <a href={createWhatsAppLink()} target="_blank" rel="noreferrer" className="rounded-[1.4rem] border border-white/14 bg-white/8 p-5 transition hover:bg-white/14">
                <div className="flex items-start gap-4"><FaWhatsapp className="mt-1 text-2xl text-brand-300" /><div><h3 className="font-black">{t('contact.whatsappLabel')}</h3><p className="mt-2 font-bold text-white/80">{site.whatsapp}</p></div></div>
              </a>

              <div className="rounded-[1.4rem] border border-white/14 bg-white/8 p-5">
                <div className="flex items-start gap-4"><FiPhone className="mt-1 text-2xl text-brand-300" /><div><h3 className="font-black">{t('contact.phoneLabel')}</h3><p className="mt-2 font-bold text-white/80">{site.phone}</p></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <form onSubmit={handleSubmit} className="card p-7">
            <p className="eyebrow mb-4">{t('contact.formTitle')}</p>
            <h2 className="text-3xl font-black tracking-[-0.04em] text-brand-950">{t('common.requestQuote')}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{t('contact.formText')}</p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <input className="input" placeholder={t('contact.name')} value={form.name} onChange={update('name')} />
              <input className="input" placeholder={t('contact.company')} value={form.company} onChange={update('company')} />
              <input className="input" placeholder={t('contact.phone')} value={form.phone} onChange={update('phone')} />

              <select className="input" value={form.product} onChange={update('product')}>
                <option value="">{t('contact.product')}</option>
                {products.map((product) => (
                  <option key={product.slug} value={t(`products.${product.translationKey}.fullName`)}>
                    {t(`products.${product.translationKey}.fullName`)}
                  </option>
                ))}
              </select>

              <input className="input sm:col-span-2" placeholder={t('contact.quantity')} value={form.quantity} onChange={update('quantity')} />
              <textarea className="input min-h-32 sm:col-span-2" placeholder={t('contact.message')} value={form.message} onChange={update('message')} />
            </div>

            <button type="submit" className="btn btn-primary mt-6 w-full"><FiSend /> {t('contact.submit')}</button>
          </form>

          <div className="card overflow-hidden p-7">
            <p className="eyebrow mb-4">{t('contact.mapTitle')}</p>
            <h2 className="text-3xl font-black tracking-[-0.04em] text-brand-950">{t('contact.mapTitle')}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{t('contact.mapText')}</p>
            <div className="mt-7 overflow-hidden rounded-[1.5rem] border border-brand-900/10 bg-brand-50">
              <iframe title="Polytopia location map" src={site.mapEmbed} className="h-[420px] w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
            </div>
            <a href={site.mapLink} target="_blank" rel="noreferrer" className="btn btn-dark mt-6"><FiMapPin /> {t('common.openMap')}</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
