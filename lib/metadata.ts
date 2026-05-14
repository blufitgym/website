import type { Metadata } from 'next';

export const siteUrl = 'https://blufitgym.com';

export const homeMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'blufit Gym | Premium Fitness Centre in Bondel, Mangaluru',
  description:
    "Bondel's newest premium fitness destination. Weight training, personal training, Zumba, MMA, outdoor running track, and in-gym cafe. Now open.",
  keywords: [
    'gym Mangaluru',
    'gym Bondel',
    'fitness centre Mangaluru',
    'blufit gym',
    'personal training Mangaluru',
    'MMA Mangaluru',
    'Zumba Mangaluru',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'blufit Gym | Where Fitness Meets Dedication',
    description: 'Premium gym in Bondel, Mangaluru. Now open.',
    url: siteUrl,
    siteName: 'blufit Gym',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export const membershipMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Membership Plans | blufit Gym Mangaluru',
  description:
    'View blufit gym membership pricing for adults and students. Inaugural offer - Rs 14,999/year for adults, Rs 9,999/year for students.',
  alternates: { canonical: '/membership' },
};

export const contactMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Find Us | blufit Gym, Bondel, Mangaluru',
  description:
    'blufit Gym is at Bondel Airport Road, Mangaluru 575008. Contact us on WhatsApp or visit in person.',
  alternates: { canonical: '/contact' },
};
