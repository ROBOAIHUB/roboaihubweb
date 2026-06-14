'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Minimize2 } from 'lucide-react';
import { NeonButton } from '../ui/NeonButton';
import { BrandLogo } from '../ui/BrandLogo';

interface Message {
    id: string;
    text: string | React.ReactNode;
    sender: 'user' | 'bot';
    timestamp: Date;
}

const WavingHand = () => (
    <motion.span
        style={{ display: 'inline-block', originX: 0.7, originY: 0.7 }}
        animate={{ rotate: [0, 14, -8, 14, -4, 10, 0, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1, ease: "easeInOut" }}
    >
        👋
    </motion.span>
);

export function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [inputText, setInputText] = useState('');
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: <span>Hello <WavingHand />! How can I help you today?</span>,
            sender: 'bot',
            timestamp: new Date()
        }
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping, isOpen]);

    const handleSendMessage = async (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!inputText.trim()) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            text: inputText,
            sender: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMsg]);
        setInputText('');
        setIsTyping(true);

        // Simulate AI delay
        setTimeout(() => {
            const botResponse = getMockResponse(userMsg.text as string);
            setMessages(prev => [...prev, {
                id: (Date.now() + 1).toString(),
                text: botResponse,
                sender: 'bot',
                timestamp: new Date()
            }]);
            setIsTyping(false);
        }, 1500);
    };

    const getMockResponse = (text: string): string => {
        const lower = text.toLowerCase();
        if (lower.includes('event')) return "We have several upcoming events like the 'Tech Summit 2025' and 'Drone Racing League'. correct? Check out our Events page for more details!";
        if (lower.includes('contact') || lower.includes('support')) return "You can reach us at contactus@robonari.co.in or +91-98280 14877. Or visit our Contact page.";
        if (lower.includes('research') || lower.includes('lab')) return "Our R&D Labs are working on cutting-edge Neural Networks and Soft Robotics. Visit the Research section to see our papers.";
        if (lower.includes('hello') || lower.includes('hi')) return "Hi there! Welcome to RoboAI Hub.";
        if (lower.includes('team')) return "Our team consists of world-class roboticists and AI architects. You can view them on the About page.";
        return "I'm currently running in simulation mode. For specific inquiries, please use the Contact page form.";
    };

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="fixed bottom-24 right-6 w-80 md:w-96 h-[500px] z-[100] glass-panel border-neon-cyan/50 flex flex-col shadow-[0_0_40px_rgba(0,243,255,0.15)] overflow-hidden rounded-2xl"
                    >
                        {/* Header */}
                        <div className="bg-black/50 p-4 border-b border-white/10 flex items-center justify-between backdrop-blur-md">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-neon-cyan/20 flex items-center justify-center border border-neon-cyan/50">
                                    <Bot size={18} className="text-neon-cyan" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-white tracking-wide flex items-center gap-1">
                                        <BrandLogo textSize="text-sm" showHub={false} /> ASSISTANT
                                    </h3>
                                    <div className="flex items-center gap-1">
                                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                        <span className="text-[10px] text-white">Online</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white hover:text-white transition-colors p-1"
                            >
                                <Minimize2 size={18} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-black/20">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${msg.sender === 'user'
                                            ? 'bg-cyan-500/20 text-white border border-cyan-500/30 rounded-tr-sm'
                                            : 'bg-zinc-800/80 text-white border border-white/5 rounded-tl-sm'
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}

                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-zinc-800/50 p-3 rounded-2xl rounded-tl-sm border border-white/5 flex gap-1 items-center h-10">
                                        <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                                        <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                                        <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSendMessage} className="p-4 border-t border-white/10 bg-black/40 backdrop-blur-md">
                            <div className="relative flex items-center gap-2">
                                <input
                                    type="text"
                                    value={inputText}
                                    onChange={(e) => setInputText(e.target.value)}
                                    placeholder="Ask me anything..."
                                    className="w-full bg-zinc-900/50 border border-zinc-700 rounded-xl py-3 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/30 transition-all placeholder:text-white"
                                />
                                <button
                                    type="submit"
                                    disabled={!inputText.trim()}
                                    className="absolute right-2 p-1.5 rounded-lg bg-neon-cyan/20 text-neon-cyan hover:bg-neon-cyan hover:text-black transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                                >
                                    <Send size={16} />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Toggle Button */}
            {!isOpen && (
                <motion.button
                    initial={{ scale: 0, rotate: 180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-6 right-6 z-[100] w-14 h-14 rounded-full bg-black/50 backdrop-blur-xl border border-neon-cyan/50 text-neon-cyan shadow-[0_0_20px_rgba(0,243,255,0.4)] flex items-center justify-center group"
                >
                    <div className="absolute inset-0 rounded-full border border-white/10 animate-ping opacity-20"></div>
                    <Bot size={28} className="group-hover:rotate-12 transition-transform" />
                    <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1 bg-black/80 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10">
                        ROBOAI Assistant
                    </span>
                </motion.button>
            )}
        </>
    );
}
