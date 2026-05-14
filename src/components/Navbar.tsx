'use client';

import { useEffect, useState } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

const navLinks = [
  { label: 'À propos', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Boutique', href: '#boutique' },
  { label: 'Galerie', href: '#gallery' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      gsap.fromTo(
        '.mobile-link',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out' }
      );
    }
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    document.body.style.overflow = '';
  };

  const toggleMobile = () => {
    setMobileOpen((prev) => {
      const next = !prev;
      document.body.style.overflow = next ? 'hidden' : '';
      return next;
    });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[var(--bg-primary)]/95 backdrop-blur-md border-b border-[rgba(180,60,100,0.12)] py-3'
            : 'py-5'
        }`}
        style={{ transitionTimingFunction: 'var(--ease-elegant)' }}
      >
        <div className="container-custom flex items-center justify-between">
          <a
            href="#hero"
            className="flex items-center gap-2.5 no-underline"
          >
            <span className="flex items-center rounded bg-[var(--rose-deep)] px-1 py-1 flex-shrink-0">
              <Image
                src="/logo/la-maison-tya-studio.webp"
                alt="La Maison Tya Studio"
                width={60}
                height={24}
                className="h-[18px] w-auto object-contain"
                priority
              />
            </span>
            <span className={`hidden sm:inline font-[var(--font-heading)] text-[15px] font-medium leading-none tracking-tight transition-colors duration-500 ${
              scrolled ? 'text-[var(--text-primary)]' : 'text-[#FAF9F7]'
            }`}>
              La Maison Tya Studio
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-8 list-none">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-[13px] font-medium tracking-[0.03em] transition-colors duration-500 relative
                    after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[var(--rose)] after:transition-all after:duration-300 hover:after:w-full ${
                    scrolled
                      ? 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                      : 'text-[rgba(250,249,247,0.7)] hover:text-[#FAF9F7]'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="btn-primary text-[12px] !px-6 !py-2.5"
              >
                Réserver
              </a>
            </li>
          </ul>

          <button
            className="md:hidden flex flex-col gap-[5px] cursor-pointer p-2 bg-transparent border-none"
            onClick={toggleMobile}
            aria-label="Menu"
          >
            <span
              className={`block w-6 h-[1.5px] transition-all duration-300 ${
                scrolled ? 'bg-[var(--text-primary)]' : 'bg-[#FAF9F7]'
              } ${
                mobileOpen ? 'rotate-45 translate-x-[4px] translate-y-[5px]' : ''
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] transition-all duration-300 ${
                scrolled ? 'bg-[var(--text-primary)]' : 'bg-[#FAF9F7]'
              } ${
                mobileOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] transition-all duration-300 ${
                scrolled ? 'bg-[var(--text-primary)]' : 'bg-[#FAF9F7]'
              } ${
                mobileOpen ? '-rotate-45 translate-x-[4px] -translate-y-[5px]' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[var(--bg-primary)] z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ transitionTimingFunction: 'var(--ease-elegant)' }}
      >
        {[...navLinks, { label: 'Réserver', href: '#contact' }].map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            className="mobile-link font-[var(--font-heading)] text-[28px] font-normal text-[var(--text-primary)] hover:text-[var(--rose-deep)] transition-colors"
            onClick={closeMobile}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}
