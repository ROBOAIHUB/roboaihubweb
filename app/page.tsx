import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BookOpen, Blocks, Settings, Lightbulb, CheckCircle2, Sparkles, Users, Target, Trophy } from 'lucide-react';
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
            <Link href="/about">
              <NeonButton variant="cyan" glow={false} className="border-white/20 text-white hover:bg-white/10 px-8 py-3 font-bold text-lg">
                About Us
              </NeonButton>
            </Link>
          </div>
        </div>
      </section>

      {/* 4 Big Blocks */}
      <section className="pb-24 px-6 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 max-w-7xl mx-auto">
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

      {/* About Us Section */}
      <section id="about" className="py-20 px-6 lg:px-20 relative z-10 max-w-7xl mx-auto border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 text-xs font-mono uppercase tracking-widest">
              <Sparkles size={14} /> About Us
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
              Where We Elevate Learnings Through <span className="text-cyan-400">Robotics</span>
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              Igniting dreams, building the future. RoboAI Hub is not just a training center—it is a vibrant engineering community where aspiring roboticists of all ages come together to learn, create, and push the boundaries of what is possible.
            </p>

            <div className="space-y-3 pt-2">
              {[
                "Comprehensive training programs across all education levels.",
                "Open-source labs equipped for hands-on projects & rapid prototyping.",
                "Real industrial automation and smart execution systems.",
                "Expert-led mentorship covering electronics, programming & AI."
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-cyan-400 shrink-0 mt-1" />
                  <span className="text-gray-300 text-base">{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link href="/about">
                <NeonButton variant="cyan" glow={false} className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-6 py-3 font-bold">
                  Read Our Full Story <ArrowRight size={18} className="inline ml-2" />
                </NeonButton>
              </Link>
              <Link href="/contact">
                <NeonButton variant="cyan" glow={false} className="border-white/20 text-white hover:bg-white/10 px-6 py-3 font-bold">
                  Get in Touch
                </NeonButton>
              </Link>
            </div>
          </div>

          {/* Visual Showcase with Stats */}
          <div className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-cyan-400/30 shadow-[0_0_30px_rgba(34,211,238,0.2)] aspect-[16/10] bg-black/60 group">
              <Image
                src="/images/about/AboutUs01.jpg"
                alt="RoboAI Hub Training & Innovation"
                fill
                className="object-cover transition-all duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <span className="text-cyan-400 font-mono text-sm tracking-widest border border-cyan-400/30 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md">
                  RoboAI Hub Innovation Lab
                </span>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { num: "2000+", label: "Students", icon: Users },
                { num: "15+", label: "Labs Built", icon: Target },
                { num: "100+", label: "Projects", icon: Trophy }
              ].map((stat, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 text-center hover:border-cyan-400/30 transition-colors">
                  <stat.icon size={20} className="text-cyan-400 mx-auto mb-1" />
                  <div className="text-2xl font-black text-white">{stat.num}</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
