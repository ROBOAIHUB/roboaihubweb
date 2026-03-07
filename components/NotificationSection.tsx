'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, ArrowRight, AlertTriangle, Calendar, Info, X, Download } from 'lucide-react';
import Link from 'next/link';

interface Notification {
    id: string;
    title: string;
    message: string;
    type: string;
    link?: string;
    mediaUrl?: string;
    mediaType?: string;
    attachmentUrl?: string;
    eventDate?: string;
    createdAt: string;
}

export function NotificationSection({ fullPage = false }: { fullPage?: boolean }) {
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const res = await fetch('/api/notifications?activeOnly=true&publicOnly=true');
                const data = await res.json();
                if (Array.isArray(data)) {
                    setNotifications(data);
                } else {
                    console.error('Invalid notifications format:', data);
                    setNotifications([]);
                }
            } catch (err) {
                console.error(err);
                setNotifications([]);
            }
        };
        fetchNotes();
    }, []);

    if (notifications.length === 0 || !isVisible) return null;

    const getTypeStyles = (type: string) => {
        switch (type) {
            case 'urgent':
            case 'alert': return "bg-red-500/10 border-red-500/50 text-red-200";
            case 'event': return "bg-neon-cyan/10 border-neon-cyan/50 text-cyan-200";
            default: return "bg-neon-cyan/10 border-neon-cyan/50 text-cyan-200";
        }
    };

    const getTypeIcon = (type: string) => {
        switch (type) {
            case 'urgent':
            case 'alert': return <AlertTriangle size={18} className="text-red-400" />;
            case 'event': return <Calendar size={18} className="text-neon-cyan" />;
            default: return <Info size={18} className="text-neon-cyan" />;
        }
    };

    return (
        <section className={`relative z-20 ${fullPage ? 'mt-0' : '-mt-10'} mb-10 px-6 lg:px-20`}>
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-white/10 rounded-full animate-pulse">
                        <Bell className="text-yellow-400" size={20} />
                    </div>
                    <h2 className="text-xl font-bold text-white tracking-wide">NOTIFICATIONS & NEWS</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {notifications.slice(0, 3).map((note, idx) => (
                        <motion.div
                            key={note.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className={`p-5 rounded-xl border backdrop-blur-md relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300 ${getTypeStyles(note.type)}`}
                        >
                            <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>

                            <div className="flex items-start justify-between mb-2">
                                <div className="flex items-center gap-2">
                                    {getTypeIcon(note.type)}
                                    <span className="text-xs uppercase tracking-wider font-bold opacity-70">
                                        {note.type === 'info' ? 'Update' : note.type}
                                    </span>
                                </div>
                                <span className="text-xs opacity-50">
                                    {new Date(note.eventDate || note.createdAt).toLocaleDateString(undefined, {
                                        year: 'numeric', month: 'short', day: 'numeric'
                                    })}
                                </span>
                            </div>

                            <h3 className="font-bold text-lg text-white mb-2 leading-tight">{note.title}</h3>
                            <p className="text-sm opacity-80 mb-4 line-clamp-2">{note.message}</p>

                            <div className="flex items-center gap-4 mt-auto">
                                <Link href={`/news/${note.id}`} className="inline-flex items-center text-xs font-bold uppercase tracking-wider opacity-70 group-hover:opacity-100 group-hover:gap-2 transition-all bg-white/10 px-3 py-2 rounded-lg hover:bg-white/20">
                                    Read Details <ArrowRight size={12} className="ml-1" />
                                </Link>
                                {note.attachmentUrl && (
                                    <a href={note.attachmentUrl} download className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-neon-cyan opacity-80 hover:opacity-100 hover:scale-105 transition-all border border-neon-cyan/30 px-3 py-2 rounded-lg hover:bg-neon-cyan/10">
                                        <Download size={12} className="mr-1" /> Brochure
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
