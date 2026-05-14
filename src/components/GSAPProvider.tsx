'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function GSAPProvider({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate elements with .anim class on scroll
      const animElements = document.querySelectorAll('.anim');
      
      animElements.forEach((el, i) => {
        const delay = parseFloat((el as HTMLElement).dataset.gsapDelay || '0');
        const direction = (el as HTMLElement).dataset.gsapDir || 'up';
        
        const vars: gsap.TweenVars = {
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          delay,
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        };

        if (direction === 'up') vars.y = 40;
        else if (direction === 'left') vars.x = -40;
        else if (direction === 'right') vars.x = 40;

        gsap.fromTo(el, vars, { opacity: 1, y: 0, x: 0, scale: 1 });
      });

      // Refresh ScrollTrigger on page load
      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return <div ref={containerRef}>{children}</div>;
}
