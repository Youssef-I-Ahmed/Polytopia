import { FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import Button from '../Button/Button';
import { useLanguage } from '../../context/LanguageContext';
import { createEmailLink, createWhatsAppLink } from '../../utils/contactLinks';

const ContactButtons = ({ productName = '', variant = 'dark' }) => {
  const { t } = useLanguage();
  const primary = variant === 'light' ? 'btn btn-white' : 'btn btn-primary';
  const secondary = variant === 'light' ? 'btn btn-outline' : 'btn border border-brand-900/10 bg-white text-brand-900 hover:bg-brand-50';

  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button href={createEmailLink(productName)} className={primary}>
        <FiMail /> {t('common.sendEmail')}
      </Button>

      <Button href={createWhatsAppLink(productName)} target="_blank" className={secondary}>
        <FaWhatsapp /> {t('common.whatsapp')}
      </Button>
    </div>
  );
};

export default ContactButtons;
