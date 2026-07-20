import { useState, useEffect } from 'react';

/**
 * Custom hook to track which section is currently active based on IntersectionObserver.
 * @param {string} selector - CSS selector for observed section elements.
 * @param {string} defaultSection - Initial active section ID.
 * @returns {string} activeSection - The ID of the section currently in view.
 */
export default function useActiveSection(selector = '.section-wrapper', defaultSection = 'hero') {
  const [activeSection, setActiveSection] = useState(defaultSection);

  useEffect(() => {
    const sections = document.querySelectorAll(selector);

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [selector]);

  return activeSection;
}
