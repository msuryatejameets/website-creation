import { profile } from '../data/profile'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="footer-brand">{profile.seo.siteName}</p>
        <p className="footer-meta">
          {profile.specialty} · {profile.location.city}, {profile.location.country}
        </p>
        <p className="footer-copy">
          &copy; {year} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
