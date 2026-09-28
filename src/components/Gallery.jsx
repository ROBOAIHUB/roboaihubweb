import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  Flag, 
  Briefcase, 
  Award, 
  GraduationCap, 
  Presentation, 
  Wrench 
} from 'lucide-react';
import GalleryLightbox from './GalleryLightbox';
import './Gallery.css';

// 13 Verified Photographic Cards Matched to Categories
const GALLERY_ITEMS = [
  // --- EVENTS (3 Slides) ---
  {
    id: 'events-grand-stage',
    category: 'Events',
    title: 'Events',
    date: 'JUN 2024',
    icon: Calendar,
    img: '/gallery/workshop_KV_MAjpg.jpg',
    highResImg: '/gallery/workshop_KV_MAjpg.jpg',
    alt: 'Grand school robotics stage celebration and live student prototype demonstrations',
    objectPosition: 'center 45%',
    subtitle: 'Robotics Innovation Festival & Stage Event',
    description: 'School technology festival and live prototype showcase featuring student robotics teams on the main stage.',
  },
  {
    id: 'events-milestone-2023',
    category: 'Events',
    title: 'Milestones/Events',
    date: 'NOV 2023',
    icon: Award,
    img: '/gallery/news_poster_unveiling.jpg',
    highResImg: '/gallery/news_poster_unveiling.jpg',
    alt: 'University faculty and students unveiling robotics innovation posters and milestones',
    objectPosition: 'center center',
    subtitle: 'University Innovation Event & Poster Showcase',
    description: 'MBM University robotics showcase, patent unveilings, and student technological excellence recognition.',
  },
  {
    id: 'events-kv-exhibition-2025',
    category: 'Events',
    title: 'Events',
    date: '2025',
    icon: Calendar,
    img: '/gallery/workshop_KV_Chittorgarh.jpg',
    highResImg: '/gallery/workshop_KV_Chittorgarh.jpg',
    alt: 'Students and faculty standing together at the Kendriya Vidyalaya science exhibition celebration',
    objectPosition: 'center 45%',
    subtitle: 'Kendriya Vidyalaya Robotics Exhibition',
    description: 'School robotics festival and student competition showcase demonstrating practical STEM projects.',
  },

  // --- ROBOAI HUB JOURNEY (3 Slides) ---
  {
    id: 'journey-arivu-lab-2022',
    category: 'ROBOAI HUB Journey',
    title: 'ROBOAI HUB Journey',
    date: 'DEC 2022',
    icon: Flag,
    img: '/gallery/lab_Arivu_Institute_1_.jpeg',
    highResImg: '/gallery/lab_Arivu_Institute_1_.jpeg',
    alt: 'ROBOAI HUB robotics lab with humanoid robot, 3D printers, and robotic arm workbenches at Arivu Institute',
    objectPosition: 'center center',
    subtitle: 'State-of-the-Art Robotics Lab Inauguration',
    description: 'Modern robotics laboratory launch at Arivu Institute featuring dedicated testing arenas, humanoid models, and robotic arms.',
  },
  {
    id: 'journey-rotary-lab-2023',
    category: 'ROBOAI HUB Journey',
    title: 'ROBOAI HUB Journey',
    date: 'JUN 2023',
    icon: Flag,
    img: '/gallery/lab_Rotary_School.jpeg',
    highResImg: '/gallery/lab_Rotary_School.jpeg',
    alt: 'Faculty and engineering team gathered at the newly inaugurated Rotary School Robotics Lab',
    objectPosition: 'center 35%',
    subtitle: 'Rotary Robotics Center Inauguration',
    description: 'Inaugural celebration of institutional robotics lab setup and team deployment for school robotics training.',
  },
  {
    id: 'journey-robodogs-2024',
    category: 'ROBOAI HUB Journey',
    title: 'ROBOAI HUB Journey',
    date: '2024',
    icon: Flag,
    img: '/gallery/lab_Robodogs.jpeg',
    highResImg: '/gallery/lab_Robodogs.jpeg',
    alt: 'Autonomous quadruped robotic dogs on the green test arena field',
    objectPosition: 'center center',
    subtitle: 'Autonomous Quadruped Arena Setup',
    description: 'Deployment of specialized quadruped robotic testing arena for autonomous navigation, kinematics, and gait control.',
  },

  // --- WORKSHOPS (3 Slides) ---
  {
    id: 'workshops-kv-jhalawar-2022',
    category: 'Workshops',
    title: 'Workshops',
    date: 'MAR 2022',
    icon: Wrench,
    img: '/gallery/workshop_KV_Jhalawar_1_.JPG',
    highResImg: '/gallery/workshop_KV_Jhalawar_1_.JPG',
    alt: 'Classroom full of students attending interactive robotics workshop at KV Jhalawar',
    objectPosition: 'center 40%',
    subtitle: 'Kendriya Vidyalaya Robotics Workshop',
    description: 'Interactive robotics orientation, sensor kit fundamentals, and hands-on microcontroller workshop for students.',
  },
  {
    id: 'workshops-atlas-2023',
    category: 'Workshops',
    title: 'Workshops',
    date: 'OCT 2023',
    icon: Wrench,
    img: '/gallery/workshop_atlas.jpeg',
    highResImg: '/gallery/workshop_atlas.jpeg',
    alt: 'Instructor guiding school students through hands-on circuit wiring and robotics assembly at Atlas School',
    objectPosition: 'center 30%',
    subtitle: 'Microcontroller & Circuit Workshop',
    description: 'Hands-on practical training with electronic circuits, motor drivers, sensor wiring, and introductory robot chassis assembly.',
  },
  {
    id: 'workshops-hanuwant-2024',
    category: 'Workshops',
    title: 'Workshops',
    date: '2024',
    icon: Wrench,
    img: '/gallery/workshop_Hanuwant.jpeg',
    highResImg: '/gallery/workshop_Hanuwant.jpeg',
    alt: 'Students working on computer monitors and programming robotic rovers at Hanuwant School lab',
    objectPosition: 'center 35%',
    subtitle: 'Autonomous Rover Programming Workshop',
    description: 'Computer lab workshop on Arduino coding, algorithm design, and sensor integration for obstacle-avoiding rovers.',
  },

  // --- SEMINARS (2 Slides) ---
  {
    id: 'seminars-mbm-fdp-2023',
    category: 'Seminars',
    title: 'Seminars',
    date: 'JUL 2023',
    icon: Presentation,
    img: '/gallery/workshop_MBM_FDP_1_.JPG',
    highResImg: '/gallery/workshop_MBM_FDP_1_.JPG',
    alt: 'Engineering professors and faculty attending AI and robotics presentation at MBM University FDP',
    objectPosition: 'center 45%',
    subtitle: 'Faculty Development Program & Keynote',
    description: 'Advanced technical seminar on AI algorithms, robotic vision, machine learning frameworks, and embedded deep learning.',
  },
  {
    id: 'seminars-ttlrdc-2026',
    category: 'Seminars',
    title: 'Seminars',
    date: '2026',
    icon: Briefcase,
    img: '/gallery/workshop_TTCLRDC.JPG',
    highResImg: '/gallery/workshop_TTCLRDC.JPG',
    alt: 'Educators and researchers gathered in seminar hall for technical robotics presentation at TTCLRDC',
    objectPosition: 'center 40%',
    subtitle: 'National Technical Capacity & AI Seminar',
    description: 'Industry panel and educator symposium discussing deep-tech curriculum integration and automation in education.',
  },

  // --- TRAINING (2 Slides) ---
  {
    id: 'training-teachers-2024',
    category: 'Training',
    title: 'Training',
    date: '2024',
    icon: GraduationCap,
    img: '/gallery/workshop_teacherstraining1.jpeg',
    highResImg: '/gallery/workshop_teacherstraining1.jpeg',
    alt: 'Teachers and trainers participating in a robotics educators training workshop session',
    objectPosition: 'center 45%',
    subtitle: 'Robotics Master Educator Training',
    description: 'Specialized training program equipping teachers with STEM curriculum, lab administration, and hands-on robotics instruction methodologies.',
  },
  {
    id: 'training-rotary-lab-2024',
    category: 'Training',
    title: 'Training',
    date: '2024',
    icon: GraduationCap,
    img: '/gallery/lab_Rotary_Robotics_Lab.jpg',
    highResImg: '/gallery/lab_Rotary_Robotics_Lab.jpg',
    alt: 'Students building and programming robots during lab training session at Rotary Robotics Lab',
    objectPosition: 'center 35%',
    subtitle: 'Hands-on Student Lab Training',
    description: 'Students engaged in practical robotics hardware assembly, circuit breadboarding, and 3D printing equipment training.',
  },
];

