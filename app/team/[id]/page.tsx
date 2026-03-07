import { NeonButton } from '@/components/ui/NeonButton';
import { GlitchText } from '@/components/ui/GlitchText';
import { ArrowLeft, Linkedin, User } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const staticTeamMembers = [
    {
        id: '1',
        name: 'John Doe',
        role: 'Founder & CEO',
        specialty: 'Strategy',
        bio: 'Visionary leader with 10+ years in AI and Robotics.',
        image: '/images/team/member1.jpg',
        linkedin: 'https://linkedin.com/'
    },
    {
        id: '2',
        name: 'Jane Smith',
        role: 'Lead Engineer',
        specialty: 'Robotics',
        bio: 'Expert in control systems and autonomous navigation.',
        image: '/images/team/member2.jpg',
        linkedin: 'https://linkedin.com/'
    }
];

export async function generateStaticParams() {
    return staticTeamMembers.map((member) => ({
        id: member.id,
    }));
}

export default async function TeamMemberDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const member = staticTeamMembers.find((m) => m.id === id);

    if (!member) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-deep-space text-white pt-24 px-6 relative overflow-hidden flex items-center justify-center">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 bg-cover pointer-events-none" />

            <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center z-10">
                {/* Left Column: Image & Status */}
                <div className="relative group perspective-1000">
                    <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000" />
                    <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-gray-900 border border-white/10 group-hover:scale-[1.02] transition-transform duration-500 ease-out shadow-2xl shadow-neon-cyan/10">
                        {member.image ? (
                            <>
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-110 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

                                {/* Holographic Overlay */}
                                <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,243,255,0.05)_50%)] bg-[length:100%_4px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </>
                        ) : (
                            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center relative overflow-hidden">
                                <span className="text-6xl font-mono text-white/5 font-bold absolute z-0 scale-150">PROFILE</span>
                                <User size={80} className="text-white/20 relative z-10" />
                            </div>
                        )}

                        {/* Status Overlay Removed */}
                    </div>
                </div>

                {/* Right Column: Info */}
                <div>
                    <Link href="/team" className="inline-flex items-center text-sm text-gray-400 hover:text-white mb-8 transition-colors group">
                        <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                        <span className="font-mono tracking-wider">BACK</span>
                    </Link>

                    <div className="mb-4">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="h-px w-12 bg-neon-cyan/50" />
                            <span className="text-neon-cyan font-mono tracking-[0.2em] text-sm uppercase">{member.role}</span>
                        </div>
                        <GlitchText text={member.name} className="text-4xl md:text-5xl mb-2" />
                    </div>

                    <div className="flex flex-wrap gap-3 mb-8">
                        {member.specialty && (
                            <span className="px-3 py-1 rounded border border-neon-cyan/30 text-neon-cyan bg-neon-cyan/5 text-xs font-mono uppercase tracking-wider relative overflow-hidden group">
                                <span className="absolute inset-0 bg-neon-cyan/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                                {member.specialty}
                            </span>
                        )}
                    </div>

                    <div className="relative mb-10">
                        <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-neon-purple to-transparent" />
                        <p className="text-lg text-gray-300 leading-relaxed pl-6 font-light">
                            {member.bio || "No biography available for this operative."}
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="flex gap-4">
                            {member.linkedin ? (
                                <Link href={member.linkedin} target="_blank" className="group flex items-center gap-3 px-5 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-neon-cyan/50 transition-all duration-300">
                                    <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-neon-cyan transition-colors" />
                                    <span className="text-sm text-gray-300 group-hover:text-white font-mono">LINKEDIN</span>
                                </Link>
                            ) : null}


                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
