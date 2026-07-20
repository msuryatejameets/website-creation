import { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Navbar from './NavBar';
import './Gemini.css';

import circleastro from '../../assets/ajithphotos/circleastro.jpg';
import gensurgery from '../../assets/ajithphotos/gensurgery.jpg';
import grecord from '../../assets/ajithphotos/grecord.jpg';

function Gemini() {
  const [activeSection, setActiveSection] = useState('hero');
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const { theme } = useTheme();
  
  const totalSlides = 2;

  useEffect(() => {
    const sections = document.querySelectorAll('.section-wrapper');
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const nextSlide = () => {
    setActiveSlideIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setActiveSlideIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="portfolio-app" data-theme={theme}>
      <Navbar 
        activeSection={activeSection} 
      />

      <main>
        {/* Hero Section Canvas */}
        <div id="hero" className="section-wrapper">
          <section id="hero-section" className="section">
            <div className="split-layout">
              <div>
                <div className="cosmic-badge">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  Junior Resident - General Surgery & Aspiring Neuro Surgeon
                </div>
                <h1>Navigating the Delicate <span>Inner Cosmos</span></h1>
                <h4>Dr. R. Ajith Kumar</h4>
                <p className="lead-text">
                  Bridging structural clinical rigor at Salem Polyclinic Hospital with the vast awe of deep-space cosmic systems. 
                  Mapping structural biological frameworks with absolute surgical discipline.
                </p>
                <a 
                  href="https://salempolyclinic.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-brand" 
                  style={{ background: 'var(--accent-cosmic)', width: 'auto', display: 'inline-flex', textTransform: 'uppercase' }}
                >
                  VIEW HOSPITAL DETAILS
                </a>
              </div>
              <div 
                className="image-container"
                style={{ backgroundImage: `url(${gensurgery})` }}
              ></div>
            </div>
          </section>
        </div>

        {/* About Section Canvas (Flexible, Unified Height Layout Slider) */}
        <div id="about" className="section-wrapper">
          <section id="about-section" className="section">
            <div className="about-slider-wrapper">
              {/* SLIDE 1: Celestial Photography */}
              <div className={`about-slide ${activeSlideIndex === 0 ? 'active-slide' : ''}`}>
                <div className="slide-split-layout">
                  <div className="slide-image-container">
                    <img src={circleastro} alt="Celestial Photography" />
                  </div>
                  <div className="achievement-card">
                    <span className="badge-certified">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      {" "}STAR GAZING BY Dr. R. Ajith Kumar
                    </span>
                    <p className="achievement-description"></p>
                    <h1>From Surgical Precision to <span>Deep Space Photography</span></h1>
                    <a 
                      href="https://www.instagram.com/dr_psycoma/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-record"
                    >
                      VIEW INSTAGRAM GALLERY
                    </a>
                    <div className="slide-controls-panel">
                      <button className="btn-slider prev-slide-btn" onClick={prevSlide}>← Prev</button>
                      <button className="btn-slider next-slide-btn" onClick={nextSlide}>Next →</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* SLIDE 2: Guinness World Record */}
              <div className={`about-slide ${activeSlideIndex === 1 ? 'active-slide' : ''}`}>
                <div className="slide-split-layout">
                  <div className="slide-image-container">
                    <img src={grecord} alt="Guinness World Record Certificate" />
                  </div>
                  <div className="achievement-card">
                    <span className="badge-certified">✓ CERTIFIED OFFICIAL PARTICIPANT</span>
                    <h3 className="achievement-title">Guinness World Records™ Achievement</h3>
                    <p className="achievement-description">
                      <strong>Dr. R. Ajith Kumar</strong> is officially recognized as a certified participant in the historic NBEMS national initiative that set the global record for the <strong>"Most viewers of an artificial intelligence in healthcare lesson live stream on YouTube."</strong> This milestone academic masterclass brought together 17,999 medical professionals.
                    </p>
                    <a 
                      href="https://www.guinnessworldrecords.com/world-records/782380-most-viewers-of-an-artificial-intelligence-in-healthcare-lesson-live-stream-on-yo" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-record"
                    >
                      VIEW RECORD DETAILS
                    </a>
                    <div className="slide-controls-panel">
                      <button className="btn-slider prev-slide-btn" onClick={prevSlide}>← Prev</button>
                      <button className="btn-slider next-slide-btn" onClick={nextSlide}>Next →</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Services Section Canvas */}
        <div id="services" className="section-wrapper">
          <section id="services-section" className="section">
            <div style={{ width: '100%' }}>
              <div className="cosmic-badge">Core Focus Dimensions</div>
              <h2>Clinical Pathways & Specialization Systems</h2>
              <p className="lead-text">
                Acquired fundamental medical expertise during MBBS training at <strong>Sree Mookambika Institute Of Medical Sciences</strong> (Padanilam, Kulasekharam). Approaching intricate micro-environments with calm, absolute observational methods.
              </p>
              
              <div className="grid-layout">
                <div className="card-nebula">
                  <h3>General Surgery Rigor</h3>
                  <p>Active precision operations and residency diagnostics framework executed within the dynamic matrix of Salem Polyclinic.</p>
                </div>
                <div className="card-nebula">
                  <h3>Neurological Aspiration</h3>
                  <p>Channelling deep analytical stargazing methods to prepare for complex structural neural network mapping models.</p>
                </div>
                <div className="card-nebula">
                  <h3>Observational Calm</h3>
                  <p>Utilizing high-contrast midnight aesthetics to frame patient interfaces with absolute reassurance parameters.</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Contact/Socials Section Canvas */}
        <div id="contact" className="section-wrapper">
          <section id="contact-section" className="section" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
            <div className="cosmic-badge">Broadcast Matrix</div>
            <h2>Connect Across the Constellations</h2>
            <p className="lead-text" style={{ maxWidth: '700px' }}>
              Access direct medical writing records, clinical broadcasts, updates, and astronomical updates across alternative integrated brand nodes.
            </p>
            
            <div className="social-button-matrix">
              <a href="https://www.instagram.com/dr_psycoma/" target="_blank" rel="noopener noreferrer" className="btn-brand btn-instagram">Instagram</a>
              <a href="https://x.com/dr_psycoma" target="_blank" rel="noopener noreferrer" className="btn-brand btn-x">X Platform</a>
              <a href="https://nextauthor.blogspot.com/" target="_blank" rel="noopener noreferrer" className="btn-brand btn-blogspot">Blogspot</a>
              <a href="https://www.facebook.com/shivaji.raj.33" target="_blank" rel="noopener noreferrer" className="btn-brand btn-facebook">Facebook</a>
              <a href="https://open.spotify.com/show/2zEF3zdnMq7hw4dN8g2Pvs?si=1387ecf1fdb54e2d" target="_blank" rel="noopener noreferrer" className="btn-brand btn-spotify">Spotify Podcast</a>
              <a href="https://www.youtube.com/@dr_psycoma" target="_blank" rel="noopener noreferrer" className="btn-brand btn-youtube">YouTube Channel</a>
              <a href="https://www.linkedin.com/in/dr-r-ajith-kumar-b2346a274/" target="_blank" rel="noopener noreferrer" className="btn-brand btn-linkedin">LinkedIn</a>
              <a href="https://www.quora.com/profile/AJITH-KUMAR-R-46" target="_blank" rel="noopener noreferrer" className="btn-brand btn-quora">Quora</a>
              <a href="https://www.researchgate.net/profile/Raj_Ajith_Kumar" target="_blank" rel="noopener noreferrer" className="btn-brand btn-researchgate">ResearchGate</a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Gemini;

