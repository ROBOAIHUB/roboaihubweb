import React, { useState, useRef } from 'react';
import { Bot, Brain } from 'lucide-react';
import ServiceDetailsModal from './ServiceDetailsModal';
import './Services.css';

// 4 Service Items with 1600 × 900 Reference Bounding Boxes & Complete Modal Content
const SERVICES_DATA = [
  // 1. ROBOTICS & AI LABS (Panel: 615, 175, 290, 270 | Center: 760, 373)
  {
    id: 'robotic-ai-labs',
    title: 'Robotics & AI Labs',
    eyebrow: 'ROBOAI SERVICES · LAB SETUP',
    subtitle: 'Practical learning spaces for robotics, electronics, and artificial intelligence.',
    overview: 'Set up a hands-on learning environment where students can explore electronics, build robots, program devices, and experiment with AI.',
    line1: '1. ROBOTIC',
    line2: 'OR AI LABs',
    iconSrc: '/service_icon_robotic_arm.png',
    iconAlt: '1. ROBOTIC OR AI LABs',
    left: '38.4375%',  // 615 / 1600
    top: '19.4444%',   // 175 / 900
    width: '18.1250%',  // 290 / 1600
    height: '30.0000%', // 270 / 900
    panelClass: 'panel-1-robotics',
    demoContent: true,
    modulesHeading: 'Suggested service modules',
    modules: [
      { num: '01', title: 'Lab Planning', desc: 'Learning goals, workspace layout, and equipment planning.' },
      { num: '02', title: 'Electronics Workstations', desc: 'Breadboards, components, measurement tools, and safe working practices.' },
      { num: '03', title: 'Robotics Kits', desc: 'Controllers, sensors, motors, and introductory robot-building activities.' },
      { num: '04', title: 'Programming Setup', desc: 'Arduino tools, Scratch, and app-building environments.' },
      { num: '05', title: 'AI Learning Stations', desc: 'Introductory machine learning and computer vision demonstrations.' },
      { num: '06', title: 'Educator Orientation', desc: 'Getting started with equipment and guided activities.' },
      { num: '07', title: 'Project Resources', desc: 'Sample exercises, project ideas, and maintenance checklists.' }
    ],
    suitableFor: 'Schools, colleges, and training centres.',
    footerNote: 'Equipment, installation scope, and support are subject to consultation.',
    actionLabel: 'Discuss Your Lab',
    targetSectionId: 'contact'
  },

  // 2. AUTOMATION SOLUTIONS (Panel: 1035, 306, 275, 220 | Center: 1173, 468)
  {
    id: 'automation-solutions',
    title: 'Automation Solutions',
    eyebrow: 'ROBOAI SERVICES · AUTOMATION',
    subtitle: 'Explore practical automation for repetitive tasks and monitoring.',
    overview: 'Identify opportunities to use sensors, controllers, and connected systems to simplify workflows and monitor equipment.',
    line1: '2. Automation',
    line2: 'Solutions',
    iconSrc: '/service_icon_automation.png',
    iconAlt: '2. Automation Solutions',
    left: '64.6875%',  // 1035 / 1600
    top: '34.0000%',   // 306 / 900
    width: '17.1875%',  // 275 / 1600
    height: '24.4444%', // 220 / 900
    panelClass: 'panel-2-automation',
    demoContent: true,
    modulesHeading: 'Suggested service modules',
    modules: [
      { num: '01', title: 'Requirement Assessment', desc: 'Review the task, workflow, and desired outcome.' },
      { num: '02', title: 'Sensor-Based Monitoring', desc: 'Explore measurements such as distance, temperature, level, and object detection.' },
      { num: '03', title: 'Motor & Actuator Control', desc: 'Develop suitable control concepts for movement and switching.' },
      { num: '04', title: 'IoT Monitoring', desc: 'Demonstrate connected status updates and dashboards.' },
      { num: '05', title: 'Vision-Based Prototypes', desc: 'Explore camera-based counting or inspection concepts.' },
      { num: '06', title: 'Prototype Development', desc: 'Build and test a proof of concept.' },
      { num: '07', title: 'Integration Planning', desc: 'Document operation, limitations, and next steps.' }
    ],
    suitableFor: 'Educational demonstrations, laboratories, and small-scale automation projects.',
    footerNote: 'Final specifications and feasibility depend on the application.',
    actionLabel: 'Discuss Your Project',
    targetSectionId: 'contact'
  },

  // 3. MENTORSHIP PROGRAMS (Panel: 683, 515, 276, 249 | Center: 821, 707)
  {
    id: 'mentorship-programs',
    title: 'Mentorship Programs',
    eyebrow: 'ROBOAI LEARNING · GUIDED TRAINING',
    line1: '3. Mentorship',
    line2: 'Course',
    iconSrc: '/service_icon_mentorship.png',
    iconAlt: '3. Mentorship Course',
    left: '42.6875%',  // 683 / 1600
    top: '57.2222%',   // 515 / 900
    width: '17.2500%',  // 276 / 1600
    height: '27.6667%', // 249 / 900
    panelClass: 'panel-3-mentorship',
    demoContent: false,
    hasTabs: true,
    actionLabel: 'Book Demo Now',
    targetSectionId: 'contact',
    footerNote: 'Direct practitioner reviews with hardware kits and dedicated lab mentoring.',
    tabs: [
      {
        id: 'robotics-engineering',
        label: 'Robotics Engineering',
        icon: Bot,
        description: 'Master physical computing, mechanics, and hardware design.',
        highlights: [
          '25+ Hands-on Projects',
          'Real Hardware',
          'Industry Ready'
        ],
        sectionHeading: 'Robotics Curriculum',
        modules: [
          'Basic Electronics',
          'PCB Designing',
          'Arduino Programming',
          'Arduino Devices & Sensors',
          'Scratch Programming',
          'MIT App Inventor',
          'IoT and AI',
          'CAD & 3D Printing',
          'Mechanical / Physical Concepts',
          'Final Project'
        ]
      },
      {
        id: 'artificial-intelligence',
        label: 'Artificial Intelligence',
        icon: Brain,
        description: 'Dive deep into algorithms, neural networks, and software intelligence.',
        sectionHeading: 'Learning Areas',
        modules: [
          'Machine Learning',
          'Computer Vision',
          'Generative AI & Deep Learning'
        ]
      }
    ]
  },

  // 4. WEEKEND BOOTCAMPS (Panel: 1117, 576, 257, 211 | Center: 1246, 735)
  {
    id: 'weekend-bootcamps',
    title: 'Weekend Bootcamps',
    eyebrow: 'ROBOAI LEARNING · WEEKEND PROGRAMS',
    description: 'Intensive short-term learning designed for busy schedules.',
    line1: '4. Weekend',
    line2: 'classes',
    iconSrc: '/service_icon_weekend.png',
    iconAlt: '4. Weekend classes',
    left: '69.8125%',  // 1117 / 1600
    top: '64.0000%',   // 576 / 900
    width: '16.0625%',  // 257 / 1600
    height: '23.4444%', // 211 / 900
    panelClass: 'panel-4-weekend',
    demoContent: false,
    highlights: [
      'Crash Courses',
      'Holiday Workshops',
      'Rapid Skill Development'
    ],
    sectionHeading: 'Program Includes',
    modules: [
      'Intensive Crash Courses',
      'Holiday Special Workshops',
      'Rapid Skill Development',
      'Hands-on Mini Projects',
      'Career Guidance & Mentorship'
    ],
    actionLabel: 'Book Demo Now',
    footerNote: 'Weekend batches scheduled with flexible Saturday & Sunday lab access.',
    targetSectionId: 'contact'
  }
];

