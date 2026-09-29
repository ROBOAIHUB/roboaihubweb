import { ArrowLeft, BookOpen, GraduationCap, Building2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { ImageCarousel } from '@/components/ui/ImageCarousel';

const academicImages = [
    { src: "/images/academic/media__1772862167793.jpg", alt: "Students with Mentor in Lab" },
    { src: "/images/academic/media__1772862179604.jpg", alt: "Hands-on Practical Session" },
    { src: "/images/academic/media__1772862179623.jpg", alt: "Seminar Delivery" },
    { src: "/images/academic/media__1772862179691.jpg", alt: "Prototyping Collaboration" },
    { src: "/images/academic/media__1772862179700.jpg", alt: "Robotics Build Final Result" },
    { src: "/images/academic/media__1772871247510.jpg", alt: "Academic Workshop 1" },
    { src: "/images/academic/media__1772871247531.jpg", alt: "Academic Workshop 2" },
    { src: "/images/academic/media__1772871247561.jpg", alt: "Academic Workshop 3" },
    { src: "/images/academic/media__1772871247582.jpg", alt: "Academic Workshop 4" },
    { src: "/images/academic/media__1772871859906.jpg", alt: "Academic Workshop 5" },
    { src: "/images/academic/media__1772871859943.jpg", alt: "Academic Workshop 6" },
    { src: "/images/academic/media__1772871859952.jpg", alt: "Academic Workshop 7" },
    { src: "/images/academic/media__1772871859992.jpg", alt: "Academic Workshop 8" },
];

export default function AcademicDevelopmentPage() {
    return (
        <main className="min-h-screen bg-transparent text-white pt-24 pb-20 relative overflow-hidden font-sans">
            {/* Background Effects */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 blur-[150px] rounded-full mix-blend-screen"></div>
                <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                <Link href="/" className="inline-flex items-center text-sm text-gray-400 hover:text-white mb-12 transition-colors group">
                    <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Home
                </Link>

                {/* HERO SECTION */}
                <div className="text-center max-w-4xl mx-auto mb-20 mt-8">
                    <div className="inline-flex items-center gap-2 bg-cyan-950/50 border border-cyan-400/30 text-cyan-300 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest mb-8 shadow-[0_0_15px_rgba(0,243,255,0.2)]">
                        Core Vertical
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-gray-400 drop-shadow-[0_0_25px_rgba(0,243,255,0.2)] tracking-tight">
                        Academic & Institutional Development
                    </h1>
                    <h2 className="text-2xl lg:text-3xl font-medium text-cyan-400 mb-6 drop-shadow-[0_0_10px_rgba(0,243,255,0.5)]">
                        Building the next generation of Robotics & AI professionals.
                    </h2>
                </div>

                {/* OVERVIEW SECTION */}
                <div className="max-w-4xl mx-auto mb-24 relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-[2rem] blur-xl opacity-50"></div>
                    <div className="relative bg-[#0A0A0F]/90 backdrop-blur-xl border border-white/10 rounded-[2rem] p-10 text-center shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                        <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed font-light">
                            RoboAI Hub delivers structured, hands-on Robotics & AI education designed to build <span className="font-bold text-white">practical engineering capability</span> — not just theoretical understanding.
                        </p>
                    </div>
                </div>

                {/* IMAGE CAROUSEL */}
                <div className="w-full max-w-5xl mx-auto rounded-[2rem] overflow-hidden mb-24 border border-cyan-500/20 shadow-[0_0_40px_rgba(0,243,255,0.15)] group relative z-20">
                    <ImageCarousel
                        images={academicImages}
                        className="aspect-[21/9] w-full"
                        autoPlayInterval={4000}
                        overlayText="PRACTICAL ENGINEERING CAPABILITY"
                    />
                </div>

                {/* THREE CORE OFFERINGS */}
                <div className="mb-16">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="h-px bg-gradient-to-r from-transparent to-cyan-400/50 flex-1"></div>
                        <h3 className="text-2xl font-bold uppercase tracking-widest text-cyan-400">Three Core Offerings</h3>
                        <div className="h-px bg-gradient-to-r from-cyan-400/50 to-transparent flex-1"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Offering 1 */}
                        <div className="group bg-[#090B10]/80 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-cyan-400/50 transition-all duration-500 flex flex-col relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/5 rounded-full blur-[80px] group-hover:bg-cyan-400/20 transition-colors duration-500"></div>
                            <GraduationCap className="w-12 h-12 text-cyan-400 mb-6 relative z-10 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                            <h4 className="text-2xl font-bold text-white mb-4 relative z-10 group-hover:text-cyan-400 transition-colors">Professional Mentorship Programs</h4>
                            <p className="text-gray-400 mb-4 flex-1 relative z-10 leading-relaxed">
                                Advanced Robotics & AI mentorship designed to develop industry-ready engineers and certified mentors.
                            </p>
                            <p className="text-cyan-200/80 text-sm italic mb-8 relative z-10">
                                Ideal for graduates and aspiring professionals seeking practical deep-tech skills.
                            </p>
                            <a href="https://wa.me/919828014877" target="_blank" rel="noopener noreferrer" className="relative z-10 w-fit">
                                <button className="px-6 py-3 bg-white/5 border border-white/10 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-cyan-400/10 hover:border-cyan-400/50 hover:text-cyan-400 transition-all flex items-center gap-2 group/btn">
                                    Enroll Now <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </a>
                        </div>

                        {/* Offering 2 */}
                        <div className="group bg-[#090B10]/80 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-blue-400/50 transition-all duration-500 flex flex-col relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/5 rounded-full blur-[80px] group-hover:bg-blue-400/20 transition-colors duration-500"></div>
                            <Building2 className="w-12 h-12 text-blue-400 mb-6 relative z-10 drop-shadow-[0_0_10px_rgba(96,165,250,0.5)]" />
                            <h4 className="text-2xl font-bold text-white mb-4 relative z-10 group-hover:text-blue-400 transition-colors">Institutional Lab Ecosystems</h4>
                            <p className="text-gray-400 mb-4 flex-1 relative z-10 leading-relaxed">
                                End-to-end Robotics & AI lab design and deployment for schools and institutions — including infrastructure, curriculum, and mentor training.
                            </p>
                            <p className="text-blue-200/80 text-sm italic mb-8 relative z-10">
                                Everything needed to launch innovation from day one.
                            </p>
                            <a href="https://wa.me/919828014877" target="_blank" rel="noopener noreferrer" className="relative z-10 w-fit">
                                <button className="px-6 py-3 bg-white/5 border border-white/10 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-blue-400/10 hover:border-blue-400/50 hover:text-blue-400 transition-all flex items-center gap-2 group/btn">
                                    Setup a Lab <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </a>
                        </div>

                        {/* Offering 3 */}
                        <div className="group bg-[#090B10]/80 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-emerald-400/50 transition-all duration-500 flex flex-col relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-400/5 rounded-full blur-[80px] group-hover:bg-emerald-400/20 transition-colors duration-500"></div>
                            <BookOpen className="w-12 h-12 text-emerald-400 mb-6 relative z-10 drop-shadow-[0_0_10px_rgba(192,132,252,0.5)]" />
                            <h4 className="text-2xl font-bold text-white mb-4 relative z-10 group-hover:text-emerald-400 transition-colors">Foundation Learning Programs</h4>
                            <p className="text-gray-400 mb-4 flex-1 relative z-10 leading-relaxed">
                                Hands-on Robotics & AI programs for school students focused on early innovation exposure and practical skill development.
                            </p>
                            <p className="text-emerald-200/80 text-sm italic mb-8 relative z-10">
                                Designed to build builders — not passive learners.
                            </p>
                            <a href="https://wa.me/919828014877" target="_blank" rel="noopener noreferrer" className="relative z-10 w-fit">
                                <button className="px-6 py-3 bg-white/5 border border-white/10 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-emerald-400/10 hover:border-emerald-400/50 hover:text-emerald-400 transition-all flex items-center gap-2 group/btn">
                                    Join Programs <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}
