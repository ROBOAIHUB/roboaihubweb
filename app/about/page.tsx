import { Target, Lightbulb, Trophy, Users, CheckCircle2, Sparkles, Building2, Wrench, GraduationCap, Cpu } from 'lucide-react';
import Image from 'next/image';
import { MotionContainer } from '@/components/ui/MotionContainer';
import { ImageCarousel } from '@/components/ui/ImageCarousel';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "About Us | ROBOAI HUB",
    description: "Learn about RoboAI Hub, our journey, mission to elevate robotics learning, labs built, and industrial innovation.",
};

const carouselImages = [
    { src: "/images/about/carousel/media__1772866654780.jpg", alt: "RoboAI Hub Team & Students" },
    { src: "/images/about/carousel/media__1772866654809.jpg", alt: "RoboAI Hub Lab Workshop" },
    { src: "/images/about/carousel/media__1772866654831.jpg", alt: "RoboAI Hub Robotic Prototyping" },
    { src: "/images/about/AboutUs01.jpg", alt: "RoboAI Hub Training & Innovation Facility" },
];

const pillars = [
    {
        icon: GraduationCap,
        title: "Comprehensive Training Programs",
        desc: "Structured curricula for school students, engineering graduates, and working professionals from fundamental electronics to ROS2.",
    },
    {
        icon: Wrench,
        title: "Open-Source Innovation Labs",
        desc: "Equipped with microcontrollers, industrial sensors, 3D printers, and testbenches for unrestricted hands-on engineering.",
    },
    {
        icon: Users,
        title: "Vibrant Community of Builders",
        desc: "Fostering active collaboration, hackathons, open tech seminars, and national robotics competitions.",
    },
    {
        icon: Cpu,
        title: "Industrial & AI Deployments",
        desc: "Bridging classroom breakthroughs into commercial automation, custom robotics prototypes, and IoT factory floor solutions.",
    },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-deep-space text-white pt-32 px-6 lg:px-20 pb-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto w-full space-y-24">

                {/* Section 1: Hero Banner */}
                <div className="text-center pt-6 pb-4 max-w-4xl mx-auto space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 text-xs sm:text-sm font-bold tracking-widest uppercase">
                        <Sparkles size={16} /> About RoboAI Hub
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                        &ldquo;We believe technology should be built, not just taught.&rdquo;
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-3xl mx-auto">
                        Welcome to RoboAI Hub. We elevate learnings and solve real-world industrial difficulties through hands-on robotics, practical engineering, and AI automation.
                    </p>
                </div>

                {/* Section 2: Story & Carousel */}
                <MotionContainer className="bg-black/40 border border-white/10 rounded-3xl p-8 lg:p-12 relative overflow-hidden backdrop-blur-md">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm font-bold tracking-widest uppercase">
                                <Lightbulb size={16} /> Our Story
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                                Why RoboAI Hub Started
                            </h2>
                            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                                We saw a massive gap between academic theory and real-world industrial application. Students were learning formulas but couldn&apos;t build actual robots. Industries needed automation but struggled to find practical talent.
                            </p>
                            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                                We built <strong className="text-cyan-400 font-semibold">ROBOAI HUB</strong> to bridge that gap—creating a space where innovation isn&apos;t just talked about, it is engineered from the ground up every single day.
                            </p>
                            <div className="pt-2 border-l-2 border-cyan-400/50 pl-4 text-zinc-400 italic text-sm sm:text-base">
                                &ldquo;Igniting dreams, building the future. A vibrant community where aspiring roboticists of all ages learn, build, and push the boundaries of what&apos;s possible.&rdquo;
                            </div>
                        </div>

                        {/* Interactive Photo Carousel */}
                        <div className="w-full relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(0,243,255,0.15)] group bg-black/60">
                            <ImageCarousel
                                images={carouselImages}
                                className="w-full h-full"
                                autoPlayInterval={3500}
                                overlayText="RoboAI Hub Labs & Prototyping"
                            />
                        </div>
                    </div>
                </MotionContainer>

                {/* Section 3: Core Pillars */}
                <div className="space-y-10">
                    <div className="text-center max-w-2xl mx-auto space-y-3">
                        <h2 className="text-3xl md:text-4xl font-black text-white">
                            What Drives <span className="text-cyan-400">Our Ecosystem</span>
                        </h2>
                        <p className="text-zinc-400 text-sm sm:text-base">
                            Built upon rigorous engineering standards and accessible hands-on innovation.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {pillars.map((pillar, idx) => (
                            <MotionContainer key={idx} delay={idx * 0.1} className="h-full">
                                <div className="bg-white/5 border border-white/10 hover:border-cyan-400/40 rounded-2xl p-6 h-full flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] group">
                                    <div>
                                        <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                                            <pillar.icon size={24} />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                            {pillar.title}
                                        </h3>
                                        <p className="text-zinc-400 text-sm leading-relaxed">
                                            {pillar.desc}
                                        </p>
                                    </div>
                                    <div className="pt-4 mt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-cyan-400/80">
                                        <CheckCircle2 size={14} className="text-cyan-400" /> Active Pillar
                                    </div>
                                </div>
                            </MotionContainer>
                        ))}
                    </div>
                </div>

                {/* Section 4: Numbers & Achievements */}
                <div className="space-y-8">
                    <div className="text-center max-w-xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-wider">
                            Impact in Numbers
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-4">
                        {[
                            { num: "2000+", label: "Students Trained", icon: Users },
                            { num: "15+", label: "Labs Built", icon: Target },
                            { num: "100+", label: "Projects Delivered", icon: Trophy },
                        ].map((stat, i) => (
                            <MotionContainer key={i} delay={i * 0.1} className="h-full flex justify-center items-center">
                                <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex flex-col items-center justify-center group cursor-default">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <svg
                                            className="w-full h-full text-cyan-500/30 origin-center animate-[spin_16s_linear_infinite] group-hover:text-cyan-400 transition-colors duration-500 group-hover:scale-105"
                                            viewBox="0 0 100 100"
                                            preserveAspectRatio="xMidYMid meet"
                                        >
                                            <polygon
                                                points="50,2 91.6,74 8.4,74"
                                                fill="rgba(34, 211, 238, 0.05)"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinejoin="round"
                                                className="drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]"
                                            />
                                            <polygon
                                                points="50,8 86.4,71 13.6,71"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="0.5"
                                                strokeDasharray="2 4"
                                                className="opacity-60"
                                            />
                                        </svg>
                                    </div>
                                    <div className="relative z-10 flex flex-col items-center justify-center text-center">
                                        <stat.icon size={32} className="text-cyan-400 mb-2 group-hover:scale-110 transition-transform" />
                                        <h4 className="text-4xl lg:text-5xl font-black text-white group-hover:text-cyan-200 transition-colors drop-shadow-md">
                                            {stat.num}
                                        </h4>
                                        <p className="text-xs sm:text-sm text-gray-300 font-bold tracking-widest uppercase mt-2 max-w-[140px] leading-snug group-hover:text-white transition-colors">
                                            {stat.label}
                                        </p>
                                    </div>
                                </div>
                            </MotionContainer>
                        ))}
                    </div>
                </div>

                {/* Section 5: Founder Message */}
                <MotionContainer delay={0.3} className="border-t border-white/10 pt-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                        <div className="space-y-6 text-center md:text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-mono uppercase tracking-widest">
                                Founder&apos;s Vision
                            </div>
                            <p className="text-xl sm:text-2xl text-white leading-relaxed font-light italic">
                                &ldquo;We aren&apos;t here to give out participation certificates. We are here to build technology that works. If you&apos;re ready to get your hands dirty with real code and real circuits, you belong here.&rdquo;
                            </p>
                            <div className="pt-2">
                                <h4 className="text-2xl font-bold text-cyan-400">Narayan Jangid</h4>
                                <p className="text-sm text-gray-400 tracking-widest uppercase mt-1 font-semibold">Founder &amp; CEO, ROBOAI HUB</p>
                            </div>
                        </div>

                        <div className="w-full flex flex-col items-center md:items-end">
                            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-cyan-400/30 shadow-[0_0_30px_rgba(34,211,238,0.25)] group">
                                <Image
                                    src="/images/about/CEO.jpeg"
                                    alt="Narayan Jangid, Founder & CEO"
                                    fill
                                    className="object-cover transition-all duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 256px, 320px"
                                />
                            </div>
                        </div>
                    </div>
                </MotionContainer>

            </div>
        </main>
    );
}
