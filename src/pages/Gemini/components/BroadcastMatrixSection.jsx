/**
 * BroadcastMatrixSection sub-component rendering social broadcast links matrix.
 * @param {Object} props
 * @param {Object} props.broadcastData - Broadcast matrix data structure from profile.gemini.broadcastMatrix.
 */
export default function BroadcastMatrixSection({ broadcastData }) {
  if (!broadcastData) return null;

  const { badge, heading, leadText, links = [] } = broadcastData;

  return (
    <div id="contact" className="section-wrapper">
      <section id="contact-section" className="section" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
        <div className="cosmic-badge">{badge}</div>
        <h2>{heading}</h2>
        <p className="lead-text" style={{ maxWidth: '700px' }}>
          {leadText}
        </p>

        <div className="social-button-matrix">
          {links.map((link) => (
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
  );
}
