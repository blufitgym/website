import { Button } from '@/components/ui/Button';
import { WA_INAUGURAL } from '@/lib/constants';

export function InauguralOffer() {
  return (
    <section className="relative overflow-hidden bg-brand-blue py-24">
      <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full border-[60px] border-white/7" />
      <div className="absolute bottom-0 left-0 h-[250px] w-[250px] rounded-full border-[50px] border-white/5" />

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <div className="inline-flex items-center rounded-full bg-brand-pink px-5 py-2 text-[11px] font-bold uppercase tracking-widest text-white">
          Inaugural Offer - First 100 Members Only
        </div>

        <h2 className="mt-6 font-display text-[42px] font-bold uppercase leading-[0.95] tracking-display text-white sm:text-[58px] lg:text-[72px]">
          Inaugural Offer:
          <span className="block">Limited to the First 100 Members</span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-[1.8] text-white/82">
          Join Blufit before the spots run out. This offer is available exclusively for our first
          100 members and will not be repeated.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="border border-white/25 bg-white/15 p-7 text-center">
            <div className="text-[11px] font-bold uppercase tracking-widest text-white/70">
              Adults
            </div>
            <div className="mt-2 font-display text-[56px] leading-none text-white">14,999</div>
            <div className="mt-2 text-[13px] uppercase tracking-wide text-white/75">Per Year</div>
          </div>
          <div className="border border-white/25 bg-white/15 p-7 text-center">
            <div className="text-[11px] font-bold uppercase tracking-widest text-white/70">
              Students
            </div>
            <div className="mt-2 font-display text-[56px] leading-none text-white">9,999</div>
            <div className="mt-2 text-[13px] uppercase tracking-wide text-white/75">Per Year</div>
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
