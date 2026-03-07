'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface MotionContainerProps {
    children: ReactNode;
    delay?: number;
    className?: string;
}

export const MotionContainer = ({ children, delay = 0, className }: MotionContainerProps) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay, ease: "easeOut" }}
        className={className}
    >
        {children}
    </motion.div>
);

export const MotionItem = ({ children, delay = 0, className }: MotionContainerProps) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className={className}
    >
        {children}
    </motion.div>
);

export const MotionImage = ({ src, alt, className }: { src: string, alt: string, className?: string }) => (
    <motion.img
        src={src}
        alt={alt}
        initial={{ scale: 1.1, opacity: 0.5 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={className}
    />
);
