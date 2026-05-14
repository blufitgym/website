export const PHONE = '+91 98765 43210';
export const WHATSAPP_NUM = '919876543210';
export const EMAIL = 'hello@blufitgym.com';
export const ADDRESS = 'Bondel, Airport Road, Mangaluru 575008';
export const INSTAGRAM = 'https://instagram.com/blufitgym';
export const MAPS_URL = 'https://maps.google.com/?q=Bondel+Airport+Road+Mangaluru+575008';
export const MAPS_EMBED =
  'https://www.google.com/maps?q=Bondel,+Airport+Road,+Mangaluru+575008&output=embed';
export const HOURS_WEEKDAY = '6:00 AM - 10:00 PM';
export const HOURS_SUNDAY = '7:00 AM - 12:00 PM';
export const INAUGURATION = '2026-05-16';

export const WA_LINK = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(msg)}`;

export const WA_DEFAULT = WA_LINK('Hi blufit! I want to know more about membership.');
export const WA_INAUGURAL = WA_LINK('Hi! I want to claim the blufit inaugural offer.');
export const WA_PLAN_HELP = WA_LINK('Hi blufit! I need help choosing a membership plan.');
