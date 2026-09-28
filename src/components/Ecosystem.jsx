import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Layers,
  FlaskConical,
  Users,
  Calendar,
  Box,
  Brain,
  PenTool,
  Bot,
  Eye,
  Wifi
} from 'lucide-react';
import './Ecosystem.css';

// Verified existing service details stored across the project
const SERVICES_DATA = {
  'lab-setup': {
    id: 'lab-setup',
    title: 'Lab Setup',
    pillar: 'Education & Training',
    badge: 'TALENT INCUBATOR',
    tagline: 'Turnkey Institutional STEM & Robotics Laboratories',
    description: 'Complete institutional lab architecture, kits, and training benches tailored for cutting-edge robotics education.',
    targetSectionId: 'education',
    capabilities: [
      'Modular hardware kits and ROS test benches',
      'Custom curriculum for colleges and universities',
      'Turnkey physical laboratory installation and maintenance'
    ]
  },
  'mentorship': {
    id: 'mentorship',
    title: 'Mentorship',
    pillar: 'Education & Training',
    badge: 'TALENT INCUBATOR',
    tagline: 'Direct 1-on-1 Industry Practitioner Guidance',
    description: 'Direct 1-on-1 guidance from experienced robotics engineers and AI researchers covering embedded systems, ROS, and computer vision.',
    targetSectionId: 'education',
    capabilities: [
      'Weekly 1-on-1 code reviews and hardware debugging',
      'Career mapping and project portfolio development',
      'Direct referral pipeline to robotics enterprise partners'
    ]
  },
  'weekend-classes': {
    id: 'weekend-classes',
    title: 'Weekend Classes',
    pillar: 'Education & Training',
    badge: 'FLEXIBLE LEARNING',
    tagline: 'Accelerated Deep-Tech Weekend Cohorts',
    description: 'Flexible weekend bootcamps designed for working professionals and university students to upskill in robotics and AI without interruption.',
    targetSectionId: 'education',
    capabilities: [
      'Hands-on Saturday & Sunday laboratory workshops',
      'Real hardware deployment projects and ROS coding',
      'Industry-recognized certificates and credentials'
    ]
  },
  'prototyping': {
    id: 'prototyping',
    title: 'Prototyping',
    pillar: 'R&D & Innovation Centre',
    badge: 'CORE RESEARCH & LABS',
    tagline: 'Rapid Multi-Material Physical & Electronic Fabrication',
    description: 'Rapid physical and electronic prototyping transforming CAD concepts into validated operational prototypes with CNC machining and 3D printing.',
    targetSectionId: null,
    capabilities: [
      'Multi-material additive manufacturing and CNC machining',
      'Custom PCB design, soldering, and SMD assembly',
      'Rapid iterative mechanism testing and validation'
    ]
  },
  'ai-solutions': {
    id: 'ai-solutions',
    title: 'AI Solutions',
    pillar: 'R&D & Innovation Centre',
    badge: 'CORE RESEARCH & LABS',
    tagline: 'Custom Edge AI Models & Embedded Neural Networks',
    description: 'Bespoke deep learning models, LLMs, computer vision, and reinforcement learning built for real-world autonomy and embedded robotics.',
    targetSectionId: null,
    capabilities: [
      'Edge TPU / TensorRT optimized inference pipelines',
      'Custom vision models for autonomous navigation (SLAM)',
      'Reinforcement learning for robotic arm trajectory optimization'
    ]
  },
  'product-design': {
    id: 'product-design',
    title: 'Product Design & Testing',
    pillar: 'R&D & Innovation Centre',
    badge: 'CORE RESEARCH & LABS',
    tagline: 'Industrial Engineering, Stress Testing & Compliance',
    description: 'Industrial mechanical design, thermal simulations, durability verification, and compliance stress testing for mass production readiness.',
    targetSectionId: 'about',
    capabilities: [
      'Finite Element Analysis (FEA) and thermal modeling',
      'Hardware-in-the-Loop (HIL) automated stress benches',
      'IP, patent filing support, and mass-production readiness'
    ]
  },
  'machine-automation': {
    id: 'machine-automation',
    title: 'Machine Automation',
    pillar: 'Industrial Automation Service',
    badge: 'INDUSTRY 4.0 INTEGRATION',
    tagline: 'PLCs, SCADA & Collaborative Robotic Manipulators',
    description: 'Programmable logic controllers (PLCs), robotic manipulators, and automated assembly systems built for 24/7 reliability.',
    targetSectionId: 'about',
    capabilities: [
      'Multi-axis robotic arm palletizing and pick-and-place',
      'PLC programming (Siemens, Rockwell, Beckhoff)',
      'Custom robotic end-effectors and tooling'
    ]
  },
  'vision-systems': {
    id: 'vision-systems',
    title: 'Vision Systems',
    pillar: 'Industrial Automation Service',
    badge: 'INDUSTRY 4.0 INTEGRATION',
    tagline: 'High-Speed Automated Optical Inspection (AOI)',
    description: 'Micro-defect detection, optical sorting, and high-precision dimensional inspection using high-framerate machine vision.',
    targetSectionId: 'about',
    capabilities: [
      'Sub-millimeter defect detection at production speed',
      'OCR, barcode reading, and dimensional metrology',
      'Multi-spectral and 3D laser profiling integration'
    ]
  },
  'iot-monitoring': {
    id: 'iot-monitoring',
    title: 'IoT Monitoring',
    pillar: 'Industrial Automation Service',
    badge: 'INDUSTRY 4.0 INTEGRATION',
    tagline: 'Enterprise Telemetry & Predictive Maintenance',
    description: 'Industrial IoT nodes tracking vibration, temperature, energy consumption, and cycle metrics in real time.',
    targetSectionId: 'about',
    capabilities: [
      'Real-time cloud telemetry and vibration anomaly alerts',
      'Predictive maintenance machine learning models',
      'Secure edge gateways and customizable SCADA dashboards'
    ]
  }
};

