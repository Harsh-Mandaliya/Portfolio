import React from 'react';
import { projectsData } from '../data/portfolioData';
import { IoLogoGithub, IoArrowForwardOutline } from 'react-icons/io5';

const Work = ({ openModal }) => {
  return (
    <section id="work" className="py-16 sm:py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto scroll-animate">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-dark tracking-tight">
            My Work
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            A selection of professional projects. Click "View Details" for a case study.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className="project-card bg-white rounded-xl shadow-lg overflow-hidden scroll-animate"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="w-full h-52 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                {project.icon}
              </div>
              <div className="p-6">
                <h3 className="font-serif font-bold text-xl text-neutral-dark">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-gray-100 text-gray-700 font-medium text-xs px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
                {/* View Details Button */}
                <div className="mt-6 flex items-center gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-gray-600 hover:text-primary font-medium transition-colors"
                  >
                    <IoLogoGithub />
                    <span>GitHub Repo</span>
                  </a>
                  <button
                    className="view-details-btn text-primary font-medium flex items-center gap-1.5"
                    onClick={() => openModal(project.modalData)}
                  >
                    <span>View Details</span>
                    <IoArrowForwardOutline />
                  </button>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Work;