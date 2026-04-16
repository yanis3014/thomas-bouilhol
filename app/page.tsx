 "use client";

import Image from "next/image";
import { AnimatePresence, motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { RevealWrapper } from "@/components/RevealWrapper";
import { SectionContainer } from "@/components/SectionContainer";

const gallery = [
  {
    src: "/conception/lieu-culte.png",
    alt: "Composition florale luxueuse lieu de culte",
    caption: "Décoration d'autel",
  },
  {
    src: "/conception/cathedrale.png",
    alt: "Bouquet cathedrale",
    caption: "Mariage en cathédrale",
  },
  {
    src: "/conception/mariage.png",
    alt: "composition florale mariage ",
    caption: "Cérémonie nuptiale",
  },
  {
    src: "/conception/mariage-bouquet.png",
    alt: "Décoration florale d'exception pour réception privée mariage ",
    caption: "Réception florale couture",
  },
  {
    src: "/conception/jardin.png",
    alt: "Détails de fleurs délicates à l'élégance couture",
    caption: "Jardin patrimonial",
  },
  {
    src: "/conception/bouquet-rond.png",
    alt: "Bouquet raffiné au style artistique intemporel",
    caption: "Bouquet signature",
  },
];

function DecorativeLine({ className = "" }: { className?: string }) {
  return (
    <div className={`relative mx-auto h-px w-12 bg-green/45 ${className}`}>
      <span className="absolute left-1/2 top-1/2 block h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-green bg-cream" />
    </div>
  );
}

export default function Home() {
  const easeOutExpo = [0.22, 1, 0.36, 1] as const;
  const distinctionsRef = useRef<HTMLElement | null>(null);
  const distinctionsDecorRef = useRef<HTMLDivElement | null>(null);
  const citationRef = useRef<HTMLElement | null>(null);
  const portraitRef = useRef<HTMLElement | null>(null);
  const portraitDecorRef = useRef<HTMLDivElement | null>(null);
  const trustRef = useRef<HTMLElement | null>(null);
  const creationsRef = useRef<HTMLElement | null>(null);
  const maisonsRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);
  const contactDecorRef = useRef<HTMLDivElement | null>(null);

  const distinctionsInView = useInView(distinctionsRef, { once: true, margin: "-100px" });
  const distinctionsDecorInView = useInView(distinctionsDecorRef, { once: false, margin: "-100px" });
  const citationInView = useInView(citationRef, { once: true, margin: "-80px" });
  const trustInView = useInView(trustRef, { once: true });
  const creationsInView = useInView(creationsRef, { once: true, margin: "-50px" });
  const maisonsInView = useInView(maisonsRef, { once: true });
  const contactInView = useInView(contactRef, { once: true });
  const portraitInView = useInView(portraitRef, { once: true });
  const portraitDecorInView = useInView(portraitDecorRef, { once: false, margin: "-100px" });
  const contactDecorInView = useInView(contactDecorRef, { once: false, margin: "-100px" });

  const { scrollYProgress: portraitScrollProgress } = useScroll({
    target: portraitRef,
    offset: ["start end", "end start"],
  });
  const portraitQuoteY = useTransform(portraitScrollProgress, [0, 1], [30, -30]);

  const citationWords = "Là où l'esprit ne travaille pas avec la main,"
    .split(" ")
    .concat("il n'y a pas d'art.".split(" "));

  return (
    <main className="overflow-x-hidden bg-cream">
      <Navbar />

      <section className="relative isolate z-10 min-h-[100vh] overflow-hidden bg-background md:grid md:grid-cols-[45%_55%]">
        <motion.div
          className="absolute inset-0 md:relative md:inset-auto md:min-h-[100vh]"
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 1.4, ease: easeOutExpo, delay: 0.3 }}
        >
          <Image
            src="/thomas-hero.jpg"
            alt="Thomas Bouilhol, Maître Fleuriste, en création florale"
            fill
            priority
            className="object-cover object-[center_15%] brightness-105 contrast-105 md:object-[center_top]"
          />
          <div
            className="absolute inset-0 hidden md:block"
            style={{
              background: "linear-gradient(to right, transparent 70%, rgba(15,15,13,0.62) 100%)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/70 md:hidden" />
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-center bg-transparent px-5 pb-16 pt-10 md:relative md:inset-auto md:z-auto md:min-h-[100vh] md:bg-secondary md:px-6 md:py-16">
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
          <RevealWrapper className="relative z-10 text-center">
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
              className="mt-7 font-jost text-xs uppercase tracking-[0.55em] text-muted"
              initial={{ opacity: 0, letterSpacing: "0.8em" }}
              animate={{ opacity: 1, letterSpacing: "0.55em" }}
              transition={{ duration: 1, ease: easeOutExpo, delay: 1.2 }}
            >
              Nice · Côte d&apos;Azur · France
            </motion.p>
            <h1 className="mt-8 font-cormorant text-[clamp(3.5rem,9vw,7rem)] font-light leading-none text-cream">
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
              className="mt-5 font-cormorant text-[clamp(1.1rem,2.2vw,1.6rem)] italic text-blush"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: easeOutExpo, delay: 1.6 }}
            >
              Idéateur végétal
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
            <motion.p
              className="mx-auto mt-6 max-w-sm font-cormorant text-lg italic text-blush/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: easeOutExpo, delay: 2 }}
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
              <span className="pointer-events-none absolute right-8 top-2 font-cormorant text-[clamp(6rem,12vw,10rem)] leading-none text-green/20">
                I
              </span>
              <p className="font-jost text-[10px] uppercase tracking-[0.45em] text-cream">
                Première distinction
              </p>
              <h3 className="mt-6 whitespace-pre-line font-cormorant text-[clamp(2rem,4vw,3.8rem)] font-light leading-tight text-background">
                {"Maître\nFleuriste"}
              </h3>
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
              <span className="pointer-events-none absolute right-8 top-2 font-cormorant text-[clamp(6rem,12vw,10rem)] leading-none text-green/20">
                II
              </span>
              <p className="font-jost text-[10px] uppercase tracking-[0.45em] text-cream">
                Deuxième distinction
              </p>
              <h3 className="mt-6 whitespace-pre-line font-cormorant text-[clamp(2rem,4vw,3.8rem)] font-light leading-tight text-background">
                {"Maître Artisan\nd\u2019Art"}
              </h3>
              <p className="mt-4 font-jost text-[9px] uppercase tracking-[0.25em] text-muted">
                Parcs &amp; Jardins du Patrimoine
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
              className="font-cormorant text-[7rem] leading-none text-background/20"
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
              <p className="font-jost text-[10px] uppercase tracking-[0.35em] text-muted">
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
                className="font-jost text-[9px] uppercase tracking-[0.55em] text-cream"
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
                  <p className="font-jost text-[9px] uppercase tracking-[0.3em] text-muted">
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

      <section ref={trustRef} className="relative isolate bg-background py-24 md:py-28">
        <SectionContainer>
          <RevealWrapper>
            <motion.h2
              className="text-center font-cormorant text-5xl italic text-cream"
              initial={{ opacity: 0, y: 40 }}
              animate={trustInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: easeOutExpo }}
            >
              Ils lui font confiance
            </motion.h2>
            <p className="mt-5 text-center font-jost text-xs uppercase tracking-[0.25em] text-cream">
              Palaces · Institutions · Événements privés
            </p>
            <div className="mx-auto mt-12 flex max-w-5xl flex-col items-center justify-center gap-5 text-center md:flex-row md:gap-8">
              <motion.p
                className="text-sm uppercase tracking-[0.3em] text-cream/85"
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                animate={trustInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.1 }}
              >
                Hôtel Negresco · Nice
              </motion.p>
              <motion.span
                className="hidden h-7 w-px bg-green/35 md:block"
                initial={{ scaleY: 0 }}
                animate={trustInView ? { scaleY: 1 } : {}}
                transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.3 }}
              />
              <motion.p
                className="text-sm uppercase tracking-[0.3em] text-cream/85"
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                animate={trustInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.3 }}
              >
                Principauté de Monaco
              </motion.p>
              <motion.span
                className="hidden h-7 w-px bg-green/35 md:block"
                initial={{ scaleY: 0 }}
                animate={trustInView ? { scaleY: 1 } : {}}
                transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.5 }}
              />
              <motion.p
                className="text-sm uppercase tracking-[0.3em] text-cream/85"
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                animate={trustInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.5 }}
              >
                Parcs &amp; Jardins du Patrimoine
              </motion.p>
            </div>
            <p className="mt-10 text-center text-sm italic text-muted">
              Et de nombreux particuliers, familles et domaines privés de la Côte d&apos;Azur.
            </p>
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

            <div className="mt-12 columns-1 [column-gap:1.5rem] md:columns-3">
              {gallery.map((item, index) => (
                <motion.article
                  key={item.src}
                  className="group mb-6 break-inside-avoid"
                  style={{ breakInside: "avoid" }}
                  initial={{ opacity: 0, y: 40, scale: 0.96 }}
                  animate={creationsInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.9, ease: easeOutExpo, delay: index * 0.12 }}
                >
                  <div className="relative overflow-hidden rounded-[4px] border border-transparent transition-all duration-[450ms] ease-out group-hover:border-green">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={1600}
                      height={2200}
                      className="h-auto w-full object-cover transition-transform duration-[450ms] ease-out group-hover:scale-[1.04]"
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

      <section id="maisons" ref={maisonsRef} className="relative isolate overflow-x-hidden bg-[#F5F0E8] py-20">
        <SectionContainer>
          <RevealWrapper>
            <motion.h2
              className="text-center font-cormorant text-4xl italic text-background"
              initial={{ opacity: 0, y: 30 }}
              animate={maisonsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: easeOutExpo }}
            >
              Un univers, plusieurs maisons
            </motion.h2>
            <motion.p
              className="mx-auto mt-5 max-w-2xl text-center text-sm text-muted"
              initial={{ opacity: 0, y: 30 }}
              animate={maisonsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: easeOutExpo, delay: 0.1 }}
            >
              Thomas Bouilhol a fondé plusieurs établissements. Chacun reflète une facette de son
              art.
            </motion.p>
            <div className="mt-8 grid w-full grid-cols-1 gap-6 md:grid-cols-3">
              {[
                {
                  title: "Thomas Bouilhol · Nice",
                  address: "5 Place de l'Ancien Sénat, 06300 Nice",
                  tag: "Maison principale",
                },
                {
                  title: "Lady Camélia · Vichy",
                  address: "20 Rue de Paris, 03200 Vichy",
                  tag: "Maison historique depuis 1987",
                },
                {
                  title: "Thomas Bouilhol · Café Floral",
                  address: "5 Rue de l'Ancien Sénat, 06300 Nice",
                  tag: "Art floral & café",
                },
              ].map((house, index) => (
                <motion.a
                  key={house.title}
                  href="#"
                  className="lux-link relative flex items-start justify-between overflow-visible whitespace-normal border-t-2 border-green bg-[rgba(74,94,58,0.04)] px-10 py-8 text-background transition duration-300 ease-out hover:bg-[rgba(74,94,58,0.09)]"
                  initial={{ opacity: 0, x: -30 }}
                  animate={maisonsInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.9, ease: easeOutExpo, delay: index * 0.2 }}
                >
                  <div className="relative">
                    <h3 className="whitespace-normal font-cormorant text-3xl text-background">{house.title}</h3>
                    <p className="mt-2 text-sm text-muted">{house.address}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-blush">{house.tag}</p>
                  </div>
                  <motion.span className="text-2xl text-blush" whileHover={{ x: 6 }} transition={{ duration: 0.3, ease: "easeOut" }}>
                    →
                  </motion.span>
                </motion.a>
              ))}
            </div>
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
                  Adresse
                </p>
                <p className="text-[15px]">5 Place de l&apos;Ancien Sénat</p>
                <p className="text-[15px]">06300 Nice</p>
              </motion.div>
              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.8, ease: easeOutExpo }}
              >
                <p className="mb-1.5 font-jost text-[9px] uppercase tracking-[0.35em] text-cream">
                  Téléphone
                </p>
                <a href="tel:+33664062422" className="lux-link text-[15px] transition hover:text-cream">
                  +33 6 64 06 24 22
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
                  href="mailto:contact@thomas-bouilhol.com"
                  className="lux-link text-[15px] text-blush underline-offset-4 transition hover:text-blush"
                >
                  contact@thomas-bouilhol.com
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
