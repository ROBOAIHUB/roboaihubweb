import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export function GlassCard({ children, className, hoverEffect = false }: GlassCardProps) {
    return (
        <div
            className={cn(
                "glass rounded-2xl p-6 transition-all duration-300 border border-white/10",
                hoverEffect && "glass-hover cursor-pointer",
                className
            )}
        >
            {children}
        </div>
    );
}
