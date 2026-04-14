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

export default function Home() {
  return (
    <main className="bg-background">
      <Navbar />

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background">
        <Image
          src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=1920&q=90"
          alt="Texture florale en arrière-plan"
          fill
          priority
          className="object-cover opacity-25"
        />
        <RevealWrapper className="relative z-10 px-6 pt-16 text-center">
          <p className="font-jost text-xs uppercase tracking-[0.4em] text-gold">
            Maître Fleuriste · Maître Artisan d&apos;Art
          </p>
          <h1 className="mt-8 font-cormorant text-[clamp(4rem,10vw,9rem)] font-light leading-none text-cream">
            Thomas Bouilhol
          </h1>
          <p className="mt-6 font-cormorant text-xl italic text-gold/70">L&apos;unique en France</p>
        </RevealWrapper>
        <div className="absolute bottom-8 z-10 text-gold">
          <span className="animate-sovereign-bounce block text-2xl">↓</span>
        </div>
      </section>

      <section id="artisan" className="bg-background py-24 md:py-32">
        <SectionContainer>
          <RevealWrapper>
            <h2 className="text-center font-cormorant text-5xl italic text-cream">
              Deux titres. L&apos;unique en France.
            </h2>
            <p className="mt-6 text-center font-jost text-sm uppercase tracking-[0.25em] text-mid">
              Une distinction que personne d&apos;autre ne possède
            </p>
            <div className="mt-14 grid gap-8 lg:grid-cols-2">
              <article className="border border-gold/20 bg-white/3 p-10 backdrop-blur transition hover:border-gold/50">
                <svg viewBox="0 0 24 24" className="h-8 w-8 text-gold" fill="none" stroke="currentColor">
                  <path d="M12 3c2 3 2 6 0 9-2-3-2-6 0-9Z" strokeWidth="1.2" />
                  <path d="M5 12c3 0 5 1 7 4-3 0-6-1-7-4Z" strokeWidth="1.2" />
                  <path d="M19 12c-3 0-5 1-7 4 3 0 6-1 7-4Z" strokeWidth="1.2" />
                </svg>
                <h3 className="mt-6 font-cormorant text-4xl text-cream">Maître Fleuriste</h3>
                <p className="mt-5 text-base leading-relaxed text-cream/75">
                  Le titre de Maître Fleuriste est la plus haute distinction artisanale de la
                  profession en France. Thomas Bouilhol en est titulaire depuis des décennies.
                </p>
              </article>
              <article className="border border-gold/20 bg-white/3 p-10 backdrop-blur transition hover:border-gold/50">
                <svg viewBox="0 0 24 24" className="h-8 w-8 text-gold" fill="none" stroke="currentColor">
                  <path d="M4 8 8 4l4 4 4-4 4 4v8H4V8Z" strokeWidth="1.2" />
                  <path d="M7 16v3h10v-3" strokeWidth="1.2" />
                </svg>
                <h3 className="mt-6 font-cormorant text-4xl text-cream">Maître Artisan d&apos;Art</h3>
                <p className="mt-5 text-base leading-relaxed text-cream/75">
                  Titre d&apos;État décerné aux artisans dont le savoir-faire constitue un patrimoine
                  culturel vivant. Thomas Bouilhol est le seul fleuriste en France à détenir les
                  deux distinctions.
                </p>
              </article>
            </div>
          </RevealWrapper>
        </SectionContainer>
      </section>

      <section className="bg-cream py-24 md:py-32">
        <SectionContainer>
          <RevealWrapper className="grid gap-14 lg:grid-cols-2">
            <blockquote className="border-l-4 border-gold pl-8 font-cormorant text-4xl italic leading-tight text-[#0C0A08]">
              « Ce qui m&apos;intéresse, c&apos;est d&apos;aller à l&apos;avant de ce que je vis. »
            </blockquote>
            <div className="space-y-8 text-[#0C0A08]/85">
              <p className="text-lg leading-relaxed">
                Depuis ses 14 ans, Thomas Bouilhol vit en compagnie des fleurs. Autodidacte, guidé
                par le ressenti et l&apos;exigence du geste juste, il a bâti une oeuvre florale
                reconnue des plus grands établissements de la Côte d&apos;Azur et au-delà.
              </p>
              <p className="text-base leading-relaxed">
                Mariages <span className="text-gold">·</span> Deuil{" "}
                <span className="text-gold">·</span> Parcs et Jardins du Patrimoine{" "}
                <span className="text-gold">·</span> Cours d&apos;art floral{" "}
                <span className="text-gold">·</span> Décoration d&apos;intérieur
              </p>
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

      <section id="contact" className="bg-cream py-24 text-center md:py-28">
        <SectionContainer>
          <RevealWrapper>
            <h2 className="font-cormorant text-4xl italic text-[#0C0A08]">Entrer en contact</h2>
            <p className="mt-4 text-sm text-mid">Pour les projets d&apos;exception.</p>
            <div className="mt-10 space-y-3 text-[#0C0A08]/90">
              <p>📍 5 Place de l&apos;Ancien Sénat, 06300 Nice</p>
              <p>📞 +33 6 64 06 24 22</p>
            </div>
            <a
              href="mailto:contact@thomas-bouilhol.com"
              className="mt-8 inline-block text-gold underline-offset-4 hover:underline"
            >
              contact@thomas-bouilhol.com
            </a>
          </RevealWrapper>
        </SectionContainer>
      </section>

      <footer className="border-t border-gold/10 bg-background py-10 text-center">
        <p className="font-cormorant text-2xl text-cream/40">Thomas Bouilhol</p>
        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-cream/40">
          Maître Fleuriste · Maître Artisan d&apos;Art
        </p>
        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-cream/40">L&apos;unique en France</p>
        <p className="mt-6 text-xs text-cream/40">© 2026 Thomas Bouilhol</p>
      </footer>
    </main>
  );
}
