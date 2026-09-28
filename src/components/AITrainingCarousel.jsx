import React, { useState, useEffect, useRef } from 'react';
import { Brain, Eye, Sparkles, MessageSquare } from 'lucide-react';

export const AI_COURSES = [
  {
    id: 'ml-training',
    title: 'ML TRAINING',
    displayTitle: 'ML Training',
    tagline: 'Machine Learning Algorithms & Predictive Intelligence',
    badge: 'CORE AI FOUNDATION',
    icon: Brain,
    frontFontSize: 'clamp(14px, 2.0cqw, 32px)',
    sideFontSize: 'clamp(8.5px, 0.82cqw, 13px)',
    description: 'Master supervised and unsupervised machine learning architectures, statistical modelling, feature engineering, and model deployment for edge and cloud systems.',
    duration: '12 Weeks (Intensive)',
    level: 'Intermediate to Advanced',
    prerequisites: 'Python basics, Linear Algebra, and Calculus',
    topics: [
      'Supervised & Unsupervised Learning algorithms',
      'Scikit-learn, XGBoost, and model evaluation metrics',
      'Feature engineering, cross-validation, and hyperparameter tuning',
      'Production API deployment with FastAPI and Docker'
    ]
  },
  {
    id: 'computer-vision',
    title: 'Computer Vision',
    displayTitle: 'Computer Vision',
    tagline: 'High-Precision Optical Perception & Real-Time Tracking',
    badge: 'SPATIAL INTELLIGENCE',
    icon: Eye,
    frontFontSize: 'clamp(12px, 1.75cqw, 28px)',
    sideFontSize: 'clamp(8.5px, 0.82cqw, 13px)',
    description: 'Build state-of-the-art visual perception pipelines for autonomous mobile robots, automated optical inspection, and robotic manipulation.',
    duration: '10 Weeks',
    level: 'Intermediate',
    prerequisites: 'Python programming and basic linear algebra',
    topics: [
      'OpenCV image processing, filtering, and feature extraction',
      'Real-time object detection and tracking with YOLOv8 & RT-DETR',
      'Semantic and instance segmentation (Mask R-CNN, SAM)',
      'Stereo vision, 3D point cloud reconstruction, and camera calibration'
    ]
  },
  {
    id: 'deep-learning',
    title: 'Deep Learning',
    displayTitle: 'Deep Learning',
    tagline: 'Neural Networks, PyTorch & GPU Hardware Acceleration',
    badge: 'ADVANCED RESEARCH',
    icon: Sparkles,
    frontFontSize: 'clamp(14px, 2.0cqw, 32px)',
    sideFontSize: 'clamp(8.5px, 0.82cqw, 13px)',
    description: 'Deep dive into modern neural network architectures, custom loss functions, transfer learning, and TensorRT optimization on embedded Nvidia Jetson hardware.',
    duration: '14 Weeks',
    level: 'Advanced',
    prerequisites: 'Python, ML fundamentals, and PyTorch basics',
    topics: [
      'Deep Feedforward, Convolutional (CNN), and Recurrent (RNN) nets',
      'PyTorch deep learning framework from scratch to production',
      'Custom loss functions, regularization, and gradient clipping',
      'TensorRT and ONNX inference acceleration on Edge GPUs'
    ]
  },
  {
    id: 'nlp',
    title: 'NLP',
    displayTitle: 'Natural Language Processing',
    fullTitle: 'Natural Language Processing',
    tagline: 'Large Language Models & Speech Recognition for Robotics',
    badge: 'CONVERSATIONAL AGENTS',
    icon: MessageSquare,
    frontFontSize: 'clamp(14px, 2.0cqw, 32px)', // 32px front font size strictly calibrated
    sideFontSize: 'clamp(8.5px, 0.82cqw, 13px)',
    description: 'Engineer conversational AI agents, LLM pipelines, RAG architectures, and voice command interfaces for interactive humanoid and service robots.',
    duration: '10 Weeks',
    level: 'Intermediate to Advanced',
    prerequisites: 'Python programming and deep learning basics',
    topics: [
      'Transformer architectures, self-attention, and BERT / GPT embeddings',
      'Retrieval-Augmented Generation (RAG) with Vector Databases',
      'Whisper speech recognition and text-to-speech voice synthesis',
      'Voice-command intent parsing for robotic execution'
    ]
  }
];

// Orbit slots matched to reference coordinates (~330 x 95px at 1600x900)
const ORBIT_SLOTS = [
  // Slot 0: FRONT FOCUS POSITION (Center: 79.1%, 52.8%, Width: 20.6%, Height: 10.55% ~ 330 x 95px)
  {
    left: '79.1%',
    top: '52.8%',
    width: '20.625%',
    height: '10.55%',
    scale: 1.0,
    opacity: 1.0,
    zIndex: 35,
    isFront: true,
  },
  // Slot 1: UPPER LEFT REAR (Center: 72.8%, 26.5%)
  {
    left: '72.8%',
    top: '26.5%',
    width: '13.0%',
    height: '5.8%',
    scale: 0.90,
    opacity: 0.88,
    zIndex: 20,
    isFront: false,
  },
  // Slot 2: UPPER RIGHT REAR (Center: 85.5%, 32.5%)
  {
    left: '85.5%',
    top: '32.5%',
    width: '13.0%',
    height: '5.8%',
    scale: 0.90,
    opacity: 0.88,
    zIndex: 20,
    isFront: false,
  },
  // Slot 3: FAR RIGHT REAR (Center: 90.8%, 42.0%)
  {
    left: '90.8%',
    top: '42.0%',
    width: '10.5%',
    height: '5.8%',
    scale: 0.90,
    opacity: 0.88,
    zIndex: 20,
    isFront: false,
  }
];

