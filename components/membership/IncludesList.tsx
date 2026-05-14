import { CheckCircle2 } from 'lucide-react';
import { FadeUp } from '@/components/ui/FadeUp';
import { SectionLabel } from '@/components/ui/SectionLabel';

const items = [
  'Access to fully equipped weight training area',
  'Cardio zone and outdoor running track',
  'Secure locker facility',
  'Surveillance-secured premises',
  'Separate ladies batch timings',
  'Guidance from certified trainers',
  'Access to in-gym cafe',
];

export function IncludesList() {
  return (
    <section className="bg-brand-black py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <SectionLabel>Included</SectionLabel>
          <h2 className="font-display text-[42px] font-bold uppercase leading-[0.95] tracking-display text-white sm:text-[58px]">
            Every Membership Includes
          </h2>
        </FadeUp>

        <div className="mt-10 grid gap-3 md:grid-cols-2">
          {items.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 border border-white/4 bg-brand-card/50 px-4 py-3 text-[14px] font-medium text-brand-offwhite transition-colors hover:border-brand-blue/30"
            >
              <CheckCircle2 className="h-5 w-5 text-[#25D366]" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
