'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [toast, setToast] = useState<{ msg: string; success: boolean } | null>(null);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-info',
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
          scrollTrigger: { trigger: '.contact-info', start: 'top 85%', toggleActions: 'play none none reverse' },
        }
      );

      gsap.fromTo(
        '.contact-form',
        { opacity: 0, y: 20, scale: 0.98 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'power2.out',
          scrollTrigger: { trigger: '.contact-form', start: 'top 85%', toggleActions: 'play none none reverse' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fname = (form.elements.namedItem('fname') as HTMLInputElement).value.trim();
    const lname = (form.elements.namedItem('lname') as HTMLInputElement).value.trim();
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value.trim();
    const service = (form.elements.namedItem('service') as HTMLSelectElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim();

    if (!fname || !phone || !service) {
      setToast({ msg: 'Veuillez remplir tous les champs obligatoires.', success: false });
      return;
    }

    const waMessage = encodeURIComponent(
      `Bonjour Maison Tya Studio !\n\nJe souhaite réserver :\nNom : ${fname} ${lname}\nTéléphone : ${phone}\nService : ${service}${message ? '\nMessage : ' + message : ''}`
    );

    setToast({ msg: 'Redirection vers WhatsApp...', success: true });
    setTimeout(() => {
      window.open(`https://wa.me/243814167220?text=${waMessage}`, '_blank');
    }, 800);
    form.reset();
  };

  return (
    <section ref={sectionRef} id="contact" className="bg-[var(--bg-alt)]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-[clamp(40px,6vw,80px)] items-start">
          {/* Left: Contact Info */}
          <div className="contact-info">
            <div className="section-label">Contact</div>
            <h2 className="section-title">Prenez rendez-vous</h2>
            <p className="text-[var(--text-secondary)] mb-12 text-base max-w-[480px]">
              Nous serions ravies de vous accueillir. Contactez-nous pour réserver votre moment de
              beauté ou pour toute question.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {/* Address */}
              <div className="flex items-start gap-4 mb-8">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-[rgba(180,60,100,0.12)] text-[var(--rose-deep)]">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-[var(--font-body)] text-[12px] font-semibold uppercase tracking-[0.1em] text-[var(--text-muted)] mb-1">
                    Adresse
                  </h4>
                  <p className="text-[15px] text-[var(--text-primary)]">Kinshasa — Lingwala</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 mb-8">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-[rgba(180,60,100,0.12)] text-[var(--rose-deep)]">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-[var(--font-body)] text-[12px] font-semibold uppercase tracking-[0.1em] text-[var(--text-muted)] mb-1">
                    Téléphone
                  </h4>
                  <a href="tel:+243****7220" className="text-[15px] text-[var(--text-primary)] hover:text-[var(--rose-deep)] transition-colors">
                    +243 814 167 220
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4 mb-8">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-[rgba(37,211,102,0.12)] text-[#25D366]">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-[var(--font-body)] text-[12px] font-semibold uppercase tracking-[0.1em] text-[var(--text-muted)] mb-1">
                    WhatsApp
                  </h4>
                  <a
                    href="https://wa.me/243814167220"
                    target="_blank"
                    rel="noopener"
                    className="text-[15px] text-[var(--text-primary)] hover:text-[#25D366] transition-colors"
                  >
                    Envoyer un message
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 mb-8">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-[rgba(180,60,100,0.12)] text-[var(--rose-deep)]">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-[var(--font-body)] text-[12px] font-semibold uppercase tracking-[0.1em] text-[var(--text-muted)] mb-1">
                    Email
                  </h4>
                  <a href="mailto:contact@lamaisontyastudio.com" className="text-[15px] text-[var(--text-primary)] hover:text-[var(--rose-deep)] transition-colors">
                    contact@lamaisontyastudio.com
                  </a>
                </div>
              </div>

              {/* Horaires */}
              <div className="flex items-start gap-4 mb-6 sm:col-span-2">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-[rgba(180,60,100,0.12)] text-[var(--rose-deep)]">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-[var(--font-body)] text-[12px] font-semibold uppercase tracking-[0.1em] text-[var(--text-muted)] mb-1">
                    Horaires
                  </h4>
                  <div className="text-[15px] text-[var(--text-primary)] space-y-0.5">
                    <p>Lun — Ven : 9h00 — 19h00</p>
                    <p>Sam : 9h00 — 18h00</p>
                    <p className="text-[var(--text-muted)]">Dim : Fermé</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-10">
              {[
                { href: '#', label: 'Instagram', icon: 'M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 010 2.5 1.25 1.25 0 010-2.5M12 7a5 5 0 110 10 5 5 0 010-10m0 2a3 3 0 100 6 3 3 0 000-6z' },
                { href: '#', label: 'Facebook', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
                { href: '#', label: 'TikTok', icon: 'M9 12a4 4 0 100 8 4 4 0 000-8zm0 0V4h4v2a4 4 0 004 4v4a8 8 0 01-8-8z' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener"
                  aria-label={social.label}
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-[var(--bg-primary)] text-[var(--text-secondary)] border border-transparent hover:border-[var(--rose)] hover:text-[var(--rose-deep)] transition-all duration-300"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-form bg-[var(--bg-primary)] rounded-xl p-[clamp(24px,4vw,40px)] border border-[rgba(180,60,100,0.15)]">
            <h3 className="text-[22px] font-medium mb-2">Réserver une prestation</h3>
            <p className="text-sm text-[var(--text-secondary)] mb-7">
              Remplissez le formulaire ci-dessous et nous vous recontacterons pour confirmer votre
              rendez-vous.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="mb-5">
                  <label htmlFor="fname" className="block text-[12px] font-semibold uppercase tracking-[0.1em] text-[var(--text-muted)] mb-2">
                    Prénom
                  </label>
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    placeholder="Votre prénom"
                    required
                    className="w-full font-[var(--font-body)] text-[15px] text-[var(--text-primary)] bg-[var(--bg-alt)] border border-[rgba(180,60,100,0.2)] rounded px-4 py-3 outline-none
                      focus:border-[var(--rose-deep)] focus:shadow-[0_0_0_3px_rgba(180,60,100,0.12)] transition-all"
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor="lname" className="block text-[12px] font-semibold uppercase tracking-[0.1em] text-[var(--text-muted)] mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="lname"
                    name="lname"
                    placeholder="Votre nom"
                    className="w-full font-[var(--font-body)] text-[15px] text-[var(--text-primary)] bg-[var(--bg-alt)] border border-[rgba(180,60,100,0.2)] rounded px-4 py-3 outline-none
                      focus:border-[var(--rose-deep)] focus:shadow-[0_0_0_3px_rgba(180,60,100,0.12)] transition-all"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label htmlFor="phone" className="block text-[12px] font-semibold uppercase tracking-[0.1em] text-[var(--text-muted)] mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+243 ..."
                  required
                  className="w-full font-[var(--font-body)] text-[15px] text-[var(--text-primary)] bg-[var(--bg-alt)] border border-[rgba(180,60,100,0.2)] rounded px-4 py-3 outline-none
                    focus:border-[var(--rose-deep)] focus:shadow-[0_0_0_3px_rgba(180,60,100,0.12)] transition-all"
                />
              </div>

              <div className="mb-5">
                <label htmlFor="service" className="block text-[12px] font-semibold uppercase tracking-[0.1em] text-[var(--text-muted)] mb-2">
                  Service souhaité
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  defaultValue=""
                  className="w-full font-[var(--font-body)] text-[15px] text-[var(--text-primary)] bg-[var(--bg-alt)] border border-[rgba(180,60,100,0.2)] rounded px-4 py-3 outline-none
                    focus:border-[var(--rose-deep)] focus:shadow-[0_0_0_3px_rgba(180,60,100,0.12)] transition-all"
                >
                  <option value="" disabled>Choisir un service</option>
                  <option value="maquillage">Maquillage</option>
                  <option value="coiffure">Coiffure</option>
                  <option value="manucure">Manucure & Pédicure</option>
                  <option value="soins">Soins de Beauté</option>
                  <option value="boutique">Produits Boutique</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div className="mb-5">
                <label htmlFor="message" className="block text-[12px] font-semibold uppercase tracking-[0.1em] text-[var(--text-muted)] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Décrivez votre besoin ou posez votre question..."
                  className="w-full font-[var(--font-body)] text-[15px] text-[var(--text-primary)] bg-[var(--bg-alt)] border border-[rgba(180,60,100,0.2)] rounded px-4 py-3 outline-none
                    focus:border-[var(--rose-deep)] focus:shadow-[0_0_0_3px_rgba(180,60,100,0.12)] transition-all min-h-[100px] resize-y"
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                Envoyer la demande
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 2L11 13" /><path d="M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
              </button>

              <div className="flex items-center justify-center gap-2 mt-4 text-[13px] text-[var(--text-secondary)]">
                <span>ou contactez-nous directement</span>
                <a
                  href="https://wa.me/243814167220"
                  target="_blank"
                  rel="noopener"
                  className="text-[#25D366] font-semibold flex items-center gap-1 hover:text-[#128C7E] transition-colors"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Toast notification */}
      {toast && (
        <div className="fixed bottom-[100px] left-1/2 -translate-x-1/2 bg-[var(--text-primary)] text-[#FAF9F7] px-7 py-3.5 rounded-lg text-[14px] font-medium z-50 flex items-center gap-2 shadow-lg">
          <svg width="18" height="18" viewBox="0 0 24 24" fill={toast.success ? '#25D366' : 'var(--rose-deep)'}>
            {toast.success
              ? <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              : <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
            }
          </svg>
          <span>{toast.msg}</span>
        </div>
      )}
    </section>
  );
}
