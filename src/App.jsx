import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Ecosystem from './components/Ecosystem';
import Training from './components/Training';
import Services from './components/Services';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import SectionDivider from './components/SectionDivider';

function App() {
  return (
    <div className="w-full max-w-full min-h-screen relative overflow-x-hidden">
      {/* GLOBAL FIXED NAVBAR */}
      <Navbar />

      {/* SECTION 1: HERO */}
      <div id="home" className="w-full max-w-full h-screen relative overflow-hidden">
        <Hero />
      </div>

      {/* BOUNDARY 1-2 DIVIDER LINE */}
      <SectionDivider />

      {/* SECTION 2: ECOSYSTEM */}
      <div id="ecosystem" className="w-full max-w-full h-screen relative overflow-hidden">
        <Ecosystem />
      </div>

      {/* BOUNDARY 2-3 DIVIDER LINE */}
      <SectionDivider />

      {/* SECTION 3: TRAINING PROGRAMS (EDUCATION) */}
      <div id="education" className="w-full max-w-full h-screen relative overflow-hidden">
        <Training />
      </div>

      {/* BOUNDARY 3-4 DIVIDER LINE */}
      <SectionDivider />

      {/* SECTION 4: SERVICES */}
      <div id="services" className="w-full max-w-full h-screen relative overflow-hidden">
        <Services />
      </div>

      {/* BOUNDARY 4-5 DIVIDER LINE */}
      <SectionDivider />

      {/* SECTION 5: GALLERY */}
      <div id="gallery" className="w-full max-w-full h-screen relative overflow-hidden">
        <Gallery />
      </div>

      {/* BOUNDARY 5-6 DIVIDER LINE */}
      <SectionDivider />

      {/* SECTION 6: ABOUT */}
      <div id="about" className="w-full max-w-full h-screen relative overflow-hidden">
        <About />
      </div>

      {/* BOUNDARY 6-7 DIVIDER LINE */}
      <SectionDivider />

      {/* SECTION 7: CONTACT */}
      <div id="contact" className="w-full max-w-full h-screen relative overflow-hidden">
        <Contact />
      </div>

    </div>
  );
}

export default App;
