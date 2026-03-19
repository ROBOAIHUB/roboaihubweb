import { ArrowLeft, ArrowRight, Cog, Eye, Monitor, Cpu, Network } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function IndustrialAutomationPage() {
    return (
        <main className="min-h-screen bg-transparent text-white pt-24 pb-20 relative overflow-hidden font-sans">
            {/* Background Effects */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-red-600/10 blur-[180px] rounded-full mix-blend-screen -translate-y-1/2"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-orange-600/10 blur-[120px] rounded-full mix-blend-screen"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                <Link href="/" className="inline-flex items-center text-sm text-gray-400 hover:text-white mb-12 transition-colors group">
                    <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Home
                </Link>

                {/* HERO SECTION */}
                <div className="text-center max-w-4xl mx-auto mb-20 mt-8">
                    <div className="inline-flex items-center gap-2 bg-red-950/50 border border-red-400/30 text-red-300 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest mb-8 shadow-[0_0_15px_rgba(248,113,113,0.2)]">
                        Core Vertical
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-red-100 to-gray-400 drop-shadow-[0_0_25px_rgba(248,113,113,0.2)] tracking-tight">
                        Industrial Automation & AI Systems
                    </h1>
                    <h2 className="text-2xl lg:text-3xl font-medium text-red-500 mb-6 drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]">
                        Engineering intelligent solutions for modern industries.
                    </h2>
                </div>

                {/* OVERVIEW SECTION */}
                <div className="max-w-4xl mx-auto mb-24 relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-orange-600/20 rounded-[2rem] blur-xl opacity-50"></div>
                    <div className="relative bg-[#0A0A0F]/90 backdrop-blur-xl border border-white/10 rounded-[2rem] p-10 text-center shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col items-center">
                        <Cog className="w-16 h-16 text-red-500 mb-6 drop-shadow-[0_0_15px_rgba(239,68,68,0.6)] animate-[spin_10s_linear_infinite]" />
                        <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed font-light mb-6">
                            We design and deploy custom Robotics & AI systems that <span className="font-bold text-white">enhance efficiency</span>, reduce operational errors, and enable intelligent decision-making.
                        </p>
                        <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
                            From concept to on-site deployment — we handle the entire lifecycle.
                        </p>
                    </div>
                </div>

                {/* AUTOMATION IMAGE & DISCLAIMER */}
                <div className="w-full max-w-5xl mx-auto mb-24 flex flex-col items-center">
                    <div className="w-full relative aspect-[21/9] rounded-[2rem] overflow-hidden border border-red-500/20 shadow-[0_0_40px_rgba(248,113,113,0.15)] group mb-4">
                        <div className="absolute inset-0 bg-red-500/10 mix-blend-overlay z-10 pointer-events-none transition-colors duration-500 group-hover:bg-transparent"></div>
                        <Image src="/images/services/ai_automation_system.png" alt="Industrial Automation System" fill className="object-cover transition-transform duration-700 group-hover:scale-105" priority />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <span className="text-red-400 font-mono text-sm tracking-widest border border-red-400/30 px-4 py-1.5 rounded-full bg-black/50 backdrop-blur-md">INTELLIGENT DECISION-MAKING</span>
                        </div>
                    </div>
                    <p className="text-sm font-medium tracking-wide text-center px-4 text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.8)] animate-pulse">
                        *Actual deployment visuals are withheld to protect client confidentiality.
                    </p>
                </div>

                {/* CAPABILITIES */}
                <div className="mb-16">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="h-px bg-gradient-to-r from-transparent to-red-500/50 flex-1"></div>
                        <h3 className="text-2xl font-bold uppercase tracking-widest text-red-500">Capabilities</h3>
                        <div className="h-px bg-gradient-to-r from-red-500/50 to-transparent flex-1"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 relative">
                        {/* Connecting Lines Behind (Optional, but adds to the tech feel) */}
                        <div className="absolute inset-x-10 top-1/2 h-px bg-white/5 -z-10 hidden lg:block"></div>

                        {[
                            { title: "Intelligent Automation", icon: Network, delay: "0s" },
                            { title: "Computer Vision Inspection Systems", icon: Eye, delay: "0.1s" },
                            { title: "Robotics Integration", icon: Cpu, delay: "0.2s" },
                            { title: "Embedded Control Systems", icon: Cog, delay: "0.3s" },
                            { title: "Monitoring Dashboards", icon: Monitor, delay: "0.4s" }
                        ].map((cap, idx) => (
                            <div key={idx} className="group bg-[#090B10]/80 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-500 flex flex-col items-center text-center relative overflow-hidden">
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-red-500/10 rounded-full blur-[40px] group-hover:bg-red-500/30 transition-colors duration-500"></div>
                                <div className="w-16 h-16 bg-white/5 rounded-full border border-white/10 flex items-center justify-center mb-6 shadow-[0_8px_30px_rgba(0,0,0,0.12)] group-hover:scale-110 group-hover:bg-red-500/10 group-hover:border-red-500/30 transition-all duration-300">
                                    <cap.icon className="w-8 h-8 text-red-400 drop-shadow-[0_0_8px_rgba(248,113,113,0.5)]" />
                                </div>
                                <h4 className="text-xl font-bold text-white group-hover:text-red-100 transition-colors leading-snug">{cap.title}</h4>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-4 justify-center">
                        <a href="https://wa.me/919828014877" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-red-600 hover:bg-red-500 text-white rounded-full font-bold text-lg transition-colors flex items-center gap-2 shadow-[0_0_15px_rgba(220,38,38,0.5)]">
                            Start a Project <ArrowRight className="w-5 h-5" />
                        </a>
                        <a href="https://wa.me/919828014877" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-bold text-lg transition-colors flex items-center gap-2 hover:border-red-500/50 hover:text-red-100">
                            Request Consultation
                        </a>
                    </div>
                </div>

            </div>
        </main>
    );
}
