import React from 'react';
import { contactData } from '../data/portfolioData';
import { IoLogoLinkedin, IoLogoGithub, IoMailOutline } from 'react-icons/io5';

const Footer = () => {
  return (
    <footer className="bg-neutral-dark text-gray-400">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex justify-center space-x-6">
            <a href={contactData.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <IoLogoLinkedin className="text-2xl" />
            </a>
            <a href={contactData.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <span className="sr-only">GitHub</span>
              <IoLogoGithub className="text-2xl" />
            </a>
            <a href={`mailto:${contactData.email}`} className="hover:text-white transition-colors">
              <span className="sr-only">Email</span>
              <IoMailOutline className="text-2xl" />
            </a>
          </div>
          <div className="text-center">
            <p className="text-base">
              &copy; {new Date().getFullYear()} Harsh Mandaliya
            </p>
            <p className="text-sm mt-1">
              Handcrafted by Harsh Mandaliya
            </p>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="#about" className="text-sm hover:text-white transition-colors">About</a>
            <a href="#work" className="text-sm hover:text-white transition-colors">Work</a>
            <a href="#contact" className="text-sm hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;