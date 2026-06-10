'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

export default function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: { children: ReactNode; delay?: number; y?: number; className?: string }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
