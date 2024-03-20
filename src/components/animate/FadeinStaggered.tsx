/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const FadeInStaggered = ({ children }: {children?: any}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && containerRef.current) {
          gsap.from(containerRef.current.children, {
            opacity: 0,
            y: -20,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.5,
          });
          observer.unobserve(entry.target);
        }
      });
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef}>
      {children}
    </div>
  );
};

export default FadeInStaggered;
