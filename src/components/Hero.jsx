import React from 'react';
import { GraduationCap, Lightbulb, Bot, Mouse } from 'lucide-react';
import Logo from './Logo';
import Navbar from './Navbar';

const RingMenuItem = ({ icon: Icon, label, targetId }) => {
  const handleClick = () => {
    if (targetId) {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      onClick={handleClick}
      className="flex flex-col items-start gap-1 group cursor-pointer relative z-20 mb-5 sm:mb-7 md:mb-10 last:mb-0 select-none"
    >
      <div className="flex items-center gap-2.5 sm:gap-3 md:gap-4 px-2.5 py-1 md:p-0 rounded-full md:rounded-none bg-[#000a1f]/50 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none border border-cyan-400/25 md:border-transparent transition-all duration-300 group-hover:border-brand-cyan group-hover:bg-[#00d4ff]/15">
        {/* Circle Icon */}
        <div className="flex items-center justify-center w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] md:w-[3vw] md:h-[3vw] min-w-[30px] min-h-[30px] rounded-full border border-white/60 bg-transparent backdrop-blur-sm group-hover:border-brand-cyan group-hover:shadow-[0_0_15px_rgba(0,212,255,0.8)] transition-all duration-300">
          <Icon className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] md:w-[1.5vw] md:h-[1.5vw] text-white group-hover:text-brand-cyan transition-colors duration-300" strokeWidth={1.75} />
        </div>
        {/* Text with high contrast shadow against sun glare */}
        <span className="text-[13px] sm:text-[14px] md:text-[1.2vw] font-jura font-semibold md:font-normal text-white md:text-white/90 tracking-widest group-hover:text-white transition-colors drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
          {label}
        </span>
      </div>
      {/* Faded line extending right, starting from under the text */}
      <div className="h-[1.5px] w-[34vw] sm:w-[24vw] md:w-[12vw] bg-gradient-to-r from-white/60 to-transparent ml-8 sm:ml-10 md:ml-[4vw] group-hover:from-brand-cyan transition-all duration-300"></div>
    </div>
  );
};

// High-tech CSS/SVG Glowing Rings HUD
const GlowingRings = () => (
  <div className="absolute top-[66%] sm:top-[65%] md:top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 md:left-auto md:right-[2%] md:translate-x-0 w-[76vw] h-[76vw] sm:w-[58vw] sm:h-[58vw] md:w-[38vw] md:h-[38vw] max-w-[800px] max-h-[800px] flex items-center justify-center pointer-events-none z-10">
    
    {/* Outer faint background glow */}
    <div className="absolute w-full h-full rounded-full bg-brand-cyan/15 blur-[60px] md:blur-[100px]"></div>

    {/* Radar Scanner Sweep Effect */}
    <div 
      className="absolute w-[85%] h-[85%] rounded-full animate-[spin_4s_linear_infinite]"
      style={{
        background: 'conic-gradient(from 0deg, transparent 70%, rgba(0,212,255,0.5) 100%)',
        maskImage: 'radial-gradient(transparent 50%, black 100%)',
        WebkitMaskImage: 'radial-gradient(transparent 50%, black 100%)'
      }}
    ></div>

    {/* Static Targeting Crosshairs */}
    <div className="absolute w-full h-[1px] bg-white/15"></div>
    <div className="absolute w-[1px] h-full bg-white/15"></div>
    
    {/* Center Reticle */}
    <div className="absolute w-[10%] h-[10%] border border-white/30 rounded-full"></div>

    {/* Massive intense lens flare on the left edge (Desktop only) */}
    <div className="absolute left-[-10%] top-1/2 -translate-y-1/2 w-[12vw] h-[25vw] bg-white rounded-[100%] blur-[60px] opacity-70 hidden md:block"></div>
    <div className="absolute left-[0%] top-1/2 -translate-y-1/2 w-[5vw] h-[15vw] bg-brand-cyan rounded-[100%] blur-[40px] opacity-90 hidden md:block"></div>

    {/* Perfect SVG Rings for Flawless Rotation */}
    <svg className="absolute w-full h-full" viewBox="0 0 200 200">
      <defs>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="glow-heavy" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Static HUD Bracket Markers */}
      <path d="M 3 95 L 3 105 M 197 95 L 197 105 M 95 3 L 105 3 M 95 197 L 105 197" fill="none" stroke="#00d4ff" strokeWidth="1.5" opacity="0.6" />

      {/* Ring 1 (Outer): 4 big segments (Circumference ~597) */}
      <circle cx="100" cy="100" r="95" fill="none" stroke="#00d4ff" strokeWidth="1" strokeDasharray="130 19.25" filter="url(#glow)" className="origin-center animate-[spin_40s_linear_infinite] opacity-85" />

      {/* Precision Measurement Ticks (Ultra-thin rotating scale) */}
      <circle cx="100" cy="100" r="91" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1" strokeDasharray="1 3" className="origin-center animate-[spin_120s_linear_infinite]" />

      {/* Ring 2 (Middle): Small line, Big line (Circumference ~534) */}
      <circle cx="100" cy="100" r="85" fill="none" stroke="#ffffff" strokeWidth="2" strokeDasharray="20 20 118 20" strokeLinecap="round" filter="url(#glow-heavy)" className="origin-center animate-[spin_25s_linear_infinite_reverse] opacity-95" />

      {/* Tech Nodes (Spinning inner HUD elements) */}
      <g className="origin-center animate-[spin_20s_linear_infinite]">
        <circle cx="100" cy="22" r="2.5" fill="#00d4ff" filter="url(#glow)" />
        <path d="M 100 22 L 100 28" stroke="#00d4ff" strokeWidth="1" />
        <circle cx="167" cy="139" r="1.5" fill="#fff" filter="url(#glow)" />
        <circle cx="33" cy="139" r="1.5" fill="#fff" filter="url(#glow)" />
      </g>

      {/* Ring 3 (Inner): Dot Dot moving (Circumference ~471) */}
      <circle cx="100" cy="100" r="75" fill="none" stroke="#ffffff" strokeWidth="2" strokeDasharray="2 12" strokeLinecap="round" filter="url(#glow)" className="origin-center animate-[spin_15s_linear_infinite] opacity-95" />

      {/* Subtle core double static ring to anchor the design */}
      <circle cx="100" cy="100" r="68" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
      <circle cx="100" cy="100" r="66.5" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />

      {/* Glowing Accents */}
      <g className="origin-center animate-[spin_35s_linear_infinite]">
        <circle cx="100" cy="5" r="1.5" fill="#fff" filter="url(#glow)" />
        <circle cx="185" cy="100" r="2" fill="#00d4ff" filter="url(#glow-heavy)" />
      </g>
    </svg>
  </div>
);

