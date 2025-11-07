import React, { useState, useMemo } from 'react';
import { skillsData, skillFilters } from '../data/portfolioData';

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredSkills = useMemo(() => {
    if (activeFilter === 'all') {
      return skillsData;
    }
    return skillsData.filter(skill => skill.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="skills" className="py-16 sm:py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto scroll-animate">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-dark tracking-tight">
            My Technical Toolbox
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            A filterable collection of the languages, frameworks, and technologies I use to build robust applications.
          </p>
        </div>

        {/* Filter Buttons */}
        <div id="skill-filters" className="mt-12 flex flex-wrap justify-center gap-3 scroll-animate" style={{ animationDelay: '100ms' }}>
          {skillFilters.map((filter) => (
            <button
              key={filter.filter}
              className={`skill-filter px-5 py-2 rounded-full font-medium text-gray-700 bg-gray-100 transition-all duration-300 ${
                activeFilter === filter.filter ? 'bg-primary text-white' : 'hover:bg-gray-200'
              }`}
              onClick={() => setActiveFilter(filter.filter)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div id="skill-list-container" className="mt-12 max-h-[300px] sm:max-h-[400px] overflow-y-auto scroll-animate" style={{ animationDelay: '200ms' }}>
          <div id="skill-list" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
            {filteredSkills.map((skill) => (
              <div
                key={skill.name}
                className="skill-card flex items-center gap-3 p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                {skill.icon}
                <span className="font-medium text-neutral-dark">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;