'use client';

import { motion } from 'framer-motion';
import { NeonButton } from '@/components/ui/NeonButton';
import { FloatingCard } from '@/components/ui/FloatingCard';
import { Globe, Rocket, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function CareerPage() {

    return (
        <main className="min-h-screen relative bg-deep-space text-white pt-24 overflow-hidden">
            {/* Background Elements */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[120px]" />
            </div>

            {/* Hero Section */}
            <section className="relative z-10 container mx-auto px-6 py-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-neon-cyan text-sm font-mono tracking-widest mb-6 backdrop-blur-md">
                        JOIN THE ELITE
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
                        BUILD THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-blue-500">FUTURE</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        We are looking for visionaries, engineers, and creators who are ready to push the boundaries of Robotics and AI.
                    </p>

                </motion.div>
            </section>

            {/* Why Join Us */}
            <section className="relative z-10 container mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { icon: Rocket, title: "Innovation First", desc: "Work on cutting-edge robotics and AI projects that define the future." },
                        { icon: Globe, title: "Global Impact", desc: "Your code and designs will power systems used worldwide." },
                        { icon: TrendingUp, title: "Rapid Growth", desc: "Accelerate your career in a fast-paced, high-tech environment." }
                    ].map((item, idx) => (
                        <FloatingCard key={idx} className="p-8 border-white/10 hover:border-neon-cyan/30 transition-colors">
                            <item.icon className="text-neon-cyan mb-4" size={32} />
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-gray-400">{item.desc}</p>
                        </FloatingCard>
                    ))}
                </div>
            </section>


            {/* General Application CTA */}
            <section className="relative z-10 container mx-auto px-6 py-20 mb-20">
                <div className="rounded-3xl p-12 relative overflow-hidden bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-white/10 text-center">
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-4">Don&apos;t see your role?</h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8">
                            We are always looking for exceptional talent. specific role. Send us your resume and tell us how you can make a difference at <span className="font-bold text-white">ROBO<span className="text-cyan-400">AI</span> HUB</span>.
                        </p>
                        <Link href="mailto:hr@robonari.co.in">
                            <NeonButton variant="cyan">Email Your Resume</NeonButton>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

// Helper for icon
function Brain(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
            <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
        </svg>
    )
}
