import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
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
      <body className={`${cormorant.variable} ${jost.variable} font-jost antialiased`}>
        {children}
      </body>
    </html>
  );
}
