import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { RevealWrapper } from "@/components/RevealWrapper";
import { SectionContainer } from "@/components/SectionContainer";

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85",
    alt: "Composition florale luxueuse dans des tons crème",
    height: "h-[400px]",
  },
  {
    src: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&q=85",
    alt: "Bouquet sculptural en fleurs blanches",
    height: "h-[300px]",
  },
  {
    src: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=800&q=85",
    alt: "Atelier floral haut de gamme dans une lumière dorée",
    height: "h-[250px]",
  },
  {
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=85",
    alt: "Décoration florale d'exception pour réception privée",
    height: "h-[450px]",
  },
  {
    src: "https://images.unsplash.com/photo-1490750967868-88df5691cc8b?w=800&q=85",
    alt: "Détails de fleurs délicates à l'élégance couture",
    height: "h-[380px]",
  },
  {
    src: "https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=800&q=85",
    alt: "Bouquet raffiné au style artistique intemporel",
    height: "h-[270px]",
  },
];

function CheckerDivider({ invert = false }: { invert?: boolean }) {
  return (
    <div
      className="h-6 w-full"
      style={{
        backgroundImage: `repeating-conic-gradient(${
          invert ? "rgba(12,10,8,0.18)" : "rgba(201,169,110,0.18)"
        } 0% 25%, transparent 0% 50%)`,
        backgroundSize: "14px 14px",
      }}
    />
  );
}

