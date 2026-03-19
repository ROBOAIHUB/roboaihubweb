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

function FloatingMaroonShapes() {
    return (
        <div className="absolute inset-0 z-[30] overflow-hidden pointer-events-none mix-blend-screen">
            {/* Circle 1 - Top Left */}
            <motion.div
                className="absolute top-[5%] left-[5%] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#600000]/60 to-[#a00000]/30 blur-[40px]"
                animate={{ y: [0, -50, 0], x: [0, 30, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Circle 2 - Bottom Right */}
            <motion.div
                className="absolute bottom-[5%] right-[5%] w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-[#800000]/50 to-[#400000]/40 blur-[50px]"
                animate={{ y: [0, 60, 0], x: [0, -40, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Circle 3 - Center Left */}
            <motion.div
                className="absolute top-[40%] left-[20%] w-[250px] h-[250px] rounded-full border-[4px] border-[#a00000] opacity-70 shadow-[0_0_30px_rgba(160,0,0,0.8)]"
                animate={{ y: [0, -30, 0], x: [0, 20, 0], rotate: [0, 180] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
            {/* Circle 4 - Top Right */}
            <motion.div
                className="absolute top-[15%] right-[25%] w-[180px] h-[180px] rounded-full border-[2px] border-[#ff2a2a] opacity-50 shadow-[0_0_20px_rgba(255,42,42,0.6)]"
                animate={{ y: [0, 40, 0], x: [0, -20, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Triangle 1 - Center Right */}
            <motion.svg
                className="absolute top-[50%] right-[10%] w-[300px] h-[300px] opacity-80 drop-shadow-[0_0_25px_rgba(200,0,0,0.8)]"
                viewBox="0 0 100 100"
                animate={{ y: [0, -40, 0], x: [0, -30, 0], rotate: [0, 360] }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            >
                <polygon points="50,10 95,90 5,90" fill="rgba(160,0,0,0.2)" stroke="#ff1a1a" strokeWidth="1.5" />
            </motion.svg>

            {/* Triangle 2 - Bottom Left */}
            <motion.svg
                className="absolute bottom-[10%] left-[10%] w-[350px] h-[350px] opacity-70 drop-shadow-[0_0_30px_rgba(160,0,0,0.7)]"
                viewBox="0 0 100 100"
                animate={{ y: [0, 50, 0], x: [0, 40, 0], rotate: [0, -360] }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
                <polygon points="50,10 95,90 5,90" fill="rgba(128,0,0,0.15)" stroke="#cc0000" strokeWidth="2" />
            </motion.svg>
        </div>
    );
}

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

            {/* Maroon Floating Shapes */}
            <FloatingMaroonShapes />

            {/* Moving Grid Lines */}
            <div className="absolute inset-0 z-20 opacity-10" />


        </div >
    );
}
