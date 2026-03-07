'use client';

import { FloatingCard } from '@/components/ui/FloatingCard';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Brain, Cpu, Lightbulb, Blocks } from 'lucide-react';

const allServices = [
    {
        id: 'foundation-programs',
        title: "Foundation Programs",
        desc: "Hands-on Robotics & AI learning designed for real-world skills — not theory. Students don't just study technology. They build it.",
        image: "/images/services/foundation_main_new.png",
        icon: Brain,
        color: "text-cyan-400"
    },
    {
        id: 'lab-ecosystem-solutions',
        title: "Lab Ecosystem Solutions",
        desc: "End-to-end Robotics & AI labs for institutions — infrastructure, curriculum, and mentors included. Everything needed to start innovation from day one.",
        image: "/images/services/lab_main_new.png",
        icon: Blocks,
        color: "text-cyan-400"
    },
    {
        id: 'industry-automation',
        title: "Industry Automation",
        desc: "Smart automation built for real industries. From AI intelligence to robotic execution — we design, build, and deploy complete solutions.",
        image: "/images/services/industry_main_new.png",
        icon: Cpu,
        color: "text-cyan-400"
    },
    {
        id: 'innovation-studio',
        title: "Innovation Studio",
        desc: "Where ideas become reality. From prototypes to interactive installations, we engineer custom Robotics & AI experiences that don't exist yet.",
        image: "/images/services/innovation_main_new.png",
        icon: Lightbulb,
        color: "text-cyan-400"
    }
];

function TriangleDiagram() {
    return (
        <div className="relative w-full max-w-4xl mx-auto h-[400px] md:h-[500px] flex items-center justify-center mb-24 mt-12">
            {/* SVG Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                <defs>
                    <marker id="arrow" viewBox="0 0 10 10" refX="35" refY="5"
                        markerWidth="6" markerHeight="6"
                        orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#00f3ff" opacity="0.8" />
                    </marker>
                </defs>

                {/* Background tracks with arrows */}
                <line x1="50%" y1="15%" x2="80%" y2="80%" stroke="#00f3ff" strokeWidth="1.5" opacity="0.3" strokeDasharray="6,6" markerEnd="url(#arrow)" />
                <line x1="80%" y1="80%" x2="20%" y2="80%" stroke="#00f3ff" strokeWidth="1.5" opacity="0.3" strokeDasharray="6,6" markerEnd="url(#arrow)" />
                <line x1="20%" y1="80%" x2="50%" y2="15%" stroke="#00f3ff" strokeWidth="1.5" opacity="0.3" strokeDasharray="6,6" markerEnd="url(#arrow)" />

                {/* Animated sequential beams */}
                <motion.line
                    animate={{ pathLength: [0, 1, 1, 1, 0, 0], opacity: [1, 1, 1, 1, 0, 1] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "linear", times: [0, 0.33, 0.66, 0.95, 0.96, 1] }}
                    x1="50%" y1="15%" x2="80%" y2="80%" stroke="#00f3ff" strokeWidth="3" style={{ filter: "drop-shadow(0 0 6px #00f3ff)" }}
                />
                <motion.line
                    animate={{ pathLength: [0, 0, 1, 1, 0, 0], opacity: [1, 1, 1, 1, 0, 1] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "linear", times: [0, 0.33, 0.66, 0.95, 0.96, 1] }}
                    x1="80%" y1="80%" x2="20%" y2="80%" stroke="#00f3ff" strokeWidth="3" style={{ filter: "drop-shadow(0 0 6px #00f3ff)" }}
                />
                <motion.line
                    animate={{ pathLength: [0, 0, 0, 1, 0, 0], opacity: [1, 1, 1, 1, 0, 1] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "linear", times: [0, 0.33, 0.66, 0.95, 0.96, 1] }}
                    x1="20%" y1="80%" x2="50%" y2="15%" stroke="#00f3ff" strokeWidth="3" style={{ filter: "drop-shadow(0 0 6px #00f3ff)" }}
                />
            </svg>

            {/* Top Node: Training & Skill */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute top-[5%] sm:top-[8%] left-1/2 -translate-x-1/2 flex flex-col items-center group cursor-default z-10"
            >
                <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-cyan-950/80 border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.5)] backdrop-blur-md group-hover:scale-110 transition-transform duration-500">
                    <span className="font-black text-white text-center text-sm md:text-base leading-tight">Training<br /><span className="text-cyan-400">& Skill</span></span>
                </div>
            </motion.div>

            {/* Bottom Left Node: Product Dev */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute bottom-[8%] sm:bottom-[10%] left-[20%] -translate-x-1/2 flex flex-col items-center group cursor-default z-10"
            >
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-blue-950/80 border-2 border-blue-500 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.5)] backdrop-blur-md group-hover:scale-110 transition-transform duration-500">
                    <span className="font-bold text-white text-center text-xs md:text-sm leading-tight p-2">Product<br />Development</span>
                </div>
            </motion.div>

            {/* Bottom Right Node: R&D */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute bottom-[8%] sm:bottom-[10%] right-[20%] translate-x-1/2 flex flex-col items-center group cursor-default z-10"
            >
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-purple-950/80 border-2 border-purple-500 flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.5)] backdrop-blur-md group-hover:scale-110 transition-transform duration-500">
                    <span className="font-bold text-white text-center text-xs md:text-sm leading-tight p-2">Research &<br />Development</span>
                </div>
            </motion.div>
        </div>
    )
}

function ServiceCard({ service, index }: { service: any, index: number }) {
    return (
        <Link href={`/ecosystem/${service.id}`}>
            <FloatingCard
                delay={index * 0.1}
                className="group bg-[#0B0F14]/40 border-white/5 h-full flex flex-col overflow-hidden rounded-2xl hover:border-neon-cyan/50 transition-all duration-300"
            >
                <div className="relative h-48 w-full overflow-hidden">
                    <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14] to-transparent opacity-80" />
                    <div className={`absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/10 ${service.color}`}>
                        <service.icon size={20} />
                    </div>
                </div>

                <div className="p-6 relative flex-grow flex flex-col">
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-neon-cyan transition-colors font-mono">
                        {service.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
                        {service.desc}
                    </p>
                    <span className="text-xs font-mono text-cyan-400 flex items-center gap-2 font-bold group-hover:tracking-wider transition-all">
                        EXPLORE <span className="text-lg leading-none">&rarr;</span>
                    </span>
                </div>
            </FloatingCard>
        </Link>
    )
}

export default function ServicesPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 container mx-auto px-6 overflow-hidden">
            <div className="text-center">
                <h1 className="text-4xl lg:text-5xl font-bold font-mono text-white tracking-widest uppercase mb-4">OUR ECOSYSTEM</h1>
                <div className="h-1 w-24 mx-auto bg-cyan-400 mt-2 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
                <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
                    The interconnected nodes of learning, building, and automating.
                </p>
            </div>

            {/* Triangle Diagram Visualization */}
            <TriangleDiagram />

            {/* All Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 w-full">
                {allServices.map((service, index) => (
                    <ServiceCard key={service.id} service={service} index={index} />
                ))}
            </div>
        </main>
    );
}