// Preserved Category Navigation Pill Names
const CATEGORIES = [
  'Events',
  'ROBOAI HUB Journey',
  'Workshops',
  'Seminars',
  'Training',
];

const CATEGORY_ICONS = {
  'Events': Calendar,
  'ROBOAI HUB Journey': Flag,
  'Workshops': Wrench,
  'Seminars': Presentation,
  'Training': GraduationCap,
};

// Map each category to its first slide index
const CATEGORY_TO_SLIDE_INDEX = {
  'Events': 0,               // First Events slide
  'ROBOAI HUB Journey': 3,   // First Journey slide
  'Workshops': 6,            // First Workshops slide
  'Seminars': 9,             // First Seminars slide
  'Training': 11,            // First Training slide
};

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const [selectedModalItem, setSelectedModalItem] = useState(null);

  // Touch swipe support
  const touchStartXRef = useRef(0);
  const touchEndXRef = useRef(0);

  const totalSlides = GALLERY_ITEMS.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  }, [totalSlides]);

  const goToSlide = useCallback((index) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentIndex(index);
    }
  }, [totalSlides]);

  // Robust Automatic Loop: Starts automatically on mount, ~2s hold, ~800ms transition time, loops infinitely
  useEffect(() => {
    // Only pause while modal lightbox is active or user is actively hovering on a card
    if (selectedModalItem || hoveredCardId !== null || totalSlides <= 1) return;

    // Respect reduced-motion preferences
    const prefersReducedMotion = typeof window !== 'undefined' && 
      window.matchMedia && 
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Handle document visibility change (pause when tab is backgrounded, resume when active)
    let isTabVisible = typeof document !== 'undefined' ? !document.hidden : true;
    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const interval = setInterval(() => {
      if (isTabVisible) {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
      }
    }, 2800); // 2000ms hold + 800ms transition

    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [currentIndex, hoveredCardId, selectedModalItem, totalSlides]);

  // Keyboard navigation
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      nextSlide();
    }
  }, [prevSlide, nextSlide]);

  // Touch Swipe Handlers
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diffX = touchStartXRef.current - touchEndXRef.current;
    if (Math.abs(diffX) > 40) {
      if (diffX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartXRef.current = 0;
    touchEndXRef.current = 0;
  };

  // Category Selection: Bring corresponding slide into center frame without hiding others
  const handleCategorySelect = (cat) => {
    const targetIdx = CATEGORY_TO_SLIDE_INDEX[cat];
    if (targetIdx !== undefined) {
      goToSlide(targetIdx);
    }
  };

  // Current active category based on the centered slide
  const activeCategory = GALLERY_ITEMS[currentIndex]?.category;

  return (
    <section 
      className="gallery-section-wrapper"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-label="RoboAI Hub Gallery"
    >
      {/* Background Atmosphere */}
      <div className="gallery-bg-image" />

      {/* ========================================================================= */}
      {/* 1. UPPER-LEFT GALLERY HEADING & CYAN UNDERLINE                           */}
      {/* ========================================================================= */}
      <div className="gallery-header-block">
        <h1 className="gallery-heading-title">
          Gallery
        </h1>
        <div className="gallery-heading-rule">
          <span className="gallery-heading-rule-dot" />
          <div className="gallery-heading-rule-line" />
          <span className="gallery-heading-rule-dot" />
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. CATEGORY NAVIGATION PILL BAR (ROW BELOW HEADING, FULLY TRANSPARENT)   */}
      {/* ========================================================================= */}
      <div className="gallery-nav-container">
        <div className="gallery-category-pill" role="tablist" aria-label="Gallery categories">
          {CATEGORIES.map((cat, idx) => {
            const Icon = CATEGORY_ICONS[cat] || Calendar;
            const isActive = activeCategory === cat;

            return (
              <React.Fragment key={cat}>
                <button
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => handleCategorySelect(cat)}
                  className={`gallery-cat-tab-btn ${isActive ? 'is-active' : ''}`}
                  title={`Navigate to ${cat}`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{cat}</span>
                </button>
                {idx < CATEGORIES.length - 1 && <span className="gallery-cat-divider" />}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. BALANCED 3:4 PORTRAIT CAROUSEL STAGE                                   */}
      {/* ========================================================================= */}
      <div 
        className="gallery-carousel-viewport"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Left Edge Floating Arrow (Subtle Fade on Hover) */}
        <button
          type="button"
          onClick={prevSlide}
          className="gallery-edge-arrow-btn is-left"
          aria-label="Previous slide"
          title="Previous slide (Left Arrow)"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="gallery-cards-track">
          {GALLERY_ITEMS.map((item, idx) => {
            // Calculate shortest signed circular offset
            let offset = (idx - currentIndex) % totalSlides;
            if (offset > totalSlides / 2) offset -= totalSlides;
            if (offset < -totalSlides / 2) offset += totalSlides;

            const absOffset = Math.abs(offset);
            const isCenter = offset === 0;
            const isLeftNeighbor = offset < 0;
            const isRightNeighbor = offset > 0;

            // Geometry and scale values (Side cards at 84% and 70% scale)
            let scale = 1.0;
            let opacity = 1.0;
            let zIndex = 20;
            let translateZ = 0;
            let rotateY = 0;
            let translateXPercent = 0;
            let isVisible = true;

            if (absOffset === 0) {
              scale = 1.0;
              opacity = 1.0;
              zIndex = 20;
              translateZ = 0;
              rotateY = 0;
              translateXPercent = 0;
              isVisible = true;
            } else if (absOffset === 1) {
              scale = 0.84;
              opacity = 0.85;
              zIndex = 15;
              translateZ = -30;
              rotateY = -Math.sign(offset) * 5;
              translateXPercent = Math.sign(offset) * 105;
              isVisible = true;
            } else if (absOffset === 2) {
              scale = 0.70;
              opacity = 0.55;
              zIndex = 10;
              translateZ = -65;
              rotateY = -Math.sign(offset) * 9;
              translateXPercent = Math.sign(offset) * 196;
              isVisible = true;
            } else if (absOffset === 3) {
              scale = 0.58;
              opacity = 0;
              zIndex = 2;
              translateZ = -100;
              rotateY = -Math.sign(offset) * 13;
              translateXPercent = Math.sign(offset) * 275;
              isVisible = true; // Still visible so it smoothly fades between 0 and 0.55 on the same side
            } else {
              scale = 0.45;
              opacity = 0;
              zIndex = 0;
              translateZ = -140;
              rotateY = -Math.sign(offset) * 15;
              translateXPercent = Math.sign(offset) * 340;
              isVisible = false; // Hidden in the rear to flip silently without flight across the screen
            }

            const Icon = item.icon || Calendar;

            return (
              <div
                key={item.id}
                className={`gallery-card-wrapper ${isCenter ? 'is-center' : ''} ${
                  isLeftNeighbor ? 'is-left-neighbor' : (isRightNeighbor ? 'is-right-neighbor' : '')
                }`}
                style={{
                  transform: `translateX(${translateXPercent}%) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                  opacity: opacity,
                  zIndex: zIndex,
                  visibility: isVisible ? 'visible' : 'hidden',
                  display: isVisible ? 'block' : 'none',
                  pointerEvents: absOffset <= 2 ? 'auto' : 'none',
                }}
                onMouseEnter={() => setHoveredCardId(item.id)}
                onMouseLeave={() => setHoveredCardId(null)}
                onClick={() => {
                  if (!isCenter) {
                    goToSlide(idx);
                  } else {
                    setSelectedModalItem(item);
                  }
                }}
                role="button"
                tabIndex={absOffset <= 2 ? 0 : -1}
                aria-label={`${item.title} (${item.date}): ${item.subtitle || ''}`}
              >
                {/* Inner Surface Wrapper (Separates Hover 4-Side Glow & 5px Nudge from Movement) */}
                <div className="gallery-card-surface">
                  
                  {/* Card Header (Category Tag & Icon) */}
                  <div className="gallery-card-top">
                    <span className="gallery-card-tag">
                      <Icon className="gallery-card-tag-icon" />
                      <span>{item.title}</span>
                    </span>
                  </div>

                  {/* Card Center Frame (3:4 Real Photo - Unobstructed, Natural Colors) */}
                  <div className="gallery-card-body">
                    <img 
                      src={item.img} 
                      alt={item.alt || item.title} 
                      className="gallery-card-img"
                      style={{
                        objectPosition: item.objectPosition || 'center center'
                      }}
                      loading="lazy"
                    />
                  </div>

                  {/* Card Compact Footer (Date in Michroma font) */}
                  <div className="gallery-card-bottom">
                    <span className="gallery-card-date">
                      {item.date}
                    </span>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Right Edge Floating Arrow (Subtle Fade on Hover) */}
        <button
          type="button"
          onClick={nextSlide}
          className="gallery-edge-arrow-btn is-right"
          aria-label="Next slide"
          title="Next slide (Right Arrow)"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* ========================================================================= */}
      {/* 4. BOTTOM CONTROLS (13 GLOWING PAGINATION DOTS)                           */}
      {/* ========================================================================= */}
      <div className="gallery-controls-bar">
        <div className="gallery-ctrl-dots-group" role="tablist" aria-label="Slide indicators">
          {GALLERY_ITEMS.map((dotItem, dotIdx) => {
            const isActive = dotIdx === currentIndex;
            return (
              <button
                key={dotItem.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Go to slide ${dotIdx + 1} (${dotItem.title})`}
                onClick={() => goToSlide(dotIdx)}
                className={`gallery-ctrl-dot-btn ${isActive ? 'is-active' : ''}`}
              />
            );
          })}
        </div>
      </div>

      {/* Detail Lightbox Modal on Card Click */}
      {selectedModalItem && (
        <GalleryLightbox
          item={selectedModalItem}
          onClose={() => setSelectedModalItem(null)}
          onPrev={() => {
            const curIdx = GALLERY_ITEMS.findIndex((x) => x.id === selectedModalItem.id);
            if (curIdx > 0) setSelectedModalItem(GALLERY_ITEMS[curIdx - 1]);
          }}
          onNext={() => {
            const curIdx = GALLERY_ITEMS.findIndex((x) => x.id === selectedModalItem.id);
            if (curIdx < GALLERY_ITEMS.length - 1) setSelectedModalItem(GALLERY_ITEMS[curIdx + 1]);
          }}
          hasPrev={GALLERY_ITEMS.findIndex((x) => x.id === selectedModalItem.id) > 0}
          hasNext={GALLERY_ITEMS.findIndex((x) => x.id === selectedModalItem.id) < GALLERY_ITEMS.length - 1}
        />
      )}

    </section>
  );
};

export default Gallery;
