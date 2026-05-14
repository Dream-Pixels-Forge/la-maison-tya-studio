import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import GSAPProvider from "@/components/GSAPProvider";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "La Maison Tya Studio — L'élégance féminine au service de votre beauté",
  description:
    "Studio de beauté premium à Kinshasa, Lingwala. Maquillage, coiffure, manucure, soins et boutique de parfums arabes. Réservez votre rendez-vous.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=DM+Sans:wght@300;400;500;600&family=Cormorant+Garamond:ital,wght@0,400;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LenisProvider>
          <GSAPProvider>
            <Navbar />
            <main>{children}</main>
            <WhatsAppFloat />
          </GSAPProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
