"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface DecodingTextProps {
    text: string;
    className?: string;
    speed?: number; // ms to lock a character
    highlights?: string[];
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

export function DecodingText({ text, className, speed = 15, highlights = [] }: DecodingTextProps) {
    const [displayText, setDisplayText] = useState("");
    const [isComplete, setIsComplete] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        let currentIndex = 0;
        // Reset
        setDisplayText("");
        setIsComplete(false);

        const scramble = () => {
            if (currentIndex >= text.length) {
                setDisplayText(text);
                setIsComplete(true);
                if (intervalRef.current) clearInterval(intervalRef.current);
                return;
            }

            // The fixed part of the string
            const fixedPart = text.substring(0, currentIndex);

            // The scrambling part (show next 3 chars or up to end as random)
            // This gives the "finding" effect
            let randomPart = "";
            const scrambleLength = Math.min(3, text.length - currentIndex);

            for (let i = 0; i < scrambleLength; i++) {
                randomPart += CHARS[Math.floor(Math.random() * CHARS.length)];
            }

            setDisplayText(fixedPart + randomPart);

            // Increment index every 2 cycles to slow down the "locking" but keep scrambling fast
            // Or just increment every cycle
            currentIndex++;
        };

        const startDecoding = () => {
            intervalRef.current = setInterval(scramble, speed);
        };

        const initialDelay = setTimeout(startDecoding, 200);

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
            clearTimeout(initialDelay);
        };
    }, [text, speed]);

    const renderContent = () => {
        if (!isComplete || !highlights || highlights.length === 0) {
            return displayText;
        }

        const regex = new RegExp(`(${highlights.join("|")})`, "gi");
        const parts = text.split(regex);

        return parts.map((part, i) => {
            if (highlights.some(h => h.toLowerCase() === part.toLowerCase())) {
                return <span key={i} className="animate-float-text font-bold text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">{part}</span>;
            }
            return part;
        });
    };

    return (
        <div className={cn("relative", className)}>
            <motion.span className="inline-block break-words whitespace-pre-wrap">
                {renderContent()}
            </motion.span>
            {!isComplete && (
                <span className="inline-block w-[2px] h-[1em] bg-neon-cyan ml-1 align-middle animate-pulse" />
            )}
        </div>
    );
}
