"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlitchTextProps {
    text: string;
    className?: string;
}

export function GlitchText({ text, className }: GlitchTextProps) {
    return (
        <div className={cn("relative inline-block font-bold tracking-widest", className)}>
            {/* Base Layer - Now with Background */}
            <div className="relative z-10 px-3 py-1.5 border border-neon-cyan/50 bg-black/60 shadow-[0_0_15px_rgba(0,243,255,0.3)] overflow-hidden">
                <span className="relative z-20 text-neon-cyan drop-shadow-[0_0_5px_rgba(0,243,255,0.8)]">
                    {text}
                </span>

                {/* Horizontal Scanline */}
                <motion.div
                    className="absolute top-0 left-0 w-full h-[2px] bg-white/50 z-30 mix-blend-overlay"
                    animate={{ top: ["0%", "100%", "0%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />

                {/* Background Noise/Grid */}
                <div className="absolute inset-0 opacity-20 bg-cover z-0" />
            </div>

            {/* Red Glitch Layer (Offset & Sliced Box) */}
            <motion.div
                className="absolute inset-0 z-0 select-none pointer-events-none mix-blend-screen"
                animate={{
                    clipPath: [
                        "inset(20% 0 50% 0)",
                        "inset(60% 0 10% 0)",
                        "inset(0% 0 0% 0)",
                        "inset(80% 0 5% 0)"
                    ],
                    x: [-4, 4, -2, 2, 0],
                    opacity: [0, 1, 0, 1]
                }}
                transition={{
                    duration: 0.25,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "linear",
                    repeatDelay: 0.5
                }}
            >
                <div className="w-full h-full px-3 py-1.5 border border-red-500 bg-red-900/40 text-red-400">
                    {text}
                </div>
            </motion.div>

            {/* Blue Glitch Layer (Offset & Sliced Box) */}
            <motion.div
                className="absolute inset-0 z-0 select-none pointer-events-none mix-blend-screen"
                animate={{
                    clipPath: [
                        "inset(10% 0 70% 0)",
                        "inset(10% 0 60% 0)",
                        "inset(0% 0 0% 0)",
                        "inset(30% 0 50% 0)"
                    ],
                    x: [4, -4, 2, -2, 0],
                    opacity: [0, 1, 0, 1]
                }}
                transition={{
                    duration: 0.3,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "linear",
                    repeatDelay: 0.7
                }}
            >
                <div className="w-full h-full px-3 py-1.5 border border-blue-500 bg-blue-900/40 text-blue-400">
                    {text}
                </div>
            </motion.div>

            {/* Violent Shake Container (Applies to everything) */}
            <motion.div
                className="absolute inset-0 border border-white/40 z-50 pointer-events-none"
                animate={{
                    x: [0, -2, 2, 0],
                    opacity: [0, 0.5, 0]
                }}
                transition={{
                    duration: 0.1,
                    repeat: Infinity,
                    repeatDelay: 2
                }}
            />
        </div>
    );
}
