import React, { useState } from 'react';
import { Bot, Brain } from 'lucide-react';
import AITrainingCarousel, { AI_COURSES } from './AITrainingCarousel';
import TrainingCourseModal from './TrainingCourseModal';
import './Training.css';

const Training = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <div 
      className="w-full h-screen relative overflow-hidden bg-[#000a1f] select-none flex items-center justify-center"
      aria-label="ROBOAI HUB Training Programs"
    >
      {/* ========================================================================= */}
      {/* 100% * 100% FULL-PAGE COVER CONTAINER                                     */}
      {/* ========================================================================= */}
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        
        {/* Layer 1: Background Animated Video */}
        <video
          src="/RoboAI_Training_Real_Photos_Only.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover md:object-fill pointer-events-none select-none"
          style={{
            filter: 'brightness(1.08) contrast(1.04) saturate(1.06)',
          }}
        />

        {/* ======================================================================= */}
        {/* Layer 2: Top-Left Headings Group (ROBOAI HUB & 100% Banner Removed)     */}
        {/* ======================================================================= */}
        <div className="absolute left-[3.63%] top-[8.5%] sm:top-[8.0%] md:top-[8.5%] z-20 pointer-events-auto max-w-[85%] md:max-w-[42%]">
          {/* Main Heading: Training Programs */}
          <h1 className="font-sans font-bold text-[20px] sm:text-[26px] md:text-[3.15vw] xl:text-[42px] leading-tight text-white tracking-wide drop-shadow-[0_2px_15px_rgba(0,212,255,0.4)]">
            Training Programs
          </h1>
          
          {/* Description Text */}
          <p className="mt-1.5 font-jura text-[11px] sm:text-[12.5px] md:text-[0.98vw] xl:text-[13.5px] text-white/90 leading-snug tracking-wide drop-shadow-md">
            Practical pathways for Robotics and AI skill development.
          </p>
        </div>

        {/* ======================================================================= */}
        {/* Layer 3: Middle Building Signboard (R&D & INNOVATION CENTRE)            */}
        {/* ======================================================================= */}
        <div 
          className="absolute left-[54.19%] top-[34.44%] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto"
          aria-label="R&D & Innovation Centre"
        >
          <span className="font-michroma font-bold text-[0.82vw] xl:text-[11px] text-white tracking-[0.14em] uppercase whitespace-nowrap drop-shadow-[0_0_8px_rgba(0,212,255,0.85)]">
            R&D & INNOVATION CENTRE
          </span>
        </div>

        {/* ======================================================================= */}
        {/* Layer 4: Bottom-Left Robotics Caption Group (Interactive 2nd Page Hover)*/}
        {/* ======================================================================= */}
        <div 
          className="absolute left-[16.88%] top-[84.22%] z-20 flex items-center gap-3 pointer-events-auto group cursor-pointer"
          aria-label="Robotics Training: Build. Program. Innovate."
        >
          {/* Circular Robotic Arm Icon Badge with 2nd-page Hover */}
          <div className="w-[2.8vw] h-[2.8vw] max-w-[42px] max-h-[42px] min-w-[26px] min-h-[26px] rounded-full border border-white/60 bg-[#000a1f]/40 backdrop-blur-[1px] flex items-center justify-center text-white transition-all duration-300 group-hover:border-[#00d4ff] group-hover:shadow-[0_0_16px_rgba(0,212,255,0.9)] group-hover:bg-[#00d4ff]/15 group-hover:text-[#00d4ff] shrink-0">
            <Bot className="w-[1.45vw] h-[1.45vw] max-w-[22px] max-h-[22px] transition-colors duration-300" />
          </div>

          <div className="flex flex-col relative">
            <h3 className="font-michroma font-bold text-[1.12vw] xl:text-[15px] text-white tracking-wider uppercase leading-tight drop-shadow-[0_1px_4px_rgba(0,0,0,0.95)] transition-colors duration-300 group-hover:text-[#00d4ff] group-hover:drop-shadow-[0_0_8px_#00d4ff]">
              ROBOTICS TRAINING
            </h3>
            <span className="font-jura text-[0.85vw] xl:text-[12px] text-white/85 tracking-wide leading-tight mt-0.5 drop-shadow-md transition-colors duration-300 group-hover:text-white">
              Build. Program. Innovate.
            </span>

            {/* Animated Thin Cyan Underline (Left-to-Right on Hover) */}
            <div className="mt-1 h-[1.5px] w-full bg-[#00d4ff] shadow-[0_0_8px_#00d4ff] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </div>
        </div>

        {/* ======================================================================= */}
        {/* Layer 5: Bottom-Right AI Training Caption Group (Interactive 2nd Page)  */}
        {/* ======================================================================= */}
        <div 
          className="absolute left-[70.94%] top-[85.55%] z-20 flex items-center gap-3 pointer-events-auto group cursor-pointer"
          aria-label="AI Training: Learn. Model. Transform."
        >
          {/* Circular Brain Icon Badge with 2nd-page Hover */}
          <div className="w-[2.8vw] h-[2.8vw] max-w-[42px] max-h-[42px] min-w-[26px] min-h-[26px] rounded-full border border-white/60 bg-[#000a1f]/40 backdrop-blur-[1px] flex items-center justify-center text-white transition-all duration-300 group-hover:border-[#00d4ff] group-hover:shadow-[0_0_16px_rgba(0,212,255,0.9)] group-hover:bg-[#00d4ff]/15 group-hover:text-[#00d4ff] shrink-0">
            <Brain className="w-[1.45vw] h-[1.45vw] max-w-[22px] max-h-[22px] transition-colors duration-300" />
          </div>

          <div className="flex flex-col relative">
            <h3 className="font-michroma font-bold text-[1.12vw] xl:text-[15px] text-white tracking-wider uppercase leading-tight drop-shadow-[0_1px_4px_rgba(0,0,0,0.95)] transition-colors duration-300 group-hover:text-[#00d4ff] group-hover:drop-shadow-[0_0_8px_#00d4ff]">
              AI TRAINING
            </h3>
            <span className="font-jura text-[0.85vw] xl:text-[12px] text-white/85 tracking-wide leading-tight mt-0.5 drop-shadow-md transition-colors duration-300 group-hover:text-white">
              Learn. Model. Transform.
            </span>

            {/* Animated Thin Cyan Underline (Left-to-Right on Hover) */}
            <div className="mt-1 h-[1.5px] w-full bg-[#00d4ff] shadow-[0_0_8px_#00d4ff] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </div>
        </div>

        {/* ======================================================================= */}
        {/* Layer 6: AI 3D Circular Orbit Carousel Overlays                         */}
        {/* ======================================================================= */}
        <AITrainingCarousel 
          onSelectCourse={(course) => setSelectedCourse(course)}
          isModalOpen={!!selectedCourse}
        />

        {/* ======================================================================= */}
        {/* Layer 7: Interactive Course Detail Lightbox Modal                       */}
        {/* ======================================================================= */}
        <TrainingCourseModal 
          course={selectedCourse} 
          onClose={() => setSelectedCourse(null)} 
        />

      </div>
    </div>
  );
};

export default Training;
