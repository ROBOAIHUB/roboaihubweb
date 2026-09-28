import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

const GalleryLightbox = ({ item, onClose, onPrev, onNext, hasPrev, hasNext }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext && hasNext) onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  if (!item) return null;

  const Icon = item.icon || Calendar;

  return (
    <div 
      className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-8 bg-[#000a1f]/60 backdrop-blur-md select-none"
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title} image viewer`}
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl gallery-lightbox-modal rounded-2xl p-4 md:p-6 overflow-hidden gallery-modal-animate"
        style={{
          background: 'linear-gradient(135deg, rgba(0, 145, 255, 0.45) 0%, rgba(55, 190, 255, 0.28) 100%)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1.5px solid rgba(155, 245, 255, 0.85)',
          boxShadow: '0 0 35px rgba(0, 220, 255, 0.45), 0 10px 40px rgba(0, 0, 0, 0.6), inset 0 0 20px rgba(180, 245, 255, 0.22)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Tech Corner Accents */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[rgba(200,250,255,0.95)]" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[rgba(200,250,255,0.95)]" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[rgba(200,250,255,0.95)]" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[rgba(200,250,255,0.95)]" />

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close image viewer"
          className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full border border-[rgba(155,245,255,0.85)] bg-[rgba(0,145,255,0.45)] backdrop-blur-md flex items-center justify-center text-white hover:bg-[rgba(0,165,255,0.65)] hover:border-white shadow-[0_0_12px_rgba(0,220,255,0.35)] transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Main Photo View with Left/Right Navigation */}
        <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[rgba(0,20,50,0.35)] border border-[rgba(155,245,255,0.5)] shadow-[inset_0_0_16px_rgba(0,180,255,0.15)] flex items-center justify-center">
          {item.highResImg || item.img ? (
            <img 
              src={item.highResImg || item.img} 
              alt={item.title}
              className="w-full h-full object-contain object-center"
            />
          ) : (
            <div className="relative w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-b from-[rgba(0,145,255,0.25)] to-[rgba(0,20,50,0.4)]">
              <div className="w-16 h-16 rounded-full bg-[#00d4ff]/20 border border-[#00d4ff]/60 flex items-center justify-center text-white mb-3 shadow-[0_0_14px_rgba(0,220,255,0.4)]">
                <Icon className="w-8 h-8" />
              </div>
              <h4 className="text-white font-michroma text-base md:text-lg tracking-wider text-center">
                {item.highlightText || item.title}
              </h4>
              <p className="text-white/80 font-jura text-xs tracking-widest mt-1">
                {item.date}
              </p>
            </div>
          )}

          {/* Left Arrow */}
          {hasPrev && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[rgba(0,145,255,0.45)] backdrop-blur-md border border-[rgba(155,245,255,0.85)] text-white flex items-center justify-center hover:border-white hover:bg-[rgba(0,165,255,0.65)] shadow-[0_0_14px_rgba(0,220,255,0.4)] transition-all cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Right Arrow */}
          {hasNext && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[rgba(0,145,255,0.45)] backdrop-blur-md border border-[rgba(155,245,255,0.85)] text-white flex items-center justify-center hover:border-white hover:bg-[rgba(0,165,255,0.65)] shadow-[0_0_14px_rgba(0,220,255,0.4)] transition-all cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Metadata Footer */}
        <div className="mt-4 flex flex-col md:flex-row md:items-center justify-between gap-3 pt-3 border-t border-white/25">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[rgba(0,180,255,0.45)] border border-[rgba(200,250,255,0.95)] text-white text-[11px] font-michroma font-semibold uppercase shadow-[0_0_10px_rgba(0,220,255,0.4)]">
                <Icon className="w-3.5 h-3.5" />
                {item.category}
              </span>
              <span className="text-white/90 font-michroma text-[11px]">{item.date}</span>
            </div>
            <h3 className="text-lg font-michroma font-bold text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
              {item.subtitle || item.title}
            </h3>
            {item.description && (
              <p className="text-xs md:text-sm font-jura text-white/95 mt-1 max-w-2xl leading-relaxed drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]">
                {item.description}
              </p>
            )}
          </div>

          <button
            onClick={onClose}
            className="self-end md:self-center px-4 py-2 rounded-lg border border-[rgba(155,245,255,0.85)] bg-[rgba(0,145,255,0.35)] hover:bg-[rgba(0,165,255,0.55)] text-white text-xs font-jura font-semibold tracking-wider shadow-[0_0_12px_rgba(0,220,255,0.25)] transition-all cursor-pointer"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};

export default GalleryLightbox;
