import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, Blocks, Settings, Lightbulb, GraduationCap, Bot, Cpu } from 'lucide-react';
import { NeonButton } from '@/components/ui/NeonButton';
import { DecodingText } from '@/components/ui/DecodingText';

export const metadata: Metadata = {
  title: 'Home | ROBOAI HUB',
  description: 'ROBOAI HUB provides AI & Robotics Automation in Jodhpur. From classrooms to factories, we design, build, and deploy real-world Robotics & AI systems.',
};
export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-transparent text-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] w-full flex flex-col justify-center px-6 lg:px-20 pt-32 pb-20">
        <div className="z-10 max-w-4xl flex flex-col gap-8 text-center mx-auto items-center">
          <h1 className="text-5xl lg:text-7xl font-black mb-2 text-white leading-tight">
            Building the Future with <br className="hidden lg:block" /><span className="text-cyan-400">Robotics & AI</span>
          </h1>

          <div className="text-xl text-white max-w-2xl leading-relaxed">
            <DecodingText text="From classrooms to factories." className="text-cyan-400 inline-block mt-2" speed={80} /> <br />
            <DecodingText text="We design, build, and deploy real-world Robotics & AI systems." className="text-cyan-400 inline-block mt-2" speed={80} />
          </div>

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

      {/* SECTION 3 – OUR CORE VERTICALS */}
      <section className="pb-32 px-6 lg:px-20 relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black mb-4 text-white uppercase tracking-wider">
            Our Core Verticals
          </h2>
          <div className="h-1 w-24 mx-auto bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Academic & Institutional Development",
              desc: "Driving structured Robotics & AI education across institutions and learners.",
              link: "/academic-institutional-development",
              cta: "Explore Academic Programs",
              icon: GraduationCap,
              colorScheme: {
                textHover: "group-hover:text-cyan-400",
                bgGlow: "group-hover:bg-cyan-400/10",
                borderGlow: "hover:border-cyan-400/50",
                iconBg: "bg-cyan-400/10",
                iconColor: "text-cyan-400",
                gradientFrom: "from-cyan-400/10",
                ctaText: "text-cyan-400",
                ctaBg: "bg-cyan-400/5",
                ctaBorder: "border-cyan-400/20",
                ctaBorderHover: "group-hover:border-cyan-400/50"
              }
            },
            {
              title: "Research & Innovation",
              desc: "Applied research and rapid prototyping focused on practical Robotics & AI solutions.",
              link: "/research-innovation",
              cta: "Explore Innovation",
              icon: Bot,
              colorScheme: {
                textHover: "group-hover:text-emerald-400",
                bgGlow: "group-hover:bg-emerald-400/10",
                borderGlow: "hover:border-emerald-400/50",
                iconBg: "bg-emerald-400/10",
                iconColor: "text-emerald-400",
                gradientFrom: "from-emerald-400/10",
                ctaText: "text-emerald-400",
                ctaBg: "bg-emerald-400/5",
                ctaBorder: "border-emerald-400/20",
                ctaBorderHover: "group-hover:border-emerald-400/50"
              }
            },
            {
              title: "Industrial Automation & AI Systems",
              desc: "Custom-built Robotics and AI systems engineered for real-world operational efficiency.",
              link: "/industrial-automation-systems",
              cta: "Explore Automation",
              icon: Cpu,
              colorScheme: {
                textHover: "group-hover:text-red-400",
                bgGlow: "group-hover:bg-red-400/10",
                borderGlow: "hover:border-red-400/50",
                iconBg: "bg-red-400/10",
                iconColor: "text-red-400",
                gradientFrom: "from-red-400/10",
                ctaText: "text-red-400",
                ctaBg: "bg-red-400/5",
                ctaBorder: "border-red-400/20",
                ctaBorderHover: "group-hover:border-red-400/50"
              }
            }
          ].map((item, idx) => (
            <Link key={idx} href={item.link}>
              <div className={`group h-full p-8 lg:p-10 rounded-[2.5rem] bg-[#0A0A0F]/80 backdrop-blur-2xl border border-white/10 ${item.colorScheme.borderGlow} flex flex-col relative overflow-hidden transition-all duration-500 shadow-2xl hover:-translate-y-2`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${item.colorScheme.gradientFrom} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none group-hover:scale-110 transform origin-top-right">
                  <item.icon size={120} />
                </div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className={`w-14 h-14 rounded-2xl ${item.colorScheme.iconBg} border border-white/5 flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform duration-500 shrink-0`}>
                    <item.icon className={`w-7 h-7 ${item.colorScheme.iconColor} drop-shadow-[0_0_8px_currentColor]`} />
                  </div>
                  <h3 className={`text-3xl font-bold mb-4 text-white ${item.colorScheme.textHover} transition-colors drop-shadow-sm leading-tight`}>{item.title}</h3>
                  <p className="text-white text-lg mb-10 flex-1 leading-relaxed">{item.desc}</p>
                  <div className={`inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest ${item.colorScheme.ctaText} group-hover:gap-4 transition-all w-fit rounded-full ${item.colorScheme.ctaBg} px-6 py-3 border ${item.colorScheme.ctaBorder} ${item.colorScheme.ctaBorderHover}`}>
                    {item.cta} <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
