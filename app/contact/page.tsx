import { GlassCard } from "@/components/ui/GlassCard";
import { Mail, MapPin, Smartphone, Send, MessageCircle, Calendar } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
    // Static fallbacks for static site export
    const address = "ROBOAI HUB, near S.K Industries, New Power House Rd, Patrakar Colony, Shastri Nagar, Jodhpur, Rajasthan 342003";
    const email = "contactus@robonari.co.in";
    const phone = "+91-98280 14877";
    const mapUrl = "https://maps.google.com/maps?q=ROBOAI+HUB,+Jodhpur,+Rajasthan&t=&z=15&ie=UTF8&iwloc=&output=embed";


    return (
        <div className="min-h-screen pt-32 pb-20 container mx-auto px-6 bg-deep-space relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">

                {/* Left Column: Contact Info & Map */}
                <GlassCard className="p-8 h-full flex flex-col gap-8 border-neon-cyan/30">
                    <div className="space-y-8">
                        {/* Location */}
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-neon-cyan/10 flex items-center justify-center text-neon-cyan shrink-0">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">Location:</h3>
                                <p className="text-white font-mono text-sm leading-relaxed">
                                    {address}
                                </p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-neon-cyan/10 flex items-center justify-center text-neon-cyan shrink-0">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">Email:</h3>
                                <p className="text-white font-mono text-sm">
                                    {email}
                                </p>
                            </div>
                        </div>

                        {/* Call */}
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-neon-cyan/10 flex items-center justify-center text-neon-cyan shrink-0">
                                <Smartphone size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">Call:</h3>
                                <p className="text-white font-mono text-sm">
                                    {phone}
                                </p>
                            </div>
                        </div>

                        {/* WhatsApp */}
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 shrink-0">
                                <MessageCircle size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">WhatsApp:</h3>
                                <p className="text-white font-mono text-sm">
                                    <a href={`https://wa.me/${phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                                        Message us directly
                                    </a>
                                </p>
                            </div>
                        </div>

                        {/* Book a Call */}
                        <div className="pt-4">
                            <a href={`mailto:${email}?subject=Requesting%20to%20Book%20a%20Call`} className="inline-flex items-center justify-center w-full sm:w-auto gap-2 bg-gradient-to-r from-neon-cyan to-blue-500 text-black font-bold py-4 px-8 rounded-xl shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] hover:scale-[1.02] transition-all">
                                <Calendar size={20} />
                                Book a Call
                            </a>
                        </div>
                    </div>

                    {/* Embedded Map */}
                    <div className="w-full h-64 rounded-xl overflow-hidden border border-white/10 mt-auto relative bg-black/40 flex items-center justify-center">
                        {mapUrl ? (
                            <iframe
                                src={mapUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale hover:grayscale-0 transition-all duration-500 opacity-80 hover:opacity-100"
                            />
                        ) : (
                            <div className="flex flex-col items-center text-white gap-2">
                                <MapPin size={32} />
                                <span className="text-xs font-mono uppercase tracking-widest">Map Configuration Pending</span>
                            </div>
                        )}
                    </div>
                </GlassCard>

                {/* Right Column: Contact Form */}
                <GlassCard className="p-8 h-full border-neon-cyan/30">
                    <ContactForm />
                </GlassCard>

            </div>
        </div>
    );
}
