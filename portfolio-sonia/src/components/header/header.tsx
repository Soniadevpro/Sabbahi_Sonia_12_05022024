import React, { useState, useEffect } from 'react';

interface NavigationItem {
  name: string;
  id: string;
  action?: string;
}

const navigationItems: NavigationItem[] = [
  { name: '0.Home', id: 'home-section', action: 'scrollToHome' },
  { name: '1.Skills', id: 'skills-section', action: 'scrollToSkills' },
  { name: '2.Projects', id: 'projects-section', action: 'scrollToProjects' },
  { name: '3.Courses', id: 'courses-section', action: 'scrollToCourses' },
  { name: '4.Contact', id: 'contact-section', action: 'scrollToContact' },
];

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
  
      let currentSectionId = null;
      navigationItems.forEach((item) => {
        const sectionElement = document.getElementById(item.id);
        if (sectionElement) {
          const sectionTop = sectionElement.offsetTop - 100; // Ajout d'une marge
          const sectionBottom = sectionTop + sectionElement.offsetHeight;
          if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
            currentSectionId = item.id;
          }
        }
      });
  
      setActiveSection(currentSectionId);
    };
  
    window.addEventListener('scroll', handleScroll);
    handleScroll();
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]); // Dépendances de l'effet

  const scrollToSection = (id: string): void => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <header>
        <div className="containernavbar">

      <div className={`navbar ${scrolled ? 'scrolled' : ''}`} >
          <ul>
          {navigationItems.map((item) => (
  <li key={item.id} className={activeSection === item.id ? 'active' : ''}>
    {item.action ? (
      <button onClick={() => scrollToSection(item.id)}>{item.name}</button>
    ) : (
      <span>{item.name}</span> // or use <a href={`#${item.id}`}> for actual links
    )}
  </li>
))}
          </ul>
        </div>
        </div>
      </header>
    </div>
  );
};

export default Header;



// style={{ backgroundColor: scrolled ? 'white' : 'transparent' }}