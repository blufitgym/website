import { FadeUp } from '@/components/ui/FadeUp';
import { SectionLabel } from '@/components/ui/SectionLabel';

export function AboutSection() {
  return (
    <section className="bg-brand-black py-24 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <FadeUp>
            <div className="max-w-xl">
              <SectionLabel>About Blufit</SectionLabel>
              <h2 className="max-w-[12ch] font-display text-[clamp(2rem,8vw,3.5rem)] font-bold uppercase leading-[0.95] tracking-display text-white sm:max-w-none sm:text-[48px]">
                Built for Those Who Take Fitness Seriously
              </h2>
            </div>
          </FadeUp>

          <FadeUp delay={0.08}>
            <div className="max-w-2xl">
              <p className="text-[15px] leading-7 text-brand-light sm:text-[16px]">
                Blufit is a premium fitness centre located in the heart of Bondel, Mangaluru.
                Whether you are just starting out or training hard every day, we have the right
                programme, the right trainers, and the right environment to help you
                reach your&nbsp;goals.
              </p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
