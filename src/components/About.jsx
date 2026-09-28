import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './About.css';

// 8 Verified Timeline Milestones Traversed Clockwise in the 24s Video
const TIMELINE_MILESTONES = [
  {
    id: 'nov-2023',
    interval: [0.0, 3.0],
    date: 'NOV 2023',
    title: 'ROBOAI HUB\nInaugurated',
    img: '/gallery/milestone_nov_2023_real.jpg',
    alt: 'RoboAI Hub Inauguration ceremony and leadership celebration',
    description: 'Our innovation centre was launched in Jodhpur to connect education, robotics, AI and industrial problem-solving under one ecosystem.',
    location: 'Jodhpur, Rajasthan',
  },
  {
    id: 'jul-2023',
    interval: [3.0, 6.0],
    date: 'JUL 2023',
    title: 'Rotary Robotics\nLab Setup',
    img: '/gallery/lab_Rotary_School.jpeg',
    alt: 'Rotary School Robotics Lab Setup and Team Inauguration',
    description: 'Inauguration and deployment of institutional robotics laboratory empowering young innovators with hands-on STEM skills.',
    location: 'Rotary School, Rajasthan',
  },
  {
    id: 'mar-2023',
    interval: [6.0, 9.0],
    date: 'MAR 2023',
    title: 'MBM University\nSymposium & FDP',
    img: '/gallery/workshop_MBM_FDP_1_.JPG',
    alt: 'MBM University faculty development and robotics symposium',
    description: 'Faculty Development Program and advanced robotics technical symposium bringing engineering researchers together.',
    location: 'MBM University, Jodhpur',
  },
  {
    id: 'dec-2022',
    interval: [9.0, 12.0],
    date: 'DEC 2022',
    title: 'Arivu Institute\nRobotics Lab',
    img: '/gallery/lab_Arivu_Institute_1_.jpeg',
    alt: 'Arivu Institute state-of-the-art robotics laboratory launch',
    description: 'State-of-the-art robotics training center launched featuring humanoid bots, 3D printing, and robotic workbenches.',
    location: 'Arivu Institute, Hubbali',
  },
  {
    id: 'apr-2022',
    interval: [12.0, 15.0],
    date: 'APR 2022',
    title: 'RoboAI Hub\nFoundation & Launch',
    img: '/gallery/workshop_KV_MAjpg.jpg',
    alt: 'RoboAI Hub foundation and initial STEM robotics initiative',
    description: 'Inception of the RoboAI Hub vision to empower students and industry with cutting-edge artificial intelligence and robotics.',
    location: 'Jodhpur, Rajasthan',
  },
  {
    id: '2026',
    interval: [15.0, 18.0],
    date: '2026',
    title: 'Autonomous AI &\nHumanoid Scaling',
    img: '/gallery/workshop_atlas.jpeg',
    alt: 'Next-generation humanoid and autonomous robotics expansion',
    description: 'Scaling next-generation autonomous AI navigation, industrial robotic arms, and full ecosystem nationwide deployment.',
    location: 'Pan-India Ecosystem',
  },
  {
    id: '2025',
    interval: [18.0, 21.0],
    date: '2025',
    title: 'KV Science &\nRobotics Expo',
    img: '/gallery/workshop_KV_Chittorgarh.jpg',
    alt: 'Kendriya Vidyalaya science exhibition and student robotics showcase',
    description: 'Nationwide school robotics exhibition and STEM project showcase connecting student inventors across India.',
    location: 'Kendriya Vidyalaya Network',
  },
  {
    id: '2024',
    interval: [21.0, 24.0],
    date: '2024',
    title: 'Autonomous\nQuadruped Arena',
    img: '/gallery/lab_Robodogs.jpeg',
    alt: 'Autonomous quadruped robotic dogs on test arena',
    description: 'Deployment of specialized quadruped robotic testing arena for autonomous navigation, kinematics, and dynamic gait control.',
    location: 'ROBOAI HUB R&D Lab',
  },
];

