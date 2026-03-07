"use client";

import { usePathname } from "next/navigation";

export function MainWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isAdmin = pathname?.startsWith("/admin");

    if (isAdmin) {
        return <>{children}</>;
    }

    return (
        <main className="relative z-10 bg-[#0B0F14]/40 backdrop-blur-sm min-h-screen">
            {children}
        </main>
    );
}
