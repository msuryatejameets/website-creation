import { Link } from 'react-router-dom'
import { profile } from '../data/profile'

export default function Home() {
  const { name, title, location, summary, credentials } = profile;

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">{location.clinic}</p>
          <h1>{name}</h1>
          <p className="hero-title">{title}</p>
          <p className="hero-summary">{summary}</p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary">
              Get in Touch
            </Link>
            <Link to="/about" className="btn btn-secondary">
              View Career Profile
            </Link>
          </div>
        </div>
        <div className="hero-aside">
          <div className="info-card">
            <h2>Quick Credentials</h2>
            <ul className="credential-list">
              {credentials.slice(0, 4).map((cred) => (
                <li key={cred}>{cred}</li>
              ))}
            </ul>
          </div>
          <div className="info-card accent">
            <h2>Hospital Affiliation & Mode</h2>
            <p>
              <strong>{location.city}</strong>, {location.state}
            </p>
            <p>{location.clinic}</p>
          </div>
        </div>
      </section>

      <section className="section highlights">
        <h2>Why Patients Choose {name.split(' ').slice(-1)[0]}</h2>
        <div className="card-grid">
          <article className="card">
            <h3>Surgical Training</h3>
            <p>
              Hands-on experience in general surgery, emergency operative care, and
              perioperative management at a major teaching hospital.
            </p>
          </article>
          <article className="card">
            <h3>Neurosurgery Focus</h3>
            <p>
              Active observerships, research, and conference participation aimed at a
              future career in cranial and spinal neurosurgery.
            </p>
          </article>
          <article className="card">
            <h3>Academic Commitment</h3>
            <p>
              Published research and ongoing study in trauma surgery, surgical education,
              and neurosurgical outcomes.
            </p>
          </article>
        </div>
      </section>
    </>
  )
}
