import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative bg-[#1A1816] text-[rgba(250,249,247,0.55)] overflow-hidden">
      {/* Top decorative rose gradient border */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[var(--rose)] to-transparent opacity-70" />

      {/* Subtle radial glow in top-left */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[var(--rose-deep)] opacity-[0.04] blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] rounded-full bg-[var(--rose)] opacity-[0.025] blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* ===== MAIN GRID ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-[clamp(32px,5vw,64px)] gap-y-16 pt-[clamp(80px,14vh,140px)] pb-16">
          {/* -- Brand (spans 2 cols) -- */}
          <div className="sm:col-span-2">
            <span className="inline-flex items-center rounded bg-[var(--rose-deep)] px-1 py-1 mb-6">
              <Image
                src="/logo/la-maison-tya-studio.webp"
                alt="La Maison Tya Studio"
                width={60}
                height={24}
                className="h-[18px] w-auto object-contain"
              />
            </span>
            <p className="text-sm leading-[1.9] max-w-[360px] text-[rgba(250,249,247,0.5)]">
              Studio de beauté premium à Kinshasa. L&apos;alliance du savoir-faire africain
              et de la sophistication orientale pour révéler votre beauté naturelle.
            </p>
            {/* Decorative rose dot row */}
            <div className="flex items-center gap-3 mt-8">
              {[...Array(3)].map((_, i) => (
                <span
                  key={i}
                  className="block w-[6px] h-[6px] rounded-full"
                  style={{
                    backgroundColor: i === 1 ? 'var(--rose)' : 'rgba(200, 80, 120, 0.3)',
                  }}
                />
              ))}
            </div>
          </div>

          {/* -- Services -- */}
          <div>
            <h4 className="font-[var(--font-accent)] text-lg font-medium italic text-[rgba(250,249,247,0.7)] mb-5">
              Services
            </h4>
            <div className="w-8 h-[1px] bg-[var(--rose)]/40 mb-6" />
            <ul className="space-y-4">
              {['Maquillage', 'Coiffure', 'Manucure & Pédicure', 'Soins de Beauté'].map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-sm text-[rgba(250,249,247,0.5)] hover:text-[var(--rose-light)] transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* -- Boutique -- */}
          <div>
            <h4 className="font-[var(--font-accent)] text-lg font-medium italic text-[rgba(250,249,247,0.7)] mb-5">
              Boutique
            </h4>
            <div className="w-8 h-[1px] bg-[var(--rose)]/40 mb-6" />
            <ul className="space-y-4">
              {['Parfums Arabes', 'Beauté Africaine', 'Maquillage Pro'].map((item) => (
                <li key={item}>
                  <a
                    href="#boutique"
                    className="text-sm text-[rgba(250,249,247,0.5)] hover:text-[var(--rose-light)] transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* -- Contact -- */}
          <div>
            <h4 className="font-[var(--font-accent)] text-lg font-medium italic text-[rgba(250,249,247,0.7)] mb-5">
              Contact
            </h4>
            <div className="w-8 h-[1px] bg-[var(--rose)]/40 mb-6" />
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+243****7220"
                  className="text-sm text-[rgba(250,249,247,0.5)] hover:text-[var(--rose-light)] transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  +243 814 167 220
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/243814167220"
                  target="_blank"
                  rel="noopener"
                  className="text-sm text-[rgba(250,249,247,0.5)] hover:text-[var(--rose-light)] transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@lamaisontyastudio.com"
                  className="text-sm text-[rgba(250,249,247,0.5)] hover:text-[var(--rose-light)] transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  contact@lamaisontyastudio.com
                </a>
              </li>
              <li className="text-sm text-[rgba(250,249,247,0.5)]">
                Kinshasa — Lingwala
              </li>
            </ul>
            <div className="mt-8 pt-6 border-t border-[rgba(200,80,120,0.15)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[rgba(250,249,247,0.3)] mb-2">Horaires</p>
              <p className="text-sm text-[rgba(250,249,247,0.5)] leading-relaxed">
                Lun—Ven 9h–19h<br />
                Sam 9h–18h<br />
                <span className="text-[rgba(250,249,247,0.3)]">Dim fermé</span>
              </p>
            </div>
          </div>
        </div>

        {/* ===== DIVIDER ===== */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[var(--rose)]/20 to-transparent" />

        {/* ===== BOTTOM BAR ===== */}
        <div className="flex flex-col md:flex-row items-center justify-between py-8 gap-5 text-[13px]">
          <span className="text-[rgba(250,249,247,0.35)]">
            &copy; {new Date().getFullYear()} La Maison Tya Studio. Tous droits réservés.
          </span>

          {/* Social-style decorative links */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-[rgba(250,249,247,0.35)] hover:text-[var(--rose-light)] transition-colors text-xs uppercase tracking-[0.12em]"
            >
              Instagram
            </a>
            <span className="text-[rgba(250,249,247,0.15)]">&middot;</span>
            <a
              href="#"
              className="text-[rgba(250,249,247,0.35)] hover:text-[var(--rose-light)] transition-colors text-xs uppercase tracking-[0.12em]"
            >
              Facebook
            </a>
            <span className="text-[rgba(250,249,247,0.15)]">&middot;</span>
            <a
              href="#"
              className="text-[rgba(250,249,247,0.35)] hover:text-[var(--rose-light)] transition-colors text-xs uppercase tracking-[0.12em]"
            >
              TikTok
            </a>
          </div>

          <span className="text-[rgba(250,249,247,0.35)]">
            Conçu avec <span style={{ color: 'var(--rose)' }}>&hearts;</span> à Kinshasa
          </span>
        </div>
      </div>
    </footer>
  );
}
