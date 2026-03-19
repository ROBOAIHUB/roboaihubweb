import { MotionContainer } from '@/components/ui/MotionContainer';
import { FloatingCard } from '@/components/ui/FloatingCard';
import { Trophy, Blocks, Settings } from 'lucide-react';

const projects = [
    {
        id: 'robosoccer-arena',
        title: "RoboSoccer Arena",
        desc: "Designed and built a full-scale competitive robotic soccer arena for advanced AI testing and student engagement.",
        image: "/images/bg.jpg",
        icon: Trophy,
        color: "text-blue-400"
    },
    {
        id: 'lab-setups',
        title: "Institution Lab Setups",
        desc: "Deployed over 15+ comprehensive robotics and AI laboratories across leading educational institutions.",
        image: "/images/about/facility-lab.png",
        icon: Blocks,
        color: "text-cyan-400"
    },
    {
        id: 'automation-deployments',
        title: "Industrial Automation",
        desc: "Engineered and integrated smart automation arms for local manufacturing, increasing efficiency by 40%.",
        image: "/images/services/industry_main_new.png",
        icon: Settings,
        color: "text-blue-500"
    }
];

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-deep-space text-white pt-24 px-6 lg:px-20 pb-20 relative overflow-hidden">
            <div className="text-center mb-16">
                <div className="inline-block mb-4">
                    <h1 className="text-4xl lg:text-5xl font-bold font-mono text-white tracking-widest uppercase">LAB</h1>
                    <div className="h-1 w-1/3 mx-auto bg-cyan-400/50 mt-2 rounded-full"></div>
                </div>
                <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-lg">
                    We don't just talk about technology. We build it. Here is some of our real-world work.
                </p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <MotionContainer key={project.id} delay={index * 0.1} className="h-full">
                        <FloatingCard className="group bg-[#0B0F14]/40 border-white/5 h-full flex flex-col overflow-hidden rounded-2xl hover:border-white/30 transition-all duration-300">
                            <div className="relative h-56 w-full overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14] to-transparent opacity-90" />
                                <div className={`absolute top-4 left-4 p-2 rounded-lg bg-black/50 backdrop-blur-md border border-white/10 ${project.color}`}>
                                    <project.icon size={20} />
                                </div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                                    {project.desc}
                                </p>
                            </div>
                        </FloatingCard>
                    </MotionContainer>
                ))}
            </div>
        </main>
    );
}
