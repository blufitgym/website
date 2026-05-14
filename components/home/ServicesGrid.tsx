'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import { FadeUp } from '@/components/ui/FadeUp';
import { SectionLabel } from '@/components/ui/SectionLabel';

const services = [
  {
    name: 'Weight Training',
    desc: 'Build strength with professional-grade equipment and expert guidance.',
    src: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80',
  },
  {
    name: 'Cardio Exercises',
    desc: 'Improve endurance with structured cardio programmes and outdoor track access.',
    src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80',
  },
  {
    name: 'Personal Training',
    desc: 'One-on-one sessions designed around your specific fitness goals.',
    src: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80',
  },
  {
    name: 'Diet and Nutrition',
    desc: 'Customised nutrition plans to complement your training.',
    src: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80',
  },
  {
    name: 'Fitness Programs',
    desc: 'Structured group programmes for all fitness levels.',
    src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80',
  },
  // {
  //   name: 'Zumba',
  //   desc: 'High-energy dance fitness sessions for all ages.',
  //   src: 'https://images.unsplash.com/photo-1594737626072-90dc274bc2bd?w=600&q=80',
  // },
  // {
  //   name: 'MMA',
  //   desc: 'Mixed martial arts training for discipline, strength, and self-defence.',
  //   src: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?w=600&q=80',
  // },
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
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scrollCarousel = (direction: 'left' | 'right') => {
    const node = carouselRef.current;
    if (!node) return;

    const amount = Math.round(node.clientWidth * 0.82);
    node.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <section className="bg-brand-black py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>What We Offer</SectionLabel>
            <h2 className="font-display text-[clamp(2rem,8vw,3.5rem)] font-bold uppercase leading-[0.96] tracking-display text-white sm:text-[48px] lg:text-[60px]">
              Everything You Need Under One Roof
            </h2>
            <div className="mx-auto mt-4 h-[2px] w-12 bg-brand-blue" />
            <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-[1.7] text-brand-light sm:text-[18px]">
              Seven services. One destination. Expert trainers. Real results.
            </p>
          </div>
        </FadeUp>

        <motion.div
          className="mt-16 grid gap-px bg-white/5 sm:grid-cols-2 lg:hidden"
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
                sizes="(max-width: 640px) 100vw, 50vw"
                src={service.src}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <div className="max-w-[18rem]">
                    <h3 className="min-h-[2.8rem] font-display text-[20px] uppercase leading-[1] tracking-[0.04em] text-white sm:min-h-[3.2rem] sm:text-[24px] lg:text-[26px]">
                      {service.name}
                    </h3>
                    <p className="mt-1 min-h-[2.5rem] text-[12px] leading-[1.6] text-brand-light sm:text-[13px]">
                      {service.desc}
                    </p>
                  </div>
                </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-16 hidden lg:block">
          <div
            ref={carouselRef}
            className="hide-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2"
          >
            {services.map((service) => (
              <motion.article
                key={service.name}
                className="group relative aspect-[3/4] min-w-[32%] shrink-0 snap-start overflow-hidden bg-brand-card xl:min-w-[30%] 2xl:min-w-[28%]"
                variants={cardVariants}
              >
                <Image
                  alt={service.name}
                  className="object-cover brightness-[0.7] transition duration-500 ease-out group-hover:scale-[1.06] group-hover:brightness-[0.5]"
                  fill
                  loading="lazy"
                  sizes="(max-width: 1280px) 33vw, 28vw"
                  src={service.src}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <div className="max-w-[18rem]">
                    <h3 className="min-h-[2.8rem] font-display text-[20px] uppercase leading-[1] tracking-[0.04em] text-white sm:min-h-[3.2rem] sm:text-[24px] lg:text-[26px]">
                      {service.name}
                    </h3>
                    <p className="mt-1 min-h-[2.5rem] text-[12px] leading-[1.6] text-brand-light sm:text-[13px]">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-end gap-3">
            <button
              aria-label="Scroll services left"
              className="inline-flex h-12 w-12 items-center justify-center border border-white/10 bg-white/5 text-white transition-colors hover:border-brand-blue hover:text-brand-blue"
              onClick={() => scrollCarousel('left')}
              type="button"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              aria-label="Scroll services right"
              className="inline-flex h-12 w-12 items-center justify-center border border-white/10 bg-white/5 text-white transition-colors hover:border-brand-blue hover:text-brand-blue"
              onClick={() => scrollCarousel('right')}
              type="button"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
