import { site } from '../data/siteData';

export function encode(value) {
  return encodeURIComponent(value);
}

export function createWhatsAppLink(productName = '') {
  const message = productName
    ? `Hello Polytopia, I would like to request a quote for ${productName}. Please share available grades, colors, quantity options and delivery details.`
    : 'Hello Polytopia, I would like to request recycled plastic materials. Please share available grades, colors, quantity options and delivery details.';

  return `https://wa.me/${site.whatsappInternational}?text=${encode(message)}`;
}

export function createEmailLink(productName = '', formData = null) {
  const subject = productName ? `Quote request - ${productName}` : 'Quote request - Polytopia recycled plastic materials';
  const baseBody = productName
    ? `Hello Polytopia Team,\n\nI would like to request a quote for ${productName}.\nPlease share available grades, colors, quantity options and delivery details.\n\nThank you.`
    : 'Hello Polytopia Team,\n\nI would like to request recycled plastic materials.\nPlease share available grades, colors, quantity options and delivery details.\n\nThank you.';

  const body = formData
    ? `Hello Polytopia Team,\n\nI would like to request a quote with the following details:\n\nName: ${formData.name || '-'}\nCompany: ${formData.company || '-'}\nPhone / WhatsApp: ${formData.phone || '-'}\nProduct: ${formData.product || productName || '-'}\nQuantity: ${formData.quantity || '-'}\nMessage: ${formData.message || '-'}\n\nPlease reply with available grades, colors, pricing and delivery details.\n\nThank you.`
    : baseBody;

  return `mailto:${site.email}?subject=${encode(subject)}&body=${encode(body)}`;
}