const Hero = () => {
  return (
    <div className="w-full h-full relative z-0 overflow-hidden bg-[#000a1f]">
      
      {/* VIBRANT HIGH-VISIBILITY BACKGROUND */}
      <div 
        className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10"
        style={{
          backgroundImage: 'url(/clean_hero_bg.png)',
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(1.16) contrast(1.06) saturate(1.08)',
        }}
      ></div>

      {/* Ambient Top Lighting Gradient matching About, Contact, Services & Training */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85vw] h-[280px] bg-gradient-to-b from-[#00d4ff]/18 via-transparent to-transparent pointer-events-none z-[1]" />

      {/* --- TOP / LEFT: MASSIVE LOGO & TITLE --- */}
      <div className="absolute top-[26%] sm:top-[28%] md:top-[38%] -translate-y-1/2 left-1/2 -translate-x-1/2 md:left-[8%] md:translate-x-0 z-20 w-[92%] md:w-auto flex justify-center md:block">
        <Logo 
          hideSubtitle={false} 
          textSize="w-[84vw] sm:w-[65vw] md:w-[45vw] max-w-[800px]" 
          className="text-white" 
        />
      </div>

      {/* --- BOTTOM / RIGHT: GLOWING RINGS & MENU --- */}
      <GlowingRings />
      
      {/* Menu Items (Centered inside the rings) */}
      <div className="absolute top-[66%] sm:top-[65%] md:top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 md:left-auto md:right-[12%] md:translate-x-0 z-30 flex flex-col items-start pl-2 sm:pl-0">
        <RingMenuItem icon={GraduationCap} label="Education" targetId="education" />
        <RingMenuItem icon={Lightbulb} label="Innovation" targetId="ecosystem" />
        <RingMenuItem icon={Bot} label="Automation" targetId="services" />
      </div>

      {/* --- BOTTOM SCROLL MOUSE --- */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-20 opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
        <div className="w-[1.2vw] h-[2vw] min-w-[20px] min-h-[32px] sm:min-h-[35px] border-[1.5px] border-white/90 rounded-full flex justify-center pt-1.5 sm:pt-2 shadow-[0_0_10px_rgba(0,212,255,0.4)]">
          <div className="w-1.5 h-1.5 bg-[#00d4ff] rounded-full animate-bounce shadow-[0_0_8px_#00d4ff]"></div>
        </div>
        <Mouse size={16} className="text-white opacity-0 hidden sm:block" />
        <svg width="20" height="10" viewBox="0 0 24 12" fill="none" stroke="white" strokeWidth="1.5" className="mt-1 drop-shadow-md">
          <path d="M6 3 L12 9 L18 3" />
        </svg>
      </div>

    </div>
  );
};

export default Hero;
