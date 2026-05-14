'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface Service {
  icon: string;
  name: string;
  tagline: string;
  items: string[];
}

const services: Service[] = [
  {
    icon: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
    name: 'Maquillage',
    tagline: 'Professionnel pour toutes vos occasions',
    items: ['Maquillage mariage', 'Maquillage soirée', 'Maquillage naturel & glamour', 'Maquillage artistique', 'Shooting photo', 'Pose de faux cils'],
  },
  {
    icon: 'M11 17h2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1h-3v-1h4V8h-2V7h-2v1h-1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v1H9v2h2v1zm-9 2c0-2.21 3.58-4 8-4s8 1.79 8 4M4 12c0-4.42 3.58-8 8-8',
    name: 'Coiffure',
    tagline: "L'art capillaire africain et moderne",
    items: ['Tresses africaines', 'Perruques & lace wigs', 'Lissage & défroissage', 'Coloration capillaire', 'Soins capillaires', 'Extensions & rajouts'],
  },
  {
    icon: 'M16.5 12c0 1.5-1.2 1.5-2.5 1.5s-2.5 0-2.5-1.5c0-1.5 1.2-3 2.5-3s2.5 1.5 2.5 3zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z',
    name: 'Manucure & Pédicure',
    tagline: 'Des mains et des pieds sublimes',
    items: ['Vernis classique & semi-permanent', 'Pose de gel & capsules', 'Nail art', 'Soins des mains', 'Soins des pieds', 'Spa pédicure'],
  },
  {
    icon: 'M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z',
    name: 'Soins de Beauté',
    tagline: 'Rituels bien-être pour une peau éclatante',
    items: ['Soins du visage', 'Soins du corps & gommage', 'Épilation', 'Massage détente', 'Soins éclaircissants', 'Traitements personnalisés'],
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.services-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
          scrollTrigger: { trigger: '.services-header', start: 'top 85%', toggleActions: 'play none none reverse' },
        }
      );

      gsap.fromTo(
        '.service-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power2.out',
          scrollTrigger: { trigger: '.services-grid', start: 'top 85%', toggleActions: 'play none none reverse' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="bg-[var(--bg-alt)]">
      <div className="container-custom">
        <div className="services-header text-center mb-16 max-w-[700px] mx-auto">
          <div className="section-label justify-center">L&apos;expertise</div>
          <h2 className="section-title">Un univers de beauté complet</h2>
          <p className="text-[var(--text-secondary)] text-base max-w-[560px] mx-auto">
            Du maquillage professionnel aux soins du corps, découvrez l&apos;ensemble de nos prestations
            pensées pour sublimer votre beauté.
          </p>
        </div>

        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[clamp(16px,2vw,24px)]">
          {services.map((service) => (
            <div
              key={service.name}
              className="service-card bg-[var(--bg-primary)] rounded-lg p-[clamp(24px,3vw,40px)] text-center border border-transparent cursor-pointer
                hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(26,24,22,0.08)] hover:border-[var(--rose)] transition-all duration-500"
              style={{ transitionTimingFunction: 'var(--ease-elegant)' }}
            >
              <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-full bg-[rgba(180,60,100,0.12)]
                text-[var(--rose-deep)] transition-all duration-500"
              >
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d={service.icon} />
                </svg>
              </div>

              <h3 className="text-xl font-medium mb-3">{service.name}</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-4">{service.tagline}</p>

              <ul className="list-none mb-5">
                {service.items.map((item) => (
                  <li key={item} className="text-sm text-[var(--text-secondary)] py-[3px]">{item}</li>
                ))}
              </ul>

              <a
                href="#contact"
                className="text-[12px] font-semibold tracking-[0.12em] uppercase text-[var(--rose-deep)] inline-flex items-center gap-1.5
                  hover:gap-[10px] transition-all duration-300"
                style={{ transitionTimingFunction: 'var(--ease-elegant)' }}
              >
                Découvrir
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* ===== Infinite Horizontal Carousel ===== */}
        <div className="relative mt-20 overflow-hidden before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[160px] before:z-10 before:bg-gradient-to-r from-[var(--bg-alt)] via-[var(--bg-alt)]/80 to-transparent after:content-[''] after:absolute after:right-0 after:top-0 after:bottom-0 after:w-[160px] after:z-10 after:bg-gradient-to-l from-[var(--bg-alt)] via-[var(--bg-alt)]/80 to-transparent">
          <div className="flex gap-5 animate-scroll w-max">
            {[
              'makeup1.jpg','makeup3.jpg','makeup4.jpg','makeup-kit.jpg',
              'tressage.jpg','ongle.jpg','onglet+pieds.jpg','posage-vernis.jpg',
              'working.jpg','worker.jpg','hairs-exposition.jpg','hairs-expo2.jpg',
              'makeup1.jpg','makeup3.jpg','makeup4.jpg','makeup-kit.jpg',
              'tressage.jpg','ongle.jpg','onglet+pieds.jpg','posage-vernis.jpg',
              'working.jpg','worker.jpg','hairs-exposition.jpg','hairs-expo2.jpg',
            ].map((img, i) => (
              <div
                key={i}
                className="w-[200px] h-[200px] flex-shrink-0 rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(26,24,22,0.08)]"
              >
                <img
                  src={`/images/${img}`}
                  alt=""
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
