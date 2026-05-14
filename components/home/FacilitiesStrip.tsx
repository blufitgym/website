'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Coffee, Lock, Route, Shield, Sparkles } from 'lucide-react';
import { FadeUp } from '@/components/ui/FadeUp';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { useRef } from 'react';

const facilities = [
  {
    icon: Route,
    title: 'Outdoor Running Track',
    desc: 'Dedicated track for cardio and warm-up.',
  },
  {
    icon: Coffee,
    title: 'Cafe Inside the Gym',
    desc: 'Fuel up before or refuel after training.',
  },
  {
    icon: Lock,
    title: 'Secure Gym Lockers',
    desc: 'Safe storage for your belongings.',
  },
  {
    icon: Sparkles,
    title: 'Separate Ladies Batch',
    desc: 'Dedicated sessions in a comfortable space.',
  },
  {
    icon: Shield,
    title: '24x7 Surveillance',
    desc: 'Full-premise cameras for your security.',
  },
];

export function FacilitiesStrip() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  return (
    <section ref={ref} className="bg-brand-dark py-28 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[55%_45%] lg:px-8">
        <FadeUp>
          <div>
            <SectionLabel>Our Facilities</SectionLabel>
            <h2 className="max-w-xl font-display text-[42px] font-bold uppercase leading-[0.95] tracking-display text-white sm:text-[58px] lg:text-[72px]">
              A Gym That Goes Beyond the Weights
            </h2>
            <div className="mt-6 h-[3px] w-12 bg-brand-blue" />
            <p className="mt-6 max-w-2xl text-[16px] leading-[1.75] text-brand-light">
              We built more than a gym. Every facility is designed to make your fitness journey
              better, more comfortable, and more rewarding.
            </p>

            <div className="mt-10 space-y-3">
              {facilities.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 border border-white/5 bg-brand-card/50 px-4 py-4 transition-colors hover:border-brand-blue/30"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-brand-blueGlow text-brand-blue">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-[18px] uppercase tracking-display text-white">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-[14px] leading-6 text-brand-light">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeUp>

        <motion.div
          className="relative min-h-[640px] overflow-hidden"
          style={{ y }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            alt="Gym facilities"
            className="object-cover"
            fill
            loading="lazy"
            sizes="(max-width: 1024px) 100vw, 45vw"
            src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=900&q=80"
          />
        </motion.div>
      </div>
    </section>
  );
}
