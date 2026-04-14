"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { href: "#artisan", label: "L'Artisan" },
  { href: "#creations", label: "Créations" },
  { href: "#maisons", label: "Maisons" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#0C0A08]/90 backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <Link href="#" className="font-cormorant text-3xl font-light tracking-wide text-cream">
          Thomas Bouilhol
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-jost text-xs uppercase tracking-[0.2em] text-cream/60 transition hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
