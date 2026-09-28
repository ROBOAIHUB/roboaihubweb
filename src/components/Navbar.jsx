import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const NavItem = ({ label, id, isActive, onClick }) => {
  const handleClick = (e) => {
    e.preventDefault();
    onClick(id);
  };

  return (
    <a 
      href={`#${id}`}
      onClick={handleClick}
      className={`
        py-2 lg:py-2.5 rounded-full font-jura font-semibold text-[14px] lg:text-[15px] xl:text-[16px] transition-all duration-300 tracking-wider capitalize whitespace-nowrap border-2 flex items-center justify-center text-center
        ${isActive 
          ? 'min-w-[105px] lg:min-w-[120px] xl:min-w-[130px] px-6 lg:px-7 xl:px-8 text-white border-[rgba(235,253,255,1)] bg-[rgba(0,180,255,0.52)] shadow-[0_0_24px_rgba(0,220,255,0.9),inset_0_0_14px_rgba(255,255,255,0.45)]' 
          : 'px-4 lg:px-4.5 xl:px-5 text-white/85 border-transparent hover:text-white hover:bg-white/20 hover:border-[rgba(180,245,255,0.6)]'
        }
      `}
    >
      {label}
    </a>
  );
};

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isClickScrollingRef = useRef(false);
  const clickTimeoutRef = useRef(null);

  const handleNavClick = (id) => {
    isClickScrollingRef.current = true;
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
    }
    // Lock scroll listener during the smooth scroll animation
    clickTimeoutRef.current = setTimeout(() => {
      isClickScrollingRef.current = false;
    }, 1000);
  };

  useEffect(() => {
    const sections = ['home', 'ecosystem', 'education', 'services', 'gallery', 'about', 'contact'];
    const handleScroll = () => {
      // Do not update active state if user is smooth scrolling from a click
      if (isClickScrollingRef.current) return;

      let currentSection = sections[0];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);
    };

    const handleScrollEnd = () => {
      if (isClickScrollingRef.current) {
        clearTimeout(clickTimeoutRef.current);
        isClickScrollingRef.current = false;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('scrollend', handleScrollEnd);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scrollend', handleScrollEnd);
      if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    };
  }, []);

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Ecosystem', id: 'ecosystem' },
    { label: 'Education', id: 'education' },
    { label: 'Services', id: 'services' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <div className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-[1750px] z-[100]">
      <div 
        className="flex items-center justify-between px-4 sm:px-6 xl:px-8 py-2.5 sm:py-3 xl:py-4 rounded-full"
        style={{
          background: 'linear-gradient(135deg, rgba(0, 145, 255, 0.42) 0%, rgba(55, 190, 255, 0.24) 100%)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          border: '1px solid rgba(155, 245, 255, 0.85)',
          boxShadow: '0 0 18px rgba(0, 220, 255, 0.30), inset 0 0 14px rgba(180, 245, 255, 0.18)',
        }}
      >
        
        {/* Left Side: Company Logo Badge & Brand Name */}
        <div 
          className="flex items-center gap-2 sm:gap-3 lg:gap-4 cursor-pointer shrink-0 ml-1 sm:ml-2 md:ml-6 lg:ml-9 xl:ml-12 translate-y-0.5 lg:translate-y-1" 
          onClick={() => {
            setIsMobileMenuOpen(false);
            handleNavClick('home');
          }}
        >
          <img 
            src="/company_logo_badge.png" 
            alt="ROBOAI HUB Official Logo" 
            className="h-7 sm:h-8 lg:h-9 xl:h-10 w-auto object-contain drop-shadow-[0_0_12px_rgba(0,212,255,0.45)] hover:scale-105 transition-all duration-200 translate-x-0 md:translate-x-4 lg:translate-x-6 xl:translate-x-7"
          />
          <Logo 
            hideSubtitle={true} 
            textSize="w-[30vw] sm:w-[22vw] md:w-[14vw] max-w-[230px]" 
            className="-translate-y-1.5 sm:-translate-y-2 lg:-translate-y-2.5" 
          />
        </div>
        
        {/* Right Side: Desktop Links */}
        <nav 
          className="hidden md:flex items-center gap-2 lg:gap-3 xl:gap-4 overflow-x-auto no-scrollbar"
          style={{
            marginRight: 'clamp(20px, 4vw, 120px)',
          }}
        >
          {navLinks.map((link) => (
            <NavItem 
              key={link.label} 
              label={link.label} 
              id={link.id} 
              isActive={activeSection === link.id} 
              onClick={handleNavClick}
            />
          ))}
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(prev => !prev)}
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="md:hidden flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-cyan-400/50 bg-[#00d4ff]/15 text-white hover:bg-[#00d4ff]/30 active:scale-95 transition-all duration-200 mr-1"
        >
          {isMobileMenuOpen ? <X size={20} className="text-[#00d4ff]" /> : <Menu size={20} className="text-white" />}
        </button>
      </div>

      {/* Mobile Animated Dropdown Drawer */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden mt-2.5 w-full rounded-2xl p-3 sm:p-4 flex flex-col gap-1.5 sm:gap-2 transition-all duration-300 shadow-[0_12px_40px_rgba(0,0,0,0.85),0_0_20px_rgba(0,212,255,0.3)] animate-in fade-in slide-in-from-top-2"
          style={{
            background: 'linear-gradient(135deg, rgba(2, 14, 38, 0.96) 0%, rgba(5, 25, 65, 0.96) 100%)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(0, 212, 255, 0.65)',
          }}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  handleNavClick(link.id);
                }}
                className={`px-4 py-2.5 sm:py-3 rounded-xl font-jura font-semibold text-[14px] sm:text-[15px] tracking-wider transition-all duration-200 flex items-center justify-between ${
                  isActive
                    ? 'text-white bg-[#00d4ff]/25 border border-cyan-300/80 shadow-[0_0_15px_rgba(0,212,255,0.4)]'
                    : 'text-white/80 hover:text-white hover:bg-white/10 border border-transparent'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-[#00d4ff] shadow-[0_0_8px_#00d4ff]"></span>
                )}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Navbar;
