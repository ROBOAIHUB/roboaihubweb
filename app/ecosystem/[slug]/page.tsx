import { NeonButton } from '@/components/ui/NeonButton';
import {
    ArrowLeft, CheckCircle, BookOpen, UserCheck, Briefcase, Globe, Cpu, Zap, Rocket, TrendingUp,
    Users, Layers, Bot, Lightbulb, Settings, RefreshCw, Award, Monitor, Hammer, Mic, Share2, MessageCircle, Unlock, Wrench, Library
} from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ImageCarousel } from '@/components/ui/ImageCarousel';
import { MotionContainer, MotionItem, MotionImage } from '@/components/ui/MotionContainer';

import { ReactNode } from 'react';

interface ServiceData {
    title: string;
    desc: string | ReactNode;
    fullDesc: string;
    image: string;
    brandingImage?: string;
    detailImage?: string;
    curriculum?: { category: string; topics: string[] }[];
    targetAudience?: { title: string; desc: string }[];
    careers?: string[];
    features?: { title: string; desc: string; icon: any }[]; // Added icon
}

const servicesData: Record<string, ServiceData> = {
    'lab-ecosystem-solutions': {
        title: "Lab Ecosystem Solutions",
        desc: (<>End-to-end <span className="font-bold text-white">Robotics & AI labs</span> for institutions — infrastructure, curriculum, and mentors included. Everything needed to start innovation from day one.</>),
        fullDesc: "",
        image: "/images/services/lab_main_new.png",
        detailImage: "/images/services/lab_detail_new.png",
        features: [
            {
                title: "Complete Infrastructure",
                desc: "We provide comprehensive equipment for building modern robotics labs.",
                icon: Layers
            },
            {
                title: "Integrated Curriculum",
                desc: "Ready-to-use lesson plans, practical guides, and structured learning paths.",
                icon: Library
            },
            {
                title: "Mentor Provision",
                desc: "Expert trainers supplied to ensure seamless lab operation.",
                icon: Users
            },
            {
                title: "Quick Innovation",
                desc: "Start innovating from day one with fully pre-configured setups.",
                icon: Zap
            }
        ]
    },
    'industry-automation': {
        title: "Industry Automation",
        desc: (<>Smart automation built for <span className="font-bold text-white">real industries</span>. From AI intelligence to robotic execution — we design, build, and deploy complete solutions.</>),
        fullDesc: "",
        image: "/images/services/industry_main_new.png",
        detailImage: "/images/services/industry_detail_new.png",
        features: [
            {
                title: "Intelligent AI",
                desc: "Integrate powerful AI models into legacy manufacturing processes.",
                icon: Bot
            },
            {
                title: "Robotic Execution",
                desc: "Deploy precision robotics for assembly, sorting, and advanced operations.",
                icon: Settings
            },
            {
                title: "Custom Solutions",
                desc: "Tailor-made automation designed specifically for your operational needs.",
                icon: Hammer
            },
            {
                title: "End-to-end Deployment",
                desc: "From blueprint to final installation, we handle the entire execution loop.",
                icon: TrendingUp
            }
        ]
    }
};

