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
  title: "Thomas Bouilhol — Maître Fleuriste · Maître Artisan d'Art",
  description:
    "Double titre unique en France. Art floral d'exception sur la Côte d'Azur. Hôtel Negresco, Monaco, Côte d'Azur.",
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
