import React from 'react';

const Logo = ({ className = "", hideSubtitle = false, textSize = "w-[45vw] max-w-[800px]" }) => {
  return (
    <div className={`flex flex-col items-center justify-center relative select-none ${className}`}>
      
      {/* High-Contrast Luminous Master Brand Logo */}
      <img 
        src="/logo_white.png" 
        alt="ROBOAI HUB" 
        className={`${textSize} h-auto mix-blend-screen pointer-events-none drop-shadow-[0_0_18px_rgba(0,212,255,0.85)] drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]`}
        style={{
          filter: 'brightness(1.15) contrast(1.12) drop-shadow(0 0 20px rgba(0, 212, 255, 0.75))',
        }}
      />

      {/* Subtitle text matching the reference image with enhanced typography */}
      {!hideSubtitle && (
        <div className="flex flex-col items-center w-full mt-5">
          <div className="text-[0.95vw] xl:text-[14px] font-jura font-semibold text-white tracking-[0.55em] uppercase whitespace-nowrap drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] ml-2">
            BUILDING THE FUTURE <span className="font-jura font-normal lowercase normal-case tracking-[0.25em] text-[0.85vw] xl:text-[12.5px] text-white/95 mx-1">with</span> ROBOTICS AND AI
          </div>
          
          {/* Luminous Glowing Flare Horizon Line under subtitle */}
          <div className="mt-5 relative w-[55%] h-[1.5px] flex items-center justify-center">
            {/* Core bright line */}
            <div className="absolute w-full h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent opacity-90"></div>
            {/* Cyan glow flare */}
            <div className="absolute w-[65%] h-[3.5px] bg-gradient-to-r from-transparent via-[#00d4ff] to-transparent opacity-95 blur-[2px]"></div>
            {/* Center intense lens spark */}
            <div className="absolute w-[22%] h-[6px] bg-[#00d4ff] rounded-full blur-[4px] opacity-90"></div>
            <div className="absolute w-[8px] h-[8px] bg-white rounded-full blur-[1px] opacity-100"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Logo;
