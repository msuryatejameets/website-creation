import { useState } from 'react';
import { profile } from '../../data/profile';
import ThemeToggle from '../../components/ThemeToggle';

const Navbar = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const avatarImage = profile.gemini?.aboutSlides[0]?.image;
  const doctorName = profile.gemini?.hero?.doctorName || profile.name;

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'Background' },
    { id: 'services', label: 'Expertise' },
    { id: 'contact', label: 'Channels' }
  ];

  const handleScroll = (e, id) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <div className="navbar-container">
      <nav className="navbar-island">
        <a 
          href="#hero" 
          onClick={(e) => handleScroll(e, 'hero')} 
          className="nav-profile-block"
        >
          <div className="nav-avatar" style={{ backgroundImage: `url(${avatarImage})` }}></div>
          <div className="nav-logo">{doctorName}<span>.</span></div>
        </a>

        <ul className={`nav-links ${isMenuOpen ? 'is-open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleScroll(e, item.id)}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Global Reusable Theme Switcher Toggle Button */}
        <ThemeToggle />

        {/* Mobile Hamburger Toggle Button */}
        <button
          className={`mobile-nav-toggle ${isMenuOpen ? 'is-open' : ''}`}
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle cosmic navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;