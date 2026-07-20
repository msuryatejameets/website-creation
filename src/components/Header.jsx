import { NavLink } from 'react-router-dom'
import { profile } from '../data/profile'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/achievements', label: 'Achievements' },
  { to: '/contact', label: 'Contact' },
  { to: '/gemini', label: 'Cosmic View' },
]

export default function Header() {

  return (
    <header className="site-header">
      <div className="header-inner">
        <NavLink to="/" className="brand">
          <span className="brand-name">{profile.name}</span>
          <span className="brand-tagline">{profile.specialty}</span>
        </NavLink>

        <nav className={`site-nav`} aria-label="Main navigation">
          <ul>
            {navLinks.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  className={({ isActive }) => (isActive ? 'active' : undefined)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
