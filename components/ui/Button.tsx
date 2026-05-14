import Link from 'next/link';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';

type Variant = 'primary' | 'outline' | 'ghost' | 'whatsapp' | 'white';

type ButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  target?: string;
  variant?: Variant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variantClasses: Record<Variant, string> = {
  primary: 'bg-brand-blue text-white hover:bg-brand-blueDark',
  outline:
    'border border-white/30 text-white hover:border-brand-blue hover:text-brand-blue bg-transparent',
  ghost: 'text-brand-light hover:text-white bg-transparent',
  whatsapp: 'bg-[#25D366] text-white hover:bg-[#1fba5a]',
  white: 'bg-white text-brand-blue hover:bg-brand-offwhite',
};

function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(' ');
}

export function Button({
  children,
  className,
  href,
  target,
  variant = 'primary',
  type = 'button',
  ...props
}: ButtonProps) {
  const base =
    'inline-flex w-full items-center justify-center gap-2 rounded-none px-8 py-4 text-[13px] font-semibold uppercase tracking-wide transition-all duration-200 ease-out sm:w-auto';
  const classes = cn(base, variantClasses[variant], className);

  if (href) {
    return (
      <Link className={classes} href={href} target={target}>
        {variant === 'whatsapp' ? <WhatsAppIcon className="h-4 w-4 shrink-0" /> : null}
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} type={type} {...props}>
      {variant === 'whatsapp' ? <WhatsAppIcon className="h-4 w-4 shrink-0" /> : null}
      {children}
    </button>
  );
}
