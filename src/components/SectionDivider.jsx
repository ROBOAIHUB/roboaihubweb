import React from 'react';

/**
 * SectionDivider
 * High-tech Sci-Fi Cyberpunk HUD Divider Line based on the user's reference design,
 * straight horizontal laser beam with dual-rail circuitry, angled chamfers,
 * slanted tech tick dashes, and an intense center energy lens spark.
 */
const SectionDivider = () => {
  return (
    <div 
      className="relative w-full h-0 z-40 pointer-events-none select-none flex items-center justify-center"
      aria-hidden="true"
    >
      {/* Soft feather backdrop to seamlessly absorb color differences between section backgrounds */}
      <div 
        className="absolute top-0 left-0 w-full -translate-y-1/2 h-10 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(0, 10, 31, 0.82) 45%, rgba(0, 10, 31, 0.88) 50%, rgba(0, 10, 31, 0.82) 55%, transparent 100%)',
        }}
      />

      {/* Cyber HUD Graphic spanning across the boundary */}
      <div className="absolute top-0 left-0 w-full -translate-y-1/2 flex items-center justify-center overflow-visible">
        <svg
          viewBox="0 0 1600 44"
          className="w-full h-8 sm:h-9 md:h-11 xl:h-12 overflow-visible pointer-events-none drop-shadow-[0_0_12px_rgba(0,212,255,0.6)]"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Glow Filter */}
            <filter id="hudGlow" x="-20%" y="-100%" width="140%" height="300%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Intense Center Point Glow */}
            <filter id="centerPointGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Beam Main Gradient */}
            <linearGradient id="hudBeamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0077ff" stopOpacity="0.4" />
              <stop offset="15%" stopColor="#00d4ff" stopOpacity="0.85" />
              <stop offset="42%" stopColor="#00f0ff" stopOpacity="1" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="58%" stopColor="#00f0ff" stopOpacity="1" />
              <stop offset="85%" stopColor="#00d4ff" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#0077ff" stopOpacity="0.4" />
            </linearGradient>

            {/* Tech Cyan Solid Gradient */}
            <linearGradient id="techCyanGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0099ff" />
              <stop offset="50%" stopColor="#00f0ff" />
              <stop offset="100%" stopColor="#0099ff" />
            </linearGradient>

            {/* Horizontal Lens Flare Gradient */}
            <linearGradient id="flareGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00d4ff" stopOpacity="0" />
              <stop offset="25%" stopColor="#00d4ff" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="75%" stopColor="#00d4ff" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#00d4ff" stopOpacity="0" />
            </linearGradient>

            {/* Downward Radial Bloom */}
            <radialGradient id="bloomGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.7" />
              <stop offset="40%" stopColor="#00aaff" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#0055ff" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* 1. Downward Radiant Ambient Bloom below center (as seen in reference) */}
          <ellipse cx="800" cy="24" rx="220" ry="14" fill="url(#bloomGrad)" opacity="0.85" />

          {/* 2. Top Framing Circuit Rail with 45° Chamfers */}
          <path
            d="M 0 17 
               L 300 17 
               L 312 12 
               L 450 12 
               L 462 17 
               L 490 17 
               L 500 19 
               L 750 19 
               L 765 16 
               L 835 16 
               L 850 19 
               L 1100 19 
               L 1110 17 
               L 1138 17 
               L 1150 12 
               L 1288 12 
               L 1300 17 
               L 1600 17"
            stroke="#0099ff"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.85"
            filter="url(#hudGlow)"
          />

          {/* 3. Bottom Outer Edge Rails */}
          {/* Left bottom rail */}
          <line x1="0" y1="23" x2="230" y2="23" stroke="#0077ff" strokeWidth="1.5" opacity="0.75" />
          {/* Right bottom rail */}
          <line x1="1370" y1="23" x2="1600" y2="23" stroke="#0077ff" strokeWidth="1.5" opacity="0.75" />

          {/* 4. Slanted Tech Dash Marks (4 left, 4 right - matching reference image) */}
          {/* Left slanted hashes */}
          <g fill="url(#techCyanGrad)" filter="url(#hudGlow)">
            <polygon points="235,26 244,26 240,31 231,31" />
            <polygon points="248,26 257,26 253,31 244,31" />
            <polygon points="261,26 270,26 266,31 257,31" />
            <polygon points="274,26 283,26 279,31 270,31" />
          </g>

          {/* Right slanted hashes */}
          <g fill="url(#techCyanGrad)" filter="url(#hudGlow)">
            <polygon points="1326,26 1335,26 1331,31 1322,31" />
            <polygon points="1339,26 1348,26 1344,31 1335,31" />
            <polygon points="1352,26 1361,26 1357,31 1348,31" />
            <polygon points="1365,26 1374,26 1370,31 1361,31" />
          </g>

          {/* 5. Bottom Stepped Circuit Brackets & Inset Accent Blocks */}
          {/* Left circuit notch bracket */}
          <path
            d="M 330 23 L 344 29 L 415 29 L 426 23"
            stroke="#0099ff"
            strokeWidth="1.6"
            strokeLinejoin="round"
            opacity="0.9"
            filter="url(#hudGlow)"
          />
          {/* Left circuit accent polygon */}
          <polygon
            points="352,28 360,25 395,25 387,28"
            fill="#00c8ff"
            opacity="0.9"
            filter="url(#hudGlow)"
          />

          {/* Right circuit notch bracket */}
          <path
            d="M 1174 23 L 1185 29 L 1256 29 L 1270 23"
            stroke="#0099ff"
            strokeWidth="1.6"
            strokeLinejoin="round"
            opacity="0.9"
            filter="url(#hudGlow)"
          />
          {/* Right circuit accent polygon */}
          <polygon
            points="1213,28 1205,25 1240,25 1248,28"
            fill="#00c8ff"
            opacity="0.9"
            filter="url(#hudGlow)"
          />

          {/* 6. Primary Continuous Glowing Straight Laser Beam */}
          {/* Outer soft ambient laser aura */}
          <line
            x1="0"
            y1="20"
            x2="1600"
            y2="20"
            stroke="#00d4ff"
            strokeWidth="5"
            opacity="0.35"
            filter="url(#hudGlow)"
          />

          {/* Electric Cyan Beam Track */}
          <line
            x1="0"
            y1="20"
            x2="1600"
            y2="20"
            stroke="url(#hudBeamGradient)"
            strokeWidth="2.5"
            filter="url(#hudGlow)"
          />

          {/* Brilliant Razor-Sharp White Hot Energy Core */}
          <line
            x1="120"
            y1="20"
            x2="1480"
            y2="20"
            stroke="#ffffff"
            strokeWidth="1.2"
            opacity="0.95"
          />

          {/* 7. Radiant Center Energy Lens Spark (Matching the reference's focal flare) */}
          {/* Horizontal Lens Flare Wing */}
          <ellipse
            cx="800"
            cy="20"
            rx="180"
            ry="4.5"
            fill="url(#flareGrad)"
            filter="url(#hudGlow)"
          />

          {/* Concentrated Intense Center Glow */}
          <ellipse
            cx="800"
            cy="20"
            rx="45"
            ry="3.5"
            fill="#00f0ff"
            filter="url(#hudGlow)"
          />

          {/* Ultra-Bright Center Lens Core */}
          <ellipse
            cx="800"
            cy="20"
            rx="18"
            ry="2.2"
            fill="#ffffff"
          />

          {/* Center Point Star Spark */}
          <circle
            cx="800"
            cy="20"
            r="3.5"
            fill="#ffffff"
            filter="url(#centerPointGlow)"
          />
        </svg>
      </div>
    </div>
  );
};

export default SectionDivider;
