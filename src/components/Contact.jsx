import React from 'react';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';
import './Contact.css';

// SVG Brand Icons
const WhatsAppIcon = ({ className = "w-full h-full" }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className} 
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z" />
  </svg>
);

// SVG Brand Icons for Social Platforms (Clean shapes, no boxes)
const InstagramIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    className="w-full h-full" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedInIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    className="w-full h-full" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const YouTubeIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    className="w-full h-full" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
  </svg>
);

const XIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    className="w-full h-full" 
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const SOCIAL_LINKS = [
  { id: 'instagram', label: 'Instagram', url: 'https://instagram.com/roboaihub', icon: InstagramIcon },
  { id: 'linkedin', label: 'LinkedIn', url: 'https://linkedin.com/company/roboaihub', icon: LinkedInIcon },
  { id: 'youtube', label: 'YouTube', url: 'https://youtube.com/@roboaihub', icon: YouTubeIcon },
  { id: 'x', label: 'X (Twitter)', url: 'https://x.com/roboaihub', icon: XIcon },
];

const Contact = () => {
  return (
    <div 
      className="w-full h-full relative overflow-hidden bg-[#000a1f] select-none flex items-center justify-center contact-scene-wrapper"
      aria-label="ROBOAI HUB Contact"
    >
      {/* ========================================================================= */}
      {/* MOBILE RESPONSIVE VIEW (< md)                                             */}
      {/* ========================================================================= */}
      <div className="md:hidden flex flex-col justify-between w-full h-full relative z-10 px-4 pt-20 pb-8 overflow-y-auto no-scrollbar">
        {/* Background Atmospheric Video */}
        <video
          src="/RoboAI_Contact_Fixed_Boxes.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-25 select-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#000a1f]/85 via-transparent to-[#000a1f]/95 pointer-events-none" />

        {/* Mobile Header Block */}
        <div className="relative z-20">
          <h1 className="text-2xl font-michroma font-bold text-white tracking-wide leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
            Contact Us
          </h1>
          <div className="relative my-1.5 flex items-center w-36 h-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#00d4ff]" />
            <div className="flex-1 h-[1.5px] bg-[#00d4ff] shadow-[0_0_8px_#00d4ff]" />
            <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#00d4ff]" />
          </div>
          <p className="mt-1 text-[11px] font-jura font-semibold text-cyan-300 tracking-wider uppercase">
            Building the Future with Robotics and AI
          </p>
        </div>

        {/* Mobile Contact Cards Grid */}
        <div className="relative z-20 my-auto py-2 flex flex-col gap-2.5">
          {/* Card 1: Contact Numbers */}
          <div className="rounded-xl border border-cyan-400/40 bg-[#001030]/85 p-3.5 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
            <span className="text-[10px] font-michroma text-[#00d4ff] tracking-wider uppercase font-semibold block mb-2">
              CONTACT NUMBER
            </span>
            <div className="flex flex-col gap-2">
              <a
                href="https://wa.me/919828014877"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 hover:border-emerald-400 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <WhatsAppIcon className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-jura text-emerald-300">WhatsApp Message</span>
                  <span className="text-xs font-jura font-bold text-white tracking-wider">+91 98280 14877</span>
                </div>
              </a>
              <a
                href="tel:8690831893"
                className="flex items-center gap-3 p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 hover:border-cyan-400 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-[#00d4ff] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-jura text-cyan-300">Direct Phone Call</span>
                  <span className="text-xs font-jura font-bold text-white tracking-wider">+91 86908 31893</span>
                </div>
              </a>
            </div>
          </div>

          {/* Card 2: Email & Website Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <a
              href="mailto:contactus@roboaihub.com"
              className="flex items-center gap-2.5 p-3 rounded-xl border border-cyan-400/40 bg-[#001030]/85 backdrop-blur-md hover:border-[#00d4ff] transition-all"
            >
              <div className="w-8 h-8 rounded-full border border-cyan-400/40 bg-[#00d4ff]/15 flex items-center justify-center text-[#00d4ff] shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] font-jura text-cyan-300">Email Us</span>
                <span className="text-xs font-jura font-bold text-white">contactus@roboaihub.com</span>
              </div>
            </a>
            <a
              href="https://www.roboaihub.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 p-3 rounded-xl border border-cyan-400/40 bg-[#001030]/85 backdrop-blur-md hover:border-[#00d4ff] transition-all"
            >
              <div className="w-8 h-8 rounded-full border border-cyan-400/40 bg-[#00d4ff]/15 flex items-center justify-center text-[#00d4ff] shrink-0">
                <Globe className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] font-jura text-cyan-300">Official Portal</span>
                <span className="text-xs font-jura font-bold text-white">www.roboaihub.com</span>
              </div>
            </a>
          </div>

          {/* Card 3: Location / Address */}
          <a
            href="https://maps.google.com/?q=ROBOAI+HUB,+near+S.K+Industries,+New+Power+House+Rd,+Patrakar+Colony,+Shastri+Nagar,+Jodhpur,+Rajasthan+342003"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2.5 p-3 rounded-xl border border-cyan-400/40 bg-[#001030]/85 backdrop-blur-md hover:border-[#00d4ff] transition-all"
          >
            <div className="w-8 h-8 rounded-full border border-cyan-400/40 bg-[#00d4ff]/15 flex items-center justify-center text-[#00d4ff] shrink-0 mt-0.5">
              <MapPin className="w-4 h-4" />
            </div>
            <div className="flex flex-col text-left font-jura text-xs text-white/90 leading-snug">
              <span className="text-[10px] text-cyan-300 font-semibold mb-0.5">Physical Hub Location</span>
              <span>Near S.K Industries, New Power House Rd, Patrakar Colony, Shastri Nagar, Jodhpur, Rajasthan 342003</span>
            </div>
          </a>

          {/* Card 4: Social Icons */}
          <div className="flex items-center justify-between p-3 rounded-xl border border-cyan-400/40 bg-[#001030]/85 backdrop-blur-md">
            <span className="text-[10px] font-michroma text-white tracking-wider uppercase font-semibold">
              FOLLOW US
            </span>
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow RoboAI Hub on ${item.label}`}
                    className="w-7 h-7 flex items-center justify-center text-white/80 hover:text-cyan-400 hover:scale-110 transition-all"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Footer Cue */}
        <div className="relative z-20 text-center">
          <span className="text-[10px] font-jura text-white/60 tracking-wider">
            ROBOAI HUB • Connecting Industry, Education & Innovation
          </span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* DESKTOP 16:9 PROPORTIONAL CANVAS (>= md)                                  */}
      {/* ========================================================================= */}
      <div className="hidden md:flex contact-scene-canvas">
        
        {/* Stationary Background Video with pre-rendered glass panels */}
        <video
          src="/RoboAI_Contact_Fixed_Boxes.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-fill pointer-events-none select-none"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'fill',
            filter: 'brightness(1.08) contrast(1.04) saturate(1.06)',
          }}
        />

        {/* Ambient Top Lighting Gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85vw] h-[250px] bg-gradient-to-b from-[#00d4ff]/10 via-transparent to-transparent pointer-events-none z-[1]" />

        {/* ========================================================================= */}
        {/* 1. UPPER-LEFT HEADING & TAGLINE                                           */}
        {/* ========================================================================= */}
        <div 
          className="absolute z-20 pointer-events-auto"
          style={{
            left: '3.44%',
            top: '14.0%',
          }}
        >
          <h1 className="font-michroma font-bold text-white tracking-wide leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] contact-heading-text">
            Contact Us
          </h1>
          
          {/* Cyan Heading Line with Glowing Endpoint Dots (matching Services page) */}
          <div className="relative my-1.5 flex items-center contact-services-line-container">
            <span className="contact-services-dot" />
            <div className="contact-services-line" />
            <span className="contact-services-dot" />
          </div>

          {/* Tagline in uppercase with prominent font size */}
          <p className="font-jura font-semibold uppercase text-white/95 leading-snug tracking-wider drop-shadow-md contact-tagline-text">
            BUILDING THE FUTURE WITH ROBOTICS AND AI
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 2. PANEL 1: WHATSAPP PANEL (Bounds: x: 282, y: 342, w: 243, h: 174)       */}
        {/* ========================================================================= */}
        <div 
          className="absolute z-20 flex flex-col items-center justify-center text-center contact-overlay-panel"
          style={{
            left: '17.625%',
            top: '38.0%',
            width: '15.1875%',
            height: '19.333%',
            padding: '0.8cqw 0.6cqw',
          }}
        >
          {/* Contact Number Heading at the place of the previous standalone logo */}
          <span className="contact-panel-title">
            CONTACT NUMBER
          </span>

          {/* Numbers: First with WhatsApp logo, Second for Call with Phone logo */}
          <div className="flex flex-col items-center justify-center gap-[0.4cqw] w-full">
            <a 
              href="https://wa.me/919828014877"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp +91 98280 14877"
              className="contact-phone-row group"
            >
              <div className="contact-phone-row-icon">
                <WhatsAppIcon className="w-full h-full text-[#25D366] drop-shadow-[0_0_6px_rgba(37,211,102,0.6)] group-hover:scale-110 transition-transform duration-200" />
              </div>
              <span className="contact-phone-static font-jura font-semibold tracking-[0.05em] select-text">
                98280 14877
              </span>
            </a>

            <a 
              href="tel:+918690831893"
              aria-label="Call +91 86908 31893"
              className="contact-phone-row group"
            >
              <div className="contact-phone-row-icon">
                <Phone className="w-full h-full text-[#00d4ff] drop-shadow-[0_0_6px_rgba(0,212,255,0.7)] group-hover:scale-110 transition-transform duration-200" strokeWidth={2.2} />
              </div>
              <span className="contact-phone-static font-jura font-semibold tracking-[0.05em] select-text">
                86908 31893
              </span>
            </a>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. PANEL 2: BIRD EMAIL PANEL (Bounds: x: 1277, y: 185, w: 291, h: 91)     */}
        {/* ========================================================================= */}
        <div 
          className="absolute z-20 flex items-center justify-center contact-overlay-panel"
          style={{
            left: '79.8125%',
            top: '20.555%',
            width: '18.1875%',
            height: '10.111%',
            padding: '0 0.8cqw',
          }}
        >
          <a
            href="mailto:contactus@roboaihub.com"
            aria-label="Send email to contactus@roboaihub.com"
            className="contact-card-link flex items-center justify-center gap-[0.6cqw] w-full h-full select-text group"
          >
            {/* Circular Ring Icon Badge (Matches 2nd page Ecosystem style) */}
            <div className="contact-eco-icon-ring flex items-center justify-center shrink-0">
              <Mail className="contact-eco-icon w-[1.1vw] h-[1.1vw] max-w-[15px] max-h-[15px] min-w-[12px] min-h-[12px]" strokeWidth={2} />
            </div>
            
            {/* Label with Ecosystem Hover Color & Animated Underline */}
            <div className="flex flex-col items-start justify-center">
              <span className="font-jura font-medium contact-eco-text tracking-[0.02em] whitespace-nowrap contact-email-text">
                contactus@roboaihub.com
              </span>
              <div className="contact-eco-underline" />
            </div>
          </a>
        </div>

        {/* ========================================================================= */}
        {/* 4. PANEL 3: LOCATION / ADDRESS (Bounds: x: 1090, y: 538, w: 393, h: 113)  */}
        {/* ========================================================================= */}
        <div 
          className="absolute z-20 flex items-center contact-overlay-panel"
          style={{
            left: '68.125%',
            top: '59.777%',
            width: '24.5625%',
            height: '12.555%',
            padding: '0 1.2cqw',
          }}
        >
          <a
            href="https://maps.google.com/?q=ROBOAI+HUB,+near+S.K+Industries,+New+Power+House+Rd,+Patrakar+Colony,+Shastri+Nagar,+Jodhpur,+Rajasthan+342003"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View RoboAI Hub location on Google Maps (opens in new tab)"
            className="contact-card-link flex items-center justify-start gap-[0.9cqw] w-full h-full select-text group"
          >
            {/* Circular Ring Icon Badge (Matches 2nd page Ecosystem style) */}
            <div className="contact-eco-icon-ring flex items-center justify-center shrink-0 self-center">
              <MapPin className="contact-eco-icon w-[1.15vw] h-[1.15vw] max-w-[16px] max-h-[16px] min-w-[13px] min-h-[13px]" strokeWidth={2} />
            </div>

            {/* Address with Ecosystem Hover Color & Animated Underline */}
            <div className="flex flex-col justify-center text-left font-jura font-medium leading-[1.18] tracking-normal contact-eco-text contact-loc-text">
              <span>Near S.K Industries, New Power House Rd,</span>
              <span>Patrakar Colony, Shastri Nagar,</span>
              <span>Jodhpur, Rajasthan 342003</span>
              <div className="contact-eco-underline" />
            </div>
          </a>
        </div>

        {/* ========================================================================= */}
        {/* 5. PANEL 4: FOLLOW US / SOCIAL (Bounds: x: 700, y: 696, w: 817, h: 90)    */}
        {/* ========================================================================= */}
        <div 
          className="absolute z-20 flex items-center contact-overlay-panel"
          style={{
            left: '43.75%',
            top: '77.333%',
            width: '51.0625%',
            height: '10.0%',
            padding: '0 1.8cqw',
          }}
        >
          {/* FOLLOW US Label (Reduced font size) */}
          <span className="font-michroma font-bold text-white tracking-[0.08em] whitespace-nowrap contact-follow-text shrink-0">
            FOLLOW US
          </span>

          {/* Vertical Cyan Divider */}
          <div className="contact-social-divider shrink-0" />

          {/* 4 Brand Social Icons evenly distributed */}
          <div className="flex-1 grid grid-cols-4 items-center justify-items-center w-full">
            {SOCIAL_LINKS.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow RoboAI Hub on ${item.label} (opens in new tab)`}
                  className="contact-social-btn group"
                >
                  <div className="contact-social-icon-box">
                    <Icon />
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 6. PANEL 5: WEBSITE / DOMAIN (Bounds: x: 678, y: 847, w: 244, h: 42)      */}
        {/* ========================================================================= */}
        <div 
          className="absolute z-20 flex items-center justify-center contact-overlay-panel"
          style={{
            left: '42.375%',
            top: '94.111%',
            width: '15.25%',
            height: '4.666%',
            padding: '0 0.5cqw',
          }}
        >
          <a
            href="https://www.roboaihub.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit RoboAI Hub Official Website (opens in new tab)"
            className="contact-card-link flex items-center justify-center gap-[0.5cqw] w-full h-full select-text group"
          >
            {/* Circular Ring Icon Badge (Matches 2nd page Ecosystem style) */}
            <div className="contact-eco-icon-ring flex items-center justify-center shrink-0">
              <Globe className="contact-eco-icon w-[1.05vw] h-[1.05vw] max-w-[14px] max-h-[14px] min-w-[11px] min-h-[11px]" strokeWidth={2} />
            </div>

            {/* URL with Ecosystem Hover Color & Animated Underline */}
            <div className="flex flex-col items-center justify-center">
              <span className="font-jura font-bold tracking-wide contact-eco-text contact-web-text whitespace-nowrap">
                www.roboaihub.com
              </span>
              <div className="contact-eco-underline" />
            </div>
          </a>
        </div>

      </div>
    </div>
  );
};

export default Contact;
