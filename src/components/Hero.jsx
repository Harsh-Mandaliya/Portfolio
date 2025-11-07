import React from 'react';
import useTypewriter from '../hooks/useTypewriter';
import { heroData } from '../data/portfolioData';

const Hero = () => {
  const typedText = useTypewriter(heroData.titles);

  return (
    <section id="home" className="min-h-screen flex items-center pt-28 pb-12 md:pt-24 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Hero Text Content */}
          <div className="scroll-animate order-2 md:order-1">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-dark tracking-tight">
              Hi, I’m {heroData.name}
            </h1>
            <p className="mt-3 text-xl sm:text-2xl font-medium text-primary h-8 sm:h-14">
              <span className="typing-cursor">{typedText}</span>
            </p>
            <p className="mt-6 text-lg text-gray-700 max-w-xl">
              {heroData.valueProposition}
            </p>
            
            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="/Harsh_Mandaliya_Resume.pdf" // From public folder
                download="Harsh_Mandaliya_Resume.pdf"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-300 transform hover:scale-105"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-primary text-base font-medium rounded-md text-primary bg-transparent hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-300"
              >
                Schedule a Call
              </a>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="flex items-center justify-center scroll-animate order-1 md:order-2 mb-8 md:mb-0" style={{ animationDelay: '200ms' }}>
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full -translate-x-4 translate-y-4 opacity-30 blur-2xl"></div>
              <div className="relative w-full aspect-square bg-white/70 backdrop-blur-sm rounded-full shadow-2xl flex items-center justify-center border-4 border-white overflow-hidden">
                <img
                  src="/harsh.jpeg" // From public folder
                  alt="Harsh Mandaliya"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;