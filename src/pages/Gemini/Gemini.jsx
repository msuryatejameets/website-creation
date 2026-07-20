import { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Navbar from './NavBar';
import { profile } from '../../data/profile';
import './Gemini.css';

function Gemini() {
  const [activeSection, setActiveSection] = useState('hero');
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const { theme } = useTheme();

  const { hero, aboutSlides, coreFocus, broadcastMatrix } = profile.gemini;
  const totalSlides = aboutSlides.length;

  useEffect(() => {
    const sections = document.querySelectorAll('.section-wrapper');

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px',
      threshold: 0,
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

  const slide1 = aboutSlides[0];
  const slide2 = aboutSlides[1];

  return (
    <div className="portfolio-app" data-theme={theme}>
      <Navbar activeSection={activeSection} />

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
                  {hero.badge}
                </div>
                <h1>
                  {hero.titlePrefix}
                  <span>{hero.titleHighlight}</span>
                </h1>
                <h4>{hero.doctorName}</h4>
                <p className="lead-text">{hero.leadText}</p>
                <a
                  href={hero.hospitalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-brand"
                  style={{ background: 'var(--accent-cosmic)', width: 'auto', display: 'inline-flex', textTransform: 'uppercase' }}
                >
                  {hero.hospitalButtonText}
                </a>
              </div>
              <div
                className="image-container"
                style={{ backgroundImage: `url(${hero.image})` }}
              ></div>
            </div>
          </section>
        </div>

        {/* About Section Canvas (Flexible, Unified Height Layout Slider) */}
        <div id="about" className="section-wrapper">
          <section id="about-section" className="section">
            <div className="about-slider-wrapper">
              {/* SLIDE 1: Celestial Photography */}
              {slide1 && (
                <div className={`about-slide ${activeSlideIndex === 0 ? 'active-slide' : ''}`}>
                  <div className="slide-split-layout">
                    <div className="slide-image-container">
                      <img src={slide1.image} alt={slide1.imageAlt} />
                    </div>
                    <div className="achievement-card">
                      <span className="badge-certified">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                        {' '}{slide1.badge}
                      </span>
                      <p className="achievement-description"></p>
                      <h1>
                        {slide1.titlePrefix}
                        <span>{slide1.titleHighlight}</span>
                      </h1>
                      <a
                        href={slide1.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={slide1.btnClass}
                      >
                        {slide1.urlLabel}
                      </a>
                      <div className="slide-controls-panel">
                        <button className="btn-slider prev-slide-btn" onClick={prevSlide}>← Prev</button>
                        <button className="btn-slider next-slide-btn" onClick={nextSlide}>Next →</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 2: Guinness World Record */}
              {slide2 && (
                <div className={`about-slide ${activeSlideIndex === 1 ? 'active-slide' : ''}`}>
                  <div className="slide-split-layout">
                    <div className="slide-image-container">
                      <img src={slide2.image} alt={slide2.imageAlt} />
                    </div>
                    <div className="achievement-card">
                      <span className="badge-certified">{slide2.badge}</span>
                      <h3 className="achievement-title">{slide2.title}</h3>
                      <p className="achievement-description">
                        <strong>Dr. R. Ajith Kumar</strong> is officially recognized as a certified participant in the historic NBEMS national initiative that set the global record for the <strong>"Most viewers of an artificial intelligence in healthcare lesson live stream on YouTube."</strong> This milestone academic masterclass brought together 17,999 medical professionals.
                      </p>
                      <a
                        href={slide2.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={slide2.btnClass}
                      >
                        {slide2.urlLabel}
                      </a>
                      <div className="slide-controls-panel">
                        <button className="btn-slider prev-slide-btn" onClick={prevSlide}>← Prev</button>
                        <button className="btn-slider next-slide-btn" onClick={nextSlide}>Next →</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>

        {/* Services Section Canvas */}
        <div id="services" className="section-wrapper">
          <section id="services-section" className="section">
            <div style={{ width: '100%' }}>
              <div className="cosmic-badge">{coreFocus.badge}</div>
              <h2>{coreFocus.heading}</h2>
              <p className="lead-text">
                Acquired fundamental medical expertise during MBBS training at <strong>Sree Mookambika Institute Of Medical Sciences</strong> (Padanilam, Kulasekharam). Approaching intricate micro-environments with calm, absolute observational methods.
              </p>

              <div className="grid-layout">
                {coreFocus.dimensions.map((dim) => (
                  <div key={dim.title} className="card-nebula">
                    <h3>{dim.title}</h3>
                    <p>{dim.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Contact/Socials Section Canvas */}
        <div id="contact" className="section-wrapper">
          <section id="contact-section" className="section" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
            <div className="cosmic-badge">{broadcastMatrix.badge}</div>
            <h2>{broadcastMatrix.heading}</h2>
            <p className="lead-text" style={{ maxWidth: '700px' }}>
              {broadcastMatrix.leadText}
            </p>

            <div className="social-button-matrix">
              {broadcastMatrix.links.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn-brand ${link.className}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Gemini;


