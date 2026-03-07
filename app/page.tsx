import Link from 'next/link';
import { ArrowRight, BookOpen, Blocks, Settings, Lightbulb } from 'lucide-react';
import { NeonButton } from '@/components/ui/NeonButton';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-transparent text-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] w-full flex flex-col justify-center px-6 lg:px-20 pt-32 pb-20">
        <div className="z-10 max-w-4xl flex flex-col gap-8 text-center mx-auto items-center">
          <h1 className="text-5xl lg:text-7xl font-black mb-2 text-white leading-tight">
            Building the Future with <br className="hidden lg:block" /><span className="text-cyan-400">Robotics & AI</span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            From classrooms to factories. We design, build, and deploy real-world Robotics & AI systems.
          </p>

          <div className="flex flex-wrap gap-4 mt-8 justify-center">
            <Link href="/ecosystem">
              <NeonButton variant="cyan" glow={false} className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-3 font-bold text-lg">
                Explore Ecosystem
              </NeonButton>
            </Link>
            <Link href="/career">
              <NeonButton variant="cyan" glow={false} className="border-white/20 text-white hover:bg-white/10 px-8 py-3 font-bold text-lg">
                Work With Us
              </NeonButton>
            </Link>
          </div>
        </div>
      </section>

      {/* 4 Big Blocks */}
      <section className="pb-32 px-6 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 max-w-7xl mx-auto">
        {[
          { icon: BookOpen, title: "Learn", desc: "Foundation programs for students and professionals.", link: "/ecosystem/foundation-programs", color: "text-cyan-400" },
          { icon: Blocks, title: "Build", desc: "End-to-end lab infrastructure for institutions.", link: "/ecosystem/lab-ecosystem-solutions", color: "text-cyan-400" },
          { icon: Settings, title: "Automate", desc: "Smart AI & robotic execution for industries.", link: "/ecosystem/industry-automation", color: "text-cyan-400" },
          { icon: Lightbulb, title: "Innovate", desc: "Custom prototypes and interactive experiences.", link: "/ecosystem/innovation-studio", color: "text-cyan-400" }
        ].map((item, idx) => (
          <Link key={idx} href={item.link}>
            <div className="group h-full p-8 rounded-2xl bg-black/40 hover:bg-white/5 transition-all duration-300 border border-white/10 hover:border-cyan-400/30 flex flex-col">
              <item.icon size={48} className={`mb-6 ${item.color} group-hover:scale-110 transition-transform`} />
              <h3 className="text-2xl font-bold mb-3 text-white">{item.title}</h3>
              <p className="text-gray-400 text-base mb-6 flex-1">{item.desc}</p>
              <div className="text-sm font-bold uppercase tracking-widest text-cyan-400 flex items-center gap-2 group-hover:gap-3 transition-all">
                Explore <ArrowRight size={16} />
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
