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
  metadataBase: new URL('https://roboaihub.com'),
  title: {
    template: '%s | ROBOAI HUB',
    default: 'ROBOAI HUB - AI & Robotics Automation',
  },
  description: 'ROBOAI HUB bridges the gap between academic theory and real-world industrial application. We design, build, and deploy real-world Robotics & AI systems.',
  keywords: [
    'Robotics Training India',
    'AI Automation in Jodhpur',
    'Industrial Automation Solutions',
    'EdTech Robotics Kits',
    'Custom AI Development',
    'Robotics & AI Lab Setup',
    'Robotics Education',
    'Machine Learning'
  ],
  authors: [{ name: 'ROBOAI HUB' }],
  creator: 'ROBOAI HUB',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://roboaihub.com',
    title: 'ROBOAI HUB - AI & Robotics Automation',
    description: 'We design, build, and deploy real-world Robotics & AI systems from classrooms to factories.',
    siteName: 'ROBOAI HUB',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ROBOAI HUB - Robotics & AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ROBOAI HUB - AI & Robotics Automation',
    description: 'We design, build, and deploy real-world Robotics & AI systems.',
    images: ['/images/og-image.png'],
    creator: '@roboaihub',
  },
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
