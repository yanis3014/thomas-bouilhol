"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { href: "#artisan", label: "L'Artisan" },
  { href: "#portrait", label: "Portrait" },
  { href: "#creations", label: "Créations" },
  { href: "#maisons", label: "Maisons" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "scrolled bg-background/90 backdrop-blur" : "bg-gradient-to-b from-background/40 to-transparent"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
    >
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <Link href="#" className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-green/40">
            <span className="font-cormorant text-sm italic text-cream">TB</span>
          </span>
          <span className="font-cormorant text-2xl font-light tracking-wide text-cream">
            Thomas Bouilhol
          </span>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.7 + index * 0.08 }}
            >
              <Link
                href={item.href}
                className="lux-link font-jost text-xs uppercase tracking-[0.2em] text-cream/75 transition hover:text-blush"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>
        <button
          type="button"
          className="flex flex-col gap-[4px] md:hidden"
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((current) => !current)}
        >
          {mobileOpen ? (
            <span className="font-jost text-xs uppercase tracking-[0.2em] text-cream/70">✕</span>
          ) : (
            <>
              <span className="block h-px w-5 bg-cream/60" />
              <span className="block h-px w-5 bg-cream/60" />
              <span className="block h-px w-5 bg-cream/60" />
            </>
          )}
        </button>
      </nav>
      {mobileOpen ? (
        <div className="border-t border-green/20 bg-background/95 px-6 py-6 backdrop-blur md:hidden">
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="lux-link py-2 font-jost text-sm uppercase tracking-[0.2em] text-cream/75 transition hover:text-blush"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
      <div
        className={`absolute inset-x-0 bottom-0 h-px bg-green transition-transform duration-500 ease-out ${
          scrolled ? "scale-x-100" : "scale-x-0"
        }`}
      />
    </motion.header>
  );
}
