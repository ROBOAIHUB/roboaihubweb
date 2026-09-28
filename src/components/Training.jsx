import React, { useState } from 'react';
import { Bot, Brain } from 'lucide-react';
import AITrainingCarousel, { AI_COURSES } from './AITrainingCarousel';
import TrainingCourseModal from './TrainingCourseModal';
import './Training.css';

const Training = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [mobileTab, setMobileTab] = useState('ai'); // 'ai' or 'robotics'

  return (
    <div 
      className="w-full h-full relative overflow-hidden bg-[#000a1f] select-none flex items-center justify-center"
      aria-label="ROBOAI HUB Training Programs"
    >
      {/* ========================================================================= */}
      {/* MOBILE RESPONSIVE VIEW (< md)                                             */}
      {/* ========================================================================= */}
      <div className="md:hidden flex flex-col justify-between w-full h-full relative z-10 px-4 pt-20 pb-8 overflow-y-auto no-scrollbar">
        {/* Background Atmospheric Video */}
        <video
          src="/RoboAI_Training_Real_Photos_Only.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-25 select-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#000a1f]/85 via-transparent to-[#000a1f]/95 pointer-events-none" />

        {/* Mobile Header Block */}
        <div className="relative z-20">
          <h1 className="text-2xl font-michroma font-bold text-white tracking-wide leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
            Training Programs
          </h1>
          <p className="mt-1 text-xs font-jura text-white/90 leading-snug tracking-wide">
            Practical pathways for Robotics and AI skill development.
          </p>
        </div>

        {/* Mobile Tab Switcher: AI Courses vs Robotics Lab */}
        <div className="relative z-20 my-auto py-2">
          <div className="flex items-center gap-2 p-1 rounded-full bg-[#001030]/85 border border-cyan-400/35 backdrop-blur-md mb-3 shadow-[0_0_15px_rgba(0,212,255,0.15)]">
            <button
              type="button"
              onClick={() => setMobileTab('ai')}
              className={`flex-1 py-2 rounded-full font-jura font-semibold text-xs transition-all duration-300 flex items-center justify-center gap-1.5 ${
                mobileTab === 'ai'
                  ? 'bg-gradient-to-r from-[#00d4ff] to-blue-600 text-white shadow-[0_0_15px_rgba(0,212,255,0.6)] font-bold'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <Brain className="w-3.5 h-3.5" />
              <span>AI Courses (4)</span>
            </button>
            <button
              type="button"
              onClick={() => setMobileTab('robotics')}
              className={`flex-1 py-2 rounded-full font-jura font-semibold text-xs transition-all duration-300 flex items-center justify-center gap-1.5 ${
                mobileTab === 'robotics'
                  ? 'bg-gradient-to-r from-[#00d4ff] to-blue-600 text-white shadow-[0_0_15px_rgba(0,212,255,0.6)] font-bold'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <Bot className="w-3.5 h-3.5" />
              <span>Robotics Labs</span>
            </button>
          </div>

          {/* AI Courses Content */}
          {mobileTab === 'ai' && (
            <div className="flex flex-col gap-2.5">
              {AI_COURSES.map((course) => {
                const Icon = course.icon;
                return (
                  <div
                    key={course.id}
                    onClick={() => setSelectedCourse(course)}
                    className="flex items-center justify-between p-3 rounded-xl border border-cyan-400/40 bg-[#001030]/80 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.5)] active:scale-[0.98] transition-all cursor-pointer group hover:border-[#00d4ff]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full border border-cyan-300/60 bg-[#00d4ff]/15 flex items-center justify-center shrink-0 group-hover:shadow-[0_0_12px_rgba(0,212,255,0.8)] transition-all">
                        <Icon className="w-5 h-5 text-white group-hover:text-[#00d4ff] transition-colors" />
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="text-[9.5px] font-michroma text-[#00d4ff] tracking-wider uppercase">
                          {course.badge}
                        </span>
                        <span className="text-sm font-michroma font-bold text-white leading-tight">
                          {course.displayTitle}
                        </span>
                        <span className="text-[11px] font-jura text-white/80 line-clamp-1 mt-0.5">
                          {course.tagline}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs text-cyan-400 font-michroma shrink-0 ml-2 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                );
              })}
            </div>
          )}

          {/* Robotics Lab Content */}
          {mobileTab === 'robotics' && (
            <div className="flex flex-col rounded-xl border border-cyan-400/40 bg-[#001030]/85 p-3.5 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-cyan-300/40 mb-3">
                <img 
                  src="/gallery/workshop_KV_MAjpg.jpg" 
                  alt="RoboAI Robotics Lab Setup" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2 px-2.5 py-1 rounded-full bg-[#000a1f]/80 backdrop-blur-sm border border-cyan-400/50 text-[10px] font-michroma text-cyan-300">
                  HANDS-ON LABS
                </div>
              </div>
              <h3 className="text-sm font-michroma font-bold text-white mb-1">
                Robotics Training & Lab Architecture
              </h3>
              <p className="text-xs font-jura text-white/85 leading-relaxed mb-3">
                State-of-the-art institutional robotics benches, ROS controllers, 3D printing, and humanoid bot kits designed for schools and universities.
              </p>
              <div className="flex items-center justify-between text-[11px] font-jura text-cyan-300 pt-2 border-t border-white/10">
                <span>Hardware + Software</span>
                <span>• Jodhpur, India</span>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Footer Cue */}
        <div className="relative z-20 text-center">
          <span className="text-[10px] font-jura text-white/60 tracking-wider">
            Tap any AI course to view full curriculum & topics
          </span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* DESKTOP 100% * 100% FULL-PAGE COVER CONTAINER (>= md)                     */}
      {/* ========================================================================= */}
      <div className="hidden md:flex relative w-full h-full items-center justify-center overflow-hidden">
        
        {/* Layer 1: Background Animated Video (100% * 100%) */}
        <video
          src="/RoboAI_Training_Real_Photos_Only.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-fill pointer-events-none select-none"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'fill',
            filter: 'brightness(1.08) contrast(1.04) saturate(1.06)',
          }}
        />

        {/* Layer 2: Top-Left Headings Group */}
        <div className="absolute left-[3.63%] top-[8.5%] sm:top-[8.0%] md:top-[8.5%] z-20 pointer-events-auto max-w-[85%] md:max-w-[42%]">
          <h1 className="font-sans font-bold text-[20px] sm:text-[26px] md:text-[3.15vw] xl:text-[42px] leading-tight text-white tracking-wide drop-shadow-[0_2px_15px_rgba(0,212,255,0.4)]">
            Training Programs
          </h1>
          <p className="mt-1.5 font-jura text-[11px] sm:text-[12.5px] md:text-[0.98vw] xl:text-[13.5px] text-white/90 leading-snug tracking-wide drop-shadow-md">
            Practical pathways for Robotics and AI skill development.
          </p>
        </div>

        {/* Layer 3: Middle Building Signboard (R&D & INNOVATION CENTRE) */}
        <div 
          className="absolute left-[54.19%] top-[34.44%] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto"
          aria-label="R&D & Innovation Centre"
        >
          <span className="font-michroma font-bold text-[0.82vw] xl:text-[11px] text-white tracking-[0.14em] uppercase whitespace-nowrap drop-shadow-[0_0_8px_rgba(0,212,255,0.85)]">
            R&D & INNOVATION CENTRE
          </span>
        </div>

        {/* Layer 4: Bottom-Left Robotics Caption Group */}
        <div 
          className="absolute left-[16.88%] top-[84.22%] z-20 flex items-center gap-3 pointer-events-auto group cursor-pointer"
          aria-label="Robotics Training: Build. Program. Innovate."
        >
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
            <div className="mt-1 h-[1.5px] w-full bg-[#00d4ff] shadow-[0_0_8px_#00d4ff] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </div>
        </div>

        {/* Layer 5: Bottom-Right AI Training Caption Group */}
        <div 
          className="absolute left-[70.94%] top-[85.55%] z-20 flex items-center gap-3 pointer-events-auto group cursor-pointer"
          aria-label="AI Training: Learn. Model. Transform."
        >
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
            <div className="mt-1 h-[1.5px] w-full bg-[#00d4ff] shadow-[0_0_8px_#00d4ff] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </div>
        </div>

        {/* Layer 6: AI 3D Circular Orbit Carousel Overlays */}
        <AITrainingCarousel 
          onSelectCourse={(course) => setSelectedCourse(course)}
          isModalOpen={!!selectedCourse}
        />

      </div>

      {/* Layer 7: Interactive Course Detail Lightbox Modal (Shared for both mobile and desktop) */}
      <TrainingCourseModal 
        course={selectedCourse} 
        onClose={() => setSelectedCourse(null)} 
      />
    </div>
  );
};

export default Training;
