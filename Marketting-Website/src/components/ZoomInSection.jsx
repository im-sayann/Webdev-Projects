import React from 'react'
import { useRef, useEffect } from 'react';

const ZoomInSection = ({ children }) => {
    const ref = useRef();

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("zoom-in");
            } else {
              entry.target.classList.remove("zoom-in");
            }
          });
        },
        {
          threshold: 0.2, // Trigger when 10% of the element is visible
        }
      );

      const element = ref.current;
      if (element) {
        observer.observe(element);
      }

      return () => {
        if (element) {
          observer.unobserve(element);
        }
      };
    }, []);

    return (
      <div ref={ref} className="zoom-element">
        {children}
      </div>
    );
  };

export default ZoomInSection
