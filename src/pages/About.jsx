import { profile } from '../data/profile'

export default function About() {
  const { name, title, specialty, location, summary, credentials, experience, education, personal } =
    profile

  return (
    <>
      <section className="page-header">
        <h1>About {name}</h1>
        <p className="page-subtitle">{title}</p>
      </section>

      <section className="section">
        <h2>Career Summary</h2>
        <p className="prose">{summary}</p>
      </section>

      <section className="section">
        <h2>Qualifications & Credentials</h2>
        <ul className="check-list">
          {credentials.map((cred) => (
            <li key={cred}>{cred}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>Professional Experience</h2>
        <ol className="timeline">
          {experience.map((item) => (
            <li key={`${item.year}-${item.role}`} className="timeline-item">
              <span className="timeline-year">{item.year}</span>
              <div className="timeline-body">
                <h3>{item.role}</h3>
                <p>{item.org}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="section">
        <h2>Education</h2>
        <ol className="timeline">
          {education.map((item) => (
            <li key={`${item.year}-${item.degree}`} className="timeline-item">
              <span className="timeline-year">{item.year}</span>
              <div className="timeline-body">
                <h3>{item.degree}</h3>
                <p>{item.institution}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="section personal-details">
        <h2>Personal Details</h2>
        <div className="detail-grid">
          <div className="detail-block">
            <h3>Languages Spoken</h3>
            <ul>
              {personal.languages.map((lang) => (
                <li key={lang}>{lang}</li>
              ))}
            </ul>
          </div>
          <div className="detail-block">
            <h3>Interests</h3>
            <ul>
              {personal.interests.map((interest) => (
                <li key={interest}>{interest}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="prose">{personal.bio}</p>
      </section>
    </>
  )
}
