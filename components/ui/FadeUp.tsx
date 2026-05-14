'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type FadeUpProps = {
  children: ReactNode;
  delay?: number;
  once?: boolean;
  className?: string;
};

export function FadeUp({ children, delay = 0, once = true, className }: FadeUpProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
