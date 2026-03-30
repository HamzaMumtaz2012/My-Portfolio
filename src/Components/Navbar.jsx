import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const isClickScroll = useRef(false);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (isClickScroll.current) return;

      const sections = ['home', 'skills', 'testimonials', 'about', 'contact'];
      let current = '';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200) {
            current = section;
          }
        }
      }
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (section) => {
    setIsOpen(false);
    setActiveSection(section);
    
    isClickScroll.current = true;
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }
    
    scrollTimeout.current = setTimeout(() => {
      isClickScroll.current = false;
    }, 1000);
  };

  return (
    <nav>
      <h2>HamzaCodeHub</h2>

      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        <span className={isOpen ? "bar active-bar" : "bar"}></span>
        <span className={isOpen ? "bar active-bar" : "bar"}></span>
        <span className={isOpen ? "bar active-bar" : "bar"}></span>
      </div>

      <ul className={`right ${isOpen ? "open" : ""}`}>
        <li>
          <a href="#home" onClick={() => handleLinkClick('home')} className={activeSection === 'home' ? 'active' : ''}>Home</a>
        </li>
        <li>
          <a href="#skills" onClick={() => handleLinkClick('skills')} className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
        </li>
        <li>
          <a href="#testimonials" onClick={() => handleLinkClick('testimonials')} className={activeSection === 'testimonials' ? 'active' : ''}>Testimonials</a>
        </li>
        <li>
          <a href="#about" onClick={() => handleLinkClick('about')} className={activeSection === 'about' ? 'active' : ''}>About</a>
        </li>
        <li>
          <a href="#contact" onClick={() => handleLinkClick('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
