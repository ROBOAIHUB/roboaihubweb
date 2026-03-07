"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const backgrounds: Record<string, string> = {
    "/": "/images/robo-bg.png",            // Home: Standard Hardware
    "/services": "/images/robo-bg-3.png",    // Services: Mech Hangar
    "/research": "/images/robo-bg-2.png",    // Research: Cyber Brain
    "/team": "/images/robo-bg-2.png",        // Team: Cyber Brain
    "/products": "/images/robo-bg-4.png",    // Products: Showroom
    "/shop": "/images/robo-bg-4.png",        // Shop: Showroom
    "/admin": "/images/robo-bg-5.png",       // Admin: Command Center
};

const defaultBg = "/images/robo-bg.png";

export function RoboBackground() {
    const pathname = usePathname();
    const [currentBg, setCurrentBg] = useState(defaultBg);
    const { scrollY } = useScroll();
    const backgroundY = useTransform(scrollY, [0, 1000], [0, 150]); // Move down as we scroll down (parallax)
    const opacity = useTransform(scrollY, [0, 500], [0.8, 0.4]); // Fade out slightly as we scroll

    useEffect(() => {
        // Find the best matching background (startsWith logic)
        // Check exact match first
        if (backgrounds[pathname]) {
            setCurrentBg(backgrounds[pathname]);
            return;
        }

        // Check if path starts with a key (e.g. /admin/dashboard -> /admin)
        const match = Object.keys(backgrounds).find(key => key !== "/" && pathname.startsWith(key));
        if (match) {
            setCurrentBg(backgrounds[match]);
        } else {
            setCurrentBg(defaultBg);
        }
    }, [pathname]);

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#0B0F14]">
            {/* Dark overlay mesh */}
            {/* Overlay removed for brightness */}

            {/* Animated Background Image */}
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={currentBg}
                    className="absolute inset-0 w-full h-full"
                    style={{ y: backgroundY }}
                    initial={{ opacity: 0, scale: 1.15 }} // Scaled up for parallax movement
                    animate={{ opacity: 0.8, scale: 1.15 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                >
                    <Image
                        src={currentBg}
                        alt="Robotics Background"
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>
            </AnimatePresence>

            {/* Moving Grid Lines */}
            <div className="absolute inset-0 z-20 bg-[url('/grid.svg')] opacity-10" />


        </div >
    );
}
