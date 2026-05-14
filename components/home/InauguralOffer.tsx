import { Button } from '@/components/ui/Button';
import { WA_INAUGURAL } from '@/lib/constants';

export function InauguralOffer() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#3b7dbf] via-[#477fc3] to-[#d94b9a] py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_24%)]" />

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <div className="inline-flex max-w-[20rem] items-center rounded-full bg-brand-pink px-5 py-2 text-[10px] font-bold uppercase tracking-widest text-white sm:max-w-none sm:text-[11px]">
          First 50 Members Only
        </div>

        <h2 className="mx-auto mt-6 max-w-[11ch] font-display text-[clamp(2rem,8vw,3.5rem)] font-bold uppercase leading-[0.94] tracking-display text-white sm:max-w-none sm:text-[48px] lg:text-[60px]">
          Inaugural Offer:
          <span className="block">20% OFF on Annual Membership</span>
        </h2>

        <p className="mx-auto mt-5 max-w-[30rem] text-[15px] leading-[1.7] text-white/82 sm:max-w-2xl sm:text-[16px] sm:leading-[1.8]">
       Be among the first 50 to join Blufit and enjoy 20% off your annual membership. Hurry up and claim your offer before the spots fill up
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="border border-white/20 bg-white/15 p-5 text-center backdrop-blur-sm sm:p-7">
            <div className="text-[11px] font-bold uppercase tracking-widest text-white/70">
              Adults
            </div>
            <div className="mt-2 font-display text-[34px] leading-none text-white sm:text-[48px]">₹14,400</div>
            <div className="mt-2 text-[12px] uppercase tracking-wide text-white/75 sm:text-[13px]">Per Year</div>
          </div>
          <div className="border border-white/20 bg-white/15 p-5 text-center backdrop-blur-sm sm:p-7">
            <div className="text-[11px] font-bold uppercase tracking-widest text-white/70">
              Students
            </div>
            <div className="mt-2 font-display text-[34px] leading-none text-white sm:text-[48px]">₹9,600</div>
            <div className="mt-2 text-[12px] uppercase tracking-wide text-white/75 sm:text-[13px]">Per Year</div>
          </div>
        </div>

        <p className="mt-6 text-sm text-white/65">* One-time admission fee of ₹500 applicable.</p>

        <div className="mt-10">
          <Button href={WA_INAUGURAL} target="_blank" variant="white">
            Claim Your Spot on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
