import React, { useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, Sparkles, Clock, GraduationCap, Award, BookOpen } from 'lucide-react';

const TrainingCourseModal = ({ course, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!course) return null;

  const Icon = course.icon;

  return (
    <div 
      className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-all select-none"
      role="dialog"
      aria-modal="true"
      aria-labelledby="course-modal-title"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-xl glass-modal rounded-2xl border border-[#00d4ff] p-6 md:p-8 shadow-[0_0_60px_rgba(0,212,255,0.4)] overflow-hidden modal-animate-enter"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative Tech Corner Brackets */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#00d4ff]" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#00d4ff]" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#00d4ff]" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#00d4ff]" />

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 w-8 h-8 rounded-full border border-white/20 bg-[#000a1f] flex items-center justify-center text-white/80 hover:text-white hover:border-[#00d4ff] transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Badge Header */}
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-4 h-4 text-[#00d4ff]" />
          <span className="text-xs font-michroma text-[#00d4ff] tracking-widest uppercase font-semibold">
            ROBOAI TRAINING • {course.badge}
          </span>
        </div>

        {/* Title */}
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/15 border border-[#00d4ff]/50 flex items-center justify-center text-[#00d4ff]">
            <Icon className="w-5 h-5" />
          </div>
          <div>
            <h2 id="course-modal-title" className="text-xl md:text-2xl font-michroma font-bold text-white leading-tight">
              {course.fullTitle || course.title}
            </h2>
            <p className="text-xs font-jura text-[#00d4ff] tracking-wide font-medium">
              {course.tagline}
            </p>
          </div>
        </div>

        {/* Metadata Pills */}
        <div className="flex flex-wrap gap-2 my-4">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-jura text-white/85">
            <Clock className="w-3.5 h-3.5 text-[#00d4ff]" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-jura text-white/85">
            <GraduationCap className="w-3.5 h-3.5 text-[#00d4ff]" />
            <span>{course.level}</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-jura text-white/85">
            <Award className="w-3.5 h-3.5 text-[#00d4ff]" />
            <span>Job Certification</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-xs md:text-sm font-jura text-white/90 leading-relaxed mb-5">
          {course.description}
        </p>

        {/* Curriculum Topics */}
        {course.topics && (
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2.5">
              <BookOpen className="w-3.5 h-3.5 text-[#00d4ff]" />
              <h4 className="text-xs font-michroma text-white uppercase tracking-wider">
                Curriculum Modules
              </h4>
            </div>
            <ul className="space-y-2">
              {course.topics.map((topic, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs font-jura text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-[#00d4ff] shrink-0 mt-0.5" />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-white/15">
          <span className="text-[11px] font-jura text-white/60">
            Prerequisites: {course.prerequisites}
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-white/30 text-white/80 hover:text-white text-xs font-jura tracking-wider transition-colors cursor-pointer"
            >
              Close
            </button>
            <a
              href="#about"
              onClick={onClose}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-[#00d4ff] to-blue-600 hover:brightness-110 text-white text-xs font-michroma tracking-wider transition-all shadow-[0_0_18px_rgba(0,212,255,0.5)] cursor-pointer"
            >
              Enroll Now <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingCourseModal;
