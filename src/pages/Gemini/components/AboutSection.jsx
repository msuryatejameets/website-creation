import { useState } from 'react';

/**
 * AboutSection sub-component managing slider state and rendering achievement slides.
 * @param {Object} props
 * @param {Array} props.slides - Array of slide objects from profile.gemini.aboutSlides.
 */
export default function AboutSection({ slides = [] }) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const totalSlides = slides.length;

  if (!totalSlides) return null;

  const nextSlide = () => {
    setActiveSlideIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setActiveSlideIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const slide1 = slides[0];
  const slide2 = slides[1];
  const slide3 = slides[2];

  return (
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
           {/* SLIDE 3: Tennis */}
          {slide3 && (
            <div className={`about-slide ${activeSlideIndex === 2 ? 'active-slide' : ''}`}>
              <div className="slide-split-layout">
                <div className="slide-image-container">
                  <img src={slide3.image} alt={slide3.imageAlt} />
                </div>
                <div className="achievement-card">
                  <span className="badge-certified">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    {' '}{slide3.badge}
                  </span>
                  <p className="achievement-description"></p>
                  <h1>
                    {slide3.titlePrefix}
                    <span>{slide3.titleHighlight}</span>
                  </h1>
                  <a
                    href={slide3.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={slide3.btnClass}
                  >
                    {slide3.urlLabel}
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
  );
}
