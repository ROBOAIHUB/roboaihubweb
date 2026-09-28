import React, { useState, useEffect, useRef } from 'react';

// Pure Authentic Training, Workshop & Laboratory Photographs
const TRAINING_IMAGES = [
  {
    src: '/gallery/workshop_KV_Chittorgarh.jpg',
    alt: 'Kendriya Vidyalaya STEM & Robotics Training Workshop',
  },
  {
    src: '/gallery/workshop_KV_MountAbu.jpg',
    alt: 'Kendriya Vidyalaya Mount Abu Hands-on Robotics Training',
  },
  {
    src: '/gallery/lab_Rotary_School.jpeg',
    alt: 'Rotary School Robotics Laboratory Training Cohort',
  },
  {
    src: '/gallery/workshop_MBM_FDP_1_.JPG',
    alt: 'MBM University Technical Robotics & AI Training Workshop',
  },
  {
    src: '/gallery/workshop_teacherstraining1.jpeg',
    alt: 'Educators and Teachers Robotics Training Cohort',
  },
  {
    src: '/gallery/lab_Arivu_Institute_1_.jpeg',
    alt: 'Arivu Institute Robotics Hardware Workshop',
  },
  {
    src: '/gallery/workshop_adarshvidyamandir.jpeg',
    alt: 'Adarsh Vidya Mandir STEM & Robotics Training',
  },
  {
    src: '/gallery/workshop_Hanuwant.jpeg',
    alt: 'Hanuwant School Robotics Training Session',
  },
];

const RoboticsImageSlider = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [nextIdx, setNextIdx] = useState(null);
  const [isSliding, setIsSliding] = useState(false);
  const isVisibleRef = useRef(true);

  // Preload all images on mount for instantaneous rendering
  useEffect(() => {
    TRAINING_IMAGES.forEach((img) => {
      const imgObj = new Image();
      imgObj.src = img.src;
    });
  }, []);

  // Seamless Infinite Horizontal Slide Loop (Forward Sliding: 1 -> 2 -> ... -> 8 -> 1 -> 2)
  useEffect(() => {
    const handleVisibility = () => {
      isVisibleRef.current = document.visibilityState === 'visible';
    };
    document.addEventListener('visibilitychange', handleVisibility);

    const interval = setInterval(() => {
      if (!isVisibleRef.current) return;

      const targetNext = (currentIdx + 1) % TRAINING_IMAGES.length;
      setNextIdx(targetNext);

      // Force RAF to guarantee browser applies starting transform (100%) before sliding
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsSliding(true);
        });
      });

      setTimeout(() => {
        setCurrentIdx(targetNext);
        setNextIdx(null);
        setIsSliding(false);
      }, 750);
    }, 3200);

    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [currentIdx]);

  return (
    <div 
      className="absolute z-20 overflow-hidden select-none pointer-events-none"
      style={{
        left: '17.11%',
        top: '51.11%',
        width: '24.53%',
        height: '25.55%',
        borderRadius: 'clamp(14px, 1.4cqw, 22px)',
        backgroundColor: '#000000',
        border: '1px solid rgba(0, 212, 255, 0.45)',
        boxShadow: 'inset 0 0 16px rgba(0, 10, 30, 0.8), inset 0 0 8px rgba(0, 212, 255, 0.3)',
      }}
      aria-label="Robotics Training Photo Screen"
    >
      {/* Current Active Slide */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          transform: isSliding ? 'translateX(-100%)' : 'translateX(0%)',
          transition: isSliding ? 'transform 750ms cubic-bezier(0.25, 1, 0.5, 1)' : 'none',
          willChange: 'transform',
        }}
      >
        <img
          src={TRAINING_IMAGES[currentIdx].src}
          alt={TRAINING_IMAGES[currentIdx].alt}
          className="w-full h-full object-cover object-center"
          style={{
            filter: 'contrast(1.04) brightness(1.02)',
          }}
          loading="eager"
        />
      </div>

      {/* Next Incoming Slide (Always slides in forward from right to left) */}
      {nextIdx !== null && (
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            transform: isSliding ? 'translateX(0%)' : 'translateX(100%)',
            transition: isSliding ? 'transform 750ms cubic-bezier(0.25, 1, 0.5, 1)' : 'none',
            willChange: 'transform',
          }}
        >
          <img
            src={TRAINING_IMAGES[nextIdx].src}
            alt={TRAINING_IMAGES[nextIdx].alt}
            className="w-full h-full object-cover object-center"
            style={{
              filter: 'contrast(1.04) brightness(1.02)',
            }}
            loading="eager"
          />
        </div>
      )}
    </div>
  );
};

export default RoboticsImageSlider;
