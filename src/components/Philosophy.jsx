import React from 'react';
import { philosophyData } from '../data/portfolioData';

const Philosophy = () => {
  return (
    <section id="philosophy" className="py-16 sm:py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto scroll-animate">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-dark tracking-tight">
            My Philosophy
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            My work is built on a foundation of strong technical and professional principles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {philosophyData.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 scroll-animate"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {item.icon}
              <h3 className="font-serif font-bold text-xl text-neutral-dark mt-4">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;