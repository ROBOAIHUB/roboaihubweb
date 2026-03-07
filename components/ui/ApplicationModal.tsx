'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { NeonButton } from './NeonButton';

interface ApplicationModalProps {
    jobId: string;
    jobTitle: string;
    isOpen: boolean;
    onClose: () => void;
}

export function ApplicationModal({ jobId, jobTitle, isOpen, onClose }: ApplicationModalProps) {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [fileName, setFileName] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');
        setErrorMessage('');

        // Simulate network request for static site presentation
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Form simulation complete. Real site would need Formspree or similar here.
        setStatus('success');
        setTimeout(() => {
            onClose();
            setStatus('idle');
            setFileName('');
        }, 2000);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFileName(e.target.files[0].name);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="bg-[#0B0F14] border border-white/10 w-full max-w-lg rounded-2xl p-6 relative z-10 shadow-[0_0_50px_rgba(0,243,255,0.1)]"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                        >
                            <X size={20} />
                        </button>

                        <div className="mb-6">
                            <h2 className="text-2xl font-bold text-white mb-1">Apply for Position</h2>
                            <p className="text-neon-cyan font-mono text-sm">{jobTitle}</p>
                        </div>

                        {status === 'success' ? (
                            <div className="py-12 flex flex-col items-center justify-center text-center">
                                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 mb-4">
                                    <CheckCircle size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Application Submitted!</h3>
                                <p className="text-gray-400">We will review your resume and get back to you soon.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm text-gray-400 mb-1">Full Name</label>
                                    <input
                                        name="name"
                                        type="text"
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-neon-cyan focus:outline-none transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm text-gray-400 mb-1">Email Address</label>
                                    <input
                                        name="email"
                                        type="email"
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-neon-cyan focus:outline-none transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm text-gray-400 mb-1">Phone Number</label>
                                    <input
                                        name="phone"
                                        type="tel"
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-neon-cyan focus:outline-none transition-colors"
                                        placeholder="+1 (555) 000-0000"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm text-gray-400 mb-1">Resume (PDF/Word)</label>
                                    <div className="relative">
                                        <input
                                            name="resume"
                                            type="file"
                                            accept=".pdf,.doc,.docx"
                                            required
                                            onChange={handleFileChange}
                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                        />
                                        <div className={`w-full bg-white/5 border-2 border-dashed ${fileName ? 'border-neon-cyan/50 bg-neon-cyan/5' : 'border-white/10'} rounded-lg p-4 flex items-center justify-center gap-2 text-sm transition-colors`}>
                                            <Upload size={16} className={fileName ? 'text-neon-cyan' : 'text-gray-400'} />
                                            {fileName ? (
                                                <span className="text-neon-cyan font-bold truncate max-w-[200px]">{fileName}</span>
                                            ) : (
                                                <span className="text-gray-400">Click to upload resume</span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {status === 'error' && (
                                    <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-2 text-red-200 text-sm">
                                        <AlertCircle size={16} />
                                        {errorMessage}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="w-full bg-neon-cyan text-black font-bold py-3 rounded-lg hover:bg-[#00c2cc] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {status === 'submitting' ? (
                                        <>
                                            <Loader2 size={18} className="animate-spin" /> Submitting...
                                        </>
                                    ) : (
                                        'Submit Application'
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
