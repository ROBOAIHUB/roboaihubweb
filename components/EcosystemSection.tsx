'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Circle, ChevronRight, Brain, FlaskConical, Rocket, Blocks, Cpu, Lightbulb } from 'lucide-react';
import Image from 'next/image';
import { ReactNode } from 'react';

const slides: {
    id: number;
    title: string;
    description: ReactNode;
    image: string;
    icon: any;
    color: string;
    borderColor: string;
    bgColor: string;
    shadowColor: string;
}[] = [
        {
            id: 1,
            title: "FOUNDATION PROGRAMS",
            description: (
                <span>
                    Hands-on <span className="text-blue-500 font-bold">Robotics & AI</span> learning designed for <span className="text-white font-bold">real-world skills</span> — not theory. Students don’t just study technology. They build it.
                </span>
            ),
            image: "/images/services/foundation_main_new.png",
            icon: Brain,
            color: "text-cyan-400",
            borderColor: "border-cyan-400",
            bgColor: "bg-cyan-400",
            shadowColor: "shadow-cyan-400/50"
        },
        {
            id: 2,
            title: "LAB ECOSYSTEM SOLUTIONS",
            description: (
                <span>
                    End-to-end <span className="text-neon-cyan font-bold">Robotics & AI labs</span> for institutions — infrastructure, curriculum, and mentors included. Everything needed to start <span className="text-white font-bold">innovation</span> from day one.
                </span>
            ),
            image: "/images/services/lab_main_new.png",
            icon: Blocks,
            color: "text-neon-cyan",
            borderColor: "border-neon-cyan",
            bgColor: "bg-neon-cyan",
            shadowColor: "shadow-neon-cyan/50"
        },
        {
            id: 3,
            title: "INDUSTRY AUTOMATION",
            description: (
                <span>
                    Smart automation built for <span className="text-blue-500 font-bold">real industries</span>. From AI intelligence to robotic execution — we design, build, and deploy <span className="text-white font-bold">complete solutions</span>.
                </span>
            ),
            image: "/images/services/industry_main_new.png",
            icon: Cpu,
            color: "text-cyan-400",
            borderColor: "border-cyan-400",
            bgColor: "bg-cyan-400",
            shadowColor: "shadow-cyan-400/50"
        }
    ];

export function EcosystemSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const slide = slides[currentSlide];

    return (
        <section className="relative py-20 px-6 lg:px-20 bg-black/40 backdrop-blur-sm border-t border-b border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12 text-center lg:text-left">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">What we do?</h2>
                    <div className="w-20 h-1 bg-cyan-400 mt-4 mx-auto lg:mx-0 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
                </div>
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

                    {/* Left Side: Dynamic Slideshow */}
                    <div className={`w-full lg:w-2/3 relative aspect-video rounded-3xl overflow-hidden border-2 transition-all duration-700 group ${slide.borderColor} shadow-[0_0_30px_rgba(0,0,0,0.5)]`}>
                        <div className={`absolute inset-0 opacity-20 bg-gradient-to-br from-transparent to-${slide.color.replace('text-', '')}/30`} />

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={slide.id}
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.7 }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={slide.image}
                                    alt={slide.title}
                                    fill
                                    className="object-cover opacity-90"
                                    priority
                                />
                                {/* Reduced overlay for better visibility - lighter gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                <div className="absolute bottom-0 left-0 p-8 lg:p-12 w-full">
                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 mb-4 ${slide.color} shadow-lg`}>
                                            <slide.icon size={16} />
                                            <span className="text-xs font-bold tracking-widest">{slide.title}</span>
                                        </div>
                                        <h3 className="text-2xl lg:text-4xl font-bold text-white mb-4 leading-tight max-w-2xl drop-shadow-xl">
                                            {slide.description}
                                        </h3>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Buttons */}
                        <div className="absolute bottom-8 right-8 flex gap-2 z-20">
                            {slides.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentSlide(idx)}
                                    className={`h-1.5 rounded-full transition-all duration-300 backdrop-blur-sm ${currentSlide === idx ? `${slide.bgColor} w-12 shadow-[0_0_10px_currentColor]` : 'bg-white/30 hover:bg-white/60 w-8'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Animated Checklist */}
                    <div className="w-full lg:w-1/3">
                        <div className="space-y-6">
                            {slides.map((item, idx) => {
                                const isActive = currentSlide === idx;
                                const isPast = currentSlide > idx;

                                return (
                                    <motion.div
                                        key={item.id}
                                        className={`relative p-6 rounded-2xl border transition-all duration-500 overflow-hidden ${isActive
                                            ? `bg-black/80 backdrop-blur-md ${item.borderColor} border shadow-[0_0_30px_rgba(0,0,0,0.6)] scale-105`
                                            : isPast ? 'bg-black/30 border-white/10' : 'bg-black/20 border-white/10'
                                            }`}
                                    >
                                        {/* Dynamic Glow Effect for Active Card */}
                                        {isActive && (
                                            <div className={`absolute inset-0 bg-gradient-to-r ${item.color.replace('text-', 'from-')}/10 to-transparent pointer-events-none`} />
                                        )}

                                        <div className="flex items-center gap-4 relative z-10">
                                            <div className="relative">
                                                {isActive || isPast ? (
                                                    <motion.div
                                                        initial={{ scale: 0 }}
                                                        animate={{ scale: 1 }}
                                                        className={`p-2 rounded-full ${isActive ? `${item.bgColor} text-black font-bold` : 'bg-white/10 text-white'}`}
                                                    >
                                                        <CheckCircle2 size={24} />
                                                    </motion.div>
                                                ) : (
                                                    <div className="p-2 rounded-full border-2 border-white/10 text-white">
                                                        <Circle size={24} />
                                                    </div>
                                                )}
                                            </div>
                                            <div>
                                                <span className={`text-xs font-mono tracking-widest uppercase mb-1 block font-bold ${isActive ? item.color : 'text-white'
                                                    }`}>
                                                    Step 0{item.id}
                                                </span>
                                                <h4 className={`text-lg font-black transition-colors ${isActive ? `${item.color} drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]` : 'text-white'
                                                    }`}>
                                                    {item.title}
                                                </h4>
                                            </div>
                                        </div>

                                        {/* Progress Bar for Active Item */}
                                        {isActive && (
                                            <motion.div
                                                className={`absolute bottom-0 left-0 h-1 ${item.bgColor}`}
                                                initial={{ width: "0%" }}
                                                animate={{ width: "100%" }}
                                                transition={{ duration: 5, ease: "linear" }}
                                            />
                                        )}
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_transparent_0%,_#000000_100%)] pointer-events-none" />
        </section>
    );
}
