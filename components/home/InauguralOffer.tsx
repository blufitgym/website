import { Button } from '@/components/ui/Button';
import { WA_INAUGURAL } from '@/lib/constants';

export function InauguralOffer() {
  return (
    <section className="relative overflow-hidden bg-brand-blue py-16 sm:py-24">
      <div className="absolute right-0 top-0 hidden h-[400px] w-[400px] rounded-full border-[60px] border-white/7 sm:block" />
      <div className="absolute bottom-0 left-0 hidden h-[250px] w-[250px] rounded-full border-[50px] border-white/5 sm:block" />

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <div className="inline-flex max-w-[20rem] items-center rounded-full bg-brand-pink px-5 py-2 text-[10px] font-bold uppercase tracking-widest text-white sm:max-w-none sm:text-[11px]">
          Inaugural Offer - First 50 Members Only
        </div>

        <h2 className="mx-auto mt-6 max-w-[11ch] font-display text-[clamp(2rem,8vw,3.5rem)] font-bold uppercase leading-[0.94] tracking-display text-white sm:max-w-none sm:text-[48px] lg:text-[60px]">
          Inaugural Offer:
          <span className="block">Limited to the First 50 Members</span>
        </h2>

        <p className="mx-auto mt-5 max-w-[30rem] text-[15px] leading-[1.7] text-white/82 sm:max-w-2xl sm:text-[16px] sm:leading-[1.8]">
          Join Blufit before the spots run out. This offer is available exclusively for our first
          50 members and will not be repeated.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="border border-white/25 bg-white/15 p-5 text-center sm:p-7">
            <div className="text-[11px] font-bold uppercase tracking-widest text-white/70">
              Adults
            </div>
            <div className="mt-2 font-display text-[34px] leading-none text-white sm:text-[48px]">14,400</div>
            <div className="mt-2 text-[12px] uppercase tracking-wide text-white/75 sm:text-[13px]">Per Year</div>
          </div>
          <div className="border border-white/25 bg-white/15 p-5 text-center sm:p-7">
            <div className="text-[11px] font-bold uppercase tracking-widest text-white/70">
              Students
            </div>
            <div className="mt-2 font-display text-[34px] leading-none text-white sm:text-[48px]">9,600</div>
            <div className="mt-2 text-[12px] uppercase tracking-wide text-white/75 sm:text-[13px]">Per Year</div>
          </div>
        </div>

        <p className="mt-6 text-sm text-white/65">* One-time admission fee of 500 applicable.</p>

        <div className="mt-10">
          <Button href={WA_INAUGURAL} target="_blank" variant="white">
            Claim Your Spot on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
