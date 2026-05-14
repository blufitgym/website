'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

type SectionDividerProps = {
  src: string;
  alt: string;
  height?: number;
  brightness?: number;
  overlay?: boolean;
};

export function SectionDivider({
  src,
  alt,
  height = 420,
  brightness = 40,
  overlay = true,
}: SectionDividerProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <div ref={ref} className="relative w-full overflow-hidden" style={{ height }}>
      <motion.div className="absolute inset-0" style={{ y }}>
        <Image
          alt={alt}
          className="object-cover grayscale-[0.3]"
          fill
          loading="lazy"
          sizes="100vw"
          src={src}
          style={{ filter: `brightness(${brightness}%)` }}
        />
      </motion.div>
      {overlay ? <div className="absolute inset-0 bg-black/25" /> : null}
    </div>
  );
}
