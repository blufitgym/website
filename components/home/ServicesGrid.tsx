'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FadeUp } from '@/components/ui/FadeUp';
import { SectionLabel } from '@/components/ui/SectionLabel';

const services = [
  {
    name: 'Weight Training',
    desc: 'Free weights, machines, and a focused training floor.',
    src: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80',
  },
  {
    name: 'Cardio Exercises',
    desc: 'Treadmills, conditioning, and moving with intent.',
    src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80',
  },
  {
    name: 'Personal Training',
    desc: 'One-on-one coaching built around your goals.',
    src: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80',
  },
  {
    name: 'Diet & Nutrition',
    desc: 'Practical guidance that keeps your routine honest.',
    src: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80',
  },
  {
    name: 'Fitness Programs',
    desc: 'Structured plans for progress you can actually track.',
    src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80',
  },
  {
    name: 'Zumba',
    desc: 'High-energy group sessions with room to move.',
    src: 'https://images.unsplash.com/photo-1594737626072-90dc274bc2bd?w=600&q=80',
  },
  {
    name: 'MMA',
    desc: 'Technique, conditioning, and discipline in motion.',
    src: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?w=600&q=80',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export function ServicesGrid() {
  return (
    <section className="bg-brand-black py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>What We Offer</SectionLabel>
            <h2 className="font-display text-[42px] font-bold uppercase leading-[0.95] tracking-display text-white sm:text-[58px] lg:text-[72px]">
              Everything You Need Under One Roof
            </h2>
            <div className="mx-auto mt-6 h-[3px] w-12 bg-brand-blue" />
            <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-[1.7] text-brand-light sm:text-[18px]">
              Seven services. One destination. Expert trainers. Real results.
            </p>
          </div>
        </FadeUp>

        <motion.div
          className="mt-16 grid gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.article
              key={service.name}
              className="group relative aspect-[3/4] overflow-hidden bg-brand-card"
              variants={cardVariants}
            >
              <Image
                alt={service.name}
                className="object-cover brightness-[0.7] transition duration-500 ease-out group-hover:scale-[1.06] group-hover:brightness-[0.5]"
                fill
                loading="lazy"
                sizes="(max-width: 640px) 100vw, 25vw"
                src={service.src}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-display text-[28px] uppercase leading-tight text-white">
                  {service.name}
                </h3>
                <p className="mt-1 text-[13px] leading-6 text-brand-light">{service.desc}</p>
                <div className="learn-more mt-3 inline-flex translate-y-2 items-center gap-2 text-[12px] uppercase tracking-widest text-brand-blue opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  Learn More
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
