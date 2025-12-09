/**
 * Sales Page for Midjourney Master
 * Complete landing page for the Midjourney course.
 * Based on the original ailab.dk/midjourney-master design.
 */

import Link from "next/link";
import Image from "next/image";

// ============================================
// HERO SECTION
// Main headline and call-to-action
// ============================================
function HeroSection() {
  return (
    <section className="hero min-h-[80vh] bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/images/sales/hero-bg.jpg')] bg-cover bg-center opacity-20" />
      
      <div className="hero-content text-center z-10">
        <div className="max-w-4xl">
          {/* Small tagline above headline */}
          <p className="text-white/80 font-semibold tracking-wider uppercase mb-4">
            Den komplette Midjourney Master Pakke
          </p>
          
          {/* Main headline - each word on separate line for impact */}
          <h1 className="text-5xl md:text-7xl font-black text-white mb-2 leading-tight">
            BLIV EKSPERT I
          </h1>
          <p className="text-5xl md:text-7xl font-black mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
            MIDJOURNEY
          </p>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-yellow-400 font-bold mb-8">
            (OGSÅ SELVOM DU ER BEGYNDER)
          </p>
          
          {/* Description - each line separate, better contrast */}
          <p className="text-lg md:text-xl text-white mb-3">
            Lær Midjourney <span className="font-bold">fra A til Z</span> med dette online kursus...
          </p>
          <p className="text-lg md:text-xl text-white mb-6">
            Og få en række bonusser, der gør det både{" "}
            <span className="font-bold">nemmere og sjovere</span> at skabe AI-billeder
          </p>
          
          {/* Experience text - more prominent */}
          <p className="text-lg md:text-xl text-white/90 mb-10">
            Du får hele min erfaring fra generering af <span className="font-bold text-yellow-400">42.290</span> Midjourney billeder i én samlet pakke!
          </p>
          
          {/* CTA Button - large and prominent */}
          <div>
            <a href="https://ailab.dk/midjourney-master" className="btn bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-slate-900 border-none text-xl md:text-2xl px-10 md:px-16 py-5 shadow-2xl hover:shadow-orange-500/40 hover:scale-105 transition-all font-bold tracking-wide h-auto min-h-[4.5rem] rounded-2xl">
              JA! Jeg vil mestre Midjourney
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 md:w-7 md:h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <p className="text-white/70 text-base mt-4">
              Få øjeblikkelig adgang til pakken og lær i dit eget tempo
            </p>
            <p className="text-white/60 text-lg mt-3">
              For kun <span className="font-semibold text-white">1997 kroner</span> ekskl. moms
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// TESTIMONIALS SECTION
// Social proof from real customers
// ============================================
function TestimonialsSection() {
  const testimonials = [
    {
      name: "Charlotte Mandrup",
      title: "Coach",
      quote: "Vil du lave billeder i Midjourney, vil jeg anbefale Morten. Han har været min guide ud i dette vilde nye univers. Og nu har han lavet et online kursus for os begyndere og let-øvede, der får mine varmeste anbefalinger.",
      image: "/images/sales/testimonial-charlotte.avif",
    },
    {
      name: "Karsten Nygaard Nielsen",
      title: "Direktør hos Strategen",
      quote: "Som rutineret Midjourney bruger tog jeg Mortens kursus for at se, om der var ting, jeg havde misset. På den tekniske del lærte jeg et par småtricks mere, og på den praktiske del fik jeg stor inspiration til billedkomposition. Kurset er alle pengene værd – også for erfarne Midjourney-brugere.",
      image: "/images/sales/testimonial-karsten.avif",
    },
    {
      name: "Lilli Larsen",
      title: "Digital underviser",
      quote: "Lækkert kursus med flotte og passende længde videoer med tydelige forklaringer. Der er mange timer at spare ved at Morten har gjort alt benarbejdet på forhånd.",
      image: "/images/sales/testimonial-lilli.avif",
    },
  ];

  return (
    <section className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Hvad andre siger
        </h2>
        <p className="text-center text-base-content/70 mb-12 max-w-2xl mx-auto">
          Se hvad tidligere kursister siger om Midjourney Master kurset
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card bg-base-100 shadow-xl">
              <div className="card-body">
                {/* Quote icon */}
                <svg className="w-10 h-10 text-primary/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                
                {/* Quote text */}
                <p className="text-base-content/80 italic mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                
                {/* Author info */}
                <div className="flex items-center gap-4 mt-auto">
                  <div className="avatar">
                    <div className="w-12 h-12 rounded-full">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-base-content/60">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// COURSE CONTENT SECTION
// What's included in the course
// ============================================
function CourseContentSection() {
  const modules = [
    {
      title: "Kursus - Modul 1",
      description: "Vi starter med en kort introduktion til Midjourney. I dette modul kommer du bl.a. til at høre om den vilde udvikling, som Midjourney har været igennem. Og så tager vi også det første kig på værktøjet.",
      icon: "🎯",
    },
    {
      title: "Kursus - Modul 2",
      description: "Efter det grundlæggende er på plads, skal du lære, hvordan du genererer et billede i Midjourney og laver variationer over det. Og så skal vi også kigge nærmere på alle de grundlæggende indstillinger.",
      icon: "🖼️",
    },
    {
      title: "Kursus - Modul 3",
      description: "Når du så har lært at skabe et billede i Midjourney, vil vi se nærmere på, hvordan du kan arbejde videre med det. Her bliver du klogere på opskalering, zoom, panorering og ikke mindst den avancerede editor.",
      icon: "✨",
    },
    {
      title: "Kursus - Modul 4",
      description: "Gode Midjourney-billeder handler ikke kun om den rette tekst prompt. For du kan også bruge billeder til at genere nye billeder. Det tager vi fat på i dette modul, hvor vi gennemgår de forskellige muligheder, som Image Prompt, Style Reference, Character Reference og Describe giver.",
      icon: "🎨",
    },
    {
      title: "Kursus - Avanceret",
      paragraphs: [
        "Midjourney har en række avancerede funktioner, som du ikke behøver at bruge for at kunne generere flotte billeder - men som er rare at kende.",
        "Så i dette ekstra-modul kan du bl.a. blive klogere på, hvordan du undgår specifikke elementer i dine billeder, hvordan du laver sømløse baggrunde og ikke mindst, hvordan du speeder dine arbejdsprocesser i Midjourney op.",
      ],
      icon: "🚀",
    },
    {
      title: "Kursus - Nyt",
      paragraphs: [
        "Midjourney udvikler sig hele tiden. Så når Midjourney får nye funktioner, vil kurset blive opdateret med ekstra videoer i dette modul.",
        "Her kan du bl.a. lære, hvordan du får billeder med helt unik æstetik ved hjælp af Style Reference numre.",
      ],
      icon: "🆕",
    },
  ];

  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Alt dette får du
        </h2>
        <p className="text-center text-base-content/70 mb-12 max-w-2xl mx-auto">
          Et komplet kursus med alt hvad du skal bruge for at mestre Midjourney
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <div key={index} className="card bg-base-200 hover:shadow-lg transition-shadow">
              <div className="card-body">
                <div className="text-4xl mb-4">{module.icon}</div>
                <h3 className="card-title text-lg">{module.title}</h3>
                {module.description ? (
                  <p className="text-base-content/70">{module.description}</p>
                ) : (
                  <div className="space-y-3">
                    {module.paragraphs.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-base-content/70">{paragraph}</p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// BONUSES SECTION
// Extra materials included
// ============================================
function BonusesSection() {
  const bonuses = [
    {
      title: "4-trins Skabelon",
      paragraphs: [
        "En kort og generisk prompt giver ofte kedelige og generiske billeder.",
        "Derfor får du min 4-trins skabelon, der hjælper dig med at skabe bedre og mere præcise billeder i Midjourney. Du lærer at vælge de rette foto- og illustrationstyper, tilpasse udtryk, udseende og placering, sætte scenen med detaljer som vejr, tidspunkt og lysforhold, og bruge stilarter og fotografiske virkemidler som komposition, farver og kameraeffekter.",
        "Med denne skabelon kan du nemt løfte dine billeder fra det ordinære til det ekstraordinære.",
      ],
      icon: "📝",
    },
    {
      title: "Prompt Database",
      paragraphs: [
        "Når du har styr på, hvordan du opbygger en præcis og detaljeret prompt, kan det stadig være udfordrende at finde de rette ord, der fanger præcis det udtryk, du ønsker.",
        "Derfor får du adgang til en omfattende prompt-database med over 700 forskellige prompt-elementer, der giver dig inspiration og hjælper dig med hurtigt at finde de ord og detaljer, der løfter dine billeder til næste niveau.",
        "Med databasen kan du nemt eksperimentere, finde nye idéer og sikre, at dine prompts altid er skarpe og målrettede.",
      ],
      icon: "📚",
    },
    {
      title: "Niche Guides",
      paragraphs: [
        "For at skabe billeder, der virkelig skiller sig ud, handler det ikke kun om at mestre de basale funktioner i Midjourney.",
        "Derfor inkluderer pakken også en række niche-guides, der hjælper dig med at gå i dybden på specifikke områder og skabe billeder, der passer præcis til dit behov. Du lærer blandt andet, hvordan du kan skabe mere realistiske og upolerede personer, hvordan perspektivet påvirker dit billedes budskab, og hvordan du får endnu mere ud af Character Reference.",
        "Og det stopper ikke her – der vil løbende blive tilføjet nye niche-guides, som du som køber også får adgang til. På den måde er du altid opdateret med de nyeste teknikker og ideer.",
      ],
      icon: "🎓",
    },
    {
      title: "En måneds support",
      paragraphs: [
        "Det er vigtigt for mig, at du kommer godt i gang med at bruge Midjourney og får mest muligt ud af kurset og de andre ressourcer.",
        "Derfor tilbyder jeg én måneds e-mail-support efter dit køb. Hvis du har spørgsmål eller støder på udfordringer undervejs, kan du altid sende mig en besked.",
        "Jeg står klar til at hjælpe dig videre, så du får succes med dine Midjourney-projekter. Mit mål er, at du føler dig tryg og hurtigt bliver i stand til at skabe fantastiske billeder med Midjourney. Og det kan jeg hjælpe dig med.",
      ],
      icon: "💬",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="badge badge-secondary badge-lg mb-4">BONUS</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Plus disse bonusser
          </h2>
          <p className="text-base-content/70 max-w-2xl mx-auto">
            Ud over kurset får du også disse værdifulde ekstra materialer
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bonuses.map((bonus, index) => (
            <div key={index} className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{bonus.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-4">{bonus.title}</h3>
                    <div className="space-y-3">
                      {bonus.paragraphs.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-base-content/70">{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// WHY MIDJOURNEY SECTION
// Explains benefits of Midjourney
// ============================================
function WhyMidjourneySection() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Why Midjourney - Image left, text right */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-shrink-0 w-full md:w-2/5">
              <img 
                src="/images/sales/hvorfor-midjourney.avif" 
                alt="Hvorfor Midjourney" 
                className="w-full"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-4">Hvorfor Midjourney?</h2>
              <div className="space-y-3 text-base-content/80">
                <p>
                  Når det handler om at skabe billeder til dit indhold, kan valget mellem traditionelle løsninger som stock photos og photo shoots være frustrerende.
                </p>
                <p>
                  <strong>Stock photos</strong> er ofte kedelige, generiske og genkendelige. De mangler personlighed og originalitet.
                </p>
                <p>
                  <strong>Photo shoots</strong> er dyre, tidskrævende og kræver omfattende planlægning.
                </p>
                <p>
                  <strong>Midjourney</strong> giver dig friheden til at skabe præcis de billeder, du har brug for, uden kompromis. Det er hurtigt, fleksibelt og kreativt – og det leverer resultater, der er unikke og imponerende.
                </p>
              </div>
            </div>
          </div>

          {/* Why online course - Image left, text right */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-shrink-0 w-full md:w-2/5">
              <img 
                src="/images/sales/hvorfor-online.avif" 
                alt="Hvorfor et online kursus" 
                className="w-full"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-4">Hvorfor et online kursus?</h2>
              <div className="space-y-3 text-base-content/80">
                <p>
                  At lære Midjourney på egen hånd kan hurtigt blive en tidskrævende og frustrerende proces.
                </p>
                <p>
                  Du kan bruge timer på at eksperimentere uden resultater eller se YouTube-videoer, der sjældent går i dybden.
                </p>
                <p>
                  Med et <strong>online kursus</strong> får du det bedste fra begge verdener. Du lærer hurtigt og effektivt i dit eget tempo med et struktureret forløb, der dækker alt fra A til Z.
                </p>
                <p>
                  Du sparer tid, opnår bedre resultater hurtigere og har alt samlet ét sted.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// PRICING SECTION
// Main call-to-action with price
// ============================================
function PricingSection() {
  const features = [
    "Grundkursus i Midjourney med hele 14 detaljerede videoer",
    "4-trins Skabelon og Prompt Database med inspiration til den perfekte prompt",
    "Niche Guides der går i detaljer med enkelt-områder inden for Midjourney",
    "Lær alt om websitet, værktøjerne og de mange funktioner i dit helt eget tempo",
    "Alt hvad du skal vide for at gå fra absolut begynder til erfaren Midjourney-bruger",
    "Ekstra ressourcer som du kan bruge i dit daglige, visuelle arbejde",
  ];

  return (
    <section id="pris" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Er du klar til at lære Midjourney?
          </h2>
          <p className="text-gray-300 mb-8">
            Få adgang til alt indhold med det samme
          </p>
          
          {/* Feature list */}
          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 mb-8">
            <ul className="text-left space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Price */}
          <div className="mb-8">
            <p className="text-gray-400 mb-2">Kom i gang for kun</p>
            <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              1997 kr
            </div>
            <p className="text-gray-400 mt-2">
              NB: Prisen er kr. 2.496,25 inkl. moms
            </p>
          </div>
          
          {/* CTA Button */}
          <a 
            href="https://ailab.dk/midjourney-master" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-slate-900 border-none text-xl md:text-2xl px-10 md:px-16 py-5 shadow-2xl hover:shadow-orange-500/40 hover:scale-105 transition-all font-bold tracking-wide h-auto min-h-[4.5rem] rounded-2xl"
          >
            JA! Jeg vil mestre Midjourney
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 md:w-7 md:h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
          <p className="text-white/70 text-base mt-4">
            Få øjeblikkelig adgang til pakken og lær i dit eget tempo
          </p>
        </div>
      </div>
    </section>
  );
}

// ============================================
// GUARANTEE SECTION
// Risk reversal with extended guarantee
// ============================================
function GuaranteeSection() {
  return (
    <section className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body text-center">
              {/* Shield icon */}
              <div className="text-6xl mb-4">🛡️</div>
              
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Udvidet GARANTI+
              </h2>
              
              <div className="text-base-content/80 space-y-4 text-left">
                <p>
                  <strong>Er du stadig i tvivl?</strong> Det kan føles som en stor beslutning at kaste sig ud i noget helt nyt.
                </p>
                <p>
                  Derfor tilbyder jeg dig min <strong>udvidede GARANTI+</strong>, som sikrer, at du kan prøve Midjourney Master helt uden risiko.
                </p>
                <p>
                  Er du ikke tilfreds, kan du få pengene tilbage inden for <strong>14 dage</strong> efter dit køb (helt uden spørgsmål).
                </p>
                <p>
                  <strong>Men det stopper ikke her!</strong> Jeg refunderer også dit Midjourney-abonnement (op til $30, svarende til den næstbilligste pakke). Det eneste jeg kræver er, at du rent faktisk har brugt Midjourney og genereret minimum 50 billeder.
                </p>
                <p>
                  På den måde kan du teste både kurset og Midjourney i praksis og se, hvad det kan gøre for dig. Med min garanti kan du føle dig tryg og opleve værdi – ellers koster det dig ingenting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


// ============================================
// FOOTER SECTION
// Contact info and legal
// ============================================
function FooterSection() {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content">
      <div>
        <p className="font-bold text-lg">Midjourney Master</p>
        <div className="text-sm text-base-content/60 mt-4 space-y-1">
          <p>Morten Elm</p>
          <p>N J Fjords Alle 20, 1957 Frederiksberg C</p>
          <p>CVR: 32005772</p>
        </div>
        <p className="text-sm text-base-content/50 mt-4">
          © {new Date().getFullYear()} - Alle rettigheder forbeholdes
        </p>
      </div>
    </footer>
  );
}

// ============================================
// MAIN PAGE COMPONENT
// Combines all sections into the sales page
// ============================================
export default function SalesPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TestimonialsSection />
      <CourseContentSection />
      <BonusesSection />
      <WhyMidjourneySection />
      <PricingSection />
      <GuaranteeSection />
      <FooterSection />
    </div>
  );
}
