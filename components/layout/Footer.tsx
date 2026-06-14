"use client";

import { usePathname } from "next/navigation";
import { Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function Footer() {
    const pathname = usePathname();

    // Hide footer on internal dashboards
    if (pathname?.startsWith("/admin") || pathname?.startsWith("/manager")) return null;

    return (
        <footer className="border-t border-white/5 bg-[#0B0F14] pt-20 pb-10 relative z-50">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20 mb-16">
                    {/* Column 1: Company Info & Address */}
                    <div className="space-y-6">
                        <div>
                            <BrandLogo textSize="text-2xl" className="mb-2" />
                            <p className="text-white text-sm max-w-sm">
                                A COMPANY TO SOLVE THE DIFFICULTIES
                            </p>
                        </div>

                        <div className="space-y-4 text-sm text-white">
                            <div>
                                <h4 className="text-cyan-400 font-bold text-lg mb-1">Location:</h4>
                                <p className="text-base"><span className="font-bold"><span className="text-white">ROBO</span><span className="text-cyan-400">AI</span><span className="text-white"> HUB</span></span>, near S.K Industries, New Power House Rd, Patrakar Colony, Shastri Nagar, Jodhpur, Rajasthan 342003</p>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Contact Us */}
                    <div>
                        <h3 className="text-xl font-bold text-cyan-400 mb-6 font-mono">Contact Us</h3>
                        <div className="space-y-4 text-sm text-white">
                            <p>
                                <a href="mailto:contactus@robonari.co.in" className="text-white font-medium hover:text-cyan-400 transition-colors">
                                    contactus@robonari.co.in
                                </a>
                            </p>
                            <p>
                                <a href="tel:+919828014877" className="text-white font-medium hover:text-cyan-400 transition-colors">
                                    +91-98280 14877
                                </a>
                            </p>

                            {/* Social Icons moved here */}
                            <div className="flex gap-4 pt-4">
                                <Link
                                    href="https://x.com/roboaihub"
                                    className="w-10 h-10 rounded-full flex items-center justify-center border border-transparent transition-all duration-300 hover:border-sky-500 hover:shadow-[0_0_20px_rgba(14,165,233,0.6)] hover:bg-sky-500 hover:text-white text-white"
                                >
                                    <Twitter size={20} fill="currentColor" />
                                </Link>
                                <Link
                                    href="https://www.instagram.com/roboaihub?igsh=MmJ5a2k0OWxpMjZy"
                                    className="w-10 h-10 rounded-full flex items-center justify-center border border-transparent transition-all duration-300 hover:border-pink-500 hover:shadow-[0_0_20px_rgba(236,72,153,0.6)] hover:bg-pink-500 hover:text-white text-white"
                                >
                                    <Instagram size={20} />
                                </Link>
                                <Link
                                    href="https://www.linkedin.com/company/roboaihub/posts/?feedView=all"
                                    className="w-10 h-10 rounded-full flex items-center justify-center border border-transparent transition-all duration-300 hover:border-blue-600 hover:shadow-[0_0_20px_rgba(37,99,235,0.6)] hover:bg-blue-600 hover:text-white text-white"
                                >
                                    <Linkedin size={20} fill="currentColor" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Column 3: Company Links */}
                    <div>
                        <h3 className="text-xl font-bold text-cyan-400 mb-6 font-mono">Company</h3>
                        <ul className="space-y-3 text-sm text-white">
                            <li><Link href="/about" className="text-white font-medium hover:text-cyan-400 transition-colors">About Us</Link></li>
                            <li><Link href="/ecosystem" className="text-white font-medium hover:text-cyan-400 transition-colors">Ecosystem</Link></li>
                            <li><Link href="/projects" className="text-white font-medium hover:text-cyan-400 transition-colors">Lab</Link></li>
                            <li><Link href="/career" className="text-white font-medium hover:text-cyan-400 transition-colors">Careers</Link></li>
                            <li><Link href="/contact" className="text-white font-medium hover:text-cyan-400 transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex justify-center items-center text-xs text-white font-mono">
                    <div className="flex items-center gap-1">
                        &copy; 2026 <BrandLogo textSize="text-xs" className="inline-flex" />. All Rights Reserved | <Link href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
