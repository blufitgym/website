import type { Metadata } from 'next';

export const siteUrl = 'https://blufitgym.com';

export const homeMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Blu Fit Gym Bondel Mangalore | Premium Fitness Center',
  description:
    'Premium Fitness Blue Fit Gym in Bondel, Mangalore, for weight training, cardio, Zumba, MMA, personal training, nutrition guidance, and modern fitness facilities.',
  keywords: [
    'gym Mangaluru',
    'gym Bondel',
    'fitness centre Mangaluru',
    'Blu Fit Gym',
    'personal training Mangaluru',
    'MMA Mangaluru',
    'Zumba Mangaluru',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Blu Fit Gym Bondel Mangalore | Premium Fitness Center',
    description:
      'Experience premium fitness at Blu Fit Gym, Bondel, Mangalore with expert trainers, Zumba, MMA, cardio, strength training, nutrition guidance, and modern facilities.',
    url: siteUrl,
    siteName: 'Blu Fit Gym',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blu Fit Gym Bondel Mangalore | Premium Gym',
    description:
      'Train at Blu Fit Gym in Bondel, Mangalore with personal training, Zumba, MMA, cardio workouts, nutrition guidance, and premium gym facilities.',
  },
};

export const membershipMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Membership Plans | Blu Fit Gym Mangaluru',
  description:
    'View Blu Fit Gym membership pricing for adults and students. Inaugural offer - Rs 14,999/year for adults, Rs 9,999/year for students.',
  alternates: { canonical: '/membership' },
};

export const contactMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Find Us | Blu Fit Gym, Bondel, Mangaluru',
  description:
    'Blu Fit Gym is at Bondel Airport Road, Mangaluru 575008. Contact us on WhatsApp or visit in person.',
  alternates: { canonical: '/contact' },
};

export const privacyMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Privacy Policy | Blu Fit Gym',
  description: 'Read how Blu Fit Gym collects, uses, and protects your personal information.',
  alternates: { canonical: '/privacy-policy' },
};

export const termsMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Terms and Conditions | Blu Fit Gym',
  description: 'Review the terms that apply when using the Blu Fit Gym website and services.',
  alternates: { canonical: '/terms' },
};
