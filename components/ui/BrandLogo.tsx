import { cn } from "@/lib/utils";

interface BrandLogoProps {
    className?: string;
    textSize?: string;
    withGlow?: boolean;
    showHub?: boolean;
}

export function BrandLogo({ className, textSize = "text-xl", withGlow = true, showHub = true }: BrandLogoProps) {
    return (
        <span className={cn("font-bold font-mono tracking-tighter flex items-center gap-1 select-none",
            textSize,
            withGlow && "drop-shadow-[0_0_15px_rgba(0,243,255,0.3)]",
            className
        )}>
            <span className="text-white">ROBO</span>
            <span className="text-cyan-400">AI</span>
            {showHub && <span className="text-white">HUB</span>}
        </span>
    );
}