const About = () => {
  const videoRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayedIndex, setDisplayedIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const activeIndexRef = useRef(0);
  const transitionTimeoutRef = useRef(null);

  // Preload all milestone images on mount to avoid visual flashing
  useEffect(() => {
    TIMELINE_MILESTONES.forEach((item) => {
      if (item.img) {
        const imgObj = new Image();
        imgObj.src = item.img;
      }
    });
  }, []);

  // Compute active milestone index directly from video currentTime
  const computeActiveIndex = useCallback((time, duration) => {
    if (!duration || duration <= 0) return 0;
    let normTime = time % duration;
    if (normTime < 0) normTime += duration;

    for (let i = 0; i < TIMELINE_MILESTONES.length; i++) {
      const [start, end] = TIMELINE_MILESTONES[i].interval;
      if (normTime >= start && normTime < end) {
        return i;
      }
    }
    return 0;
  }, []);

  // Synchronize with video frame clock
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let isRunning = true;
    let rfcId = null;
    let rafId = null;

    const checkTime = () => {
      if (!isRunning || !video) return;
      const curTime = video.currentTime;
      const duration = video.duration || 24.0;
      const newIdx = computeActiveIndex(curTime, duration);

      if (newIdx !== activeIndexRef.current) {
        activeIndexRef.current = newIdx;
        setActiveIndex(newIdx);
      }
    };

    if ('requestVideoFrameCallback' in HTMLVideoElement.prototype) {
      const onVideoFrame = () => {
        checkTime();
        if (isRunning && video) {
          rfcId = video.requestVideoFrameCallback(onVideoFrame);
        }
      };
      rfcId = video.requestVideoFrameCallback(onVideoFrame);
    } else {
      const loop = () => {
        checkTime();
        if (isRunning) {
          rafId = requestAnimationFrame(loop);
        }
      };
      rafId = requestAnimationFrame(loop);
    }

    const handleTimeUpdate = () => checkTime();
    const handleSeeked = () => checkTime();
    const handlePlay = () => checkTime();

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('seeked', handleSeeked);
    video.addEventListener('play', handlePlay);

    return () => {
      isRunning = false;
      if (rfcId !== null && video && 'cancelVideoFrameCallback' in video) {
        video.cancelVideoFrameCallback(rfcId);
      }
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      if (video) {
        video.removeEventListener('timeupdate', handleTimeUpdate);
        video.removeEventListener('seeked', handleSeeked);
        video.removeEventListener('play', handlePlay);
      }
    };
  }, [computeActiveIndex]);

  // Smooth Content Transition without overlap
  useEffect(() => {
    if (activeIndex === displayedIndex) return;

    setIsTransitioning(true);

    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
    }

    transitionTimeoutRef.current = setTimeout(() => {
      setDisplayedIndex(activeIndex);
      setIsTransitioning(false);
    }, 180);

    return () => {
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, [activeIndex, displayedIndex]);

  // Manual Left / Right Navigation Handlers
  const handlePrev = useCallback((e) => {
    if (e) e.stopPropagation();
    const newIdx = activeIndex === 0 ? TIMELINE_MILESTONES.length - 1 : activeIndex - 1;
    const targetTime = TIMELINE_MILESTONES[newIdx].interval[0] + 0.1;
    if (videoRef.current) {
      videoRef.current.currentTime = targetTime;
    }
    activeIndexRef.current = newIdx;
    setActiveIndex(newIdx);
  }, [activeIndex]);

  const handleNext = useCallback((e) => {
    if (e) e.stopPropagation();
    const newIdx = (activeIndex + 1) % TIMELINE_MILESTONES.length;
    const targetTime = TIMELINE_MILESTONES[newIdx].interval[0] + 0.1;
    if (videoRef.current) {
      videoRef.current.currentTime = targetTime;
    }
    activeIndexRef.current = newIdx;
    setActiveIndex(newIdx);
  }, [activeIndex]);

  const activeMilestone = TIMELINE_MILESTONES[displayedIndex] || TIMELINE_MILESTONES[0];

  return (
    <div 
      className="about-scene-wrapper"
      aria-label="ROBOAI HUB About Timeline"
    >
      {/* ========================================================================= */}
      {/* MOBILE RESPONSIVE VIEW (< md)                                             */}
      {/* ========================================================================= */}
      <div className="md:hidden flex flex-col justify-between w-full h-full relative z-10 px-4 pt-20 pb-8 overflow-y-auto no-scrollbar">
        {/* Background Atmospheric Video */}
        <video
          src="/RoboAI_Timeline_Smooth_Preview.mp4"
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
            About Us
          </h1>
          <div className="relative my-1.5 flex items-center w-36 h-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#00d4ff]" />
            <div className="flex-1 h-[1.5px] bg-[#00d4ff] shadow-[0_0_8px_#00d4ff]" />
            <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#00d4ff]" />
          </div>

          {/* Mission Statement */}
          <div className="mt-2.5 p-3 rounded-xl border border-cyan-400/30 bg-[#001030]/70 backdrop-blur-md">
            <p className="font-jura text-xs text-white/90 leading-relaxed">
              We are building an ecosystem where <span className="text-cyan-300 font-semibold">Education</span>, <span className="text-cyan-300 font-semibold">Innovation</span> and <span className="text-cyan-300 font-semibold">Automation</span> work together to shape a better future.
            </p>
          </div>
        </div>

        {/* Mobile Milestone Card */}
        <div className="relative z-20 my-auto py-2 w-full max-w-[340px] mx-auto">
          <div className="rounded-2xl border border-cyan-400/40 bg-[#001030]/85 p-4 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.6)] flex flex-col gap-2.5">
            {/* Header: Date and Navigation Arrows */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-michroma text-cyan-300 font-bold tracking-widest uppercase">
                {activeMilestone.date}
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous milestone"
                  className="w-7 h-7 rounded-full border border-cyan-400/50 bg-[#00d4ff]/15 flex items-center justify-center text-white active:scale-95 transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-[10px] font-michroma text-white/60 px-1">
                  {displayedIndex + 1}/{TIMELINE_MILESTONES.length}
                </span>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next milestone"
                  className="w-7 h-7 rounded-full border border-cyan-400/50 bg-[#00d4ff]/15 flex items-center justify-center text-white active:scale-95 transition-all"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Milestone Title */}
            <h2 className="text-sm font-michroma font-bold text-white leading-tight">
              {activeMilestone.title}
            </h2>

            {/* Photo */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-cyan-300/40">
              <img 
                src={activeMilestone.img} 
                alt={activeMilestone.alt || activeMilestone.title} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Description */}
            <p className="text-xs font-jura text-white/85 leading-relaxed line-clamp-3">
              {activeMilestone.description}
            </p>

            {/* Location Tag */}
            <div className="flex items-center justify-between text-[11px] font-jura text-cyan-300 pt-2 border-t border-white/10">
              <span>{activeMilestone.location}</span>
              <span className="text-[10px] text-white/50">ROBOAI HUB</span>
            </div>
          </div>
        </div>

        {/* Mobile Footer Cue */}
        <div className="relative z-20 text-center">
          <span className="text-[10px] font-jura text-white/60 tracking-wider">
            Use arrows to traverse all {TIMELINE_MILESTONES.length} RoboAI Hub journey milestones
          </span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* DESKTOP 16:9 PROPORTIONAL CANVAS (>= md)                                  */}
      {/* ========================================================================= */}
      <div className="hidden md:flex about-scene-canvas">
        
        {/* Continuous Rotating Timeline Background Video */}
        <video
          ref={videoRef}
          src="/RoboAI_Timeline_Smooth_Preview.mp4"
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

        {/* Seamless Mask Overlay to Remove the Baked-in Scroll Arrow from Video */}
        <img 
          src="/clean_about_sand_cover.png" 
          alt="" 
          aria-hidden="true"
          className="absolute pointer-events-none select-none z-10"
          style={{
            left: '48.63%',
            top: '94.79%',
            width: '5.5%',
            height: '9.0%',
            transform: 'translate(-50%, -50%)',
            objectFit: 'cover',
            filter: 'brightness(1.08) contrast(1.04) saturate(1.06)',
          }}
        />

        {/* Ambient Top Lighting Gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85vw] h-[250px] bg-gradient-to-b from-[#00d4ff]/10 via-transparent to-transparent pointer-events-none z-[1]" />

        {/* ========================================================================= */}
        {/* 1. UPPER-LEFT HEADING (MATCHING CONTACT US & ECOSYSTEM)                   */}
        {/* ========================================================================= */}
        <div 
          className="absolute z-20 pointer-events-auto"
          style={{
            left: '3.44%',
            top: '14.0%',
          }}
        >
          <h1 className="font-michroma font-bold text-white tracking-wide leading-tight about-heading-text">
            About Us
          </h1>
          
          {/* Cyan Heading Line with Glowing Endpoint Dots (matching Contact Us page) */}
          <div className="relative my-1.5 flex items-center about-services-line-container">
            <span className="about-services-dot" />
            <div className="about-services-line" />
            <span className="about-services-dot" />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. LEFT-SIDE MISSION STATEMENT QUOTE (SHIFTED UPWARDS IN OPEN SKY)         */}
        {/* ========================================================================= */}
        <div 
          className="absolute z-20 pointer-events-auto about-quote-container"
          style={{
            left: '3.44%',
            top: '35%',
            transform: 'translateY(-50%)',
          }}
        >
          {/* Vertical Cyan Glowing Accent Line with Endpoint Dots */}
          <div className="about-quote-accent-bar" aria-hidden="true">
            <span className="about-quote-dot" />
            <div className="about-quote-v-line" />
            <span className="about-quote-dot" />
          </div>

          {/* Aesthetic 3-Line Structured Statement */}
          <div className="about-quote-content">
            <p className="font-jura about-quote-text">
              <span className="about-quote-line">We are building an ecosystem where</span>
              <span className="about-quote-line about-quote-highlight">
                <span className="about-keyword">Education</span>, <span className="about-keyword">Innovation</span> and <span className="about-keyword">Automation</span>
              </span>
              <span className="about-quote-line">work together to shape a better future.</span>
            </p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. CENTERED STATIONARY MILESTONE HOLOGRAPHIC GLASS PANEL                  */}
        {/* Anchor: Left: 57.8125%, Top: 26.56%, Width: 16.5%, Height: 47.56%         */}
        {/* ========================================================================= */}
        <div 
          className="about-milestone-panel"
          aria-live="polite"
          aria-label={`Milestone: ${activeMilestone.title} (${activeMilestone.date})`}
        >
          {/* Left Navigation Arrow */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous milestone"
            title="Previous milestone"
            className="about-edge-arrow-btn is-left"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Inner Content with Smooth Fade Transitions */}
          <div className={`about-panel-content-group ${isTransitioning ? 'is-exiting' : 'is-entering'}`}>
            
            {/* 1. Month and Year */}
            <p className="about-panel-date">
              {activeMilestone.date}
            </p>

            {/* 2. Milestone Title */}
            <h2 className="about-panel-title">
              {activeMilestone.title}
            </h2>

            {/* 3. Related Photograph */}
            <div className="about-panel-photo-frame">
              {activeMilestone.img && (
                <img 
                  src={activeMilestone.img} 
                  alt={activeMilestone.alt || activeMilestone.title} 
                  className="about-panel-photo-img"
                  loading="eager"
                />
              )}
            </div>

            {/* 4. Short Milestone Description (Sharp, High Contrast, No Blur) */}
            {activeMilestone.description && (
              <p className="about-panel-desc">
                {activeMilestone.description}
              </p>
            )}

            {/* 5. Location Tag */}
            {activeMilestone.location && (
              <p className="about-panel-loc">
                {activeMilestone.location}
              </p>
            )}

          </div>

          {/* Right Navigation Arrow */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next milestone"
            title="Next milestone"
            className="about-edge-arrow-btn is-right"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default About;
