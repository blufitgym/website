import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import type { ReactNode } from 'react';
import './globals.css';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
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
    default: 'blufit Gym',
    template: '%s | blufit Gym',
  },
  description: 'Premium fitness centre in Bondel, Mangaluru.',
  icons: {
    icon: '/Prompt.png',
    shortcut: '/Prompt.png',
    apple: '/Prompt.png',
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html className={`${display.variable} ${body.variable}`} lang="en">
      <body className="min-h-screen overflow-x-hidden bg-brand-black text-brand-offwhite antialiased">
        <SmoothScroll />
        <AnnouncementBar />
        <Navbar />
        <main className="pt-[68px] sm:pt-[112px]">{children}</main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
