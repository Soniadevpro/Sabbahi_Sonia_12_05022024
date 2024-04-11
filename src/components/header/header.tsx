import React, { useState, useEffect } from 'react';

interface NavigationItem {
  name: string;
  id: string;
  action?: string;
}

const navigationItems: NavigationItem[] = [
  { name: '0.Accueil', id: 'home-section', action: 'scrollToHome' },
  { name: '1.Skills', id: 'skills-section', action: 'scrollToSkills' },
  { name: '2.Projets', id: 'projects-section', action: 'scrollToProjects' },
  { name: '3.Formations', id: 'courses-section', action: 'scrollToCourses' },
];

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const checkActiveSection = () => {
    let currentSectionId = null;
    navigationItems.forEach((item) => {
      const sectionElement = document.getElementById(item.id);
      if (sectionElement) {
        const sectionTop = sectionElement.offsetTop - 100;
        const sectionBottom = sectionTop + sectionElement.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
          currentSectionId = item.id;
        }
      }
    });

    setActiveSection(currentSectionId);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      checkActiveSection();
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const scrollToSection = (id: string): void => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        checkActiveSection();
      }, 100);
    }
  };

  return (
    <header id='home-section'>
      <input id="menu__toggle" type="checkbox" checked={menuOpen} onChange={toggleMenu} />
      <label className="menu__btn" htmlFor="menu__toggle">
        <span></span>
      </label>
      <ul className={`menu__box ${menuOpen ? '' : ''}`} style={{ left: menuOpen ? '0' : '-100%' }}>
        {navigationItems.map((item) => (
          <li key={item.id} className={activeSection === item.id ? 'active' : ''}>
            <a className="menu__item" href="#" onClick={() => {
              scrollToSection(item.id);
              setMenuOpen(false);
            }}>{item.name.split('.')[1]}</a>
          </li>
        ))}
      </ul>
      <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <ul>
          {navigationItems.map((item) => (
            <li key={item.id} className={activeSection === item.id ? 'active' : ''}>
              {item.action ? (
                <button onClick={() => scrollToSection(item.id)}>{item.name.split('.')[1]}</button>
              ) : (
                <span>{item.name.split('.')[1]}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="box-contact">
        <a href="#contact-section" className="button type--A">
          <div className="button__line"></div>
          <div className="button__line"></div>
          <span className="button__text">Contactez moi</span>
          <div className="button__drow1"></div>
          <div className="button__drow2"></div>
        </a>
      </div>
    </header>
  );
};

export default Header;