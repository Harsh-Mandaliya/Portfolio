import React, { useState } from 'react';
import { aboutData } from '../data/portfolioData.jsx';

const About = () => {
  const [activeTab, setActiveTab] = useState('who'); // Default tab
  
  // This array now just pulls the data objects directly
  const tabs = [aboutData.who, aboutData.what, aboutData.passion];

  return (
    <section id="about" className="py-16 sm:py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto scroll-animate">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-dark tracking-tight">
            About Me
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Explore my profile to understand who I am, what I do, and what drives me.
          </p>
        </div>

        {/* Tab Buttons */}
        <div id="about-tabs" className="mt-12 mb-8 flex flex-col sm:flex-row justify-center gap-4 scroll-animate" style={{ animationDelay: '100ms' }}>
          {/* FIX: We map over the 'tabs' array.
            The 'key' (e.g., 'passion') from portfolioData.jsx is now used for both:
            1. The React key
            2. The onClick handler to set the active tab
          */}
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`about-tab px-6 py-3 rounded-lg font-bold text-lg text-gray-700 bg-gray-100 transition-all duration-300 ${
                activeTab === tab.key ? 'bg-primary text-white shadow-lg' : 'hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.icon} {tab.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="max-w-3xl mx-auto scroll-animate" style={{ animationDelay: '200ms' }}>
          {/* FIX: Each content block now correctly checks the 'activeTab' state
            against the keys 'who', 'what', and 'passion'.
          */}
          
          {/* Who I Am Content */}
          <div className={`about-tab-content text-gray-700 text-lg space-y-4 ${activeTab === 'who' ? 'block' : 'hidden'}`}>
            {aboutData.who.content.map((p, i) => <p key={i}>{p}</p>)}
          </div>

          {/* What I Do Content */}
          <div className={`about-tab-content text-gray-700 text-lg space-y-4 ${activeTab === 'what' ? 'block' : 'hidden'}`}>
            <ul className="list-disc list-inside space-y-3">
              {aboutData.what.content.map((item, i) => (
                <li key={i}>
                  <span className="font-bold text-neutral-dark">{item.title}</span> {item.text}
                </li>
              ))}
            </ul>
          </div>

          {/* My Passion Content */}
          <div className={`about-tab-content text-gray-700 text-lg space-y-4 ${activeTab === 'passion' ? 'block' : 'hidden'}`}>
            {aboutData.passion.content.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;