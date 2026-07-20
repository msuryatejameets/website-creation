/**
 * HeroSection sub-component rendering the hero layout, badge, doctor info, and call-to-action button.
 * @param {Object} props
 * @param {Object} props.heroData - Hero section data structure from profile.gemini.hero.
 */
export default function HeroSection({ heroData }) {
  if (!heroData) return null;

  const {
    badge,
    titlePrefix,
    titleHighlight,
    doctorName,
    leadText,
    hospitalUrl,
    hospitalButtonText,
    image,
  } = heroData;

  return (
    <div id="hero" className="section-wrapper">
      <section id="hero-section" className="section">
        <div className="split-layout">
          <div>
            <div className="cosmic-badge">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              {badge}
            </div>
            <h1>
              {titlePrefix}
              <span>{titleHighlight}</span>
            </h1>
            <h4>{doctorName}</h4>
            <p className="lead-text">{leadText}</p>
            <a
              href={hospitalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brand"
              style={{ background: 'var(--accent-cosmic)', width: 'auto', display: 'inline-flex', textTransform: 'uppercase' }}
            >
              {hospitalButtonText}
            </a>
          </div>
          <div
            className="image-container"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        </div>
      </section>
    </div>
  );
}
