'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Camera, Coffee, Fan, Footprints, Lock, UsersRound, Dumbbell } from 'lucide-react';
import { FadeUp } from '@/components/ui/FadeUp';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { useRef } from 'react';

const facilities = [
  {
    icon: Footprints,
    title: 'Outdoor Running Track',
    desc: 'Open space for warm-ups, cardio, and active recovery.',
  },
  {
    icon: Coffee,
    title: 'Fitness Supplement Café',
    desc: 'Quick fuel and recovery options before or after training.',
  },
  {
    icon: Dumbbell,
    title: 'Professional Training Support',
    desc: 'Guidance from experienced trainers across every session.',
  },
  {
    icon: Lock,
    title: 'Secure Gym Lockers',
    desc: 'Safe storage for your belongings.',
  },
  {
    icon: UsersRound,
    title: 'Separate Ladies Batch',
    desc: 'Comfortable sessions planned for privacy and confidence.',
  },
  {
    icon: Camera,
    title: '24x7 Surveillance',
    desc: 'Round-the-clock monitoring for a safer training environment.',
  },
  {
    icon: Fan,
    title: 'Fully Air Conditioned Space',
    desc: 'A cool, comfortable environment for focused workouts.',
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
    <section ref={ref} className="bg-brand-dark py-16 sm:py-28 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[55%_45%] lg:gap-12 lg:px-8">
        <FadeUp>
          <div>
            <SectionLabel>Our Facilities</SectionLabel>
            <h2 className="max-w-xl font-display text-[clamp(2rem,8vw,3.5rem)] font-bold uppercase leading-[0.96] tracking-display text-white sm:text-[48px] lg:text-[60px]">
              A Gym That Goes Beyond the Weights
            </h2>
            <div className="mt-6 h-[3px] w-12 bg-brand-blue" />
            <p className="mt-6 max-w-2xl text-[15px] leading-[1.7] text-brand-light sm:text-[16px] sm:leading-[1.75]">
              We built more than a gym. Every facility is designed to make your fitness journey
              better, more comfortable, and more rewarding.
            </p>

            <motion.div
              className="relative mt-8 aspect-[16/11] overflow-hidden sm:mt-10 lg:hidden"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                alt="Gym facilities"
                className="object-cover"
                fill
                loading="lazy"
                sizes="100vw"
                src="/Section-image.webp"
              />
            </motion.div>

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
                      <h3 className="font-display text-[17px] uppercase tracking-display text-white sm:text-[18px]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-[13px] leading-6 text-brand-light sm:text-[14px]">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeUp>

        <motion.div
          className="relative hidden min-h-[360px] overflow-hidden sm:min-h-[500px] lg:block lg:min-h-[640px]"
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
            src="/Section-image.webp"
          />
        </motion.div>
      </div>
    </section>
  );
}
