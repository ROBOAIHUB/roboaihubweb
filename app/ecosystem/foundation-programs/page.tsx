import { ArrowLeft, BookOpen, Bot, Cpu, Briefcase, Settings, Star, HeartHandshake, GraduationCap, Map, Users, CheckCircle, Zap, Terminal, Code2, MonitorPlay, FileBadge, ArrowRight, MousePointerClick, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { ImageCarousel } from '@/components/ui/ImageCarousel';
import { MotionContainer, MotionItem, MotionImage } from '@/components/ui/MotionContainer';

export default function FoundationProgramsPage() {
    return (
        <main className="min-h-screen bg-transparent text-white pt-24 pb-20 relative overflow-hidden font-sans">
            {/* Particle & Circuit Background Effect */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-neon-cyan/10 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full"></div>

                {/* Simulated Glowing Nodes */}
                <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-neon-cyan rounded-full shadow-[0_0_15px_#00f3ff] animate-pulse"></div>
                <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_20px_#3b82f6] animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-neon-emerald rounded-full shadow-[0_0_15px_#bd00ff] animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <Link href="/ecosystem" className="inline-flex items-center text-sm text-gray-400 hover:text-white mb-8 transition-colors group">
                    <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Ecosystem
                </Link>

                {/* HERO SECTION */}
                <MotionContainer className="text-center max-w-4xl mx-auto mb-32 mt-12">
                    <h1 className="text-5xl lg:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-gray-400 drop-shadow-[0_0_25px_rgba(0,243,255,0.2)] tracking-tight">
                        FOUNDATION PROGRAMS
                    </h1>
                    <h2 className="text-2xl lg:text-3xl font-medium text-cyan-400 mb-6 drop-shadow-[0_0_10px_rgba(0,243,255,0.5)]">
                        "Build Skills. Build Projects. Build Your Career."
                    </h2>
                    <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
                        India’s most practical Robotics & AI mentorship program designed to make you industry-ready.
                    </p>
                </MotionContainer>

                {/* COLLAGE IMAGE */}
                <MotionContainer delay={0.15} className="w-full max-w-5xl mx-auto relative aspect-[21/9] rounded-[2rem] overflow-hidden mb-24 border border-cyan-500/20 shadow-[0_0_40px_rgba(0,243,255,0.15)] group relative z-20">
                    <ImageCarousel
                        images={[
                            { src: "/images/foundation/media__1772872678936.jpg", alt: "Foundation Program Kids 1" },
                            { src: "/images/foundation/media__1772872678960.jpg", alt: "Foundation Program Kids 2" },
                            { src: "/images/foundation/media__1772872678974.jpg", alt: "Foundation Program Kids 3" },
                            { src: "/images/foundation/media__1772872679039.jpg", alt: "Foundation Program Kids 4" },
                            { src: "/images/foundation/media__1772872679052.jpg", alt: "Foundation Program Kids 5" }
                        ]}
                        className="w-full h-full"
                        autoPlayInterval={3500}
                    />
                </MotionContainer>

                {/* SECTION 1 – 100% MENTORSHIP */}
                <MotionContainer delay={0.2} className="max-w-4xl mx-auto mb-32">
                    <div className="relative group">
                        {/* Glow Behind Card */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan to-blue-600 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative bg-[#0A0A0F]/80 backdrop-blur-xl border border-white/10 rounded-[2rem] p-10 lg:p-14 text-center">
                            <div className="flex justify-center mb-6">
                                <div className="p-4 rounded-full bg-cyan-500/10 border border-cyan-500/20 shadow-[0_0_30px_rgba(0,243,255,0.2)]">
                                    <Star className="text-neon-cyan w-10 h-10" />
                                </div>
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold mb-10 text-white">
                                Mentorship Program
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                                {[
                                    { icon: Users, text: "1:1 Personalized Guidance" },
                                    { icon: Settings, text: "Live Project Supervision" },
                                    { icon: TrendingUp, text: "Weekly Progress Tracking" },
                                    { icon: Map, text: "Industry-Aligned Roadmap" },
                                    { icon: Briefcase, text: "Portfolio Development Support" }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 hover:border-neon-cyan/30 transition-colors">
                                        <item.icon className="text-cyan-400 w-6 h-6 shrink-0" />
                                        <span className="text-gray-200 font-medium">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </MotionContainer>

                <div className="w-full flex justify-center mb-16">
                    <div className="w-[1px] h-24 bg-gradient-to-b from-neon-cyan/50 to-transparent"></div>
                </div>

                {/* SECTION 2 – Program Tracks (Split Layout) */}
                <MotionContainer delay={0.3} className="max-w-6xl mx-auto mb-32">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Robotics Track */}
                        <div className="group relative bg-[#090B10]/80 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-neon-cyan/50 transition-all duration-500 overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-neon-cyan/5 rounded-full blur-[80px] group-hover:bg-neon-cyan/20 transition-colors duration-500"></div>

                            <div className="flex items-center gap-4 mb-8 relative z-10">
                                <div className="p-3 rounded-xl bg-neon-cyan/10 border border-neon-cyan/30 shadow-[0_0_15px_rgba(0,243,255,0.3)] group-hover:scale-110 transition-transform">
                                    <Cpu className="text-neon-cyan w-8 h-8" />
                                </div>
                                <h3 className="text-3xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-200">
                                    ROBOTICS
                                </h3>
                            </div>

                            <ul className="space-y-4 relative z-10">
                                {[
                                    "Arduino & ESP32",
                                    "Sensors & Actuators",
                                    "Motor Control Systems",
                                    "Real Robot Building",
                                    "Embedded Programming"
                                ].map((topic, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-lg text-gray-300 group-hover:text-white transition-colors">
                                        <span className="w-2 h-2 rounded-full bg-neon-cyan shadow-[0_0_8px_#00f3ff]"></span>
                                        {topic}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* AI Track */}
                        <div className="group relative bg-[#090B10]/80 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-500 overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] group-hover:bg-blue-500/20 transition-colors duration-500"></div>

                            <div className="flex items-center gap-4 mb-8 relative z-10">
                                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.3)] group-hover:scale-110 transition-transform">
                                    <Bot className="text-blue-400 w-8 h-8" />
                                </div>
                                <h3 className="text-3xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
                                    ARTIFICIAL INTELLIGENCE
                                </h3>
                            </div>

                            <ul className="space-y-4 relative z-10">
                                {[
                                    "Python Programming",
                                    "Machine Learning",
                                    "Computer Vision",
                                    "AI Model Deployment",
                                    "Real-world AI Projects"
                                ].map((topic, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-lg text-gray-300 group-hover:text-white transition-colors">
                                        <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]"></span>
                                        {topic}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </MotionContainer>

                {/* SECTION 3 – Weekend Batches */}
                <MotionContainer delay={0.4} className="max-w-5xl mx-auto mb-32">
                    <div className="relative group">
                        <div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent rounded-2xl opacity-30 group-hover:opacity-70 blur-sm transition-opacity duration-500"></div>
                        <div className="relative bg-[#050505] border-y border-white/10 py-6 px-8 rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
                            <div className="flex items-center gap-4">
                                <FileBadge className="w-10 h-10 text-cyan-400 drop-shadow-[0_0_10px_rgba(0,243,255,0.5)]" />
                                <h3 className="text-2xl font-bold text-white whitespace-nowrap">
                                    Weekend Classes Available
                                </h3>
                            </div>
                            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-x-8 gap-y-4">
                                {[
                                    "Saturday & Sunday Batches",
                                    "Hands-On Lab Sessions",
                                    "Offline + Hybrid Option",
                                    "Certification Included"
                                ].map((detail, idx) => (
                                    <div key={idx} className="flex items-center gap-2 text-gray-300 text-sm md:text-base font-medium">
                                        <CheckCircle className="w-4 h-4 text-neon-cyan" />
                                        {detail}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </MotionContainer>


                {/* SECTION 4 – 100% JOB ASSISTANCE */}
                <MotionContainer delay={0.5} className="max-w-4xl mx-auto mb-20 text-center relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-neon-cyan/10 blur-[150px] pointer-events-none rounded-full"></div>

                    <div className="relative bg-[#0F141A]/90 backdrop-blur-2xl border-2 border-neon-cyan/20 shadow-[0_0_50px_rgba(0,243,255,0.15)] rounded-[2.5rem] p-12 lg:p-20 overflow-hidden">
                        {/* Premium Glow Overlay */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

                        <div className="inline-flex items-center gap-2 bg-cyan-950/50 border border-cyan-400/30 text-cyan-300 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest mb-8 shadow-[0_0_15px_rgba(0,243,255,0.2)]">
                            <Zap className="w-4 h-4 fill-cyan-400" />
                            Career-Focused Program
                        </div>

                        <h2 className="text-4xl lg:text-6xl font-black mb-4 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                            100% Job Assistance
                        </h2>
                        <p className="text-xl lg:text-2xl text-gray-300 font-medium mb-12">
                            We don’t just train you. We help you get hired.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left mb-16">
                            {[
                                { title: "Resume & Portfolio Building" },
                                { title: "Mock Interviews" },
                                { title: "Internship Opportunities" },
                                { title: "Startup & Industry Referrals" },
                                { title: "Placement Support Network" }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 hover:border-cyan-400/30 transition-all flex items-start gap-4">
                                    <div className="mt-1 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#00f3ff] shrink-0"></div>
                                    <span className="text-white font-medium">{item.title}</span>
                                </div>
                            ))}
                        </div>

                        <Link href="/contact" className="inline-block relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan to-blue-500 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-200"></div>
                            <button className="relative px-8 py-4 bg-black text-white font-bold text-lg rounded-full flex items-center gap-3 border border-white/10 overflow-hidden">
                                <span className="relative z-10 group-hover:text-neon-cyan transition-colors">Start Your Career Journey</span>
                                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>
                    </div>
                </MotionContainer>

            </div>
        </main >
    );
}
