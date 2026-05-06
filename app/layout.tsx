import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-jost",
});

export const metadata: Metadata = {
  title: "Thomas Bouilhol — Maître Fleuriste & Maître Artisan d'Art · Nice",
  description:
    "Thomas Bouilhol, seul fleuriste en France à détenir simultanément le titre de Maître Fleuriste et Maître Artisan d'Art. Créations florales sur-mesure pour mariages, événements et décoration de prestige à Nice, Côte d'Azur et Monaco.",
  keywords: [
    "fleuriste Nice",
    "Maître Fleuriste Nice",
    "fleuriste mariage Nice",
    "décoration florale événementielle Nice",
    "art floral Nice",
    "fleuriste luxe Côte d'Azur",
    "fleuriste Monaco",
    "Maître Artisan d'Art",
    "parcs et jardins patrimoine Nice",
    "Thomas Bouilhol fleuriste",
    "Azur Fleurot Nice",
  ],
  authors: [{ name: "Thomas Bouilhol" }],
  creator: "Thomas Bouilhol",
  openGraph: {
    title: "Thomas Bouilhol — Maître Fleuriste & Maître Artisan d'Art · Nice",
    description:
      "Le seul fleuriste en France à réunir deux titres de Maître. Créations florales d'exception à Nice, Côte d'Azur et Monaco.",
    url: "https://thomas-bouilhol.com",
    siteName: "Thomas Bouilhol",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/thomas-bouilhol-hero.png",
        width: 1200,
        height: 630,
        alt: "Thomas Bouilhol, Maître Fleuriste et Maître Artisan d'Art à Nice",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thomas Bouilhol — Maître Fleuriste · Nice",
    description:
      "Le seul fleuriste en France à détenir deux titres de Maître. Créations florales d'exception.",
    images: ["/images/thomas-bouilhol-hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://thomas-bouilhol.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${cormorant.variable} ${inter.variable} overflow-x-hidden font-jost antialiased`}>
        {children}
      </body>
    </html>
  );
}
