import { ArrowLeft, Cpu, Bot, Eye, Component, Zap, ArrowRight, Lightbulb } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { ImageCarousel } from '@/components/ui/ImageCarousel';

export default function ResearchInnovationPage() {
    return (
        <main className="min-h-screen bg-transparent text-white pt-24 pb-20 relative overflow-hidden font-sans">
            {/* Background Effects */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-emerald-600/10 blur-[150px] rounded-full mix-blend-screen"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 blur-[120px] rounded-full mix-blend-screen"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                <Link href="/" className="inline-flex items-center text-sm text-white hover:text-white mb-12 transition-colors group">
                    <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Home
                </Link>

                {/* HERO SECTION */}
                <div className="text-center max-w-4xl mx-auto mb-20 mt-8">
                    <div className="inline-flex items-center gap-2 bg-emerald-950/50 border border-emerald-400/30 text-emerald-300 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest mb-8 shadow-[0_0_15px_rgba(192,132,252,0.2)]">
                        Core Vertical
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-100 to-gray-400 drop-shadow-[0_0_25px_rgba(192,132,252,0.2)] tracking-tight">
                        Research & Innovation
                    </h1>
                    <h2 className="text-2xl lg:text-3xl font-medium text-emerald-400 mb-6 drop-shadow-[0_0_10px_rgba(192,132,252,0.5)]">
                        Where ideas become deployable technology.
                    </h2>
                </div>

                {/* OVERVIEW SECTION */}
                <div className="max-w-4xl mx-auto mb-24 relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-cyan-600/20 rounded-[2rem] blur-xl opacity-50"></div>
                    <div className="relative bg-[#0A0A0F]/90 backdrop-blur-xl border border-white/10 rounded-[2rem] p-10 text-center shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                        <p className="text-xl lg:text-2xl text-white leading-relaxed font-light mb-6">
                            Our Research & Innovation division focuses on applied Robotics & AI research, <span className="font-bold text-white">rapid prototyping</span>, and product development.
                        </p>
                        <p className="text-lg text-white leading-relaxed max-w-2xl mx-auto">
                            We transform concepts into working systems through engineering precision and practical experimentation.
                        </p>
                    </div>
                </div>

                {/* COLLAGE IMAGE */}
                <div className="w-full max-w-5xl mx-auto relative aspect-[21/9] rounded-[2rem] overflow-hidden mb-24 border border-emerald-500/20 shadow-[0_0_40px_rgba(16,185,129,0.15)] group">
                    <ImageCarousel
                        images={[
                            { src: "/images/research/media__1772867126084.jpg", alt: "Research Team Work 1" },
                            { src: "/images/research/media__1772867126094.jpg", alt: "Research Team Work 2" },
                            { src: "/images/research/media__1772867126255.jpg", alt: "Research Team Work 3" },
                            { src: "/images/research/media__1772867126278.jpg", alt: "Research Team Work 4" },
                            { src: "/images/research/media__1772867126377.jpg", alt: "Research Team Work 5" }
                        ]}
                        className="w-full h-full"
                        autoPlayInterval={3500}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="text-emerald-400 font-mono text-sm tracking-widest border border-emerald-400/30 px-4 py-1.5 rounded-full bg-black/50 backdrop-blur-md">RAPID PROTOTYPING & DEVELOPMENT</span>
                    </div>
                </div>

                {/* FOCUS AREAS */}
                <div className="mb-16">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="h-px bg-gradient-to-r from-transparent to-emerald-400/50 flex-1"></div>
                        <h3 className="text-2xl font-bold uppercase tracking-widest text-emerald-400">Focus Areas</h3>
                        <div className="h-px bg-gradient-to-r from-emerald-400/50 to-transparent flex-1"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                        {[
                            { title: "Robotics Prototyping", icon: Cpu, color: "text-red-400", border: "hover:border-red-400/50" },
                            { title: "AI Model Development", icon: Bot, color: "text-blue-400", border: "hover:border-blue-400/50" },
                            { title: "Computer Vision Systems", icon: Eye, color: "text-cyan-400", border: "hover:border-cyan-400/50" },
                            { title: "Embedded Systems", icon: Component, color: "text-green-400", border: "hover:border-green-400/50" },
                            { title: "Product Innovation", icon: Lightbulb, color: "text-blue-400", border: "hover:border-blue-400/50" }
                        ].map((area, idx) => (
                            <div key={idx} className={`group bg-white/5 border border-white/10 rounded-2xl p-6 ${area.border} transition-all duration-300 flex items-center gap-4`}>
                                <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:bg-white/10 transition-colors">
                                    <area.icon className={`${area.color} w-8 h-8`} />
                                </div>
                                <h4 className="text-xl font-bold text-white group-hover:text-white transition-colors">{area.title}</h4>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-4 justify-center">
                        <a href="https://wa.me/919828014877" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full font-bold text-lg transition-colors flex items-center gap-2 shadow-[0_0_15px_rgba(147,51,234,0.5)]">
                            Collaborate With Us <ArrowRight className="w-5 h-5" />
                        </a>
                        <a href="https://wa.me/919828014877" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-bold text-lg transition-colors flex items-center gap-2">
                            View Projects
                        </a>
                    </div>
                </div>

            </div>
        </main>
    );
}
