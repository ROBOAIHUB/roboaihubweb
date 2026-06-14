import { Target, Lightbulb, Trophy, Users } from 'lucide-react';
import { MotionContainer } from '@/components/ui/MotionContainer';
import { FloatingCard } from '@/components/ui/FloatingCard';
import { ImageCarousel } from '@/components/ui/ImageCarousel';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-deep-space text-white pt-32 px-6 lg:px-20 pb-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto w-full space-y-24">

                {/* Section 1: Bold Line */}
                <div className="text-center pt-10 pb-10">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                        "We believe technology should be built, not just taught."
                    </h2>
                </div>

                {/* Section 2: Short Story */}
                <MotionContainer className="bg-black/40 border border-white/10 rounded-3xl p-8 lg:p-12 relative overflow-hidden backdrop-blur-md">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm font-bold tracking-widest uppercase">
                                <Lightbulb size={16} /> Our Story
                            </div>
                            <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">Why RoboAI Hub Started</h3>
                            <p className="text-lg text-white leading-relaxed">
                                We saw a massive gap between academic theory and real-world industrial application. Students were learning formulas but couldn't build actual robots. Industries needed automation but struggled to find practical talent. We built ROBOAI HUB to bridge that gap—creating a space where innovation isn't just talked about, it is engineered from the ground up every single day.
                            </p>
                        </div>

                        <div className="w-full relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(0,243,255,0.1)] group">
                            <ImageCarousel
                                images={[
                                    { src: "/images/about/carousel/media__1772866654780.jpg", alt: "RoboAI Hub Team Group Photo 1" },
                                    { src: "/images/about/carousel/media__1772866654809.jpg", alt: "RoboAI Hub Team Group Photo 2" },
                                    { src: "/images/about/carousel/media__1772866654831.jpg", alt: "RoboAI Hub Team Group Photo 3" }
                                ]}
                                className="w-full h-full"
                                autoPlayInterval={4000}
                            />
                        </div>
                    </div>
                </MotionContainer>

                {/* Section 3: Numbers */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10">
                    {[
                        { num: "2000+", label: "Students Trained", icon: Users },
                        { num: "15+", label: "Labs Built", icon: Target },
                        { num: "100+", label: "Projects Delivered", icon: Trophy },
                    ].map((stat, i) => (
                        <MotionContainer key={i} delay={i * 0.1} className="h-full flex justify-center items-center">
                            <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex flex-col items-center justify-center group cursor-default">
                                {/* Rotating Red Triangle Border */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <svg
                                        className="w-full h-full text-[#cc0000] origin-center animate-[spin_12s_linear_infinite] group-hover:text-[#ff3333] transition-colors duration-500 group-hover:scale-105"
                                        viewBox="0 0 100 100"
                                        preserveAspectRatio="xMidYMid meet"
                                    >
                                        <polygon
                                            points="50,2 91.6,74 8.4,74"
                                            fill="rgba(150, 0, 0, 0.1)"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinejoin="round"
                                            className="drop-shadow-[0_0_15px_rgba(255,0,0,0.6)]"
                                        />
                                        <polygon
                                            points="50,8 86.4,71 13.6,71"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="0.5"
                                            strokeDasharray="2 4"
                                            className="opacity-70"
                                        />
                                    </svg>
                                </div>

                                {/* Inner Text - Stationary */}
                                <div className="relative z-10 flex flex-col items-center justify-center text-center">
                                    <stat.icon className="text-red-500/50 mb-2 group-hover:text-red-400 transition-colors" size={28} />
                                    <h4 className="text-4xl lg:text-5xl font-black text-white group-hover:text-red-100 transition-colors drop-shadow-md">
                                        {stat.num}
                                    </h4>
                                    <p className="text-xs sm:text-sm text-white font-bold tracking-widest uppercase mt-2 max-w-[140px] leading-snug group-hover:text-white transition-colors drop-shadow-md">
                                        {stat.label}
                                    </p>
                                </div>
                            </div>
                        </MotionContainer>
                    ))}
                </div>

                {/* Section 4: Founder Message */}
                <MotionContainer delay={0.3} className="border-t border-white/10 pt-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                        {/* Left Side: Quote */}
                        <div className="space-y-6 text-center md:text-left">
                            <p className="text-2xl text-white leading-relaxed font-medium italic">
                                "We aren't here to give out participation certificates. We are here to build technology that works. If you're ready to get your hands dirty with real code and real circuits, you belong here."
                            </p>
                        </div>

                        {/* Right Side: Image and Details */}
                        <div className="w-full flex flex-col items-center md:items-end">
                            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(34,211,238,0.2)] mb-6">
                                <img src="/images/about/CEO.jpeg" alt="Narayan Jangid, Founder & CEO" className="w-full h-full object-cover transition-all duration-500 hover:scale-105" />
                            </div>
                            <div className="text-center md:text-right w-64 md:w-80 px-2">
                                <h4 className="text-2xl font-bold text-cyan-400">Narayan Jangid</h4>
                                <p className="text-sm text-white tracking-widest uppercase mt-2 font-semibold">Founder & CEO, ROBOAI HUB</p>
                            </div>
                        </div>
                    </div>
                </MotionContainer>
            </div>
        </main>
    );
}
