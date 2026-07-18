import Seo from '../components/Seo'
import { profile } from '../data/profile'

export default function Contact() {
  const { name, specialty, location, contact, social } = profile

  const pageTitle = `Contact ${name} | ${specialty} in ${location.city}`
  const pageDescription = `Contact ${name} at ${location.clinic}, ${location.city}. Phone: ${contact.phone}. Hospital duty hours and department address.`

  return (
    <>
      <Seo
        title={pageTitle}
        description={pageDescription}
        path="/contact"
        schemaType="business"
      />

      <section className="page-header">
        <h1>Contact</h1>
        <p className="page-subtitle">
          Professional contact details at {location.clinic}
        </p>
      </section>

      <section className="section contact-section">
        <div className="contact-grid">
          <address className="contact-card">
            <h2>Hospital Details</h2>
            <dl>
              <div>
                <dt>Institution</dt>
                <dd>{location.clinic}</dd>
              </div>
              <div>
                <dt>Address</dt>
                <dd>{contact.address}</dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd>
                  <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>
                </dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </dd>
              </div>
              <div>
                <dt>Duty Hours</dt>
                <dd>{contact.hours}</dd>
              </div>
            </dl>
            <a
              href={contact.mapUrl}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Directions
            </a>
          </address>

          <div className="contact-card">
            <h2>Professional Profiles</h2>
            <ul className="link-list">
              <li>
                <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn Profile
                </a>
              </li>
              <li>
                <a href={social.googleScholar} target="_blank" rel="noopener noreferrer">
                  Google Scholar
                </a>
              </li>
              <li>
                <a href={social.hospitalProfile} target="_blank" rel="noopener noreferrer">
                  Hospital Profile
                </a>
              </li>
            </ul>
            <p className="contact-note">
              For medical emergencies, please call your local emergency number or visit the
              nearest emergency department.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
