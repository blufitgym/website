import { Button } from '@/components/ui/Button';
import { WA_DEFAULT, MAPS_URL } from '@/lib/constants';

export function ActionStrip() {
  return (
    <section className="border-y border-white/5 bg-brand-dark2 py-24">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-[42px] font-bold uppercase leading-[0.95] tracking-display text-white sm:text-[58px]">
          Ready to Start Your Fitness Journey?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-[1.8] text-brand-light">
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
