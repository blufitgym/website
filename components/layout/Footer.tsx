import Image from 'next/image';
import Link from 'next/link';
import { Instagram, MapPin, Clock3, ArrowUpRight } from 'lucide-react';
import { ADDRESS, HOURS_SUNDAY, HOURS_WEEKDAY, INSTAGRAM, MAPS_URL, WA_DEFAULT } from '@/lib/constants';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';

const logoSrc = encodeURI('/Blue Fit Logo.png');

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'Membership', href: '/membership' },
  { label: 'Contact', href: '/contact' },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#050810]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Image alt="blufit logo" height={72} src={logoSrc} width={240} className="h-11 w-auto sm:h-12" />
            <p className="mt-5 max-w-sm text-[13px] leading-7 text-brand-muted">
              Premium fitness in Bondel, built for focused training, strong coaching, and a clean
              club experience.
            </p>
          </div>

          <div>
            <h3 className="mb-5 font-display text-[14px] uppercase tracking-widest text-white">
              Quick Links
            </h3>
            <div className="space-y-3 text-[13px] uppercase tracking-widest text-brand-muted">
              {footerLinks.map((link) => (
                <Link key={link.href} href={link.href} className="block hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 font-display text-[14px] uppercase tracking-widest text-white">
              Contact
            </h3>
            <div className="space-y-3 text-[13px] leading-6 text-brand-muted">
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
                <span>{ADDRESS}</span>
              </p>
              <Link className="flex items-center gap-2 text-white hover:text-brand-blue" href={MAPS_URL}>
                Open in Google Maps
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                className="flex items-center gap-2 text-white hover:text-brand-blue"
                href={WA_DEFAULT}
                target="_blank"
              >
                Message on WhatsApp
                <WhatsAppIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-5 font-display text-[14px] uppercase tracking-widest text-white">
              Hours
            </h3>
            <div className="space-y-3 text-[13px] leading-6 text-brand-muted">
              <p className="flex items-start gap-3">
                <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
                <span>Mon-Sat: {HOURS_WEEKDAY}</span>
              </p>
              <p className="flex items-start gap-3 pl-7">
                <span>Sunday: {HOURS_SUNDAY}</span>
              </p>
            </div>
            <div className="mt-6 flex gap-3">
              <a
                className="inline-flex h-9 w-9 items-center justify-center border border-white/15 text-white transition-colors hover:border-brand-blue hover:text-brand-blue"
                href={INSTAGRAM}
                target="_blank"
                rel="noreferrer"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                className="inline-flex h-9 w-9 items-center justify-center border border-white/15 text-white transition-colors hover:border-brand-blue hover:text-brand-blue"
                href={WA_DEFAULT}
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/[0.06] py-6 text-[13px] text-brand-muted md:flex-row md:items-center md:justify-between">
          <p>Copyright 2026 blufit Gym. All rights reserved.</p>
          <p className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
          </p>
        </div>
        <div className="pb-6 text-center text-[12px] uppercase tracking-widest text-brand-muted">
          Designed and developed by{' '}
          <a
            href="https://megamind.studio"
            className="text-white transition-colors hover:text-brand-blue"
            target="_blank"
            rel="noreferrer"
          >
            Megamind Studios
          </a>
        </div>
      </div>
    </footer>
  );
}
