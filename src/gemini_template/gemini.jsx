import React, { useState, useEffect } from 'react';
import Navbar from './gemininavbar';
import './gemini.css';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sections = document.querySelectorAll('.section-wrapper');
    
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -45% 0px',
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

  return (
    <div className="portfolio-app">
      <Navbar activeSection={activeSection} />

      <main>
        {/* Hero Section */}
        <div id="hero" className="section-wrapper">
          <section id="hero-section" classclassName="section">
            <div className="split-layout">
              <div>
                <div className="cosmic-badge">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                  Junior Resident & Aspiring Neurosurgeon
                </div>
                <h1>Navigating the Delicate <span>Inner Cosmos</span></h1>
                <h4>Department of General Surgery</h4>
                <p className="lead-text">
                  Bridging structural clinical rigor at Salem Polyclinic Hospital with the vast awe of deep-space cosmic systems. 
                  Mapping structural biological frameworks with absolute surgical discipline.
                </p>
                <a 
                  href="#about" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-brand" 
                  style={{ background: 'var(--accent-cosmic)', width: 'auto', display: 'inline-flex' }}
                >
                  View Clinical Foundation
                </a>
              </div>
              <div className="image-container"></div>
            </div>
          </section>
        </div>

        {/* About Section */}
        <div id="about" className="section-wrapper">
          <section id="about-section" className="section">
            <div className="split-layout">
              <div className="layered-images">
                <div className="img-main"></div>
                <div className="img-offset"></div>
              </div>
              <div>
                <div className="cosmic-badge">Clinical Foundation</div>
                <h2>Medical Rigor & Astronomical Perspective</h2>
                <p className="lead-text">
                  Acquired fundamental medical expertise during MBBS training at <strong>Sree Mookambika Institute Of Medical Sciences</strong> (Padanilam, Kulasekharam). 
                  Applying macro astronomical perspective to microscopic diagnostic landscapes to offer clear alignment options.
                </p>
                <p className="lead-text" style={{ fontSize: '0.95rem', color: 'var(--text-nebula-muted)' }}>
                  Currently operating at Salem Polyclinic Hospital (K N RAO Hospital) — 250, Omalur Main Rd, Salem, Tamil Nadu 636007.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Services Section */}
        <div id="services" className="section-wrapper">
          <section id="services-section" className="section">
            <div style={{ width: '100%' }}>
              <div className="cosmic-badge">Core Focus Dimensions</div>
              <h2>Clinical Pathways & Specialization Systems</h2>
              <p className="lead-text">Approaching intricate micro-environments with calm, absolute observational methods.</p>
              
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

        {/* Contact/Socials Section */}
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
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;