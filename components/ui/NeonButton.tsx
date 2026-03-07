'use client';

import { HTMLMotionProps, motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

// Use HTMLMotionProps directly to avoid conflict with ButtonHTMLAttributes
interface NeonButtonProps extends HTMLMotionProps<"button"> {
    children: ReactNode;
    variant?: 'cyan' | 'purple';
    glow?: boolean;
}

export function NeonButton({
    children,
    className,
    variant = 'cyan',
    glow = true,
    ...props
}: NeonButtonProps) {
    const colorClass = variant === 'cyan' ? 'border-neon-cyan text-neon-cyan' : 'border-neon-purple text-neon-purple';
    const glowClass = glow ? (variant === 'cyan' ? 'shadow-[0_0_15px_rgba(0,243,255,0.4)]' : 'shadow-[0_0_15px_rgba(189,0,255,0.4)]') : '';
    const hoverGlow = variant === 'cyan' ? 'hover:shadow-[0_0_25px_rgba(0,243,255,0.6)]' : 'hover:shadow-[0_0_25px_rgba(189,0,255,0.6)]';
    const bgHover = variant === 'cyan' ? 'hover:bg-neon-cyan/10' : 'hover:bg-neon-purple/10';

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
                "relative px-8 py-3 rounded-xl border-2 font-bold tracking-wider uppercase transition-all duration-300 backdrop-blur-sm",
                colorClass,
                glowClass,
                hoverGlow,
                bgHover,
                className
            )}
            {...props}
        >
            {children}
        </motion.button>
    );
}
