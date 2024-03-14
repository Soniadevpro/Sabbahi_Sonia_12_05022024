import React, { useState, useEffect } from 'react';

interface NavigationItem {
  name: string;
  id: string;
  action?: string;
}

const navigationItems: NavigationItem[] = [
  { name: '0.Home', id: 'home-section' },
  { name: '1.Skills', id: 'skills-section', action: 'scrollToSkills' },
  { name: '2.Projects', id: 'projects-section' },
  { name: '3.Courses', id: 'courses-section' },
  { name: '4.Contact', id: 'contact-section' },
];

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mettez à jour `scrolled` basé sur la position de défilement.
      const isScrolled = window.scrollY > 100;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
  
      // Exemple simplifié de logique pour déterminer la section active.
      // Cela suppose que chaque section a un offsetTop et une hauteur qui peut être comparée à window.scrollY.
      let currentSectionId = null;
      for (const item of navigationItems) {
        const sectionElement = document.getElementById(item.id);
        if (sectionElement) {
          const sectionTop = sectionElement.offsetTop;
          const sectionHeight = sectionElement.offsetHeight;
          if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSectionId = item.id;
            break; // Sortez de la boucle une fois la section actuelle trouvée.
          }
        }
      }
      setActiveSection(currentSectionId); // Mettez à jour l'état avec l'ID de la section actuelle.
    };
  
    // Écoutez l'événement de défilement pour mettre à jour la section active.
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Appel initial pour définir la section active lors du chargement de la page.
  
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
              <li key={item.id} className={activeSection === item.id ? 'scrolled' : ''}>
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