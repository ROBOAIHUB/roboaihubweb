import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, MapPin, Image as ImageIcon } from 'lucide-react';
import Link from 'next/link';
import { staticEvents } from '@/lib/data';

export async function generateStaticParams() {
    return staticEvents.map((event) => ({
        id: event.id,
    }));
}

export default async function EventDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const event = staticEvents.find(e => e.id === id);

    if (!event) {
        return notFound();
    }

    // Combine primary mediaUrl with additional media for a full gallery
    // Static fallback for gallery
    const gallery: any[] = [];

    return (
        <main className="min-h-screen bg-deep-space text-white pt-24 px-6 lg:px-20 pb-20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-neon-cyan/5 to-transparent pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <Link href="/events" className="inline-flex items-center text-sm text-white hover:text-white mb-8 transition-colors">
                    <ArrowLeft size={16} className="mr-2" /> Back to Events
                </Link>

                {/* Header Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-neon-cyan font-mono text-sm">
                            <span className="flex items-center gap-1 bg-neon-cyan/10 px-3 py-1 rounded-full">
                                <Calendar size={14} />
                                {new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                            </span>
                            <span className="flex items-center gap-1 bg-neon-cyan/10 px-3 py-1 rounded-full text-neon-cyan">
                                <MapPin size={14} /> {event.location}
                            </span>
                        </div>

                        <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                            {event.title}
                        </h1>

                        <p className="text-xl text-white leading-relaxed border-l-4 border-neon-cyan pl-6">
                            {event.description}
                        </p>
                    </div>

                    {/* Primary Hero Media */}
                    <div className="relative rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(34,211,238,0.2)] border border-cyan-500/50 aspect-video group">
                        <img
                            src={event.mediaUrl}
                            alt={event.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                </div>

                {/* Gallery Section */}
                {gallery.length > 0 && (
                    <div className="space-y-8">
                        <h2 className="text-2xl font-bold flex items-center gap-2">
                            <ImageIcon className="text-neon-cyan" /> Event Gallery
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {gallery.map((item) => (
                                <div key={item.id} className="relative aspect-video rounded-xl overflow-hidden border border-white/10 group bg-black/50">
                                    {item.type === 'video' ? (
                                        <video controls className="w-full h-full object-cover">
                                            <source src={item.url} />
                                        </video>
                                    ) : (
                                        <img
                                            src={item.url}
                                            alt="Event gallery"
                                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
