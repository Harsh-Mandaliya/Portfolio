import React, { useState, useEffect } from 'react';

// FIX: Added the .jsx extension to all component imports
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Philosophy from './components/Philosophy.jsx';
import Skills from './components/Skills.jsx';
import Work from './components/Work.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ProjectModal from './components/ProjectModal.jsx';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  // --- Scroll Animations Logic ---
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.scroll-animate');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => observer.observe(el));

    // Fallback for elements already in view
    setTimeout(() => {
      animatedElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0 && !el.classList.contains('is-visible')) {
          el.classList.add('is-visible');
          observer.unobserve(el);
        }
      });
    }, 100);

    return () => observer.disconnect();
  }, []);

  // --- Modal Logic ---
  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Philosophy />
        <Skills />
        <Work openModal={openModal} />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ProjectModal project={selectedProject} onClose={closeModal} />
    </>
  );
}

export default App;