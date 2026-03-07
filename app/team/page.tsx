import { FloatingCard } from '@/components/ui/FloatingCard';
import { NeonButton } from '@/components/ui/NeonButton';
import { Linkedin, Twitter, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const staticTeamMembers = [
    {
        id: '1',
        name: 'John Doe',
        role: 'Founder & CEO',
        specialty: 'Strategy',
        bio: 'Visionary leader with 10+ years in AI and Robotics.',
        image: '/images/team/member1.jpg', // Replace with valid path if available
    },
    {
        id: '2',
        name: 'Jane Smith',
        role: 'Lead Engineer',
        specialty: 'Robotics',
        bio: 'Expert in control systems and autonomous navigation.',
        image: '/images/team/member2.jpg',
    }
];

export default function TeamPage() {
    const teamMembers = staticTeamMembers;

    return (
        <main className="min-h-screen bg-deep-space text-white pt-24 px-6 lg:px-20 pb-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-neon-cyan/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-neon-purple/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <div className="mb-12 flex items-center justify-between">
                    <div>
                        <Link href="/" className="inline-flex items-center text-sm text-gray-400 hover:text-white mb-4 transition-colors">
                            <ArrowLeft size={16} className="mr-2" /> Back to Hub
                        </Link>
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                            Core Team
                        </h1>
                        <p className="text-neon-cyan/80 font-mono tracking-widest mt-2">OPERATORS & VISIONARIES</p>
                    </div>
                </div>

                {teamMembers.length === 0 ? (
                    <div className="text-center py-20 bg-white/5 rounded-xl border border-white/10">
                        <p className="text-xl text-gray-400">No team members found.</p>
                        <p className="text-sm text-gray-500 mt-2">Check database connection or run seed script.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, i) => (
                            <Link key={member.id} href={`/team/${member.id}`} className="block h-full">
                                <FloatingCard delay={i * 0.1} className="flex flex-col h-full bg-black/40 border-white/5 hover:border-neon-purple/50 transition-colors cursor-pointer group/card">
                                    <div className="relative w-full aspect-square mb-6 rounded-lg overflow-hidden bg-gray-900 group">
                                        {member.image ? (
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center text-gray-600">
                                                <span className="text-4xl font-mono opacity-20">IMG_0{i + 1}</span>
                                            </div>
                                        )}

                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-neon-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                            <NeonButton variant="cyan" className="px-4 py-2 text-xs pointer-events-none">View Profile</NeonButton>
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-1 group-hover/card:text-neon-cyan transition-colors">{member.name}</h3>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="text-xs font-mono text-neon-purple px-2 py-1 bg-neon-purple/10 rounded-md w-fit">{member.role}</span>
                                        {member.specialty && (
                                            <span className="text-xs font-mono text-cyan-400 px-2 py-1 bg-cyan-400/10 rounded-md w-fit">{member.specialty}</span>
                                        )}
                                    </div>

                                    <p className="text-gray-400 text-sm flex-grow mb-6 leading-relaxed">
                                        {member.bio}
                                    </p>

                                    <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                                        {/* Prevent Link default behavior on social icons if needed, but here simple link is fine, they are decorative mostly in this context unless specified otherwise */}
                                        <div className="p-1"><Linkedin size={18} className="text-gray-500 hover:text-white transition-colors" /></div>

                                    </div>
                                </FloatingCard>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
