'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { FadeUp } from '@/components/ui/FadeUp';
import { WA_DEFAULT } from '@/lib/constants';

const heroWords = ['Where', 'Fitness', 'Meets', 'Dedication.'];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-black">
      <div className="absolute inset-0">
        <Image
          alt="Dark gym interior"
          className="object-cover brightness-[0.9]"
          fill
          priority
          sizes="100vw 100vh"
          src="/Web - Hersection.png"
        />
      </div>

      {/* <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,12,16,0.95)_0%,rgba(8,12,16,0.75)_50%,rgba(8,12,16,0.28)_100%),linear-gradient(to_top,rgba(8,12,16,0.9)_0%,transparent_50%)]" /> */}

      <div className="absolute inset-0 lg:hidden ">
        <Image
          alt="Athlete silhouette"
          className="object-cover object-right-bottom brightness-[0.9]"
          fill
          priority
          sizes="45vw"
          src="/Phone - Hersection.webp"
        />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100svh-68px)] max-w-7xl items-center px-4 py-16 sm:min-h-[calc(100svh-124px)] sm:px-6 sm:py-20 lg:px-8">
        <div className="max-w-3xl">
          <FadeUp>
            <div className="mb-5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-brand-blue">
              <MapPin className="h-3.5 w-3.5" />
              Now Open - Bondel - Mangaluru
            </div>
          </FadeUp>

          <div className="overflow-hidden">
            {heroWords.map((word, index) => (
              <motion.h1
                key={word}
                className="max-w-[8ch] font-display text-[clamp(2.2rem,9vw,4rem)] font-bold uppercase leading-[0.92] tracking-display text-white sm:max-w-none sm:text-[64px] md:text-[84px] lg:text-[108px]"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 + index * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                style={{ display: 'block' }}
              >
                {word}
              </motion.h1>
            ))}
          </div>

          <FadeUp delay={0.9}>
            <p className="mt-4 max-w-[26rem] text-[16px] leading-[1.65] text-brand-light text-pretty sm:max-w-xl sm:text-[20px] sm:leading-[1.75]">
              Premium fitness in the heart of Bondel. Train with purpose, build strength, and keep
              showing up for the version of you that is still in progress.
            </p>
          </FadeUp>

          <FadeUp delay={1.05}>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="/membership" variant="primary">
                <span>View Membership Plans</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href={WA_DEFAULT} target="_blank" variant="outline">
                WhatsApp Us
              </Button>
            </div>
          </FadeUp>
        </div>

        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[11px] uppercase tracking-widest text-brand-light md:flex">
          <span>Scroll</span>
          <span className="h-16 w-px animate-pulse bg-gradient-to-b from-brand-blue to-transparent" />
        </div>
      </div>
    </section>
  );
}
