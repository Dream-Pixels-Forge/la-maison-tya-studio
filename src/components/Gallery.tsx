'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const galleryImages = [
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIF7BxAaRIv8ABDwZBq6HFUdPhQ_cbYec5vzvV2AzPQehbkxKrzaZ_ieX2Ati4mlAvpn3hNOO0HBD5UtaYzrB4XjdzVa32KizK7v3jTCXA2-XbPE060on1b2MNpOZ8oQLWwgJtG-Xa-9QaPZAxYVRzXOhYSVd7shG8xVqVXvG2-rjTZpL0xAB8iWK9F1_ZPIXYo4VlkXUb5Ltrj4T1UFHPTVsgm_gQw2AJOI-Rpx-5_fbLsyBDU9wS3-fvTPI8jRw39IQaMZXymkA',
    label: "L'Atelier",
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsKKnUBsaq4rb9EFV8d70aH65B3EZWVk_Gh2JJTqiF_c8gC2GbWCZZJxpAdLm0eDjPHJ0SvA4KjzBRAVSnBtf9_Eirn1kl5RZFY16tmDhGWq2naahYhsqai5sq9vJaFqHTdGQ7-163IXmod16GSsOtftb2cDdkOxaC6FOrISiMyWY7Ap8FVGM_ZCLnCQfR-2kpuFrYh_jrIJYltPtH73FmSWi6-giI1nhRZ-bxzB6HG7UnwlDwVWoBj3qhsV4Y6jfwuGffgTEOMRo',
    label: 'Soins',
    span: '',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4B2rlp1488kZxpC38niC9h2wuRaUimldKRQCoXM40MEsGLry-iILVaOY4JhSHjD3SZW38wdKLESe9Y_sjNDgwPAfih--drjzFGDLp15M-NsXATLr0hu3vr2BwjqkGvN7qF3qV9Y7F7Xgs7yWb4BCvQvR3vZqYOWAXBq0rJHImG-94d7F1arxlnrzzDPNmv6nKMuMUCv-_crQs_iHrZbHO_oaX1-slzlhdBrcgDUxZBDPF_Okte5HwX07wb4ge73MVi-IpGrlSTno',
    label: 'Portrait',
    span: 'md:row-span-2',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDy4rs7skbUJa0MKiiN017HEgCZEvQfPfKm6PfCEdLP36OqDg_imcfLbZfycNbYKcxTJzNlXTBzQORpQ2OWYtkqTP9nS47zZCYTFcpsjNY_eL0GZ1tgBKhBQ6cb_6bg_JrZHlbWetNLFQvuACeVUkMVNRW9ye_RuASkEhCkCG6NvJsvhUKgMnFkiL4_EZrItDRg1bOTuf1wZFtgqb7Q-ZHPxnMii5ppnWPll6xqm6qR33x9dJ6dX8xdFD_016NBq1W8UiRDtiAHB60',
    label: 'Studio',
    span: '',
  },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.gallery-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
          scrollTrigger: { trigger: '.gallery-header', start: 'top 85%', toggleActions: 'play none none reverse' },
        }
      );

      gsap.fromTo(
        '.gallery-item',
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: '.gallery-grid', start: 'top 85%', toggleActions: 'play none none reverse' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="gallery" className="bg-[var(--bg-primary)]">
      <div className="container-custom">
        <div className="gallery-header text-center mb-16 max-w-[600px] mx-auto">
          <div className="section-label justify-center">Galerie</div>
          <h2 className="section-title">Notre savoir-faire en images</h2>
        </div>

        <div className="gallery-grid grid grid-cols-2 md:grid-cols-4 gap-[clamp(8px,1.2vw,16px)] md:auto-rows-[clamp(200px,20vw,300px)]">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`gallery-item relative overflow-hidden rounded-lg cursor-pointer ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-[rgba(26,24,22,0.35)] flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                <span className="text-[#FAF9F7] text-[12px] font-semibold tracking-[0.15em] uppercase">
                  {img.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
