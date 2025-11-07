import React, { useState } from 'react';
import { contactLinks } from '../data/portfolioData';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          
          <div className="scroll-animate">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-dark tracking-tight">
              Let's Connect
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              Interested in collaborating or have a question? Feel free to reach out. I'm always open to discussing new projects and opportunities.
            </p>

            <div className="mt-10 space-y-6">
              {contactLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.isLink === false ? null : link.href}
                  target={link.isLink === false ? null : "_blank"}
                  rel={link.isLink === false ? null : "noopener noreferrer"}
                  className={`flex items-center gap-4 group ${link.isLink !== false ? 'cursor-pointer' : 'cursor-default'}`}
                >
                  <span className={`flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary ${link.isLink !== false ? 'transition-colors group-hover:bg-primary group-hover:text-white' : ''}`}>
                    {link.icon}
                  </span>
                  <div>
                    <span className="text-lg font-medium text-neutral-dark">{link.title}</span>
                    <p className={`text-gray-600 ${link.isLink !== false ? 'group-hover:text-primary transition-colors' : ''}`}>{link.text}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 sm:p-10 rounded-xl shadow-2xl scroll-animate" style={{ animationDelay: '100ms' }}>
            {!isSubmitted ? (
              <form id="contact-form" className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <div className="mt-1">
                    <input type="text" name="name" id="name" required className="w-full px-4 py-3 rounded-lg bg-background border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Your Name" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                  <div className="mt-1">
                    <input type="email" name="email" id="email" required className="w-full px-4 py-3 rounded-lg bg-background border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="you@example.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <div className="mt-1">
                    <textarea id="message" name="message" rows="4" required className="w-full px-4 py-3 rounded-lg bg-background border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Your message..."></textarea>
                  </div>
                </div>
                <div className="pt-2">
                  <button
                    type="submit"
                    id="submit-button"
                    disabled={isLoading}
                    className="w-full flex justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            ) : (
              <div id="form-success" className="mt-6 text-center p-6 bg-primary/10 rounded-lg">
                <div className="flex justify-center mb-3">
                  <IoCheckmarkCircleOutline className="text-5xl text-primary" />
                </div>
                <p className="font-medium text-lg text-primary">
                  Thank you! I’ll reply soon.
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;