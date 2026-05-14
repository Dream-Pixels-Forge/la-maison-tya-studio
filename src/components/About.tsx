'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ABOUT_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9LvEbFKthSIEGOWb2mT2DhwNURwzM5aq8fe3pAhqDswLxAfjwNcCU0tZE5PgaUsQHgogtGNLjXGDTZPFK52CNppSTe4GFWcAidkd41pjdy9yWnNs72MsIEXlpi-3loqeQl6Hbh3YkOpaGJSFbzCTC4rAGk5FpnC4oS4BJ-bnCXTJ0lJW9211_6FT7fc_J64EuzkQDG73_0_hcwizcX-Xc2IhrNU1tA4iJTEdDm4Na3jUi6fUHe8LPc9hOXuKiz4WKZFN9D7MLfrM';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-heading',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
          scrollTrigger: { trigger: '.about-heading', start: 'top 85%', toggleActions: 'play none none reverse' },
        }
      );

      gsap.fromTo(
        '.about-text p',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out',
          scrollTrigger: { trigger: '.about-text', start: 'top 85%', toggleActions: 'play none none reverse' },
        }
      );

      gsap.fromTo(
        '.about-signature',
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.6, delay: 0.5, ease: 'power2.out',
          scrollTrigger: { trigger: '.about-signature', start: 'top 90%', toggleActions: 'play none none reverse' },
        }
      );

      gsap.fromTo(
        '.about-image',
        { opacity: 0, x: 40 },
        {
          opacity: 1, x: 0, duration: 0.8, ease: 'power2.out',
          scrollTrigger: { trigger: '.about-image', start: 'top 85%', toggleActions: 'play none none reverse' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="bg-[var(--bg-alt)]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-[clamp(40px,6vw,80px)] items-center">
          {/* Text */}
          <div className="lg:pr-[clamp(0px,2vw,32px)]">
            <div className="section-label about-heading">Notre histoire</div>
            <h2 className="section-title about-heading">Bienvenue chez Maison Tya Studio</h2>
            <div className="about-text">
              <p className="text-[var(--text-secondary)] text-base leading-[1.75] mb-5">
                Votre destination beauté d&apos;exception au cœur de Kinshasa. Notre studio incarne
                l&apos;alliance parfaite entre le savoir-faire africain et la sophistication orientale,
                créant un espace où chaque femme peut révéler sa beauté naturelle.
              </p>
              <p className="text-[var(--text-secondary)] text-base leading-[1.75] mb-5">
                De la coiffure africaine au maquillage professionnel, de nos soins du corps à notre
                sélection de parfums arabes, chaque prestation est pensée avec passion et expertise
                pour vous offrir un moment hors du temps. Notre équipe de professionnelles dévouées
                vous accueille dans un cadre chaleureux et moderne, où votre bien-être est notre
                priorité absolue.
              </p>
            </div>
            <div className="about-signature mt-8 pt-6 border-t border-[rgba(180,60,100,0.2)]">
              <p className="accent-italic">« Votre beauté, notre passion. »</p>
            </div>
          </div>

          {/* Image */}
          <div className="about-image relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[520px] before:content-[''] before:absolute before:top-[-16px] before:right-[-16px] before:w-full before:h-full before:border before:border-[var(--rose-deep)] before:rounded-lg before:z-[-1]">
              <img
                src={ABOUT_IMAGE}
                alt="Intérieur du studio Maison Tya"
                className="w-full aspect-[4/5] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