export async function generateStaticParams() {
    return Object.keys(servicesData).map((slug) => ({
        slug,
    }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = servicesData[slug];

    if (!service) {
        return notFound();
    }

    return (
        <main className="min-h-screen bg-deep-space text-white pt-24 pb-20 relative overflow-hidden">
            {/* Hero Background */}
            <div className="absolute top-0 left-0 w-full h-[60vh] z-0">
                <MotionImage src={service.image} alt={service.title} className="w-full h-full object-cover opacity-30 mask-image-gradient-b" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F14]/60 via-[#0B0F14]/80 to-[#0B0F14]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <Link href="/ecosystem" className="inline-flex items-center text-sm text-white hover:text-white mb-8 transition-colors group">
                    <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Ecosystem
                </Link>

                <div className="max-w-6xl mx-auto">
                    <MotionContainer>
                        <h1 className="text-4xl lg:text-7xl font-bold font-mono mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                            {service.title.toUpperCase()}
                        </h1>
                        <div className="h-1 w-32 bg-neon-cyan mb-12 rounded-full shadow-[0_0_15px_rgba(0,243,255,0.8)]"></div>
                    </MotionContainer>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-12">
                            {/* Curriculum Section - Moved to Top */}
                            {service.curriculum && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {service.curriculum.map((course, idx) => (
                                        <MotionContainer key={idx} delay={0.1 + (idx * 0.1)} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-neon-cyan/30 transition-colors">
                                            <div className="flex items-center gap-3 mb-6">
                                                <BookOpen className="text-neon-cyan" size={24} />
                                                <h3 className="text-xl font-bold">{course.category}</h3>
                                            </div>
                                            <ul className="space-y-4">
                                                {course.topics.map((topic, i) => (
                                                    <li key={i} className="flex items-center gap-3 text-base font-medium text-white transition-all duration-300 hover:text-neon-cyan hover:translate-x-1">
                                                        <div className="min-w-[16px]"><CheckCircle size={16} className="text-neon-cyan drop-shadow-[0_0_8px_rgba(0,243,255,0.5)]" /></div>
                                                        <span className="drop-shadow-sm">{topic}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </MotionContainer>
                                    ))}
                                </div>
                            )}

                            {/* Description Section - Visible for All */}
                            <MotionContainer delay={0.1}>
                                <div className="prose prose-invert prose-lg max-w-none mb-12">
                                    {/* Special Branding Image for Product Development */}
                                    <div className="text-xl text-white leading-relaxed font-light border-l-4 border-neon-cyan pl-6 py-2 bg-white/5 rounded-r-lg">
                                        {service.desc}
                                    </div>
                                    {service.fullDesc && (
                                        <p className="text-white leading-loose mt-4">
                                            {service.fullDesc}
                                        </p>
                                    )}
                                </div>
                            </MotionContainer>
                            {service.fullDesc && (
                                <p className="text-white leading-loose mt-4">
                                    {service.fullDesc}
                                </p>
                            )}

                            {/* Structured Features for R&D (Unique Design) */}
                            {service.features && (
                                <div className="space-y-8">
                                    <div className="grid grid-cols-1 gap-6">
                                        {service.features.map((feature, idx) => (
                                            <MotionContainer key={idx} delay={0.2 + (idx * 0.1)} className="group relative bg-zinc-900/50 border border-white/10 rounded-2xl p-6 overflow-hidden hover:border-neon-cyan/50 transition-all duration-500">
                                                <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                                <div className="relative z-10 flex items-start gap-4">
                                                    <div className="p-3 rounded-lg bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                                                        {/* Dynamic Icon Rendering */}
                                                        {feature.icon && <feature.icon className="text-white" size={24} />}
                                                    </div>
                                                    <div>
                                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">{feature.title}</h3>
                                                        <p className="text-white text-sm leading-relaxed">{feature.desc}</p>
                                                    </div>
                                                </div>
                                            </MotionContainer>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Insert Detail Image in Content Flow - HIDDEN ON LG TO AVOID REPETITION */}
                            {(service.detailImage || slug === 'lab-ecosystem-solutions') && !service.features && (
                                <MotionContainer delay={0.2} className="w-full h-64 lg:h-96 rounded-2xl overflow-hidden border border-white/10 relative group lg:hidden">
                                    <div className="absolute inset-0 bg-neon-cyan/10 mix-blend-overlay pointer-events-none z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                                    {slug === 'lab-ecosystem-solutions' ? (
                                        <ImageCarousel
                                            images={[
                                                { src: "/images/ecosystem/lab/media__1772874163995.jpg", alt: "Lab Ecosystem 1" },
                                                { src: "/images/ecosystem/lab/media__1772874164070.jpg", alt: "Lab Ecosystem 5" },
                                                { src: "/images/ecosystem/lab/media__1772874164010.jpg", alt: "Lab Ecosystem 2" },
                                                { src: "/images/ecosystem/lab/media__1772874164017.jpg", alt: "Lab Ecosystem 3" },
                                                { src: "/images/ecosystem/lab/media__1772874164058.jpg", alt: "Lab Ecosystem 4" }
                                            ]}
                                            className="w-full h-full object-cover"
                                            autoPlayInterval={3000}
                                        />
                                    ) : (
                                        <MotionImage src={service.detailImage!} alt="Service Detail" className="w-full h-full object-cover" />
                                    )}
                                </MotionContainer>
                            )}

                            {/* Target Audience & Careers */}
                            {(service.targetAudience || service.careers) && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-white/10">
                                    {service.targetAudience && (
                                        <div>
                                            <MotionContainer delay={0.3}>
                                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                                    <UserCheck className="text-blue-400" /> Who Can Join?
                                                </h3>
                                            </MotionContainer>
                                            <div className="space-y-4">
                                                {service.targetAudience.map((audience, idx) => (
                                                    <MotionItem key={idx} delay={0.4 + (idx * 0.05)} className="bg-white/5 p-4 rounded-xl border-l-2 border-blue-400">
                                                        <h4 className="font-bold text-white mb-1">{audience.title}</h4>
                                                        <p className="text-xs text-white">{audience.desc}</p>
                                                    </MotionItem>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {service.careers && (
                                        <div>
                                            <MotionContainer delay={0.3}>
                                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                                    <Briefcase className="text-green-400" /> Career Opportunities
                                                </h3>
                                            </MotionContainer>
                                            <MotionContainer delay={0.4} className="bg-white/5 rounded-2xl p-6 border border-white/10">
                                                <ul className="grid grid-cols-1 gap-3">
                                                    {service.careers.map((career, idx) => (
                                                        <li key={idx} className="flex items-center gap-3 text-white">
                                                            <div className="w-2 h-2 bg-green-400 rounded-full" />
                                                            {career}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </MotionContainer>
                                        </div>
                                    )}
                                </div>
                            )}


                        </div>

                        {/* Sidebar / Additional Visuals */}
                        <div className="hidden lg:block space-y-8">
                            {(service.detailImage || slug === 'lab-ecosystem-solutions') && (
                                <MotionContainer delay={0.3} className="sticky top-32">
                                    <div className="rounded-3xl overflow-hidden border border-white/20 shadow-[0_0_30px_rgba(0,243,255,0.1)] h-[500px] relative group">
                                        <div className="absolute inset-0 bg-neon-cyan/10 mix-blend-overlay pointer-events-none z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                                        {slug === 'lab-ecosystem-solutions' ? (
                                            <ImageCarousel
                                                images={[
                                                    { src: "/images/ecosystem/lab/media__1772874163995.jpg", alt: "Lab Ecosystem 1" },
                                                    { src: "/images/ecosystem/lab/media__1772874164070.jpg", alt: "Lab Ecosystem 5" },
                                                    { src: "/images/ecosystem/lab/media__1772874164010.jpg", alt: "Lab Ecosystem 2" },
                                                    { src: "/images/ecosystem/lab/media__1772874164017.jpg", alt: "Lab Ecosystem 3" },
                                                    { src: "/images/ecosystem/lab/media__1772874164058.jpg", alt: "Lab Ecosystem 4" }
                                                ]}
                                                className="w-full h-full object-cover"
                                                autoPlayInterval={3000}
                                            />
                                        ) : (
                                            <MotionImage src={service.detailImage!} alt="Detail View" className="w-full h-full object-cover" />
                                        )}
                                    </div>
                                </MotionContainer>
                            )}
                        </div>
                    </div>
                </div>
            </div >
        </main >
    );
}
