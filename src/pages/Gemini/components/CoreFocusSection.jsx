/**
 * CoreFocusSection sub-component rendering clinical pathways and core focus dimension cards.
 * @param {Object} props
 * @param {Object} props.coreFocusData - Core focus data structure from profile.gemini.coreFocus.
 */
export default function CoreFocusSection({ coreFocusData }) {
  if (!coreFocusData) return null;

  const { badge, heading, dimensions = [] } = coreFocusData;

  return (
    <div id="services" className="section-wrapper">
      <section id="services-section" className="section">
        <div style={{ width: '100%' }}>
          <div className="cosmic-badge">{badge}</div>
          <h2>{heading}</h2>
          <p className="lead-text">
            Acquired fundamental medical expertise during MBBS training at <strong>Sree Mookambika Institute Of Medical Sciences</strong> (Padanilam, Kulasekharam). Approaching intricate micro-environments with calm, absolute observational methods.
          </p>

          <div className="grid-layout">
            {dimensions.map((dim) => (
              <div key={dim.title} className="card-nebula">
                <h3>{dim.title}</h3>
                <p>{dim.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
