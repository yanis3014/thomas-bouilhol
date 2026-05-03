 "use client";

import Image from "next/image";
import { AnimatePresence, motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { RevealWrapper } from "@/components/RevealWrapper";
import { SectionContainer } from "@/components/SectionContainer";

const gallery = [
  {
    src: "/photos/amenagement-ceremonie.jpg",
    alt: "Grande décoration florale pour lieu de cérémonie, volume structuré et tons clairs",
    caption: "Décoration de cérémonie",
  },
  {
    src: "/photos/amenagement-mariage.jpg",
    alt: "Scénographie florale de mariage avec volumes généreux et chemin d’accueil fleuri",
    caption: "Aménagement mariage",
  },
  {
    src: "/photos/amenagement-table-mariage.jpg",
    alt: "Tables de réception ornées de centres de table et vaisselle florale raffinée",
    caption: "Réception · tables fleuries",
  },
  {
    src: "/photos/amenagement-jardin.jpg",
    alt: "Aménagement floral en extérieur, massifs et lignes végétales dans un jardin",
    caption: "Jardin · paysage floral",
  },
  {
    src: "/photos/amenagement-interieur-luxe.jpg",
    alt: "Composition d’intérieur haut de gamme avec fleurs et cache-pots dans un salon luxueux",
    caption: "Intérieur d’exception",
  },
  {
    src: "/photos/amenagmement-terasse-dubai.jpg",
    alt: "Aménagement floral de terrasse élégante sous ciel lumineux, style résidentiel prestige",
    caption: "Terrasse · Dubaï",
  },
  {
    src: "/photos/bouquet-mariage.jpg",
    alt: "Bouquet de mariée généreux, association de fleurs et de feuillages",
    caption: "Bouquet mariage",
  },
  {
    src: "/photos/composition-florale-blanche.jpg",
    alt: "Composition florale monochrome blanche, textures douces et lignes aériennes",
    caption: "Composition monochrome",
  },
  {
    src: "/photos/decoration-florale.jpg",
    alt: "Décoration florale événementielle avec panache de couleurs et matières naturelles",
    caption: "Décoration événementielle",
  },
  {
    src: "/photos/grand-vase-fleurs-luxe.jpg",
    alt: "Grand vase sculptural rempli d’une création florale haute et spectaculaire",
    caption: "Grand vase · pièce maîtresse",
  },
  {
    src: "/photos/bouquet-dessange-paris.jpg",
    alt: "Bouquet raffiné créé pour une collaboration avec la Maison Jacques Dessange à Paris",
    caption: "Jacques Dessange · Paris",
  },
  {
    src: "/photos/decoration-maison-interieur.jpg",
    alt: "Ambiance botanique dans un intérieur résidentiel avec bouquet et plantes d’appoint",
    caption: "Décoration maison",
  },
];

const parcoursSteps: { period: string; primary: string; secondary?: string }[] = [
  { period: "2024", primary: "Création d'Azur Fleurot · Nice" },
  {
    period: "2024",
    primary: "Direction de Lady Camélia · Vichy",
    secondary: "Événementiel, mariages, deuils, hôtels",
  },
  {
    period: "Déc. 2023",
    primary: "Décoration de la maison mère de l'Institut Paul Bocuse · Lyon",
  },
  {
    period: "2020–2022",
    primary: "Maison Perles Oasis · Dubaï",
    secondary: "Fleurs, événements, hôtels, parcs et jardins",
  },
  {
    period: "2013–2020",
    primary: "Fleurissement des grandes boutiques de luxe",
    secondary: "Cartier, L'Oréal, Chantal Thomass, Ladurée…",
  },
  {
    period: "1994 · 2001",
    primary: "Racines au Puy-en-Velay",
    secondary: "Stage fondateur chez La Digitale, puis ouverture de la boutique Arcade",
  },
];

const trustInstitutionalRefs: string[] = [
  "Institut Paul Bocuse · Lyon",
  "Cathédrale Notre-Dame du Puy-en-Velay",
  "Rallye Paris-Dakar · Le Puy-en-Velay",
  "Rotary International · Vichy",
];

const trustLuxuryBrands: string[] = [
  "Cartier",
  "L'Oréal",
  "Ladurée",
  "Jacques Dessange",
  "Chantal Thomass",
];

const DEVINCI_MOTTO =
  "Là où l'esprit ne travaille pas avec la main, il n'y a pas d'art.";

function DecorativeLine({ className = "" }: { className?: string }) {
  return (
    <div className={`relative mx-auto h-px w-12 bg-green/45 ${className}`}>
      <span className="absolute left-1/2 top-1/2 block h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-green bg-cream" />
    </div>
  );
}

function frenchMobileTelHref(display: string) {
  const digits = display.replace(/\D/g, "");
  if (digits.startsWith("0")) {
    return `tel:+33${digits.slice(1)}`;
  }
  return `tel:${digits}`;
}

export default function Home() {
  const easeOutExpo = [0.22, 1, 0.36, 1] as const;
  const distinctionsRef = useRef<HTMLElement | null>(null);
  const distinctionsDecorRef = useRef<HTMLDivElement | null>(null);
  const citationRef = useRef<HTMLElement | null>(null);
  const portraitRef = useRef<HTMLElement | null>(null);
  const portraitDecorRef = useRef<HTMLDivElement | null>(null);
  const parcoursRef = useRef<HTMLElement | null>(null);
  const trustRef = useRef<HTMLElement | null>(null);
  const creationsRef = useRef<HTMLElement | null>(null);
  const maisonsRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);
  const contactDecorRef = useRef<HTMLDivElement | null>(null);

  const distinctionsInView = useInView(distinctionsRef, { once: true, margin: "-100px" });
  const distinctionsDecorInView = useInView(distinctionsDecorRef, { once: false, margin: "-100px" });
  const citationInView = useInView(citationRef, { once: true, margin: "-80px" });
  const trustInView = useInView(trustRef, { once: true });
  const creationsInView = useInView(creationsRef, { once: true, amount: 0.05 });
  const maisonsInView = useInView(maisonsRef, { once: true });
  const contactInView = useInView(contactRef, { once: true });
  const portraitInView = useInView(portraitRef, { once: true });
  const portraitDecorInView = useInView(portraitDecorRef, { once: false, margin: "-100px" });
  const parcoursInView = useInView(parcoursRef, { once: true, margin: "-60px" });
  const contactDecorInView = useInView(contactDecorRef, { once: false, margin: "-100px" });

  const { scrollYProgress: portraitScrollProgress } = useScroll({
    target: portraitRef,
    offset: ["start end", "end start"],
  });
  const portraitQuoteY = useTransform(portraitScrollProgress, [0, 1], [30, -30]);

  const citationWords = DEVINCI_MOTTO.split(/\s+/);

  return (
    <main className="overflow-x-hidden bg-cream">
      <Navbar />

      <section className="relative isolate z-10 min-h-[100vh] max-w-[100vw] overflow-x-hidden overflow-y-hidden bg-background md:grid md:grid-cols-[45%_55%]">
        <motion.div
          className="absolute inset-0 z-0 max-w-[100vw] min-h-[100vh] w-full overflow-hidden after:pointer-events-none after:absolute after:inset-0 after:z-[1] after:bg-[linear-gradient(to_top,rgba(10,10,8,0.85)_0%,rgba(10,10,8,0.4)_60%,transparent_100%)] md:relative md:inset-auto md:min-h-[100vh] md:after:hidden"
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 1.4, ease: easeOutExpo, delay: 0.3 }}
        >
          <Image
            src="/images/thomas-bouilhol-hero.png"
            alt="Portrait professionnel de Thomas Bouilhol, Maître Fleuriste et Maître Artisan d'Art, en tenue sobre"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_22%] brightness-105 contrast-105 md:object-[center_18%]"
          />
          <div
            className="absolute inset-0 hidden md:block"
            style={{
              background: "linear-gradient(to right, transparent 70%, rgba(15,15,13,0.62) 100%)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/70 md:hidden" />
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-center bg-transparent px-5 pb-16 pt-10 md:relative md:inset-auto md:z-auto md:min-h-[100vh] md:bg-secondary md:px-6 md:py-16">
          <div className="pointer-events-none absolute right-4 top-1/2 hidden -translate-y-1/2 text-green/[0.12] md:block">
            <svg
              viewBox="0 0 120 420"
              className="h-[52vh] w-auto max-h-[520px]"
              aria-hidden="true"
              fill="none"
            >
              <path d="M58 406V26" stroke="currentColor" strokeWidth="1.4" vectorEffect="non-scaling-stroke" />
              <path
                d="M58 106c18-2 34-12 40-30-18 2-34 12-40 30Z"
                stroke="currentColor"
                strokeWidth="1.4"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M58 182c-16-2-30-10-36-24 16 2 30 10 36 24Z"
                stroke="currentColor"
                strokeWidth="1.4"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M58 268c20-2 36-12 44-30-20 2-36 12-44 30Z"
                stroke="currentColor"
                strokeWidth="1.4"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>
          <div
            className="absolute inset-0 hidden md:block"
            style={{
              background:
                "radial-gradient(ellipse at 50% 30%, rgba(74,94,58,0.08) 0%, transparent 70%)",
            }}
          />
          <RevealWrapper className="relative z-20 text-center">
            <motion.div
              className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-green/70 shadow-[0_0_60px_rgba(74,94,58,0.22)] md:h-20 md:w-20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: easeOutExpo, delay: 1 }}
            >
              <svg
                viewBox="0 0 120 120"
                className="pointer-events-none absolute -inset-4 text-cream/[0.08]"
                aria-hidden="true"
                fill="none"
              >
                <circle cx="60" cy="60" r="45" stroke="currentColor" strokeWidth="1.2" />
                <path d="M60 14c10 8 16 18 18 30M14 60c8-10 18-16 30-18M106 60c-8-10-18-16-30-18M60 106c-10-8-16-18-18-30" stroke="currentColor" strokeWidth="1.2" />
              </svg>
              <span className="font-cormorant text-2xl italic text-cream">TB</span>
            </motion.div>
            <motion.p
              className="mt-7 font-jost text-xs uppercase tracking-[0.62em] text-muted"
              initial={{ opacity: 0, letterSpacing: "0.8em" }}
              animate={{ opacity: 1, letterSpacing: "0.55em" }}
              transition={{ duration: 1, ease: easeOutExpo, delay: 1.2 }}
              style={{ textShadow: "0 1px 4px rgba(0,0,0,0.6)" }}
            >
              Nice · Côte d&apos;Azur · France
            </motion.p>
            <h1 className="mt-8 font-cormorant text-[clamp(2.8rem,10vw,4rem)] font-light leading-none text-cream md:text-[clamp(3.5rem,9vw,7rem)]">
              <motion.span
                className="block"
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: easeOutExpo, delay: 1.3 }}
              >
                Thomas
              </motion.span>
              <motion.span
                className="block"
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: easeOutExpo, delay: 1.45 }}
              >
                Bouilhol
              </motion.span>
            </h1>
            <motion.p
              className="mx-auto mt-5 max-w-lg px-4 font-cormorant text-xs italic leading-snug text-blush sm:text-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: easeOutExpo, delay: 1.6 }}
            >
              Le seul en France à être titré de deux titres de Maître.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { delayChildren: 1.7, staggerChildren: 0.1 } },
              }}
            >
              <motion.span
                className="border border-green/55 px-5 py-2.5 font-jost text-[9px] uppercase tracking-[0.3em] text-cream/90"
                variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.8, ease: easeOutExpo }}
              >
                Maître Fleuriste
              </motion.span>
              <span className="hidden text-green/55 sm:inline">·</span>
              <motion.span
                className="border border-green/55 px-5 py-2.5 font-jost text-[9px] uppercase tracking-[0.3em] text-cream/90"
                variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.8, ease: easeOutExpo }}
              >
                Maître Artisan d&apos;Art
              </motion.span>
            </motion.div>
            <motion.figure
              className="mx-auto mt-7 max-w-lg px-4 text-center"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: easeOutExpo, delay: 1.82 }}
            >
              <blockquote className="font-cormorant text-base italic leading-snug text-cream/78 md:text-[1.05rem]">
                «&nbsp;{DEVINCI_MOTTO}&nbsp;»
              </blockquote>
              <figcaption className="mt-3 font-jost text-[9px] uppercase tracking-[0.32em] text-blush/65">
                Léonard de Vinci
              </figcaption>
            </motion.figure>
            <motion.p
              className="mx-auto mt-6 max-w-sm font-cormorant text-lg italic text-blush/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: easeOutExpo, delay: 2.15 }}
            >
              L&apos;unique fleuriste en France à réunir ces deux distinctions.
            </motion.p>
          </RevealWrapper>
          <AnimatePresence>
            <motion.div
              className="absolute bottom-8 z-10 hidden md:block"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easeOutExpo, delay: 2.4 }}
            >
              <span className="animate-sovereign-bounce block h-14 w-px bg-gradient-to-b from-green/60 to-transparent" />
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section id="artisan" ref={distinctionsRef} className="relative isolate z-10 overflow-x-hidden bg-cream py-24 md:py-32">
        <SectionContainer>
          <RevealWrapper className="text-center">
            <div ref={distinctionsDecorRef} className="mx-auto flex max-w-xl items-center gap-5">
              <motion.span
                className="h-px flex-1 bg-green/35"
                initial={{ scaleX: 0, originX: 0 }}
                animate={distinctionsDecorInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.4, ease: easeOutExpo }}
              />
              <motion.p
                className="font-jost text-xs uppercase tracking-[0.55em] text-cream"
                initial={{ opacity: 0, y: 10 }}
                animate={distinctionsDecorInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.3, ease: easeOutExpo, delay: 0.05 }}
              >
                Distinctions
              </motion.p>
              <motion.span
                className="h-px flex-1 bg-green/35"
                initial={{ scaleX: 0, originX: 0 }}
                animate={distinctionsDecorInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.4, ease: easeOutExpo, delay: 0.1 }}
              />
            </div>
            <motion.h2
              className="mt-8 font-cormorant text-5xl leading-tight text-background md:text-6xl"
              initial={{ opacity: 0, y: 40 }}
              animate={distinctionsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: easeOutExpo, delay: 0.3 }}
            >
              Deux titres. <span className="text-blush">Un seul homme en France.</span>
            </motion.h2>
            <p className="mt-6 font-jost text-xs uppercase tracking-[0.25em] text-muted">
              Une distinction que nul autre fleuriste ne possède
            </p>
          </RevealWrapper>
        </SectionContainer>

        <div className="mt-16 grid w-full items-stretch lg:grid-cols-2 lg:divide-x lg:divide-green/25">
          <RevealWrapper>
            <motion.article
              className="relative flex h-full flex-col border-t border-green/20 bg-white/60 px-8 py-16 transition duration-300 hover:bg-white/90 md:px-16 md:py-20"
              initial={{ opacity: 0, x: -40 }}
              animate={distinctionsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, ease: easeOutExpo, delay: 0.1 }}
            >
              <span className="pointer-events-none absolute right-8 top-2 font-cormorant text-[clamp(6rem,12vw,10rem)] leading-none text-blush/80">
                I
              </span>
              <p className="font-jost text-[10px] uppercase tracking-[0.45em] text-blush/80">
                Première distinction
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
                <h3 className="font-cormorant text-[clamp(2rem,4vw,3.25rem)] font-light leading-tight text-background">
                  Maître Fleuriste
                </h3>
                <span
                  className="shrink-0 font-cormorant text-[clamp(2.75rem,10vw,4.75rem)] font-light leading-none tabular-nums text-green sm:translate-y-1"
                  aria-label="Année 2012"
                >
                  2012
                </span>
              </div>
              <p className="mt-4 max-w-xl font-jost text-[11px] leading-relaxed tracking-wide text-background/65">
                Chambre de Métiers et de l&apos;Artisanat — Région Auvergne
              </p>
              <motion.div
                className="relative my-7 h-px w-12 bg-green/45"
                initial={{ scaleX: 0, originX: 0 }}
                animate={distinctionsInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.5 }}
              >
                <span className="absolute left-1/2 top-1/2 block h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-green bg-cream" />
              </motion.div>
              <p className="max-w-xl flex-1 text-base leading-relaxed text-background/70">
                Le titre de Maître Fleuriste est la plus haute distinction artisanale de la
                profession en France. Décerné après des décennies d&apos;excellence et une maîtrise
                technique hors pair, il consacre l&apos;artisan au sommet de son art.
              </p>
            </motion.article>
          </RevealWrapper>

          <RevealWrapper>
            <motion.article
              className="relative flex h-full flex-col border-t border-green/20 bg-white/60 px-8 py-16 transition duration-300 hover:bg-white/90 md:px-16 md:py-20"
              initial={{ opacity: 0, x: 40 }}
              animate={distinctionsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, ease: easeOutExpo, delay: 0.25 }}
            >
              <span className="pointer-events-none absolute right-8 top-2 font-cormorant text-[clamp(6rem,12vw,10rem)] leading-none text-blush/80">
                II
              </span>
              <p className="font-jost text-[10px] uppercase tracking-[0.45em] text-blush/80">
                Deuxième distinction
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
                <h3 className="font-cormorant text-[clamp(2rem,4vw,3.25rem)] font-light leading-tight text-background">
                  Maître Artisan d&apos;Art
                </h3>
                <span
                  className="shrink-0 font-cormorant text-[clamp(2.75rem,10vw,4.75rem)] font-light leading-none tabular-nums text-green sm:translate-y-1"
                  aria-label="Année 2024"
                >
                  2024
                </span>
              </div>
              <p className="mt-4 font-cormorant text-lg italic text-background/75">
                Parcs et Jardins du Patrimoine
              </p>
              <p className="mt-3 max-w-xl font-jost text-[11px] leading-relaxed tracking-wide text-background/65">
                Chambre de Métiers et de l&apos;Artisanat — Région Sud · Provence-Alpes-Côte d&apos;Azur
              </p>
              <p className="mt-3 max-w-xl font-jost text-[11px] leading-relaxed text-background/55">
                Appellation Artisan d&apos;Art — 2024, même organisme.
              </p>
              <motion.div
                className="relative my-7 h-px w-12 bg-green/45"
                initial={{ scaleX: 0, originX: 0 }}
                animate={distinctionsInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.5 }}
              >
                <span className="absolute left-1/2 top-1/2 block h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-green bg-cream" />
              </motion.div>
              <p className="max-w-xl flex-1 text-base leading-relaxed text-background/70">
                Titre d&apos;État décerné aux artisans dont le savoir-faire constitue un patrimoine
                culturel vivant. Dans le domaine des Parcs et Jardins du Patrimoine, Thomas
                Bouilhol est gardien d&apos;un art dont les racines traversent les siècles.
              </p>
            </motion.article>
          </RevealWrapper>
        </div>

        <div className="border-t border-green/20 bg-secondary/10 py-8 text-center">
          <p className="font-cormorant text-[clamp(1rem,2.5vw,1.5rem)] italic text-background/60">
            Seul fleuriste en France à détenir simultanément ces deux distinctions.
          </p>
        </div>
      </section>

      <section ref={citationRef} className="relative isolate bg-[#F5F0E8] py-20 md:py-28">
        <SectionContainer>
          <RevealWrapper className="mx-auto max-w-3xl text-center">
            <motion.p
              className="font-cormorant text-[7rem] leading-none text-blush/80"
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={citationInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 1.2, ease: easeOutExpo }}
            >
              &ldquo;
            </motion.p>
            <motion.blockquote
              className="-mt-8 font-cormorant text-[clamp(1.6rem,3.2vw,2.5rem)] italic text-background"
              variants={{
                hidden: {},
                show: { transition: { delayChildren: 0.2, staggerChildren: 0.03 } },
              }}
              initial="hidden"
              animate={citationInView ? "show" : "hidden"}
            >
              {citationWords.map((word, index) => (
                <motion.span
                  key={`${word}-${index}`}
                  className="mr-2 inline-block"
                  variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.6, ease: easeOutExpo }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.blockquote>
            <motion.footer
              className="mt-10"
              initial={{ opacity: 0 }}
              animate={citationInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, ease: easeOutExpo, delay: 1.1 }}
            >
              <DecorativeLine className="mb-4" />
              <p className="font-jost text-[10px] uppercase tracking-[0.35em] text-blush/80">
                Léonard de Vinci
              </p>
              <p className="mt-3 font-cormorant text-sm italic text-muted">
                La devise qui guide chaque création de Thomas Bouilhol.
              </p>
            </motion.footer>
          </RevealWrapper>
        </SectionContainer>
      </section>

      <section id="portrait" ref={portraitRef} className="relative isolate overflow-x-hidden bg-[#EDE8DF] py-24 md:py-32">
        <SectionContainer>
          <RevealWrapper>
            <div ref={portraitDecorRef} className="mx-auto flex max-w-xl items-center gap-5">
              <motion.span
                className="h-px flex-1 bg-green/35"
                initial={{ scaleX: 0, originX: 0 }}
                animate={portraitDecorInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.4, ease: easeOutExpo }}
              />
              <motion.p
                className="font-jost text-[9px] uppercase tracking-[0.55em] text-blush/80"
                initial={{ opacity: 0, y: 10 }}
                animate={portraitDecorInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.3, ease: easeOutExpo, delay: 0.05 }}
              >
                Portrait
              </motion.p>
              <motion.span
                className="h-px flex-1 bg-green/35"
                initial={{ scaleX: 0, originX: 0 }}
                animate={portraitDecorInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.4, ease: easeOutExpo, delay: 0.1 }}
              />
            </div>
            <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:gap-24">
              <motion.blockquote
                className="font-cormorant text-[clamp(1.7rem,3.5vw,3rem)] italic leading-tight text-background"
                style={{ y: portraitQuoteY }}
                initial={{ opacity: 0, x: -60 }}
                animate={portraitInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1.2, ease: easeOutExpo }}
              >
                « Ce qui m&apos;intéresse,
                <br />
                c&apos;est d&apos;aller à l&apos;avant
                <br />
                de ce que je vis. »
              </motion.blockquote>
              <motion.div
                className="space-y-6 text-[15px] text-background/70"
                variants={{
                  hidden: {},
                  show: { transition: { delayChildren: 0.2, staggerChildren: 0.15 } },
                }}
                initial="hidden"
                animate={portraitInView ? "show" : "hidden"}
              >
                <motion.p
                  className="leading-relaxed"
                  variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.9, ease: easeOutExpo }}
                >
                  Depuis ses 14 ans, Thomas Bouilhol vit en compagnie des fleurs. Autodidacte, guidé
                  par le ressenti et l&apos;exigence du geste juste, il a bâti une œuvre florale
                  reconnue des plus grands établissements de la Côte d&apos;Azur et au-delà.
                </motion.p>
                <motion.p
                  className="leading-relaxed"
                  variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.9, ease: easeOutExpo }}
                >
                  <em className="font-cormorant text-[1.15rem] italic text-background/85">
                    Idéateur végétal
                  </em>{" "}
                  — il ne se contente pas d&apos;arranger des fleurs. Il conçoit des univers
                  végétaux, des architectures éphémères qui capturent l&apos;instant et transcendent
                  le décor.
                </motion.p>
                <motion.div
                  className="border-t border-green/20 pt-6"
                  variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.9, ease: easeOutExpo }}
                >
                  <p className="font-jost text-[9px] uppercase tracking-[0.3em] text-blush/80">
                    Domaines d&apos;excellence
                  </p>
                  <motion.p
                    className="mt-4 text-sm leading-loose text-background/60"
                    variants={{
                      hidden: {},
                      show: { transition: { delayChildren: 0.1, staggerChildren: 0.08 } },
                    }}
                    initial="hidden"
                    animate={portraitInView ? "show" : "hidden"}
                  >
                    {[
                      "Mariages",
                      "·",
                      "Deuil",
                      "·",
                      "Parcs et Jardins du Patrimoine",
                      "·",
                      "Cours d'art floral",
                      "·",
                      "Décoration d'intérieur",
                    ].map((item, index) => (
                      <motion.span
                        key={`${item}-${index}`}
                        className={item === "·" ? "mx-1 text-green" : ""}
                        variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
                        transition={{ duration: 0.8, ease: easeOutExpo }}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </motion.p>
                </motion.div>
              </motion.div>
            </div>
          </RevealWrapper>
        </SectionContainer>
      </section>

      <section
        id="parcours"
        ref={parcoursRef}
        className="relative isolate border-t border-green/20 bg-[#E8E4DC] py-20 text-neutral-900 md:py-28"
      >
        <SectionContainer>
          <RevealWrapper className="mx-auto max-w-xl md:max-w-2xl">
            <motion.h2
              className="font-cormorant text-[clamp(2rem,5vw,3rem)] font-light leading-tight text-neutral-950"
              initial={{ opacity: 0, y: 20 }}
              animate={parcoursInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: easeOutExpo }}
            >
              Parcours
            </motion.h2>
            <motion.p
              className="mt-3 font-jost text-[11px] uppercase tracking-[0.22em] text-neutral-600"
              initial={{ opacity: 0 }}
              animate={parcoursInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.08 }}
            >
              Quelques jalons majeurs · du plus récent au plus ancien
            </motion.p>
            <div className="relative mt-12 md:mt-14">
              <div
                className="pointer-events-none absolute bottom-4 left-[11px] top-1 w-[3px] -translate-x-1/2 rounded-full bg-green md:left-3"
                aria-hidden="true"
              />
              <motion.ul
                className="relative space-y-12 md:space-y-14"
                initial="hidden"
                animate={parcoursInView ? "show" : "hidden"}
                variants={{
                  hidden: {},
                  show: {
                    transition: { staggerChildren: 0.1, delayChildren: 0.18 },
                  },
                }}
              >
                {parcoursSteps.map((step, i) => (
                  <motion.li
                    key={`${step.period}-${step.primary}-${i}`}
                    className="relative grid grid-cols-[22px_minmax(0,1fr)] items-start gap-x-6 md:grid-cols-[24px_minmax(0,1fr)] md:gap-x-8"
                    variants={{
                      hidden: { opacity: 0, x: 28 },
                      show: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.55, ease: easeOutExpo },
                      },
                    }}
                  >
                    <div className="relative z-[2] flex justify-center pt-[0.32rem] md:pt-1.5">
                      <motion.span
                        className="size-3.5 shrink-0 rounded-full border-[2px] border-green bg-[#F6F4ED] shadow-[0_0_0_3px_#E8E4DC]"
                        aria-hidden="true"
                        variants={{
                          hidden: { scale: 0, opacity: 0 },
                          show: {
                            scale: 1,
                            opacity: 1,
                            transition: {
                              type: "spring",
                              stiffness: 420,
                              damping: 26,
                              delay: 0.04,
                            },
                          },
                        }}
                      />
                    </div>
                    <div className="min-w-0 md:max-w-xl">
                      <p className="font-jost text-sm font-semibold tabular-nums leading-normal text-green md:text-[15px] md:leading-normal">
                        {step.period}
                      </p>
                      <p className="mt-2.5 text-[16px] leading-[1.72] text-neutral-800 md:text-[17px] md:leading-[1.74]">
                        {step.primary}
                      </p>
                      {step.secondary ? (
                        <p className="mt-2 text-[14px] leading-[1.7] text-neutral-600 md:text-[15px]">
                          {step.secondary}
                        </p>
                      ) : null}
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
            <motion.p
              className="mx-auto mt-14 max-w-md text-center text-[13px] leading-relaxed text-neutral-600 md:mt-16"
              initial={{ opacity: 0 }}
              animate={parcoursInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              D&apos;autres expériences complètent ce parcours et peuvent être détaillées sur demande.
            </motion.p>
          </RevealWrapper>

          <motion.figure
            className="mx-auto mt-16 max-w-[min(100%,38rem)] px-4 text-center text-neutral-900 md:mt-20 md:max-w-[44rem]"
            initial={{ opacity: 0, y: 28 }}
            animate={parcoursInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: easeOutExpo, delay: 0.25 }}
          >
            <div className="mx-auto mb-10 h-px w-12 bg-green/45" aria-hidden="true" />
            <blockquote className="font-cormorant text-[clamp(1.45rem,4.2vw,2.85rem)] font-light italic leading-snug text-neutral-950">
              «&nbsp;{DEVINCI_MOTTO}&nbsp;»
            </blockquote>
            <figcaption className="mt-9 space-y-4">
              <p className="font-jost text-[10px] uppercase tracking-[0.32em] text-[#8a734f]">
                Léonard de Vinci
              </p>
              <p className="font-cormorant text-sm italic leading-relaxed text-neutral-600">
                Devise personnelle de Thomas Bouilhol, mentionnée dans son CV.
              </p>
            </figcaption>
          </motion.figure>
        </SectionContainer>
      </section>

      <section ref={trustRef} className="relative isolate overflow-hidden bg-background py-[4.5rem] md:py-[5.25rem]">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_0%,rgba(201,169,138,0.06)_0%,transparent_60%)]"
          aria-hidden="true"
        />

        <SectionContainer className="relative">
          <RevealWrapper className="mx-auto max-w-xl text-center md:max-w-2xl">
            <motion.h2
              className="font-cormorant text-[clamp(2.25rem,5vw,3.35rem)] font-light italic leading-tight tracking-[0.02em] text-cream"
              initial={{ opacity: 0, y: 26 }}
              animate={trustInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: easeOutExpo }}
            >
              Ils lui font confiance
            </motion.h2>
            <motion.div
              className="mx-auto mt-7 h-px w-14 bg-green/35"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={trustInView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ duration: 0.7, ease: easeOutExpo, delay: 0.08 }}
              aria-hidden="true"
            />

            <motion.div
              className="mt-14 space-y-3"
              initial={{ opacity: 0, y: 14 }}
              animate={trustInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, ease: easeOutExpo, delay: 0.12 }}
            >
              <p className="font-jost text-[10px] uppercase tracking-[0.28em] text-blush/[0.7]">
                Quelques repères marquants
              </p>
              <ul className="mx-auto mt-8 max-w-md space-y-7 text-[16px] leading-[1.7] text-cream/[0.78] md:text-[17px] md:leading-[1.75]">
                {trustInstitutionalRefs.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="mx-auto mt-16 max-w-lg border-t border-green/15 pt-14"
              initial={{ opacity: 0, y: 14 }}
              animate={trustInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, ease: easeOutExpo, delay: 0.18 }}
            >
              <p className="font-jost text-[10px] uppercase tracking-[0.28em] text-blush/[0.7]">Luxe partenaire</p>
              <p className="mx-auto mt-8 text-[17px] font-light leading-[1.85] tracking-[0.01em] text-cream/[0.8] md:text-[18px]">
                {trustLuxuryBrands.join(" · ")}
              </p>
              <p className="mx-auto mt-6 max-w-sm text-[13px] leading-relaxed text-cream/[0.42] md:text-[14px]">
                … et autres maisons françaises &amp; internationales.
              </p>
            </motion.div>

            <motion.div
              className="relative mx-auto mt-14 rounded-sm border border-blush/[0.18] bg-cream/[0.025] px-8 py-6 text-center md:mt-16"
              initial={{ opacity: 0 }}
              animate={trustInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, ease: easeOutExpo, delay: 0.24 }}
            >
              <p className="font-cormorant text-[1.1rem] italic leading-snug text-blush/[0.92] md:text-[1.2rem]">
                Maison Fiol · Nice
              </p>
              <p className="mt-2 font-jost text-[10px] uppercase tracking-[0.26em] text-cream/[0.38]">
                Prestataire actuel
              </p>
            </motion.div>
          </RevealWrapper>
        </SectionContainer>
      </section>

      <div className="relative isolate flex justify-center bg-cream py-8 text-green/[0.15]">
        <svg viewBox="0 0 140 220" className="h-20 w-auto md:h-24" aria-hidden="true" fill="none">
          <path d="M70 210V18" stroke="currentColor" strokeWidth="1.4" vectorEffect="non-scaling-stroke" />
          <path d="M70 74c18-2 34-12 42-30-18 2-34 12-42 30Z" stroke="currentColor" strokeWidth="1.4" vectorEffect="non-scaling-stroke" />
          <path d="M70 126c-16-2-30-10-38-24 16 2 30 10 38 24Z" stroke="currentColor" strokeWidth="1.4" vectorEffect="non-scaling-stroke" />
          <path d="M70 176c20-2 36-12 46-30-20 2-36 12-46 30Z" stroke="currentColor" strokeWidth="1.4" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>

      <section id="creations" ref={creationsRef} className="relative isolate bg-[#F5F0E8] px-4 py-20 md:px-16 md:py-32">
        <SectionContainer>
          <RevealWrapper>
            <motion.h2
              className="font-cormorant text-6xl italic text-secondary md:text-7xl"
              initial={{ opacity: 0, y: 30 }}
              animate={creationsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: easeOutExpo }}
            >
              Quelques créations
            </motion.h2>
            <div className="mt-4 h-px w-[60px] bg-green/60" />
            <p className="mt-5 font-jost text-xs uppercase tracking-[0.24em] text-muted">
              Compositions · Mariages · Jardins · Réceptions
            </p>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.map((item, index) => (
                <motion.article
                  key={item.src}
                  className="group min-w-0"
                  initial={{ opacity: 0, y: 40, scale: 0.96 }}
                  animate={creationsInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.9, ease: easeOutExpo, delay: index * 0.12 }}
                >
                  <div className="relative w-full overflow-hidden rounded-[4px] border border-transparent transition-all duration-[450ms] ease-out group-hover:border-green">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={1600}
                      height={2200}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="h-auto w-full max-w-full object-cover transition-transform duration-[450ms] ease-out group-hover:scale-[1.04]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-[rgba(245,240,232,0)] transition-colors duration-[450ms] ease-out group-hover:bg-[rgba(245,240,232,0.08)]" />
                  </div>
                  <p className="mt-2 translate-y-[6px] font-cormorant text-[0.85rem] italic text-[#6B6B5A] opacity-95 transition-all duration-[450ms] ease-out group-hover:translate-y-0 group-hover:opacity-100">
                    {item.caption}
                  </p>
                </motion.article>
              ))}
            </div>
          </RevealWrapper>
        </SectionContainer>
      </section>

      <section
        id="maisons"
        ref={maisonsRef}
        className="relative isolate overflow-hidden bg-[#F3EFE6] py-[4.5rem] md:py-[5.75rem]"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_50%_at_50%_0%,rgba(201,169,138,0.14)_0%,transparent_52%)]"
          aria-hidden="true"
        />
        <SectionContainer className="relative">
          <RevealWrapper>
            <motion.h2
              className="text-center font-cormorant text-[clamp(2rem,4.5vw,3.35rem)] font-light italic tracking-[0.02em] text-neutral-950"
              initial={{ opacity: 0, y: 30 }}
              animate={maisonsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: easeOutExpo }}
            >
              Un univers, plusieurs maisons
            </motion.h2>
            <motion.div
              className="mx-auto mt-7 h-px w-16 bg-gradient-to-r from-transparent via-green/35 to-transparent"
              aria-hidden="true"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={maisonsInView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.08 }}
            />
            <motion.div
              className="mx-auto mt-11 max-w-4xl text-neutral-700 md:mt-14"
              initial={{ opacity: 0, y: 18 }}
              animate={maisonsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: easeOutExpo, delay: 0.1 }}
            >
              <p className="text-center font-cormorant text-[1.2rem] font-light italic leading-snug tracking-[0.01em] text-neutral-900 md:text-[1.35rem] md:leading-snug">
                Deux paysages,&nbsp;un même souffle&nbsp;: faire du végétal une langue d&apos;exception, entre la grande
                lumière du sud et les jardins de mémoire.
              </p>

              <div className="mx-auto mt-10 max-w-2xl space-y-5 text-[15px] font-light leading-[1.82] md:mt-12 md:text-[16px]">
                <p>
                  Thomas Bouilhol déploie ainsi son métier comme un fil tendu entre la Côte d&apos;Azur et
                  l&apos;Auvergne&nbsp;: pont délicat jeté entre héritage et modernité, entre le geste transmis et
                  l&apos;invention qui le réactualise sans le trahir. Derrière deux enseignes, c&apos;est la même exigence
                  qui préside&nbsp;: le respect des matières vivantes, le tempérament d&apos;hôte, et ce feu tranquille qui
                  pousse une signature à chercher délicatesse jusque sous la feuille.
                </p>
              </div>

              <div className="mx-auto mt-14 max-w-5xl border-t border-green/22 pt-12 md:grid md:grid-cols-2 md:gap-14 lg:gap-20">
                <motion.article
                  className="text-center md:border-r md:border-green/14 md:pr-10 md:text-left"
                  initial={{ opacity: 0, y: 16 }}
                  animate={maisonsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.85, ease: easeOutExpo, delay: 0.18 }}
                >
                  <h3 className="font-jost text-[10px] font-semibold uppercase tracking-[0.32em] text-green">
                    Azur Fleurot · Nice
                  </h3>
                  <p className="mt-3 font-cormorant text-[0.92rem] font-light italic text-neutral-600 md:text-[0.96rem]">
                    Maison fleuriste signature&nbsp;&mdash; née en&nbsp;2024
                  </p>
                  <p className="mt-5 text-[15px] font-light leading-[1.82] md:text-[16px]">
                    Au cœur du Vieux-Nice, où la ville se resserre autour de la place de l&apos;Ancien Sénat,&nbsp;
                    <span className="text-neutral-900">Azur Fleurot</span> est sa création la plus récente&nbsp;: une
                    maison d&apos;où parlent couleurs tranchées et lignes contemporaines, où le sel de la Riviera se fait
                    composition avant d&apos;être ornement. C&apos;est ici que se déploie avec le plus de franchise
                    sa voix la plus neuve&nbsp;&mdash; celle qui ose inventer tout en gardant la main fleuriste.
                  </p>
                </motion.article>

                <motion.article
                  className="mt-14 text-center md:mt-0 md:text-left"
                  initial={{ opacity: 0, y: 16 }}
                  animate={maisonsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.85, ease: easeOutExpo, delay: 0.28 }}
                >
                  <h3 className="font-jost text-[10px] font-semibold uppercase tracking-[0.32em] text-green">
                    Lady Camélia · Vichy
                  </h3>
                  <p className="mt-3 font-cormorant text-[0.92rem] font-light italic text-neutral-600 md:text-[0.96rem]">
                    Ancrage historique depuis&nbsp;2011
                  </p>
                  <p className="mt-5 text-[15px] font-light leading-[1.82] md:text-[16px]">
                    <span className="text-neutral-900">Lady Camélia</span> est le socle sur lequel s&apos;est construit
                    son parcours&nbsp;: le pôle où l&apos;événementiel de prestige trouve sa pleine mesure, où les
                    mariages d&apos;exception et les grandes réceptions prennent corps avec la même attention qu&apos;un
                    intérieur de maison. Hôtels, scènes de réception, jardins du patrimoine&nbsp;: autant de théâtres où
                    le fleuriste devient metteur en scène du lieu, au rythme patient d&apos;un artisan qui a choisi le
                    temps long.
                  </p>
                </motion.article>
              </div>
            </motion.div>
          </RevealWrapper>
        </SectionContainer>
      </section>

      <section id="contact" ref={contactRef} className="relative isolate bg-background py-24 md:py-32">
        <SectionContainer>
          <RevealWrapper className="mx-auto max-w-lg text-center">
            <div ref={contactDecorRef} className="mx-auto flex items-center gap-5">
              <motion.span
                className="h-px flex-1 bg-green/40"
                initial={{ scaleX: 0, originX: 0 }}
                animate={contactDecorInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.4, ease: easeOutExpo }}
              />
              <motion.p
                className="font-jost text-[9px] uppercase tracking-[0.55em] text-cream"
                initial={{ opacity: 0, y: 10 }}
                animate={contactDecorInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.3, ease: easeOutExpo, delay: 0.05 }}
              >
                Contact
              </motion.p>
              <motion.span
                className="h-px flex-1 bg-green/40"
                initial={{ scaleX: 0, originX: 0 }}
                animate={contactDecorInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.4, ease: easeOutExpo, delay: 0.1 }}
              />
            </div>
            <motion.h2
              className="mt-8 font-cormorant text-[clamp(2.2rem,4vw,3.8rem)] italic text-cream"
              initial={{ opacity: 0, y: 40 }}
              animate={contactInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, ease: easeOutExpo }}
            >
              Entrer en contact
            </motion.h2>
            <p className="mt-4 font-cormorant text-lg italic text-muted">Pour les projets d&apos;exception.</p>
            <motion.div
              className="relative mx-auto my-10 h-px w-12 bg-green/50"
              initial={{ scaleX: 0, originX: 0.5 }}
              animate={contactInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, ease: easeOutExpo }}
            >
              <span className="absolute left-1/2 top-1/2 block h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-green bg-background" />
            </motion.div>
            <motion.div
              className="space-y-8 text-cream/80"
              variants={{
                hidden: {},
                show: { transition: { delayChildren: 0.2, staggerChildren: 0.15 } },
              }}
              initial="hidden"
              animate={contactInView ? "show" : "hidden"}
            >
              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.8, ease: easeOutExpo }}
              >
                <p className="mb-1.5 font-jost text-[9px] uppercase tracking-[0.35em] text-cream">
                  Adresse principale
                </p>
                <p className="text-[15px] leading-snug">
                  5 Place de l&apos;Ancien Sénat / 1 Rue Barillerie
                  <br />
                  06300 Nice
                </p>
              </motion.div>
              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.8, ease: easeOutExpo }}
              >
                <p className="mb-1.5 font-jost text-[9px] uppercase tracking-[0.35em] text-cream">
                  Téléphone
                </p>
                <a
                  href={frenchMobileTelHref("06 64 06 24 22")}
                  className="lux-link text-[15px] transition hover:text-cream"
                >
                  06 64 06 24 22
                </a>
              </motion.div>
              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.8, ease: easeOutExpo }}
              >
                <p className="mb-1.5 font-jost text-[9px] uppercase tracking-[0.35em] text-cream">
                  Email
                </p>
                <a
                  href="mailto:bouilholart@gmail.com"
                  className="lux-link text-[15px] text-blush underline-offset-4 transition hover:text-blush"
                >
                  bouilholart@gmail.com
                </a>
              </motion.div>
            </motion.div>
          </RevealWrapper>
        </SectionContainer>
      </section>

      <footer className="relative isolate border-t border-green/20 bg-background py-14 text-center">
        <div className="relative mb-5 inline-flex h-16 w-16 items-center justify-center rounded-full border border-green/45">
          <svg
            viewBox="0 0 120 120"
            className="pointer-events-none absolute -inset-4 text-cream/[0.08]"
            aria-hidden="true"
            fill="none"
          >
            <circle cx="60" cy="60" r="45" stroke="currentColor" strokeWidth="1.2" />
            <path d="M60 14c10 8 16 18 18 30M14 60c8-10 18-16 30-18M106 60c-8-10-18-16-30-18M60 106c-10-8-16-18-18-30" stroke="currentColor" strokeWidth="1.2" />
          </svg>
          <span className="font-cormorant text-2xl italic text-cream">TB</span>
        </div>
        <p className="font-cormorant text-2xl text-cream/55">Thomas Bouilhol</p>
        <p className="mt-2 font-jost text-[9px] uppercase tracking-[0.3em] text-cream/35">
          Maître Fleuriste · Maître Artisan d&apos;Art
        </p>
        <p className="mt-2 font-cormorant text-sm italic text-blush">Idéateur végétal · Nice</p>
        <DecorativeLine className="mt-7 w-8" />
        <p className="mt-6 font-jost text-[9px] text-cream/30">© 2026 Thomas Bouilhol</p>
      </footer>
    </main>
  );
}
