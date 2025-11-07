import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi'; // Hamburger icons

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#philosophy", label: "Philosophy" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Sticky header logic
  useEffect(() => {
    const handleScroll = () => {
      // Check for hero section intersection instead of just scrollY
      const hero = document.getElementById('home');
      if (hero) {
        const heroRect = hero.getBoundingClientRect();
        // Add 'scrolled' class when the bottom of the hero section is 
        // above the top of the viewport (plus a 100px margin)
        setIsScrolled(heroRect.bottom < 100);
      } else {
        // Fallback if hero isn't found
        setIsScrolled(window.scrollY > 100);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  }

  return (
    <header 
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#" className="flex-shrink-0 flex items-center gap-2">
            <span className="font-serif text-3xl font-bold text-primary">HM</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="font-medium text-gray-700 hover:text-primary transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#contact" className="inline-flex items-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-300 transform hover:scale-105">
              Hire Me
            </a>
          </div>

          {/* Mobile Nav Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              id="mobile-menu-button"
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <HiX className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <HiMenu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              onClick={closeMobileMenu}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeMobileMenu}
            className="block w-full text-left mt-2 px-3 py-3 rounded-md text-base font-medium text-white bg-primary hover:bg-primary/90"
          >
            Hire Me
          </a>
          <a
            href="/Harsh_Mandaliya_Resume.pdf"
            download="Harsh_Mandaliya_Resume.pdf"
            onClick={closeMobileMenu}
            className="block w-full text-left px-3 py-3 rounded-md text-base font-medium text-primary border border-primary hover:bg-primary/10"
          >
            Download Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;