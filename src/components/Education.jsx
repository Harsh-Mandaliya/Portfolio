import React from 'react';
import { educationData } from '../data/portfolioData';

const Education = () => {
  const { degree, institution, notes, years } = educationData;

  return (
    <section id="education" className="py-16 sm:py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center scroll-animate">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-dark tracking-tight">
            Education
          </h2>
          
          <div className="mt-10 relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20" aria-hidden="true"></div>
            
            <div className="relative text-left p-6 sm:p-8 bg-background rounded-xl shadow-lg border border-gray-100">
              <div className="absolute -left-4 top-10 w-8 h-8 bg-primary rounded-full border-4 border-white"></div>
              <h3 className="font-serif font-bold text-xl text-neutral-dark">
                {degree}
              </h3>
              <p className="text-lg text-primary font-medium mt-1">
                {institution}
              </p>
              <p className="text-gray-600 text-base mt-2">
                {notes}
              </p>
              <p className="text-gray-500 text-sm font-medium mt-2">
                {years}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;