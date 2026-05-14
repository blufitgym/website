import { MapPin, Phone, Mail, Instagram, Clock3 } from 'lucide-react';
import Link from 'next/link';
import type { ComponentType } from 'react';
import {
  ADDRESS,
  EMAIL,
  HOURS_SUNDAY,
  HOURS_WEEKDAY,
  INSTAGRAM as INSTAGRAM_URL,
  PHONE,
  WA_DEFAULT,
} from '@/lib/constants';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';

const cards = [
  { icon: MapPin, label: 'Address', value: ADDRESS },
  { icon: Phone, label: 'Phone', value: PHONE, href: `tel:${PHONE.replace(/[^0-9+]/g, '')}` },
  { icon: WhatsAppIcon, label: 'WhatsApp', value: 'Message us on WhatsApp', href: WA_DEFAULT },
  { icon: Mail, label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@blufitgym',
    href: INSTAGRAM_URL,
  },
];

export function ContactInfo() {
  return (
    <div className="space-y-3">
      {cards.map((card) => {
        const Icon = card.icon as ComponentType<{ className?: string }>;
        const isWhatsApp = card.label === 'WhatsApp';
        const Content = (
          <div className="flex items-start gap-4 border border-white/5 bg-brand-card px-4 py-4 sm:px-5">
            {isWhatsApp ? (
              <Icon className="h-[42px] w-[42px] shrink-0" />
            ) : (
              <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center bg-brand-blueGlow text-brand-blue">
                <Icon className="h-5 w-5" />
              </div>
            )}
            <div className="min-w-0 text-[14px] leading-6 text-brand-light">
              <div className="text-[12px] font-semibold uppercase tracking-widest text-white">
                {card.label}
              </div>
              <div className="mt-1 break-words">{card.value}</div>
            </div>
          </div>
        );

        if (card.href) {
          return (
            <Link key={card.label} href={card.href} target={card.href.startsWith('http') ? '_blank' : undefined}>
              {Content}
            </Link>
          );
        }

        return <div key={card.label}>{Content}</div>;
      })}

      <div className="mt-8 border-t border-white/8 pt-8">
        <div className="text-[15px] font-display uppercase tracking-widest text-white sm:text-[16px]">Working Hours</div>
        <div className="mt-4 space-y-2 text-[14px] text-brand-light">
          <div className="flex items-center gap-3">
            <Clock3 className="h-4 w-4 text-brand-blue" />
            <span>Mon-Sat: {HOURS_WEEKDAY}</span>
          </div>
          <div className="flex items-center gap-3 pl-7">
            <span>Sunday: {HOURS_SUNDAY}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
