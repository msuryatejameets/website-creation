import { useState } from 'react'
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
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen((prev) => !prev)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="site-header">
      <div className="header-inner">
        <NavLink to="/" className="brand" onClick={closeMenu}>
          <span className="brand-name">{profile.name}</span>
          <span className="brand-tagline">{profile.specialty}</span>
        </NavLink>

        <button
          className={`nav-toggle ${isMenuOpen ? 'is-open' : ''}`}
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle main navigation menu"
          aria-controls="main-site-nav"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav
          id="main-site-nav"
          className={`site-nav ${isMenuOpen ? 'is-open' : ''}`}
          aria-label="Main navigation"
        >
          <ul>
            {navLinks.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  onClick={closeMenu}
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

