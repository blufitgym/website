import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70svh] max-w-4xl flex-col items-start justify-center px-4 sm:px-6 lg:px-8">
      <div className="text-[11px] font-semibold uppercase tracking-widest text-brand-blue">
        Not Found
      </div>
      <h1 className="mt-4 font-display text-[clamp(2.25rem,9vw,4rem)] uppercase leading-none text-white sm:text-[64px]">
        Page not found
      </h1>
      <p className="mt-4 max-w-xl text-[16px] leading-[1.8] text-brand-light">
        The page you were looking for does not exist. Head back home or check the membership plans.
      </p>
      <div className="mt-8 flex gap-4">
        <Button href="/" variant="primary">
          Go Home
        </Button>
        <Button href="/membership" variant="outline">
          Membership
        </Button>
      </div>
    </section>
  );
}