// 9 Service Items positioned accurately on the shared 16:9 coordinate canvas
const SERVICES_CONFIG = [
  // Left 3 (Education Pillar)
  {
    id: 'lab-setup',
    title: 'Lab Setup',
    line1: 'Lab Setup',
    icon: FlaskConical,
    left: '15.04%',
    top: '89.40%',
    width: '6.4vw',
    minWidth: '70px',
  },
  {
    id: 'mentorship',
    title: 'Mentorship',
    line1: 'Mentorship',
    icon: Users,
    left: '22.46%',
    top: '89.40%',
    width: '6.4vw',
    minWidth: '70px',
  },
  {
    id: 'weekend-classes',
    title: 'Weekend Classes',
    line1: 'Weekend',
    line2: 'Classes',
    icon: Calendar,
    left: '29.69%',
    top: '90.10%',
    width: '6.8vw',
    minWidth: '74px',
  },

  // Center 3 (R&D & Innovation Pillar)
  {
    id: 'prototyping',
    title: 'Prototyping',
    line1: 'Prototyping',
    icon: Box,
    left: '43.55%',
    top: '63.90%',
    width: '5.6vw',
    minWidth: '64px',
    isSmall: true
  },
  {
    id: 'ai-solutions',
    title: 'AI Solutions',
    line1: 'AI Solutions',
    icon: Brain,
    left: '49.22%',
    top: '63.90%',
    width: '5.6vw',
    minWidth: '64px',
    isSmall: true
  },
  {
    id: 'product-design',
    title: 'Product Design & Testing',
    line1: 'Product Design',
    line2: '& Testing',
    icon: PenTool,
    left: '54.88%',
    top: '64.70%',
    width: '6.4vw',
    minWidth: '74px',
    isSmall: true
  },

  // Right 3 (Industrial Automation Pillar)
  {
    id: 'machine-automation',
    title: 'Machine Automation',
    line1: 'Machine',
    line2: 'Automation',
    icon: Bot,
    left: '69.82%',
    top: '90.10%',
    width: '6.8vw',
    minWidth: '74px',
  },
  {
    id: 'vision-systems',
    title: 'Vision Systems',
    line1: 'Vision',
    line2: 'Systems',
    icon: Eye,
    left: '76.46%',
    top: '90.10%',
    width: '6.4vw',
    minWidth: '70px',
  },
  {
    id: 'iot-monitoring',
    title: 'IoT Monitoring',
    line1: 'IoT',
    line2: 'Monitoring',
    icon: Wifi,
    left: '83.11%',
    top: '90.10%',
    width: '6.4vw',
    minWidth: '70px',
  }
];

