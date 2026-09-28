import React, { useEffect, useRef, useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  BookOpen, 
  Send,
  AlertCircle,
  Check
} from 'lucide-react';

const ServiceDetailsModal = ({ service, onClose, onAction }) => {
  const [activeTabId, setActiveTabId] = useState(() => {
    if (service?.hasTabs && service?.tabs?.length > 0) {
      return service.tabs[0].id;
    }
    return null;
  });

  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  // Focus trapping and ESC key listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    // Lock background scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Initial focus on close button
    if (closeButtonRef.current) {
      closeButtonRef.current.focus();
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [onClose]);

  if (!service) return null;

  const currentTab = service.hasTabs 
    ? (service.tabs.find(t => t.id === activeTabId) || service.tabs[0]) 
    : null;

  const handleActionButton = () => {
    onAction(service, currentTab);
  };

  return (
    <div 
      className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-all select-none"
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
      onClick={onClose}
    >
      <div 
        ref={modalRef}
        className="relative w-full max-w-[740px] max-h-[85dvh] glass-modal rounded-2xl border-[1.5px] border-[#00d4ff] p-6 md:p-8 shadow-[0_0_60px_rgba(0,212,255,0.4)] overflow-hidden modal-animate-enter flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative Tech Corner Brackets */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#00d4ff] pointer-events-none" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#00d4ff] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#00d4ff] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#00d4ff] pointer-events-none" />

        {/* Accessible Close Button */}
        <button
          ref={closeButtonRef}
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 w-8 h-8 rounded-full border border-white/20 bg-[#000a1f] flex items-center justify-center text-white/80 hover:text-white hover:border-[#00d4ff] transition-colors cursor-pointer z-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff]"
        >
          <X className="w-4 h-4" />
        </button>

        {/* ========================================================================= */}
        {/* FIXED MODAL HEADER                                                        */}
        {/* ========================================================================= */}
        <div className="shrink-0 pb-3 border-b border-white/10 pr-8">
          {/* Eyebrow & Demo Content Flag */}
          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#00d4ff]" />
              <span className="text-[11px] md:text-xs font-michroma text-[#00d4ff] tracking-widest uppercase font-semibold">
                {service.eyebrow}
              </span>
            </div>
            
            {service.demoContent && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/40 text-[10px] font-jura text-amber-300 tracking-wider font-semibold uppercase">
                <AlertCircle className="w-3 h-3 text-amber-400" />
                Sample service information
              </span>
            )}
          </div>

          {/* Title */}
          <h2 id="service-modal-title" className="text-xl md:text-2xl lg:text-[28px] font-michroma font-bold text-white leading-tight">
            {service.title}
          </h2>

          {/* Subtitle / Tagline */}
          {service.subtitle && (
            <p className="text-xs md:text-sm font-jura text-[#00d4ff] tracking-wide font-medium mt-1">
              {service.subtitle}
            </p>
          )}

          {/* Tabs Navigation (for Mentorship Programs) */}
          {service.hasTabs && service.tabs && (
            <div className="flex items-center gap-2 mt-3 pt-1">
              {service.tabs.map((tab) => {
                const TabIcon = tab.icon;
                const isActive = activeTabId === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTabId(tab.id)}
                    className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-michroma transition-all cursor-pointer focus-visible:outline-none ${
                      isActive 
                        ? 'bg-[#00d4ff]/20 text-[#00d4ff] border border-[#00d4ff] shadow-[0_0_12px_rgba(0,212,255,0.35)]' 
                        : 'text-white/60 hover:text-white border border-white/10 hover:border-white/30'
                    }`}
                  >
                    {TabIcon && <TabIcon className="w-3.5 h-3.5" />}
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* ========================================================================= */}
        {/* SCROLLABLE MODAL CONTENT BODY                                             */}
        {/* ========================================================================= */}
        <div className="flex-1 overflow-y-auto py-4 pr-1 space-y-4 custom-modal-scroll">
          
          {/* TAB CONTENT (Mentorship Programs) */}
          {service.hasTabs && currentTab ? (
            <div className="space-y-4">
              {/* Tab Description */}
              <p className="text-xs md:text-sm font-jura text-white/90 leading-relaxed">
                {currentTab.description}
              </p>

              {/* Tab Highlights */}
              {currentTab.highlights && currentTab.highlights.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {currentTab.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-jura text-white/90">
                      <Check className="w-3.5 h-3.5 text-[#00d4ff]" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Section Heading & Numbered Modules */}
              {currentTab.modules && (
                <div className="pt-2">
                  <div className="flex items-center gap-2 mb-2.5">
                    <BookOpen className="w-4 h-4 text-[#00d4ff]" />
                    <h4 className="text-xs font-michroma text-white uppercase tracking-wider font-semibold">
                      {currentTab.sectionHeading}
                    </h4>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {currentTab.modules.map((mod, i) => (
                      <div 
                        key={i} 
                        className="flex items-center gap-2.5 p-2 rounded-lg bg-white/[0.03] border border-white/10 hover:border-[#00d4ff]/40 transition-colors"
                      >
                        <span className="w-6 h-6 rounded-md bg-[#00d4ff]/15 border border-[#00d4ff]/30 text-[#00d4ff] text-[11px] font-michroma font-bold flex items-center justify-center shrink-0">
                          {i + 1}
                        </span>
                        <span className="text-xs font-jura text-white/90 font-medium">
                          {mod}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* STANDARD SERVICE CONTENT (Labs, Automation, Weekend Bootcamps) */
            <div className="space-y-4">
              {/* Overview / Description */}
              {(service.overview || service.description) && (
                <p className="text-xs md:text-sm font-jura text-white/90 leading-relaxed">
                  {service.overview || service.description}
                </p>
              )}

              {/* Highlights (Weekend Bootcamps) */}
              {service.highlights && service.highlights.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {service.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-jura text-white/90">
                      <Check className="w-3.5 h-3.5 text-[#00d4ff]" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Suggested Service Modules / Program Includes */}
              {service.modules && (
                <div className="pt-2">
                  <div className="flex items-center gap-2 mb-2.5">
                    <Layers className="w-4 h-4 text-[#00d4ff]" />
                    <h4 className="text-xs font-michroma text-white uppercase tracking-wider font-semibold">
                      {service.modulesHeading || service.sectionHeading || 'Service Modules'}
                    </h4>
                  </div>

                  <div className="space-y-2">
                    {service.modules.map((mod, i) => {
                      const isObject = typeof mod === 'object';
                      const numBadge = isObject ? (mod.num || String(i + 1).padStart(2, '0')) : String(i + 1);
                      const title = isObject ? mod.title : mod;
                      const desc = isObject ? mod.desc : null;

                      return (
                        <div 
                          key={i}
                          className="flex items-start gap-3 p-2.5 rounded-lg bg-white/[0.03] border border-white/10 hover:border-[#00d4ff]/40 transition-colors"
                        >
                          <span className="w-6 h-6 rounded-md bg-[#00d4ff]/15 border border-[#00d4ff]/30 text-[#00d4ff] text-[11px] font-michroma font-bold flex items-center justify-center shrink-0 mt-0.5">
                            {numBadge}
                          </span>
                          <div className="flex-1 min-w-0">
                            <span className="text-xs font-michroma text-white font-semibold block">
                              {title}
                            </span>
                            {desc && (
                              <span className="text-xs font-jura text-white/80 leading-relaxed block mt-0.5">
                                {desc}
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Suitable For */}
              {service.suitableFor && (
                <div className="pt-1 flex items-center gap-2 text-xs font-jura text-white/75">
                  <span className="text-[#00d4ff] font-semibold">Suitable for:</span>
                  <span>{service.suitableFor}</span>
                </div>
              )}
            </div>
          )}

        </div>

        {/* ========================================================================= */}
        {/* FIXED MODAL FOOTER                                                        */}
        {/* ========================================================================= */}
        <div className="shrink-0 pt-3.5 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Footer Consultation Note */}
          <div className="text-[11px] font-jura text-white/60 text-center sm:text-left">
            {service.footerNote || 'Subject to consultation and custom requirements.'}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-white/30 text-white/80 hover:text-white text-xs font-jura tracking-wider transition-colors cursor-pointer focus-visible:outline-none"
            >
              Close
            </button>
            <button
              type="button"
              onClick={handleActionButton}
              className="flex items-center gap-1.5 px-5 py-2 rounded-lg bg-gradient-to-r from-[#00d4ff] to-blue-600 hover:brightness-110 text-white text-xs font-michroma tracking-wider transition-all shadow-[0_0_18px_rgba(0,212,255,0.5)] cursor-pointer focus-visible:outline-none"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{service.actionLabel || 'Book Demo Now'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ServiceDetailsModal;
