"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Briefcase } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { BrandLogo } from "@/components/ui/BrandLogo";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Ecosystem", href: "/ecosystem" },
    { name: "Programs", href: "/ecosystem/foundation-programs" },
    { name: "Industry", href: "/ecosystem/industry-automation" },
    { name: "Innovation", href: "/ecosystem/innovation-studio" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-40 bg-[#0B0F14]/80 backdrop-blur-md border-b border-white/5">
                <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/images/logo-final.png"
                            alt="RoboAI Hub Logo"
                            width={160}
                            height={50}
                            className="object-contain h-12 w-auto brightness-110 rounded-md"
                            priority
                        />
                        <BrandLogo />
                    </Link>

                    {/* Desktop Na,v */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href ||
                                (item.href !== '/' && pathname?.startsWith(item.href + '/'));

                            return (
                                <div key={item.name} className="relative group/nav">
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            "relative text-sm font-medium transition-colors hover:text-cyan-400 uppercase tracking-widest py-1 flex items-center gap-1",
                                            isActive ? "text-cyan-400" : "text-zinc-400"
                                        )}
                                    >
                                        {item.name}

                                        {isActive && (
                                            <motion.span
                                                layoutId="navbar-underline"
                                                className="absolute left-0 right-0 -bottom-1 h-[2px] bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] overflow-hidden"
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            >
                                                <motion.div
                                                    className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-75"
                                                    initial={{ x: "-100%" }}
                                                    animate={{ x: "100%" }}
                                                    transition={{
                                                        repeat: Infinity,
                                                        duration: 1.5,
                                                        ease: "linear"
                                                    }}
                                                />
                                            </motion.span>
                                        )}
                                    </Link>
                                </div>
                            );
                        })}

                        {/* Career Button - Moved back to main nav with Icon + Name */}
                        <div className="relative group/career">
                            <Link href="/career" className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center hover:bg-blue-400 transition-all duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)] group-hover/career:shadow-[0_0_20px_rgba(59,130,246,0.8)] border border-white/10 group-hover/career:scale-105">
                                    <Briefcase className="text-white w-3 h-3 group-hover/career:rotate-[-6deg] transition-transform" strokeWidth={2.5} />
                                </div>
                                <span className={cn(
                                    "text-sm font-medium uppercase tracking-widest transition-colors",
                                    pathname === "/career" ? "text-cyan-400" : "text-zinc-400 group-hover/career:text-cyan-400"
                                )}>
                                    Careers
                                </span>
                                {pathname === "/career" && (
                                    <motion.span
                                        layoutId="navbar-underline"
                                        className="absolute left-10 right-0 -bottom-1 h-[2px] bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] overflow-hidden"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    >
                                        <motion.div
                                            className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-75"
                                            initial={{ x: "-100%" }}
                                            animate={{ x: "100%" }}
                                            transition={{
                                                repeat: Infinity,
                                                duration: 1.5,
                                                ease: "linear"
                                            }}
                                        />
                                    </motion.span>
                                )}
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-30 bg-[#0B0F14] pt-24 px-6 md:hidden"
                    >
                        <div className="flex flex-col gap-6 text-center">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-xl font-medium text-zinc-400 hover:text-cyan-400 transition-colors uppercase tracking-widest"
                                >
                                    {item.name}
                                </Link>
                            ))}

                            <Link
                                href="/career"
                                onClick={() => setIsOpen(false)}
                                className="text-xl font-bold text-white hover:text-cyan-400 transition-colors uppercase tracking-widest flex items-center justify-center gap-2"
                            >
                                <Briefcase size={20} className="text-blue-500" />
                                Careers
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
