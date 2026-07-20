import { profile } from '../data/profile'

export default function Achievements() {
  const { achievements, memberships } = profile

  return (
    <>
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