export default function Home() {
  return (
    <main className="bg-background">
      <Navbar />

      <section className="relative grid min-h-[100vh] grid-cols-[45%_55%] overflow-hidden">
        <div className="relative min-h-[100vh]">
          <Image
            src="/thomas-hero.jpg"
            alt="Thomas Bouilhol, Maître Fleuriste, en création florale"
            fill
            priority
            className="object-cover object-[center_top]"
          />
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse at center, rgba(0,0,0,0) 58%, rgba(0,0,0,0.14) 100%)",
            }}
          />
        </div>

        <div className="relative flex min-h-[100vh] items-center justify-center bg-[#0f0e0c] px-6">
          <RevealWrapper className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold/50 shadow-[0_0_30px_rgba(201,169,110,0.12)]">
              <span className="font-cormorant text-2xl italic text-gold">TB</span>
            </div>
            <p className="mt-7 font-jost text-xs uppercase tracking-[0.55em] text-mid">
              Nice · Côte d&apos;Azur · France
            </p>
            <h1 className="mt-8 font-cormorant text-[clamp(4rem,10vw,9rem)] font-light leading-none text-cream">
              Thomas Bouilhol
            </h1>
            <p className="mt-5 font-cormorant text-[clamp(1.1rem,2.2vw,1.6rem)] italic text-gold/80">
              Idéateur végétal
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <span className="border border-gold/35 px-5 py-2.5 font-jost text-[9px] uppercase tracking-[0.3em] text-cream/65">
                Maître Fleuriste
              </span>
              <span className="hidden text-gold/45 sm:inline">·</span>
              <span className="border border-gold/35 px-5 py-2.5 font-jost text-[9px] uppercase tracking-[0.3em] text-cream/65">
                Maître Artisan d&apos;Art
              </span>
            </div>
            <p className="mx-auto mt-6 max-w-sm font-cormorant text-lg italic text-gold/55">
              L&apos;unique fleuriste en France à réunir ces deux distinctions.
            </p>
          </RevealWrapper>
          <div className="absolute bottom-8 z-10">
            <span className="animate-sovereign-bounce block h-14 w-px bg-gradient-to-b from-gold/50 to-transparent" />
          </div>
        </div>
      </section>

      <section id="artisan" className="bg-background py-24 md:py-32">
        <SectionContainer>
          <RevealWrapper className="text-center">
            <div className="mx-auto flex max-w-xl items-center gap-5">
              <span className="h-px flex-1 bg-gold/20" />
              <p className="font-jost text-xs uppercase tracking-[0.55em] text-gold/50">Distinctions</p>
              <span className="h-px flex-1 bg-gold/20" />
            </div>
            <h2 className="mt-8 font-cormorant text-5xl leading-tight text-cream md:text-6xl">
              Deux titres. <span className="text-gold">Un seul homme en France.</span>
            </h2>
            <p className="mt-6 font-jost text-xs uppercase tracking-[0.25em] text-mid">
              Une distinction que nul autre fleuriste ne possède
            </p>
          </RevealWrapper>
        </SectionContainer>

        <div className="mt-16 grid w-full lg:grid-cols-2 lg:divide-x lg:divide-gold/10">
          <RevealWrapper>
            <article className="relative border-t border-gold/15 px-8 py-16 transition hover:bg-white/[0.025] md:px-16 md:py-20">
              <span className="pointer-events-none absolute right-8 top-2 font-cormorant text-[clamp(6rem,12vw,10rem)] leading-none text-gold/6">
                I
              </span>
              <p className="font-jost text-[10px] uppercase tracking-[0.45em] text-gold/45">
                Première distinction
              </p>
              <h3 className="mt-6 whitespace-pre-line font-cormorant text-[clamp(2rem,4vw,3.8rem)] font-light leading-tight text-cream">
                {"Maître\nFleuriste"}
              </h3>
              <div className="my-7 h-px w-10 bg-gold/35" />
              <p className="max-w-xl text-base leading-relaxed text-cream/75">
                Le titre de Maître Fleuriste est la plus haute distinction artisanale de la
                profession en France. Décerné après des décennies d&apos;excellence et une maîtrise
                technique hors pair, il consacre l&apos;artisan au sommet de son art.
              </p>
            </article>
          </RevealWrapper>

          <RevealWrapper>
            <article className="relative border-t border-gold/15 px-8 py-16 transition hover:bg-white/[0.025] md:px-16 md:py-20">
              <span className="pointer-events-none absolute right-8 top-2 font-cormorant text-[clamp(6rem,12vw,10rem)] leading-none text-gold/6">
                II
              </span>
              <p className="font-jost text-[10px] uppercase tracking-[0.45em] text-gold/45">
                Deuxième distinction
              </p>
              <h3 className="mt-6 whitespace-pre-line font-cormorant text-[clamp(2rem,4vw,3.8rem)] font-light leading-tight text-cream">
                {"Maître Artisan\nd&apos;Art"}
              </h3>
              <p className="mt-4 font-jost text-[9px] uppercase tracking-[0.25em] text-gold/60">
                Parcs &amp; Jardins du Patrimoine
              </p>
              <div className="my-7 h-px w-10 bg-gold/35" />
              <p className="max-w-xl text-base leading-relaxed text-cream/75">
                Titre d&apos;État décerné aux artisans dont le savoir-faire constitue un patrimoine
                culturel vivant. Dans le domaine des Parcs et Jardins du Patrimoine, Thomas
                Bouilhol est gardien d&apos;un art dont les racines traversent les siècles.
              </p>
            </article>
          </RevealWrapper>
        </div>

        <div className="border-t border-gold/10 bg-gold/[0.04] py-8 text-center">
          <p className="font-cormorant text-[clamp(1rem,2.5vw,1.5rem)] italic text-gold/75">
            Seul fleuriste en France à détenir simultanément ces deux distinctions.
          </p>
        </div>
      </section>

      <CheckerDivider invert />
      <section className="bg-cream py-20 md:py-28">
        <SectionContainer>
          <RevealWrapper className="mx-auto max-w-3xl text-center">
            <p className="font-cormorant text-[7rem] leading-none text-[#0C0A08]/12">&ldquo;</p>
            <blockquote className="-mt-8 font-cormorant text-[clamp(1.4rem,3vw,2.3rem)] italic text-[#0C0A08]">
              Là où l&apos;esprit ne travaille pas avec la main,
              <br />
              il n&apos;y a pas d&apos;art.
            </blockquote>
            <footer className="mt-10">
              <div className="mx-auto mb-4 h-px w-10 bg-[#0C0A08]/20" />
              <p className="font-jost text-[10px] uppercase tracking-[0.35em] text-[#0C0A08]/45">
                Léonard de Vinci
              </p>
              <p className="mt-3 font-cormorant text-sm italic text-[#0C0A08]/35">
                La devise qui guide chaque création de Thomas Bouilhol.
              </p>
            </footer>
          </RevealWrapper>
        </SectionContainer>
      </section>
      <CheckerDivider invert />

      <section id="portrait" className="bg-background py-24 md:py-32">
        <SectionContainer>
          <RevealWrapper>
            <div className="mx-auto flex max-w-xl items-center gap-5">
              <span className="h-px flex-1 bg-gold/15" />
              <p className="font-jost text-[9px] uppercase tracking-[0.55em] text-gold/50">Portrait</p>
              <span className="h-px flex-1 bg-gold/15" />
            </div>
            <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:gap-24">
              <blockquote className="font-cormorant text-[clamp(1.7rem,3.5vw,3rem)] italic leading-tight text-cream">
                « Ce qui m&apos;intéresse,
                <br />
                c&apos;est d&apos;aller à l&apos;avant
                <br />
                de ce que je vis. »
              </blockquote>
              <div className="space-y-6 text-[15px] text-cream/65">
                <p className="leading-relaxed">
                  Depuis ses 14 ans, Thomas Bouilhol vit en compagnie des fleurs. Autodidacte, guidé
                  par le ressenti et l&apos;exigence du geste juste, il a bâti une œuvre florale
                  reconnue des plus grands établissements de la Côte d&apos;Azur et au-delà.
                </p>
                <p className="leading-relaxed">
                  <em className="font-cormorant text-[1.15rem] italic text-cream/85">
                    Idéateur végétal
                  </em>{" "}
                  — il ne se contente pas d&apos;arranger des fleurs. Il conçoit des univers
                  végétaux, des architectures éphémères qui capturent l&apos;instant et transcendent
                  le décor.
                </p>
                <div className="border-t border-gold/15 pt-6">
                  <p className="font-jost text-[9px] uppercase tracking-[0.3em] text-gold/55">
                    Domaines d&apos;excellence
                  </p>
                  <p className="mt-4 text-sm leading-loose text-cream/50">
                    Mariages <span className="text-gold">·</span> Deuil{" "}
                    <span className="text-gold">·</span> Parcs et Jardins du Patrimoine{" "}
                    <span className="text-gold">·</span> Cours d&apos;art floral{" "}
                    <span className="text-gold">·</span> Décoration d&apos;intérieur
                  </p>
                </div>
              </div>
            </div>
          </RevealWrapper>
        </SectionContainer>
      </section>

      <section className="bg-background py-24 md:py-28">
        <SectionContainer>
          <RevealWrapper>
            <h2 className="text-center font-cormorant text-5xl italic text-cream">Ils lui font confiance</h2>
            <p className="mt-5 text-center font-jost text-xs uppercase tracking-[0.25em] text-gold/70">
              Palaces · Institutions · Événements privés
            </p>
            <div className="mx-auto mt-12 flex max-w-5xl flex-col items-center justify-center gap-5 text-center md:flex-row md:gap-8">
              <p className="text-sm uppercase tracking-[0.3em] text-cream/60">Hôtel Negresco · Nice</p>
              <span className="hidden h-7 w-px bg-gold/20 md:block" />
              <p className="text-sm uppercase tracking-[0.3em] text-cream/60">Principauté de Monaco</p>
              <span className="hidden h-7 w-px bg-gold/20 md:block" />
              <p className="text-sm uppercase tracking-[0.3em] text-cream/60">
                Parcs &amp; Jardins du Patrimoine
              </p>
            </div>
            <p className="mt-10 text-center text-sm italic text-mid">
              Et de nombreux particuliers, familles et domaines privés de la Côte d&apos;Azur.
            </p>
          </RevealWrapper>
        </SectionContainer>
      </section>

      <section id="creations" className="bg-cream py-24 md:py-32">
        <SectionContainer>
          <RevealWrapper>
            <h2 className="font-cormorant text-5xl italic text-[#0C0A08]">Quelques créations</h2>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {gallery.map((item, index) => (
                <div key={item.src} className={`group relative overflow-hidden ${item.height}`}>
                  <Image src={item.src} alt={item.alt} fill className="object-cover transition duration-700 group-hover:scale-[1.02]" />
                  <div className="absolute inset-0 bg-gold/0 transition duration-700 group-hover:bg-gold/10" />
                  <span className="sr-only">Création florale {index + 1}</span>
                </div>
              ))}
            </div>
          </RevealWrapper>
        </SectionContainer>
      </section>

      <section id="maisons" className="bg-background py-24 md:py-32">
        <SectionContainer>
          <RevealWrapper>
            <h2 className="text-center font-cormorant text-4xl italic text-cream">
              Un univers, plusieurs maisons
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-center text-sm text-mid">
              Thomas Bouilhol a fondé plusieurs établissements. Chacun reflète une facette de son
              art.
            </p>
            <div className="mt-14 space-y-8">
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
              ].map((house) => (
                <a
                  key={house.title}
                  href="#"
                  className="flex items-start justify-between border-t border-gold/30 pt-6 text-cream transition hover:border-gold"
                >
                  <div>
                    <h3 className="font-cormorant text-3xl">{house.title}</h3>
                    <p className="mt-2 text-sm text-cream/75">{house.address}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-gold/80">{house.tag}</p>
                  </div>
                  <span className="text-2xl text-gold">→</span>
                </a>
              ))}
            </div>
          </RevealWrapper>
        </SectionContainer>
      </section>

      <section id="contact" className="bg-background py-24 md:py-32">
        <SectionContainer>
          <RevealWrapper className="mx-auto max-w-lg text-center">
            <div className="mx-auto flex items-center gap-5">
              <span className="h-px flex-1 bg-gold/15" />
              <p className="font-jost text-[9px] uppercase tracking-[0.55em] text-gold/50">Contact</p>
              <span className="h-px flex-1 bg-gold/15" />
            </div>
            <h2 className="mt-8 font-cormorant text-[clamp(2.2rem,4vw,3.8rem)] italic text-cream">
              Entrer en contact
            </h2>
            <p className="mt-4 font-cormorant text-lg italic text-mid">Pour les projets d&apos;exception.</p>
            <div className="mx-auto my-10 h-px w-12 bg-gold/25" />
            <div className="space-y-8 text-cream/60">
              <div>
                <p className="mb-1.5 font-jost text-[9px] uppercase tracking-[0.35em] text-gold/45">
                  Adresse
                </p>
                <p className="text-[15px]">5 Place de l&apos;Ancien Sénat</p>
                <p className="text-[15px]">06300 Nice</p>
              </div>
              <div>
                <p className="mb-1.5 font-jost text-[9px] uppercase tracking-[0.35em] text-gold/45">
                  Téléphone
                </p>
                <a href="tel:+33664062422" className="text-[15px] transition hover:text-cream">
                  +33 6 64 06 24 22
                </a>
              </div>
              <div>
                <p className="mb-1.5 font-jost text-[9px] uppercase tracking-[0.35em] text-gold/45">
                  Email
                </p>
                <a
                  href="mailto:contact@thomas-bouilhol.com"
                  className="text-[15px] text-gold/70 underline-offset-4 transition hover:text-gold hover:underline"
                >
                  contact@thomas-bouilhol.com
                </a>
              </div>
            </div>
          </RevealWrapper>
        </SectionContainer>
      </section>

      <footer className="border-t border-gold/10 bg-background py-14 text-center">
        <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/25">
          <span className="font-cormorant text-lg italic text-gold/50">TB</span>
        </div>
        <p className="font-cormorant text-2xl text-cream/35">Thomas Bouilhol</p>
        <p className="mt-2 font-jost text-[9px] uppercase tracking-[0.3em] text-cream/25">
          Maître Fleuriste · Maître Artisan d&apos;Art
        </p>
        <p className="mt-2 font-cormorant text-sm italic text-gold/30">Idéateur végétal · Nice</p>
        <div className="mx-auto mt-7 h-px w-8 bg-gold/15" />
        <p className="mt-6 font-jost text-[9px] text-cream/20">© 2026 Thomas Bouilhol</p>
      </footer>
    </main>
  );
}