const AITrainingCarousel = ({ onSelectCourse, isModalOpen }) => {
  const [activeStep, setActiveStep] = useState(0); // 0 (ML) -> 1 (CV) -> 2 (DL) -> 3 (NLP)
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);
  const isVisibleRef = useRef(true);

  // Rotation cycle: Holds for 2.5s + 1.0s smooth transition = 3.5s loop
  useEffect(() => {
    const handleVisibilityChange = () => {
      isVisibleRef.current = document.visibilityState === 'visible';
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const startTimer = () => {
      timerRef.current = setInterval(() => {
        if (!isPaused && !isModalOpen && isVisibleRef.current) {
          setActiveStep((prev) => (prev + 1) % AI_COURSES.length);
        }
      }, 3500);
    };

    startTimer();

    return () => {
      clearInterval(timerRef.current);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isPaused, isModalOpen]);

  const handleCourseClick = (index, course) => {
    setActiveStep(index);
    if (onSelectCourse) {
      onSelectCourse(course);
    }
  };

  return (
    <div 
      className="absolute inset-0 pointer-events-none z-25 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="AI Training Holographic 3D Carousel"
    >
      {/* Interactive Orbiting Panels */}
      {AI_COURSES.map((course, index) => {
        const slotIndex = (index - activeStep + AI_COURSES.length) % AI_COURSES.length;
        const slot = ORBIT_SLOTS[slotIndex];
        const isFront = slot.isFront;
        const Icon = course.icon;

        return (
          <button
            key={course.id}
            type="button"
            onClick={() => handleCourseClick(index, course)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
            aria-label={`${course.displayTitle} training module. Click to view full curriculum.`}
            className={`absolute flex items-center justify-center pointer-events-auto transition-all duration-1000 ease-in-out cursor-pointer select-none focus-visible:outline-none ${
              isFront 
                ? 'group rounded-2xl border-[1.8px] border-[#00d4ff] bg-[#001438]/45 backdrop-blur-[2px] shadow-[0_0_35px_rgba(0,212,255,0.75),inset_0_0_20px_rgba(0,212,255,0.15)] hover:border-white hover:shadow-[0_0_50px_rgba(0,212,255,0.95)]' 
                : 'rounded-xl border border-[#00d4ff]/40 bg-[#00102e]/30 backdrop-blur-[1px] shadow-[0_0_12px_rgba(0,212,255,0.2)] hover:border-[#00d4ff] hover:bg-[#001438]/60 hover:opacity-100'
            }`}
            style={{
              left: slot.left,
              top: slot.top,
              width: slot.width,
              minWidth: isFront ? 'clamp(140px, 36vw, 340px)' : 'clamp(85px, 20vw, 180px)',
              height: slot.height,
              transform: 'translate(-50%, -50%)',
              opacity: slot.opacity,
              zIndex: slot.zIndex,
            }}
          >
            {/* Holographic Panel Beveled Corner Double-Outline Tech Accents */}
            {isFront ? (
              <>
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white pointer-events-none" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white pointer-events-none" />
                
                {/* Secondary inner tech frame */}
                <div className="absolute inset-1 rounded-xl border border-[#00d4ff]/30 pointer-events-none" />
              </>
            ) : (
              <>
                <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-[#00d4ff]/70 pointer-events-none" />
                <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-[#00d4ff]/70 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-[#00d4ff]/70 pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-[#00d4ff]/70 pointer-events-none" />
              </>
            )}

            {/* Label and Icon Content */}
            <div className="flex items-center justify-center gap-2 px-2.5 w-full h-full pointer-events-none">
              <Icon 
                className={`transition-colors shrink-0 ${
                  isFront 
                    ? 'w-[1.8vw] h-[1.8vw] max-w-[26px] max-h-[26px] text-[#00d4ff] drop-shadow-[0_0_10px_#00d4ff]' 
                    : 'w-[1.1vw] h-[1.1vw] max-w-[16px] max-h-[16px] text-[#00d4ff]/90'
                }`} 
              />

              <span 
                className="font-michroma font-bold text-white uppercase whitespace-nowrap tracking-wide drop-shadow-[0_0_12px_rgba(0,212,255,0.8)]"
                style={{
                  fontSize: isFront ? course.frontFontSize : course.sideFontSize,
                  lineHeight: 1.15
                }}
              >
                {course.title}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default AITrainingCarousel;