// ============================================================================
// Main Services Component
// ============================================================================
const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);
  const videoRef = useRef(null);
  const lastActiveButtonRef = useRef(null);

  // Open modal handler
  const handleOpenModal = (service, event) => {
    if (event?.currentTarget) {
      lastActiveButtonRef.current = event.currentTarget;
    }
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setSelectedService(service);
  };

  // Close modal handler
  const handleCloseModal = () => {
    setSelectedService(null);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
    if (lastActiveButtonRef.current) {
      setTimeout(() => {
        lastActiveButtonRef.current?.focus();
      }, 50);
    }
  };

  // Modal Action handler (redirects to Contact/Enquiry section)
  const handleModalAction = (service) => {
    handleCloseModal();
    const targetSection = service.targetSectionId || 'contact';
    const element = document.getElementById(targetSection);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="w-full h-screen relative overflow-hidden bg-[#000a1f] select-none flex items-center justify-center services-scene-wrapper"
      aria-label="ROBOAI HUB Services"
    >
      {/* Master 16:9 Design Canvas (Unified 1600 × 900 Coordinate System) */}
      <div className="services-scene-canvas">
        
        {/* ========================================================================= */}
        {/* 1. ANIMATED BACKGROUND VIDEO (RoboAI_Services_Fixed_Empty_Panels.mp4)     */}
        {/* ========================================================================= */}
        <video
          ref={videoRef}
          src="/RoboAI_Services_Fixed_Empty_Panels.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-fill pointer-events-none select-none z-0"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'fill',
            filter: 'brightness(1.24) contrast(1.08) saturate(0.96)',
          }}
        />

        {/* Ambient Top Lighting Gradient matching Ecosystem & Training */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85vw] h-[250px] bg-gradient-to-b from-[#00d4ff]/15 via-transparent to-transparent pointer-events-none z-[1]" />

        {/* ========================================================================= */}
        {/* 2. UPPER-LEFT SERVICES HEADING & CYAN UNDERLINE                           */}
        {/* ========================================================================= */}
        <div 
          className="absolute z-20 pointer-events-auto flex flex-col items-start services-top-header-block"
          style={{
            left: '3.44%',
            top: '14.0%',
          }}
        >
          {/* Master SERVICES Heading (Matched to ECOSYSTEM font: Michroma Bold) */}
          <h1 className="services-heading-text font-michroma">
            Services
          </h1>
          
          {/* Full-width Cyan Heading Line with Glowing Endpoint Dots */}
          <div className="relative flex items-center services-heading-line-container">
            <span className="services-heading-dot" />
            <div className="services-heading-line" />
            <span className="services-heading-dot" />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. FOUR STAGGERED HOLOGRAPHIC PANELS (Holo Icons, Jura Labels & Hit Areas) */}
        {/* ========================================================================= */}
        {SERVICES_DATA.map((item) => {
          const isHovered = hoveredId === item.id;

          return (
            <div
              key={item.id}
              className={`services-panel-card-anchor ${item.panelClass}`}
              style={{
                position: 'absolute',
                left: item.left,
                top: item.top,
                width: item.width,
                height: item.height,
                zIndex: 25,
              }}
            >
              {/* Interactive Clickable Holographic Card (No panel hover background) */}
              <button
                type="button"
                className="services-holo-panel-card group"
                onClick={(e) => handleOpenModal(item, e)}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                onFocus={() => setHoveredId(item.id)}
                onBlur={() => setHoveredId(null)}
                aria-label={`View ${item.title} details`}
                title={`Click to view ${item.title} details`}
              >
                {/* 1. Holographic Isolated Reference Icon */}
                <div className={`services-icon-container icon-container-${item.id}`}>
                  <img 
                    src={item.iconSrc} 
                    alt={item.iconAlt} 
                    className={`services-panel-icon-img icon-img-${item.id}`}
                    draggable={false}
                  />
                </div>

                {/* 2. Service Label (Exact 2-Line Jura Typography with Left Padding) */}
                <div className={`services-panel-label-container label-container-${item.id}`}>
                  <span className={`services-label-text ${isHovered ? 'is-active' : ''}`}>
                    {item.line1}
                  </span>
                  {item.line2 && (
                    <span className={`services-label-text ${isHovered ? 'is-active' : ''}`}>
                      {item.line2}
                    </span>
                  )}

                  {/* 3. Short Cyan Underline with End Dots (Hover Effect matches Ecosystem) */}
                  <div className={`services-panel-underline ${isHovered ? 'is-active' : ''}`}>
                    <span className="dot" />
                    <span className="line" />
                    <span className="dot" />
                  </div>
                </div>
              </button>
            </div>
          );
        })}

      </div>

      {/* ========================================================================= */}
      {/* 4. REUSABLE SERVICE DETAILS MODAL (Robotics, Automation, Mentorship, etc.) */}
      {/* ========================================================================= */}
      {selectedService && (
        <ServiceDetailsModal 
          service={selectedService}
          onClose={handleCloseModal}
          onAction={handleModalAction}
        />
      )}

    </div>
  );
};

export default Services;
