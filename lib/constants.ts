export const PHONE = '+91 9731350111';
export const WHATSAPP_NUM = '919731350111';
export const EMAIL = 'blufitgyms@gmail.com';
export const ADDRESS = 'Blufit Gym, Bondel, Airport Road, Mangaluru 575008';
export const INSTAGRAM = 'https://www.instagram.com/blufitgym/';
export const FACEBOOK = 'https://www.facebook.com/profile.php?id=61589788796561';
export const GOOGLE_SHEETS_WEBHOOK_URL =
  'https://script.google.com/macros/s/AKfycbxTOzLAXbB8vbXHxrGXtdM92pEBUnsurRNvfXch6GKR4PCfFo9Ttzpf5VSnm7SdSnjc/exec';
export const MAPS_URL = 'https://maps.app.goo.gl/HyFRowm5b8uQ3BsH7';
export const MAPS_EMBED = 'https://www.google.com/maps?q=12.9207343,74.8687116&z=17&output=embed';
export const HOURS_WEEKDAY_MORNING = '5:30 AM - 11:00 AM';
export const HOURS_WEEKDAY_EVENING = '4:00 PM - 10:00 PM';
export const HOURS_SUNDAY = '7:00 AM - 12:00 PM';
export const INAUGURATION = '2026-05-16';

export const WA_LINK = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(msg)}`;

export const WA_DEFAULT = WA_LINK('Hi blufit! I want to know more about membership.');
export const WA_INAUGURAL = WA_LINK('Hi! I want to claim the blufit inaugural offer.');
export const WA_PLAN_HELP = WA_LINK('Hi blufit! I need help choosing a membership plan.');
