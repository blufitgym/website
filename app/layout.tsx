import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Script from 'next/script';
import type { ReactNode } from 'react';
import './globals.css';
import { Footer } from '@/components/layout/Footer';
import { LayoutClient } from '@/components/layout/LayoutClient';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { WhatsAppFAB } from '@/components/layout/WhatsAppFAB';

const display = Poppins({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const body = Poppins({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://blufitgym.com'),
  title: {
    default: 'Blu Fit Gym Bondel Mangalore | Premium Fitness Center',
    template: '%s | Blu Fit Gym',
  },
  description:
    'Premium Fitness Blue Fit Gym in Bondel, Mangalore, for weight training, cardio, Zumba, MMA, personal training, nutrition guidance, and modern fitness facilities.',
  icons: {
    icon: '/Prompt.png',
    shortcut: '/Prompt.png',
    apple: '/Prompt.png',
  },
  verification: {
    google: 'Mxaz7B5sdbj6XiRmx4_rQRG03iGyPNoTPcAbziKf8Z4',
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html className={`${display.variable} ${body.variable}`} lang="en">
      <body className="min-h-screen overflow-x-hidden bg-brand-black text-brand-offwhite antialiased">
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-E3SQ6QKFDZ`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-E3SQ6QKFDZ');
          `}
        </Script>
        <SmoothScroll />
        <LayoutClient>{children}</LayoutClient>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}

