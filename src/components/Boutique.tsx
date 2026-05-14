'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const products = [
  {
    title: 'Parfums Arabes',
    category: 'Collection Privée',
    description: 'Oud, Musk, Ambre, Bakhoor et huiles parfumées d\'exception pour une signature olfactive unique.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANaCazte8wKaT7hG3xoHVu_MtkjY1n32b2cj1AYAbOYmOmrxjwtL3qXZNpcHQ5H9_psbkNNi4OTSGAtqpBEjkXG5pGNvJSzuedDGTLUvD-s0X8wZbHCBzDaO2AzVAuTusbdeBGJlhCl60uy1EacVmKdp24y2q2DdwEmz9Sm6E3idaK2mupZ_2GdeeLtNT-DsL0n9Aa4nA3z8jR4_TG-bDf719cBhNlTbY8LA2YjNOBBpnNcbLYGtwbQb54gAVuvlKfZyNX3PaQFW0',
    price: '$120',
  },
  {
    title: 'Beauté Africaine',
    category: 'Soins Naturels',
    description: 'Beurre de karité, huile de baobab, huiles essentielles — les trésors naturels de l\'Afrique pour votre peau.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDt72ea9brs-kB7xfwQ8qZXLOdNZ4pZb45NnFTf_6EgAI6qQJhnj23O4lECtDKrUa_UmltKF_8Q_lgTju_TNzUrvc8dVo3ImHAy0yC16_68h-Ts-oAROopWkuybT1HjWBu165PfWjLGgZWpHVbqy1tUFvT2ifLqFKKEqKedy1ndzPgOX_1QqhcrhlvAEPECZXl8xJ53SJ-eu2YXckIRDKMuPCgd0W4JGe4Qv8hkgBfOdMa7O0HUIRqE50ll3imBFet3yX1YJnySQB0',
    price: '$85',
  },
  {
    title: 'Maquillage Pro',
    category: 'Essentiels',
    description: 'Fonds de teint, palettes, pinceaux et accessoires professionnels sélectionnés avec soin.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMB9u_fdDdEztGHhBaux3YeN0wil5qdOClNvrITMneDMO6qouiVk62XyDhk4sHsGwR6l5hrm99P0erKTEa9QnCInh3iyEuY98U78hLlhGBGIHvjgEEOXHNwcN0qbp-tQRr7M9uXKg5Gyu76C5I1_P9LPE5Sive-53d-KYtj80F4QhjEeLulE9mhubHivESKap5HORVLTfxHlznVMvSaJIi8N4OMS7UCw4vYFQdNO_usllT257WASWZ_Va3JH_4j7lQ6J_V25iIMEI',
    price: '$45',
  },
];

export default function Boutique() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.boutique-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
          scrollTrigger: { trigger: '.boutique-header', start: 'top 85%', toggleActions: 'play none none reverse' },
        }
      );

      gsap.fromTo(
        '.boutique-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.13, ease: 'power2.out',
          scrollTrigger: { trigger: '.boutique-grid', start: 'top 85%', toggleActions: 'play none none reverse' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="boutique" className="bg-[var(--bg-primary)]">
      <div className="container-custom">
        <div className="boutique-header text-center mb-16 max-w-[700px] mx-auto">
          <div className="section-label justify-center">La boutique</div>
          <h2 className="section-title">Emportez la beauté chez vous</h2>
          <p className="text-[var(--text-secondary)] max-w-[520px] mx-auto">
            Découvrez notre sélection exclusive de parfums arabes, produits de beauté africains
            et accessoires de maquillage.
          </p>
        </div>

        <div className="boutique-grid grid grid-cols-1 md:grid-cols-3 gap-[clamp(16px,2.5vw,32px)]">
          {products.map((product) => (
            <div
              key={product.title}
              className="boutique-card rounded-lg overflow-hidden bg-[var(--bg-alt)] cursor-pointer
                hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(26,24,22,0.08)] transition-all duration-500"
              style={{ transitionTimingFunction: 'var(--ease-elegant)' }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-[rgba(26,24,22,0.4)] flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                  <span className="text-[#FAF9F7] text-[12px] font-semibold tracking-[0.15em] uppercase px-6 py-2.5 border border-[rgba(250,249,247,0.5)] rounded">
                    Voir le produit
                  </span>
                </div>
              </div>

              <div className="p-6">
                <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--rose-deep)]">
                  {product.category}
                </span>
                <h3 className="text-xl font-medium mt-1 mb-2">{product.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
