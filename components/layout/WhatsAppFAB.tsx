'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { WA_DEFAULT } from '@/lib/constants';

export function WhatsAppFAB() {
  return (
    <motion.a
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-7 right-7 z-50 inline-flex h-[58px] w-[58px] items-center justify-center bg-[#25D366] text-white shadow-glow"
      href={WA_DEFAULT}
      initial={{ opacity: 0, x: 32, y: 8 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ delay: 1.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      target="_blank"
      whileHover={{ scale: 1.06 }}
    >
      <span className="pointer-events-none absolute -top-10 rounded-none bg-brand-dark px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white opacity-0 transition-opacity group-hover:opacity-100">
        Chat with us
      </span>
      <MessageCircle className="h-6 w-6" />
    </motion.a>
  );
}
