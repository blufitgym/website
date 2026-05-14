'use client';

import { useMemo, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { WA_PLAN_HELP } from '@/lib/constants';
import { FadeUp } from '@/components/ui/FadeUp';

type PlanKey = 'adult' | 'student';

const pricing = {
  adult: [
    { duration: '1 Month', price: 2500, perMonth: 2500 },
    { duration: '3 Months', price: 6000, perMonth: 2000 },
    { duration: '6 Months', price: 10500, perMonth: 1750 },
    { duration: '1 Year', price: 18000, perMonth: 1500, best: true },
  ],
  student: [
    { duration: '1 Month', price: 1500, perMonth: 1500 },
    { duration: '3 Months', price: 4000, perMonth: 1333 },
    { duration: '6 Months', price: 7000, perMonth: 1167 },
    { duration: '1 Year', price: 12000, perMonth: 1000, best: true },
  ],
};

export function PricingCards() {
  const [plan, setPlan] = useState<PlanKey>('adult');
  const cards = useMemo(() => pricing[plan], [plan]);

  return (
    <section className="bg-brand-dark py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <SectionLabel>Standard Plans</SectionLabel>
          <h2 className="max-w-[12ch] font-display text-[clamp(2rem,8vw,3.5rem)] font-bold uppercase leading-[0.95] tracking-display text-white sm:max-w-none sm:text-[48px]">
            Standard Membership Pricing
          </h2>
        </FadeUp>

        <div className="mt-8 flex w-full max-w-sm border border-white/8 bg-brand-card p-1 sm:inline-flex sm:w-auto">
          <button
            className={[
              'flex-1 px-4 py-3 text-[12px] font-semibold uppercase tracking-widest transition-colors sm:px-5 sm:text-[13px]',
              plan === 'adult' ? 'bg-brand-blue text-white' : 'text-brand-light hover:text-white',
            ].join(' ')}
            onClick={() => setPlan('adult')}
            type="button"
          >
            Adults
          </button>
          <button
            className={[
              'flex-1 px-4 py-3 text-[12px] font-semibold uppercase tracking-widest transition-colors sm:px-5 sm:text-[13px]',
              plan === 'student' ? 'bg-brand-blue text-white' : 'text-brand-light hover:text-white',
            ].join(' ')}
            onClick={() => setPlan('student')}
            type="button"
          >
            Students
          </button>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.duration}
              className="relative border border-white/6 bg-brand-card p-6 text-center transition-transform hover:-translate-y-1 hover:border-brand-blue/40 sm:p-7"
            >
              {card.best ? (
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 border border-brand-blue bg-brand-blue px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                  Best Value
                </div>
              ) : null}

              <div className="text-[12px] uppercase tracking-widest text-brand-muted">
                {card.duration}
              </div>
              <div className="mt-4 font-display text-[36px] leading-none text-white sm:text-[46px]">
                <span className="mr-1 text-[18px] sm:text-[22px]">Rs</span>
                {card.price.toLocaleString('en-IN')}
              </div>
              <div className="mt-2 text-[11px] text-brand-muted sm:text-[12px]">
                Rs {card.perMonth.toLocaleString('en-IN')} / month
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-[13px] leading-6 text-brand-muted">
          * One-time admission fee of Rs 500 applicable on all memberships. Prices include access
          to all general gym facilities.
        </p>

        <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-xl text-[14px] leading-7 text-brand-light">
            Need help picking a plan? We can help based on your goals and schedule.
          </div>
          <Button href={WA_PLAN_HELP} target="_blank" variant="whatsapp">
            Chat With Us on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
