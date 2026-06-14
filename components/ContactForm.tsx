'use client';

import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactForm() {
    const [formData, setFormData] = useState({ name: '', mobile: '', subject: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            // Build the WhatsApp message content
            const phoneNumber = "919828014877"; // The primary RoboAI Hub number

            const messageText = `
*New Contact Request from RoboAI Hub Website*
---------------------------------------
*Name:* ${formData.name}
*Mobile:* ${formData.mobile}
*Subject:* ${formData.subject}

*Message:*
${formData.message}
            `.trim();

            const encodedMessage = encodeURIComponent(messageText);
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

            // Redirect user to WhatsApp in a new tab
            window.open(whatsappUrl, '_blank');

            setStatus('success');

            // Reset form after a small delay
            setTimeout(() => {
                setFormData({ name: '', mobile: '', subject: '', message: '' });
                setStatus('idle');
            }, 3000);

        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 h-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm text-white">Your Name</label>
                    <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-neon-cyan focus:outline-none transition-colors"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm text-white">Mobile Number</label>
                    <input
                        type="tel"
                        required
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-neon-cyan focus:outline-none transition-colors"
                        placeholder="+91 "
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm text-white">Subject</label>
                <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-neon-cyan focus:outline-none transition-colors"
                />
            </div>

            <div className="space-y-2 grow">
                <label className="text-sm text-white">Message</label>
                <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full h-full min-h-[150px] bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-neon-cyan focus:outline-none transition-colors resize-none"
                />
            </div>

            <button
                type="submit"
                disabled={status === 'submitting' || status === 'success'}
                className={`w-full py-4 font-bold text-lg rounded-xl transition-all duration-500 flex items-center justify-center gap-2 
                    ${status === 'success' ? 'bg-green-500 text-white shadow-[0_0_30px_rgba(34,197,94,0.4)]' :
                        status === 'error' ? 'bg-red-500 text-white shadow-[0_0_30px_rgba(239,68,68,0.4)]' :
                            'bg-cyan-950/30 text-cyan-400 border border-cyan-500/30 shadow-[0_0_15px_rgba(0,243,255,0.1)] hover:bg-[#00f3ff] hover:text-black hover:border-[#00f3ff] hover:shadow-[0_0_50px_rgba(0,243,255,0.6)] hover:scale-[1.02] active:scale-[0.98]'}`}
            >
                {status === 'submitting' ? 'Sending...' :
                    status === 'success' ? <>Message Sent <CheckCircle size={20} /></> :
                        status === 'error' ? <>Failed to Send <AlertCircle size={20} /></> :
                            <>Send Message <Send size={20} /></>}
            </button>
        </form>
    );
}
