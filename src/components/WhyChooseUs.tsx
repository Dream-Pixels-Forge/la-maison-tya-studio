'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const reasons = [
  {
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    title: 'Professionnalisme',
    desc: 'Une équipe qualifiée et passionnée, à l\'écoute de vos besoins pour un résultat impeccable.',
  },
  {
    icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
    title: 'Produits de qualité',
    desc: 'Nous sélectionnons uniquement les meilleurs produits, des marques internationales aux trésors naturels africains.',
  },
  {
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'Hygiène et confort',
    desc: 'Un environnement impeccable et des normes d\'hygiène strictes pour votre sécurité et votre sérénité.',
  },
  {
    icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
    title: 'Service personnalisé',
    desc: 'Chaque femme est unique. Nous adaptons chaque prestation à votre style et vos envies.',
  },
  {
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    title: 'Équipe expérimentée',
    desc: 'Nos stylistes et esthéticiennes cumulent des années d\'expertise pour un service d\'excellence.',
  },
  {
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
    title: 'Cadre moderne',
    desc: 'Un studio pensé pour votre bien-être, alliant design contemporain et chaleur africaine.',
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.why-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
          scrollTrigger: { trigger: '.why-header', start: 'top 85%', toggleActions: 'play none none reverse' },
        }
      );

      gsap.fromTo(
        '.why-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: '.why-grid', start: 'top 85%', toggleActions: 'play none none reverse' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[var(--bg-alt)]">
      <div className="container-custom">
        <div className="why-header text-center mb-16 max-w-[600px] mx-auto">
          <div className="section-label justify-center">L&apos;engagement</div>
          <h2 className="section-title">Pourquoi choisir notre maison</h2>
          <p className="text-[var(--text-secondary)] text-base mt-[-8px]">
            L&apos;excellence dans chaque détail, la passion dans chaque geste.
          </p>
        </div>

        <div className="why-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[clamp(16px,2vw,24px)]">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="why-card text-center p-[clamp(24px,3vw,36px)] rounded-lg bg-[var(--bg-primary)] border border-transparent
                hover:border-[var(--rose)] hover:shadow-[0_4px_20px_rgba(26,24,22,0.06)] transition-all duration-500"
              style={{ transitionTimingFunction: 'var(--ease-elegant)' }}
            >
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center text-[var(--rose-deep)]">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d={reason.icon} />
                </svg>
              </div>
              <h3 className="text-[17px] font-medium mb-2">{reason.title}</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
