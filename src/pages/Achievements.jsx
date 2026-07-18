import Seo from '../components/Seo'
import { profile } from '../data/profile'

export default function Achievements() {
  const { name, specialty, location, achievements, memberships, seo } = profile

  const pageTitle = `${name} – Achievements & Awards | ${specialty}`
  const pageDescription = `Explore the professional achievements, awards, fellowships, and publications of ${name}, ${specialty.toLowerCase()} in ${location.city}.`

  return (
    <>
      <Seo
        title={pageTitle}
        description={pageDescription}
        path="/achievements"
        keywords={[...seo.defaultKeywords, 'awards', 'fellowship', 'publications', 'certifications'].join(', ')}
      />

      <section className="page-header">
        <h1>Achievements & Recognition</h1>
        <p className="page-subtitle">
          Awards, research grants, and contributions to surgical training
        </p>
      </section>

      <section className="section">
        <div className="achievement-grid">
          {achievements.map((item) => (
            <article key={item.title} className="achievement-card">
              <span className="achievement-year">{item.year}</span>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Professional Memberships</h2>
        <ul className="membership-list">
          {memberships.map((org) => (
            <li key={org}>{org}</li>
          ))}
        </ul>
      </section>
    </>
  )
}
