import { FaWhatsapp } from 'react-icons/fa';
import { createWhatsAppLink } from '../../utils/contactLinks';

const WhatsAppFloating = () => {
  return (
    <a
      href={createWhatsAppLink()}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-500 text-2xl text-white shadow-green transition hover:-translate-y-1 hover:bg-brand-600"
      aria-label="Contact Polytopia on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppFloating;
