import { Target, Lightbulb, Trophy, Users } from 'lucide-react';
import { MotionContainer } from '@/components/ui/MotionContainer';
import { FloatingCard } from '@/components/ui/FloatingCard';

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
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm font-bold tracking-widest uppercase mb-8">
                            <Lightbulb size={16} /> Our Story
                        </div>
                        <h3 className="text-3xl font-bold mb-6 text-white">Why RoboAI Hub Started</h3>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            We saw a massive gap between academic theory and real-world industrial application. Students were learning formulas but couldn't build actual robots. Industries needed automation but struggled to find practical talent. We built ROBOAI HUB to bridge that gap—creating a space where innovation isn't just talked about, it is engineered from the ground up every single day.
                        </p>
                    </div>
                </MotionContainer>

                {/* Section 3: Numbers */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10">
                    {[
                        { num: "2000+", label: "Students Trained", icon: Users, color: "text-blue-500" },
                        { num: "15+", label: "Labs Built", icon: Target, color: "text-neon-cyan" },
                        { num: "100+", label: "Projects Delivered", icon: Trophy, color: "text-yellow-400" },
                    ].map((stat, i) => (
                        <MotionContainer key={i} delay={i * 0.1} className="h-full">
                            <FloatingCard className="bg-white/5 border border-white/10 p-10 text-center h-full hover:border-white/30 transition-colors flex flex-col items-center justify-center gap-4">
                                <stat.icon className={`${stat.color} mb-2`} size={48} />
                                <h4 className="text-5xl lg:text-6xl font-black text-white">{stat.num}</h4>
                                <p className="text-lg text-gray-400 font-medium tracking-widest uppercase">{stat.label}</p>
                            </FloatingCard>
                        </MotionContainer>
                    ))}
                </div>

                {/* Section 4: Founder Message */}
                <MotionContainer delay={0.3} className="border-t border-white/10 pt-20 flex flex-col items-center text-center">
                    <div className="max-w-2xl space-y-6">
                        <p className="text-2xl text-white leading-relaxed font-light italic">
                            "We aren't here to give out participation certificates. We are here to build technology that works. If you're ready to get your hands dirty with real code and real circuits, you belong here."
                        </p>
                        <div className="pt-6">
                            <h4 className="text-xl font-bold text-cyan-400">Narayan Jangid</h4>
                            <p className="text-sm text-gray-500 tracking-widest uppercase mt-1">Founder, ROBOAI HUB</p>
                        </div>
                    </div>
                </MotionContainer>
            </div>
        </main>
    );
}
