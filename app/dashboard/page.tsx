import { GlassCard } from "@/components/ui/GlassCard";

export default function UserDashboard() {
    return (
        <div className="min-h-screen pt-24 px-6 container mx-auto">
            <h1 className="text-3xl font-bold text-white mb-2">My Overview</h1>
            <p className="text-white mb-8">Welcome back, Team Member.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <GlassCard className="border-cyan-500/20">
                    <h3 className="text-xl font-bold text-cyan-400 mb-2">My Projects</h3>
                    <p className="text-3xl font-bold">4</p>
                </GlassCard>
                <GlassCard>
                    <h3 className="text-xl font-bold mb-2">Pending Tasks</h3>
                    <p className="text-3xl font-bold">12</p>
                </GlassCard>
                <GlassCard>
                    <h3 className="text-xl font-bold mb-2">Messages</h3>
                    <p className="text-3xl font-bold">0</p>
                </GlassCard>
            </div>
        </div>
    );
}
