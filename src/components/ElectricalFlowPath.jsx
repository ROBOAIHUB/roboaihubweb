import React from 'react';

const ElectricalFlowPath = () => {
  // SVG coordinates matching the winding path from R&D Hub down the slope to foreground
  // ViewBox: 0 0 1000 1000
  // Starts at R&D Centre (500, 160) and winds down to (502, 980)
  const mainRoadPath = "M 500,160 C 522,230 535,280 514,340 C 490,400 485,460 504,520 C 520,570 525,640 508,720 C 490,800 488,880 502,980";
  const leftBranchPath = "M 498,160 C 518,230 530,280 510,340 C 486,400 481,460 500,520 C 516,570 521,640 504,720 C 486,800 484,880 498,980";
  const rightBranchPath = "M 502,160 C 526,230 540,280 518,340 C 494,400 489,460 508,520 C 524,570 529,640 512,720 C 494,800 492,880 506,980";

  return (
    <div 
      className="absolute inset-0 pointer-events-none z-15 overflow-hidden"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        className="w-full h-full object-fill"
      >
        <defs>
          {/* Cyan Energy Glow Filter */}
          <filter id="cyan-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="intense-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="6" result="blur1" />
            <feGaussianBlur stdDeviation="2" result="blur2" />
            <feMerge>
              <feMergeNode in="blur1" />
              <feMergeNode in="blur2" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Gradients */}
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#7ec8ff" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#00d4ff" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* 1. Base Static Subtle Fiber Optic Guides */}
        <path
          d={mainRoadPath}
          fill="none"
          stroke="rgba(0, 212, 255, 0.25)"
          strokeWidth="1.5"
        />
        <path
          d={leftBranchPath}
          fill="none"
          stroke="rgba(0, 212, 255, 0.15)"
          strokeWidth="0.8"
        />
        <path
          d={rightBranchPath}
          fill="none"
          stroke="rgba(0, 212, 255, 0.15)"
          strokeWidth="0.8"
        />

        {/* 2. Forward High-Speed Energy Pulses (Downwards) */}
        {/* Pulse 1: Main fast stream */}
        <path
          d={mainRoadPath}
          fill="none"
          stroke="#ffffff"
          strokeWidth="3.5"
          filter="url(#intense-glow)"
          className="eco-pulse-fast-1"
        />

        {/* Pulse 2: Secondary staggered stream */}
        <path
          d={mainRoadPath}
          fill="none"
          stroke="#00d4ff"
          strokeWidth="2.5"
          filter="url(#cyan-glow)"
          className="eco-pulse-fast-2"
        />

        {/* Pulse 3: Left fiber stream */}
        <path
          d={leftBranchPath}
          fill="none"
          stroke="#00d4ff"
          strokeWidth="1.8"
          filter="url(#cyan-glow)"
          className="eco-pulse-fast-3"
        />

        {/* Pulse 4: Right fiber stream */}
        <path
          d={rightBranchPath}
          fill="none"
          stroke="#7ec8ff"
          strokeWidth="1.8"
          filter="url(#cyan-glow)"
          className="eco-pulse-fast-4"
        />

        {/* 3. Reverse Telemetry Pulses (Upwards towards R&D Centre) */}
        <path
          d={mainRoadPath}
          fill="none"
          stroke="rgba(0, 212, 255, 0.7)"
          strokeWidth="2"
          filter="url(#cyan-glow)"
          className="eco-pulse-reverse"
        />

        {/* 4. Terminal Glow Node at R&D Centre Summit */}
        <circle
          cx="500"
          cy="160"
          r="8"
          fill="rgba(0, 212, 255, 0.4)"
          filter="url(#intense-glow)"
          className="eco-summit-node"
        />
        <circle
          cx="500"
          cy="160"
          r="4"
          fill="#ffffff"
        />
      </svg>
    </div>
  );
};

export default ElectricalFlowPath;