const Ecosystem = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);
  const [ripples, setRipples] = useState({});
  const lastActiveButtonRef = useRef(null);
  const triggerRefs = useRef({});

  // Handle ripple on click/tap and open modal
  const handleServiceClick = (e, service) => {
    e.preventDefault();
    const button = e.currentTarget;
    lastActiveButtonRef.current = button;
    
    const rect = button.getBoundingClientRect();
    const x = e.clientX ? e.clientX - rect.left : rect.width / 2;
    const y = e.clientY ? e.clientY - rect.top : rect.height / 2;
    const rippleSize = Math.max(rect.width, rect.height) * 1.5;

    // Trigger subtle ripple animation
    setRipples(prev => ({
      ...prev,
      [service.id]: { x, y, size: rippleSize, key: Date.now() }
    }));

    // Open detail modal with slight delay for ripple perception
    const serviceData = SERVICES_DATA[service.id];
    if (serviceData) {
      setTimeout(() => {
        setSelectedService(serviceData);
      }, 70);
    }
  };

  // Close modal and restore focus to triggering button
  const handleCloseModal = () => {
    setSelectedService(null);
    if (lastActiveButtonRef.current) {
      setTimeout(() => {
        lastActiveButtonRef.current?.focus();
      }, 50);
    }
  };

  // Escape key listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedService) {
        handleCloseModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedService]);

  // Navigate to existing section without breaking scroll position
  const handleNavigate = (sectionId) => {
    if (!sectionId) return;
    setSelectedService(null);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="w-full h-full relative overflow-hidden bg-[#000a1f] select-none flex items-center justify-center"
      aria-label="ROBOAI HUB Ecosystem"
    >
      {/* ========================================================================= */}
      {/* SHARED 16:9 PROPORTIONAL CANVAS FOR PERFECT ALIGNMENT ON ALL SCREENS */}
      {/* ========================================================================= */}
      <div className="relative w-full h-full aspect-video flex items-center justify-center overflow-hidden eco-canvas-container">
        
        {/* Layer 1: Background Animated Video (Clean No-Labels Video) */}
        <video
          src="/RoboAI_Ecosystem_No_Labels.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-fill pointer-events-none select-none"
          style={{
            filter: 'brightness(1.08) contrast(1.04) saturate(1.06)',
          }}
        />

        {/* Ambient Top Lighting Gradient matching other pages */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85vw] h-[250px] bg-gradient-to-b from-[#00d4ff]/12 via-transparent to-transparent pointer-events-none z-[1]" />

        {/* Layer 2: Top-Left Header Block (ROBOAI HUB text removed) */}
        <div className="absolute left-[3.5%] top-[8.5%] sm:top-[7.5%] md:top-[6.5%] z-20 max-w-sm pointer-events-auto eco-header-block">
          <h1 className="text-[20px] sm:text-[24px] md:text-[2.9vw] xl:text-[36px] font-michroma font-bold text-white tracking-wide leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
            Ecosystem
          </h1>
          <p className="mt-1 text-[11px] sm:text-[12px] md:text-[0.9vw] xl:text-[12px] font-jura text-white/90 leading-snug tracking-wide drop-shadow-md eco-header-desc">
            <span className="hidden md:inline">
              Connecting Education, Innovation<br />
              and Automation into one future-ready ecosystem.
            </span>
            <span className="inline md:hidden">
              Connecting Education,<br />
              Innovation and<br />
              Automation into one<br />
              future-ready ecosystem.
            </span>
          </p>
        </div>

        {/* Layer 3: Central "BETTER FUTURE" Hub */}
        <div 
          className="absolute left-[50.0%] top-[19.4%] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto cursor-default group"
          title="ROBOAI HUB — Better Future"
        >
          <div className="flex flex-col items-center justify-center text-center transition-all duration-250 select-none">
            <span className="font-michroma font-bold text-[1.35vw] xl:text-[17px] text-white tracking-[0.18em] leading-[1.05] transition-all duration-250 drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] group-hover:drop-shadow-[0_0_20px_rgba(0,212,255,1)] group-hover:text-[#00d4ff] eco-better-future-text">
              BETTER
            </span>
            <span className="font-michroma font-bold text-[1.35vw] xl:text-[17px] text-white tracking-[0.18em] leading-[1.05] transition-all duration-250 drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] group-hover:drop-shadow-[0_0_20px_rgba(0,212,255,1)] group-hover:text-[#00d4ff] eco-better-future-text">
              FUTURE
            </span>
          </div>
        </div>

        {/* Layer 4: Destination Headings over Building Billboards */}
        
        {/* 4A. Left Building Signboard (Education & Training) */}
        <div className="eco-signboard-education" aria-label="Education & Training">
          <span className="eco-signboard-education-text">Education &amp;</span>
          <span className="eco-signboard-education-text">Training</span>
        </div>

        {/* 4B. Middle Building Header (R&D & Innovation Centre) */}
        <div className="eco-header-rd" aria-label="R&D & Innovation Centre">
          <span className="eco-header-rd-text">
            R&amp;D &amp; Innovation Centre
          </span>
        </div>

        {/* 4C. Right Building Signboard (Industrial Automation Service) */}
        <div className="eco-signboard-industrial" aria-label="Industrial Automation Service">
          <span className="eco-signboard-industrial-text">Industrial</span>
          <span className="eco-signboard-industrial-text">Automation Service</span>
        </div>

        {/* Layer 5: Nine Interactive Transparent Service Buttons */}
        {SERVICES_CONFIG.map((service) => {
          const Icon = service.icon;
          const isHovered = hoveredId === service.id;
          const activeRipple = ripples[service.id];

          return (
            <button
              key={service.id}
              ref={(el) => (triggerRefs.current[service.id] = el)}
              type="button"
              onClick={(e) => handleServiceClick(e, service)}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
              onFocus={() => setHoveredId(service.id)}
              onBlur={() => setHoveredId(null)}
              aria-label={`Explore ${service.title}`}
              title={`Click to view ${service.title} details`}
              className="absolute flex flex-col items-center justify-start group cursor-pointer focus-visible:outline-none z-25 bg-transparent p-0 border-0 select-none"
              style={{
                left: service.left,
                top: service.top,
                transform: 'translate(-50%, -50%)',
                width: service.width,
                minWidth: service.minWidth,
              }}
            >
              {/* Circular Icon with Thin Outline (Matches Home Page Reference) */}
              <div 
                className={`rounded-full border transition-all duration-300 flex items-center justify-center ${
                  service.isSmall 
                    ? 'w-[2.2vw] h-[2.2vw] max-w-[28px] max-h-[28px] min-w-[18px] min-h-[18px]' 
                    : 'w-[2.6vw] h-[2.6vw] max-w-[32px] max-h-[32px] min-w-[22px] min-h-[22px]'
                } ${
                  isHovered 
                    ? 'border-[#00d4ff] shadow-[0_0_16px_rgba(0,212,255,0.9)] bg-[#00d4ff]/15' 
                    : 'border-white/60 bg-[#000a1f]/35 backdrop-blur-[1px]'
                }`}
              >
                <Icon 
                  className={`transition-colors duration-300 ${
                    service.isSmall 
                      ? 'w-[1.1vw] h-[1.1vw] max-w-[14px] max-h-[14px]' 
                      : 'w-[1.25vw] h-[1.25vw] max-w-[16px] max-h-[16px]'
                  } ${isHovered ? 'text-[#00d4ff]' : 'text-white'}`} 
                />
              </div>

              {/* Caption Label */}
              <div className="flex flex-col items-center mt-1 text-center w-full">
                <span 
                  className={`font-jura text-[0.82vw] xl:text-[11px] leading-tight tracking-wide whitespace-nowrap transition-colors duration-300 drop-shadow-[0_1px_4px_rgba(0,0,0,0.95)] ${
                    isHovered ? 'text-[#00d4ff]' : 'text-white/95'
                  }`}
                >
                  {service.line1}
                </span>
                {service.line2 && (
                  <span 
                    className={`font-jura text-[0.82vw] xl:text-[11px] leading-tight tracking-wide whitespace-nowrap transition-colors duration-300 drop-shadow-[0_1px_4px_rgba(0,0,0,0.95)] ${
                      isHovered ? 'text-[#00d4ff]' : 'text-white/95'
                    }`}
                  >
                    {service.line2}
                  </span>
                )}
                
                {/* Animated Thin Cyan Underline (Left-to-Right Animation) */}
                <div 
                  className={`h-[1.5px] w-full mt-0.5 bg-gradient-to-r from-[#00d4ff] to-transparent transform origin-left transition-all duration-300 shadow-[0_0_8px_#00d4ff] ${
                    isHovered ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                  }`} 
                />
              </div>

              {/* Click Ripple Animation */}
              {activeRipple && (
                <span 
                  key={activeRipple.key}
                  className="eco-ripple"
                  style={{
                    left: activeRipple.x - activeRipple.size / 2,
                    top: activeRipple.y - activeRipple.size / 2,
                    width: activeRipple.size,
                    height: activeRipple.size,
                  }}
                />
              )}
            </button>
          );
        })}

      </div>

      {/* ========================================================================= */}
      {/* ACCESSIBLE SPECIFICATION MODAL DIALOG */}
      {/* ========================================================================= */}
      {selectedService && (
        <div 
          className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-all"
          role="dialog"
          aria-modal="true"
          aria-labelledby="ecosystem-service-modal-title"
          onClick={handleCloseModal}
        >
          <div 
            className="relative w-full max-w-lg glass-modal rounded-2xl border border-[#00d4ff] p-6 md:p-8 shadow-[0_0_60px_rgba(0,212,255,0.4)] overflow-hidden modal-animate-enter"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Decorative Tech Corner Brackets */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#00d4ff]" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#00d4ff]" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#00d4ff]" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#00d4ff]" />

            {/* Accessible Close Button */}
            <button
              onClick={handleCloseModal}
              aria-label="Close dialog"
              className="absolute top-4 right-4 w-8 h-8 rounded-full border border-white/20 bg-[#000a1f] flex items-center justify-center text-white/80 hover:text-white hover:border-[#00d4ff] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Badge Header with Pillar */}
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-[#00d4ff]" />
              <span className="text-xs font-michroma text-[#00d4ff] tracking-widest uppercase font-semibold">
                {selectedService.pillar} • {selectedService.badge}
              </span>
            </div>

            {/* Service Title */}
            <h2 id="ecosystem-service-modal-title" className="text-xl md:text-2xl font-michroma font-bold text-white mb-2">
              {selectedService.title}
            </h2>

            {/* Tagline */}
            <p className="text-xs md:text-sm font-jura text-[#00d4ff] mb-4 tracking-wide font-medium">
              {selectedService.tagline}
            </p>

            {/* Description */}
            <p className="text-xs md:text-sm font-jura text-white/90 leading-relaxed mb-6">
              {selectedService.description}
            </p>

            {/* Core Capabilities */}
            {selectedService.capabilities && (
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2.5">
                  <Layers className="w-3.5 h-3.5 text-[#00d4ff]" />
                  <h4 className="text-xs font-michroma text-white uppercase tracking-wider">
                    Core Capabilities
                  </h4>
                </div>
                <ul className="space-y-2">
                  {selectedService.capabilities.map((cap, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs font-jura text-white/90">
                      <CheckCircle2 className="w-4 h-4 text-[#00d4ff] shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Footer Navigation Buttons */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/15">
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 rounded-lg border border-white/30 text-white/80 hover:text-white text-xs font-jura tracking-wider transition-colors cursor-pointer"
              >
                Close
              </button>
              {selectedService.targetSectionId && (
                <button
                  onClick={() => handleNavigate(selectedService.targetSectionId)}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-[#00d4ff] to-blue-600 hover:brightness-110 text-white text-xs font-michroma tracking-wider transition-all shadow-[0_0_18px_rgba(0,212,255,0.5)] cursor-pointer"
                >
                  Go to Section <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Ecosystem;
