'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const HERO_IMAGES = [
  '/images/hero-1-makeup.jpg',
  '/images/hero-2-salon.jpg',
  '/images/hero-3-hairstyle.jpg',
  '/images/hero-4-skincare.jpg',
  '/images/hero-5-african.jpg',
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [loaded, setLoaded] = useState(false);
  const currentRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const isTransitioning = useRef(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [displayIdx, setDisplayIdx] = useState(0); // the visible image
  const [transitionIdx, setTransitionIdx] = useState(1); // the incoming image

  // Preload all images
  useEffect(() => {
    let loadedCount = 0;
    HERO_IMAGES.forEach((src) => {
      const img = new Image();
      img.onload = () => {
        loadedCount++;
        if (loadedCount === HERO_IMAGES.length) setLoaded(true);
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === HERO_IMAGES.length) setLoaded(true);
      };
      img.src = src;
    });
  }, []);

  // Cycle images with crossfade
  useEffect(() => {
    if (!loaded) return;

    intervalRef.current = setInterval(() => {
      if (isTransitioning.current) return;
      isTransitioning.current = true;

      const nextIdx = (displayIdx + 1) % HERO_IMAGES.length;
      setTransitionIdx(nextIdx);

      // Fade in next
      if (nextRef.current) {
        gsap.fromTo(nextRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1, ease: 'power2.inOut', onComplete: () => {
            setDisplayIdx(nextIdx);
            isTransitioning.current = false;
          }}
        );
      }
    }, 5000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [loaded, displayIdx]);

  // Intro animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo('.hero-bg-layer', { scale: 1.15 }, { scale: 1, duration: 1.8 })
        .fromTo('.hero-tag', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, '-=1.2')
        .fromTo('.hero-title', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
        .fromTo('.hero-sub', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
        .fromTo('.hero-cta', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.2')
        .fromTo('.hero-scroll', { opacity: 0 }, { opacity: 1, duration: 0.4 });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden pt-0 pb-0"
    >
      {/* Background — rotating images with gradient overlay */}
      <div className="hero-bg absolute inset-0">
        {/* Gradient fallback behind images */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1816] via-[#221B1D] to-[#1E1419]" />

        {/* Current image (visible) */}
        <div
          ref={currentRef}
          className="hero-bg-layer absolute inset-0"
          style={{
            backgroundImage: loaded ? `url(${HERO_IMAGES[displayIdx]})` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Next image (fading in) */}
        <div
          ref={nextRef}
          className="absolute inset-0"
          style={{
            backgroundImage: loaded ? `url(${HERO_IMAGES[transitionIdx]})` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0,
          }}
        />

        {/* Rose glow accents */}
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[var(--rose-deep)] opacity-[0.1] blur-[140px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[var(--rose)] opacity-[0.06] blur-[120px]" />

        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(26,24,22,0.6)] via-[rgba(26,24,22,0.3)] to-[rgba(26,24,22,0.5)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,24,22,0.7)] via-[rgba(26,24,22,0.2)] to-[rgba(26,24,22,0.4)]" />

        {/* Subtle texture */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23DCA0B4' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-[800px] mx-auto">
        <p className="hero-tag text-[var(--rose-light)] text-[13px] font-semibold tracking-[0.3em] uppercase mb-6">
          Kinshasa — Lingwala
        </p>
        <h1 className="hero-title font-[var(--font-heading)] text-[clamp(42px,9vw,84px)] font-medium leading-[1.05] mb-8 tracking-tight"
            style={{ color: '#FAF9F7' }}>
          La Maison <span className="text-[var(--rose-light)]">Tya</span> Studio
        </h1>
        <p className="hero-sub text-[clamp(16px,2.2vw,20px)] max-w-[600px] mx-auto mb-12 leading-relaxed"
           style={{ color: 'rgba(250,249,247,0.7)' }}>
          L&apos;élégance féminine au service de votre beauté — maquillage, coiffure, soins
          et boutique de luxe à Kinshasa.
        </p>
        <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact" className="btn-primary">
            Réserver maintenant
          </a>
          <a href="#about" className="btn-outline">
            Découvrir
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[rgba(250,249,247,0.4)] text-[9px] font-semibold tracking-[0.25em] uppercase">
          Défiler
        </span>
        <div className="w-[1px] h-10 bg-[rgba(250,249,247,0.2)] relative overflow-hidden">
          <div
            className="absolute w-full h-1/2 bg-[var(--rose-light)]"
            style={{ animation: 'scrollLine 2s ease-in-out infinite' }}
          />
        </div>
      </div>
    </section>
  );
}
