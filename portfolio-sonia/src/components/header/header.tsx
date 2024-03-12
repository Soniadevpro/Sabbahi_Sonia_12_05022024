import React, { useState, useEffect } from 'react';
import "./header.scss"
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const scrollToSection = (id: string): void => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <header>
      <div className={`navbar ${scrolled ? 'scrolled' : ''}`} >
          <ul>
            {navigationItems.map((item) => (
              <li key={item.id} >
                {item.action ? (
                  <button onClick={() => scrollToSection(item.id)}>{item.name}</button>
                ) : (
                  <span>{item.name}</span> // or use <a href={`#${item.id}`}> for actual links
                )}
              </li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;



// style={{ backgroundColor: scrolled ? 'white' : 'transparent' }}