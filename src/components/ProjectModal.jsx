import React, { useEffect } from 'react';
import { IoCloseOutline, IoCheckmarkCircleOutline } from 'react-icons/io5';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      id="project-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        id="project-modal-content"
        className="bg-white w-full max-w-3xl rounded-xl shadow-2xl p-6 sm:p-8 transform transition-transform duration-300 scale-100"
        onClick={(e) => e.stopPropagation()} // Prevent closing modal on content click
      >
        <div className="flex justify-between items-center">
          <h3 id="modal-title" className="font-serif font-bold text-2xl text-neutral-dark">
            {project.title}
          </h3>
          <button
            id="modal-close-btn"
            className="p-2 rounded-full text-gray-500 hover:bg-gray-100"
            onClick={onClose}
          >
            <IoCloseOutline className="text-3xl" />
          </button>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-4" id="modal-tags">
          {project.fullTags.map(tag => (
            <span key={tag} className="bg-gray-100 text-gray-700 font-medium text-xs px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="mt-6 space-y-4 text-gray-700" id="modal-details">
          {project.details.map((detail, index) => (
            <div key={index} className="flex items-start gap-3">
              <IoCheckmarkCircleOutline className="text-xl text-primary flex-shrink-0 mt-1" />
              <p>{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;