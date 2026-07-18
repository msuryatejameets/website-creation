

const Navbar = ({ activeSection }) => {
  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'Background' },
    { id: 'services', label: 'Expertise' },
    { id: 'contact', label: 'Channels' }
  ];

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="navbar-container">
      <nav className="navbar-island">
        <a 
          href="#hero" 
          onClick={(e) => handleScroll(e, 'hero')} 
          className="nav-profile-block"
        >
          <div className="nav-avatar"></div>
          <div className="nav-logo">Dr. R. Ajith Kumar<span>.</span></div>
        </a>
        <ul className="nav-links">
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
      </nav>
    </div>
  );
};

export default Navbar;