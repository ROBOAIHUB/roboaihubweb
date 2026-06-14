import { FloatingCard } from '@/components/ui/FloatingCard';
import { NeonButton } from '@/components/ui/NeonButton';
import { Calendar, MapPin, Clock, ArrowLeft, Image as ImageIcon } from 'lucide-react';
import Link from 'next/link';
import { staticEvents } from '@/lib/data';

export default function EventsPage() {
    const eventList = staticEvents;

    return (
        <main className="min-h-screen bg-deep-space text-white pt-24 px-6 lg:px-20 pb-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-cyan/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <Link href="/gallery" className="inline-flex items-center text-sm text-white hover:text-white mb-4 transition-colors">
                        <ArrowLeft size={16} className="mr-2" /> Back to Choice
                    </Link>
                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-white">
                        Events & Expos
                    </h1>
                    <p className="text-white mt-4 max-w-2xl text-xl">
                        Witness the bleeding edge of robotics tech live.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
                    {eventList.length === 0 ? (
                        <div className="text-center py-20 bg-white/5 rounded-xl border border-white/10">
                            <h2 className="text-2xl font-bold text-white">No Upcoming Events</h2>
                            <p className="text-white mt-2">Check back later for updates.</p>
                        </div>
                    ) : (
                        eventList.map((event: any, i: number) => (
                            <FloatingCard key={event.id} delay={i * 0.1} className="flex flex-col md:flex-row gap-8 bg-black/40 border-white/5 hover:border-neon-cyan/50 p-0 overflow-hidden group">
                                <div className="w-full md:w-1/3 aspect-video md:aspect-auto bg-gray-900 relative overflow-hidden group border-b md:border-b-0 md:border-r border-white/5 group-hover:border-neon-cyan/50 transition-colors">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                                    {event.mediaUrl ? (
                                        <img src={event.mediaUrl} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    ) : (
                                        <div className="w-full h-full bg-gray-800 flex items-center justify-center text-white font-mono text-2xl group-hover:scale-110 transition-transform duration-700">
                                            <ImageIcon size={48} />
                                        </div>
                                    )}
                                    <div className="absolute bottom-4 left-4 z-20">
                                        <span className="bg-neon-cyan text-black text-xs font-bold px-2 py-1 rounded uppercase">{event.type || 'EVENT'}</span>
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col justify-center flex-grow">
                                    <div className="flex items-center gap-4 text-neon-cyan font-mono text-sm mb-2">
                                        <span className="flex items-center gap-1">
                                            <Calendar size={14} />
                                            {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                        </span>
                                        <span className="flex items-center gap-1"><MapPin size={14} /> {event.location}</span>
                                    </div>

                                    <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-neon-cyan transition-colors">{event.title}</h2>
                                    <p className="text-white mb-6 text-lg">{event.description}</p>

                                    <div className="flex gap-4">
                                        <Link href={`/events/${event.id}`}>
                                            <NeonButton variant="cyan" className="w-fit">Show Details</NeonButton>
                                        </Link>
                                    </div>
                                </div>
                            </FloatingCard>
                        ))
                    )}
                </div>
            </div>
        </main>
    );
}
