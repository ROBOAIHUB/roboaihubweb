import { ArrowLeft, Clock, MapPin, Briefcase } from 'lucide-react';
import Link from 'next/link';
import { ApplyButton } from '@/components/ui/ApplyButton';
import { staticJobs } from '@/lib/data';

export async function generateStaticParams() {
    return staticJobs.map((job) => ({
        id: job.id,
    }));
}

export default async function JobDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const job = staticJobs.find((j) => j.id === resolvedParams.id);

    if (!job) return <div className="min-h-screen bg-deep-space flex items-center justify-center text-white">Job not found</div>;

    if (!job) return <div className="min-h-screen bg-deep-space flex items-center justify-center text-white">Job not found</div>;

    return (
        <div className="min-h-screen bg-deep-space text-white pt-24 pb-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <Link href="/career" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
                    <ArrowLeft size={16} /> Back to Careers
                </Link>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 border-b border-white/10 pb-8">
                        <div>
                            <h1 className="text-3xl md:text-5xl font-bold mb-4">{job.title}</h1>
                            <div className="flex flex-wrap gap-4 text-gray-300">
                                <span className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full">
                                    <Briefcase size={16} className="text-neon-cyan" /> {job.department}
                                </span>
                                <span className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full">
                                    <Clock size={16} className="text-neon-cyan" /> {job.type}
                                </span>
                                <span className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full">
                                    <MapPin size={16} className="text-neon-cyan" /> {job.location}
                                </span>
                            </div>
                        </div>
                        <ApplyButton jobId={job.id} jobTitle={job.title} text="Apply Now" />
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-neon-cyan">About the Role</h2>
                            <div className="prose prose-invert max-w-none text-gray-300 whitespace-pre-line">
                                {job.description}
                            </div>
                        </div>

                        {job.requirements && (
                            <div>
                                <h2 className="text-2xl font-bold mb-4 text-neon-cyan">Requirements</h2>
                                <div className="prose prose-invert max-w-none text-gray-300 whitespace-pre-line">
                                    {job.requirements}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/10 text-center">
                        <p className="text-gray-400 mb-6">Ready to join the elite software & robotics team?</p>
                        <ApplyButton jobId={job.id} jobTitle={job.title} className="w-full md:w-auto" text="Apply for this Position" />
                    </div>
                </div>
            </div>
        </div>
    );
}
