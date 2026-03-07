import type { Metadata } from "next";
import { Inter, Space_Grotesk, Share_Tech_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RoboBackground } from "@/components/layout/RoboBackground";
import { Chatbot } from "@/components/ai/Chatbot";
import { MainWrapper } from "@/components/layout/MainWrapper";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const shareTech = Share_Tech_Mono({ weight: "400", subsets: ["latin"], variable: "--font-share-tech" });

export const metadata: Metadata = {
  title: "ROBOAI HUB",
  description: "Elite AI & Robotics Automation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${shareTech.variable} font-sans antialiased text-white selection:bg-cyan-500/30`}>
        <RoboBackground />
        <Navbar />
        <MainWrapper>
          {children}
        </MainWrapper>
        <Chatbot />
        <Footer />
      </body>
    </html>
  );
}
