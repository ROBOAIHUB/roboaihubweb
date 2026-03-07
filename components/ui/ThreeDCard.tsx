"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactNode, MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface ThreeDCardProps {
    children: ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export function ThreeDCard({ children, className, hoverEffect = true }: ThreeDCardProps) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!hoverEffect) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXFromCenter = e.clientX - rect.left - width / 2;
        const mouseYFromCenter = e.clientY - rect.top - height / 2;
        x.set(mouseXFromCenter / width);
        y.set(mouseYFromCenter / height);
    };

    const handleMouseLeave = () => {
        if (!hoverEffect) return;
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            style={{
                rotateX: hoverEffect ? rotateX : 0,
                rotateY: hoverEffect ? rotateY : 0,
                transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={cn(
                "relative rounded-2xl transition-all duration-200 ease-linear",
                "glass border border-white/5", // Base glass styles
                hoverEffect && "hover:shadow-2xl hover:shadow-cyan-500/10",
                className
            )}
        >
            <div
                style={{ transform: "translateZ(20px)" }}
                className="relative z-10 h-full"
            >
                {children}
            </div>

            {/* Glare effect */}
            {hoverEffect && (
                <div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity pointer-events-none"
                    style={{ transform: "translateZ(1px)" }}
                />
            )}
        </motion.div>
    );
}
