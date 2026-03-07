'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface FloatingCardProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export function FloatingCard({ children, className, delay = 0 }: FloatingCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay, ease: "easeOut" }}
            whileHover={{ y: -5, boxShadow: "0 0 25px rgba(0, 243, 255, 0.3)" }}
            className={cn(
                "glass p-6 rounded-2xl border border-white/10 backdrop-blur-xl transition-all duration-300",
                className
            )}
        >
            {children}
        </motion.div>
    );
}
