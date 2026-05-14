'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { WA_DEFAULT } from '@/lib/constants';
import { usePathname } from 'next/navigation';

const logoSrc = encodeURI('/Blue Fit Logoo.png');

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
    <header className="relative z-[55]">
      <div
        className={[
          'w-full transition-all duration-300',
          scrolled
            ? 'bg-[#0a0f16]/98 border-b border-white/5 shadow-lg backdrop-blur-xl h-[60px] sm:h-[72px]'
            : 'bg-[#0a0f16]/90 border-b border-white/5 backdrop-blur-md h-[68px] sm:h-[84px]',
        ].join(' ')}
      >
        <div className="mx-auto flex h-full w-full items-center justify-between px-4 sm:px-8 lg:px-12">
          <Link href="/" className="relative flex items-center px-3 sm:px-4">
            <Image
              alt="blufit logo"
              className="h-10 w-auto sm:h-12"
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
            className="inline-flex h-10 w-10 items-center justify-center border border-[#263042] bg-[#101724] text-white lg:hidden"
            onClick={() => setOpen((value) => !value)}
            type="button"
          >
            {open ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="absolute inset-x-0 top-full z-[54] lg:hidden">
          <div className="w-full bg-[#0a0f16]/98 px-5 py-8 shadow-2xl backdrop-blur-2xl border-b border-white/5">
            <div className="flex flex-col gap-5 text-center">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  className="font-display text-[22px] uppercase leading-none tracking-[0.08em] text-white transition-colors hover:text-brand-blue sm:text-[28px]"
                  href={item.href}
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  {item.label}
                </Link>
              ))}
              <Button href={WA_DEFAULT} target="_blank" variant="primary" className="mt-2 w-full">
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
