'use client';

import { FloatingCard } from '@/components/ui/FloatingCard';
import { NeonButton } from '@/components/ui/NeonButton';
import { ArrowLeft, Check, Terminal, Cpu, Database } from 'lucide-react';
import Link from 'next/link';

const classes = [
    {
        id: 1,
        title: 'Robotics Engineering 101',
        level: 'Beginner',
        duration: '8 Weeks',
        icon: Cpu,
        features: ['Circuit Design', 'Arduino/Raspberry Pi', 'Basic Mechanics'],
        price: '$499'
    },
    {
        id: 2,
        title: 'AI Vision Systems',
        level: 'Advanced',
        duration: '12 Weeks',
        icon: Terminal,
        features: ['OpenCV Mastery', 'Neural Networks', 'Real-time Processing'],
        price: '$899'
    },
    {
        id: 3,
        title: 'Industrial Automation',
        level: 'Intermediate',
        duration: '6 Weeks',
        icon: Database,
        features: ['PLC Programming', 'Safety Systems', 'IoT Integration'],
        price: '$699'
    }
];

export default function ClassesPage() {
    return (
        <main className="min-h-screen bg-deep-space text-white pt-24 px-6 lg:px-20 pb-20 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-neon-cyan/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <Link href="/" className="inline-flex items-center text-sm text-white hover:text-white mb-8 transition-colors">
                        <ArrowLeft size={16} className="mr-2" /> Back to Hub
                    </Link>
                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 mb-6">
                        Academy Training
                    </h1>
                    <p className="text-xl text-white max-w-2xl mx-auto">
                        Master the machines. Join our elite training programs designed for the next generation of engineers.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {classes.map((item, i) => (
                        <FloatingCard key={item.id} delay={i * 0.15} className="flex flex-col bg-white/5 border-white/10 hover:border-neon-cyan/50 hover:bg-white/10 relative">
                            <div className="absolute top-4 right-4 p-2 bg-black/50 rounded-lg text-neon-cyan border border-neon-cyan/20">
                                <item.icon size={24} />
                            </div>

                            <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                            <div className="flex gap-3 text-xs font-mono mb-6 text-white">
                                <span className="bg-white/5 px-2 py-1 rounded">{item.level}</span>
                                <span className="bg-white/5 px-2 py-1 rounded">{item.duration}</span>
                            </div>

                            <div className="space-y-3 mb-8 flex-grow">
                                {item.features.map((feat, idx) => (
                                    <div key={idx} className="flex items-center gap-3 text-sm text-white">
                                        <div className="w-5 h-5 rounded-full bg-neon-cyan/20 flex items-center justify-center text-neon-cyan">
                                            <Check size={12} />
                                        </div>
                                        {feat}
                                    </div>
                                ))}
                            </div>

                            <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                                <span className="text-2xl font-bold text-neon-cyan">{item.price}</span>
                                <NeonButton variant="cyan" className="px-6 py-2 text-sm">Enroll</NeonButton>
                            </div>
                        </FloatingCard>
                    ))}
                </div>
            </div>
        </main>
    );
}
