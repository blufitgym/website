import { Button } from '@/components/ui/Button';
import { WA_DEFAULT, MAPS_URL } from '@/lib/constants';

export function ActionStrip() {
  return (
    <section className="border-y border-white/5 bg-brand-dark2 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-[11ch] font-display text-[clamp(2rem,8vw,3.5rem)] font-bold uppercase leading-[0.95] tracking-display text-white sm:max-w-none sm:text-[48px]">
          Ready to Start Your Fitness Journey?
        </h2>
        <p className="mx-auto mt-5 max-w-[30rem] text-[15px] leading-[1.7] text-brand-light sm:mt-6 sm:max-w-2xl sm:text-[16px] sm:leading-[1.8]">
          Visit us at Bondel, Airport Road, Mangaluru - or reach out on WhatsApp.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Button href={WA_DEFAULT} target="_blank" variant="whatsapp">
            WhatsApp Us
          </Button>
          <Button href={MAPS_URL} target="_blank" variant="outline">
            Get Directions
          </Button>
        </div>
      </div>
    </section>
  );
}
