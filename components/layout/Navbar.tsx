'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { WA_DEFAULT } from '@/lib/constants';
import { usePathname } from 'next/navigation';

const logoSrc = encodeURI('/Blue Fit Logo.png');

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Membership', href: '/membership' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-[55] sm:top-10">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div
          className={[
            'flex h-[60px] items-center justify-between border transition-all duration-300 sm:h-[68px]',
            scrolled
              ? 'border-white/10 bg-[#0a0f16]/95 shadow-[0_18px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl'
              : 'border-white/8 bg-[#0a0f16]/88 shadow-[0_16px_36px_rgba(0,0,0,0.18)] backdrop-blur-md',
          ].join(' ')}
        >
          <Link href="/" className="relative flex items-center px-3 sm:px-4">
            <Image
              alt="blufit logo"
              className="h-8 w-auto sm:h-12"
              height={72}
              priority
              src={logoSrc}
              width={240}
            />
          </Link>

          <nav className="hidden items-center gap-10 lg:flex">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  className={[
                    'text-[13px] font-semibold uppercase tracking-widest transition-colors hover:text-white',
                    active
                      ? 'text-white underline decoration-brand-blue underline-offset-4'
                      : 'text-brand-light',
                  ].join(' ')}
                  href={item.href}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden px-4 lg:block">
            <Button href={WA_DEFAULT} target="_blank" variant="primary" className="px-6 py-3">
              WhatsApp Us
            </Button>
          </div>

          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="inline-flex h-10 w-10 items-center justify-center border border-white/10 bg-white/5 text-white lg:hidden"
            onClick={() => setOpen((value) => !value)}
            type="button"
          >
            {open ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-0 z-[54] flex flex-col bg-brand-black px-6 pt-24 lg:hidden">
          <div className="mx-auto flex w-full max-w-lg flex-1 flex-col items-center justify-center gap-8 text-center">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                className="font-display text-[40px] uppercase leading-none text-white transition-colors hover:text-brand-blue sm:text-[48px]"
                href={item.href}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {item.label}
              </Link>
            ))}
            <Button href={WA_DEFAULT} target="_blank" variant="primary" className="mt-6 w-full max-w-sm">
              WhatsApp Us
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
