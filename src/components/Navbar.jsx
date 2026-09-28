import React, { useState, useEffect, useRef } from 'react';
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
    <div className="fixed top-6 left-1/2 -translate-x-1/2 w-[96%] max-w-[1750px] z-[100]">
      <div 
        className="flex items-center justify-between px-6 xl:px-8 py-3 xl:py-4 rounded-full"
        style={{
          background: 'linear-gradient(135deg, rgba(0, 145, 255, 0.42) 0%, rgba(55, 190, 255, 0.24) 100%)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          border: '1px solid rgba(155, 245, 255, 0.85)',
          boxShadow: '0 0 18px rgba(0, 220, 255, 0.30), inset 0 0 14px rgba(180, 245, 255, 0.18)',
        }}
      >
        
        {/* Left Side: Company Logo Badge & Brand Name (shifted further right and down) */}
        <div className="flex items-center gap-3 lg:gap-4 cursor-pointer shrink-0 ml-6 lg:ml-9 xl:ml-12 translate-y-0.5 lg:translate-y-1" onClick={() => handleNavClick('home')}>
          <img 
            src="/company_logo_badge.png" 
            alt="ROBOAI HUB Official Logo" 
            className="h-8 lg:h-9 xl:h-10 w-auto object-contain drop-shadow-[0_0_12px_rgba(0,212,255,0.45)] hover:scale-105 transition-all duration-200 translate-x-4 lg:translate-x-6 xl:translate-x-7"
          />
          <Logo hideSubtitle={true} textSize="w-[14vw] max-w-[230px]" className="-translate-y-2 lg:-translate-y-2.5" />
        </div>
        
        {/* Right Side: Links (tuned spacing from right edge) */}
        <nav 
          className="flex items-center gap-2.5 lg:gap-3 xl:gap-4 overflow-x-auto no-scrollbar"
          style={{
            marginRight: 'clamp(50px, 6vw, 120px)',
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
      </div>
    </div>
  );
};

export default Navbar;
