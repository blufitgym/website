import type { Metadata } from 'next';
import { homeMetadata } from '@/lib/metadata';
import { Hero } from '@/components/home/Hero';
import { ServicesGrid } from '@/components/home/ServicesGrid';
import { SectionDivider } from '@/components/home/SectionDivider';
import { FacilitiesStrip } from '@/components/home/FacilitiesStrip';
import { InauguralOffer } from '@/components/home/InauguralOffer';
import { ActionStrip } from '@/components/home/ActionStrip';

export const metadata: Metadata = homeMetadata;

function Stats() {
  const stats = [
    { value: '7+', label: 'Services' },
    { value: '100', label: 'Founding Member Spots' },
    { value: '1', label: 'Outdoor Running Track' },
    { value: '3', label: 'Premium Equipment Zones' },
  ];

  return (
    <section className="border-y border-white/5 bg-brand-dark2 py-10">
      <div className="mx-auto grid max-w-7xl gap-px px-4 sm:grid-cols-2 lg:grid-cols-4 sm:px-6 lg:px-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center justify-center border-l border-white/7 px-6 py-8 first:border-l-0"
          >
            <div className="font-display text-[44px] leading-none text-brand-blue">{stat.value}</div>
            <div className="mt-2 text-center text-[11px] uppercase tracking-widest text-brand-muted">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesGrid />
      <SectionDivider
        alt="Moody gym divider"
        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
      />
      <FacilitiesStrip />
      <SectionDivider
        alt="Premium gym divider"
        src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=1920&q=80"
        height={380}
        brightness={35}
      />
      <InauguralOffer />
      <SectionDivider
        alt="Gym divider"
        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
        height={360}
        brightness={30}
      />
      <ActionStrip />
    </>
  );
}
