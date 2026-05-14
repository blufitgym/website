import type { Metadata } from 'next';
import { membershipMetadata } from '@/lib/metadata';
import { PricingCards } from '@/components/membership/PricingCards';
import { IncludesList } from '@/components/membership/IncludesList';
import { FadeUp } from '@/components/ui/FadeUp';
import { Button } from '@/components/ui/Button';
import { WA_PLAN_HELP } from '@/lib/constants';

export const metadata: Metadata = membershipMetadata;

export default function MembershipPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-dark2 pt-28 pb-16 sm:pt-36 sm:pb-20">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(59,125,191,0.06)_0%,transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="max-w-3xl">
              <div className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-brand-blue">
                Pricing
              </div>
              <h1 className="max-w-[10ch] font-display text-[clamp(2rem,8vw,4rem)] font-bold uppercase leading-[0.94] tracking-display text-white sm:max-w-none sm:text-[64px]">
                Membership Plans
              </h1>
              <p className="mt-5 max-w-[28rem] text-[16px] leading-[1.7] text-brand-light sm:max-w-2xl sm:text-[18px] sm:leading-[1.8]">
                Transparent pricing. No hidden charges. Choose the plan that works for you.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="border-t border-white/6 bg-brand-black py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-none border-2 border-brand-pink bg-brand-card2 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] sm:p-12">
            <div className="inline-flex rounded-full bg-brand-pink px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-white">
              Limited Offer - First 100 Members Only
            </div>
            <h2 className="mt-6 max-w-[11ch] font-display text-[clamp(2rem,8vw,3.5rem)] font-bold uppercase leading-[0.95] tracking-display text-white sm:max-w-none sm:text-[48px]">
              Get Our Best Rate Ever
            </h2>
            <p className="mt-4 max-w-[30rem] text-[15px] leading-[1.7] text-brand-light sm:max-w-3xl sm:text-[16px] sm:leading-[1.8]">
              This offer is available exclusively for our first 50 members and will not be
              repeated after spots are filled.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                ['Adults', 'Rs 14,400 / Year'],
                ['Students', 'Rs 9,600 / Year'],
                ['Admission', 'Rs 500 one-time'],
              ].map(([label, value]) => (
                <div key={label} className="border border-white/10 bg-white/5 p-5">
                  <div className="text-[11px] uppercase tracking-widest text-brand-muted">{label}</div>
                  <div className="mt-2 font-display text-[24px] uppercase leading-none text-white sm:text-[30px]">
                    {value}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button href={WA_PLAN_HELP} target="_blank" variant="whatsapp">
                Claim This Offer on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      <PricingCards />
      <IncludesList />

      <section className="bg-brand-dark2 py-16 text-center sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mx-auto max-w-[12ch] font-display text-[clamp(2rem,8vw,3.5rem)] font-bold uppercase leading-[0.95] tracking-display text-white sm:max-w-none sm:text-[48px]">
            Not Sure Which Plan to Pick?
          </h2>
          <p className="mx-auto mt-5 max-w-[30rem] text-[15px] leading-[1.7] text-brand-light sm:text-[16px] sm:leading-[1.8]">
            Talk to us on WhatsApp and we will help you choose the right membership based on your
            goals and schedule.
          </p>
          <div className="mt-8">
            <Button href={WA_PLAN_HELP} target="_blank" variant="whatsapp">
              Chat With Us on WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
