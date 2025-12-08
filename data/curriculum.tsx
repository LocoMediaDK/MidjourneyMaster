/**
 * Course curriculum data for MJkursus.dk
 * This file contains all modules and lessons for the Midjourney course.
 * 
 * To add content to a lesson:
 * 1. Add videoUrl for embedded videos (YouTube, Vimeo, etc.)
 * 2. Add content for text descriptions (supports HTML)
 */

import React from "react";
import { Module, Curriculum } from "@/types/curriculum";

// Helper function to create URL-friendly slugs from Danish titles
function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/æ/g, "ae")
    .replace(/ø/g, "oe")
    .replace(/å/g, "aa")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// ============================================
// MODULE 1: Introduktion til Midjourney
// ============================================
const introduktionTilMidjourney: Module = {
  slug: "introduktion-til-midjourney",
  title: "Introduktion til Midjourney",
  description: "Kom godt i gang med Midjourney",
  order: 1,
  lessons: [
    {
      slug: "velkommen",
      title: "Velkommen",
      order: 1,
      videoUrl: "https://youtu.be/hvvIZZlGYWk",
    },
    {
      slug: "den-vilde-udvikling",
      title: "Den vilde udvikling",
      order: 2,
      videoUrl: "https://youtu.be/78rwbcEll7M",
    },
    {
      slug: "tilmelding-til-midjourney",
      title: "Tilmelding til Midjourney",
      order: 3,
      videoUrl: "https://youtu.be/-2ujIISRZHg",
    },
    {
      slug: "midjourney-rundtur",
      title: "Midjourney rundtur",
      order: 4,
      videoUrl: "https://youtu.be/TNE3eFnPkSM",
    },
  ],
};

// ============================================
// MODULE 2: Generering af billeder
// ============================================
const genereringAfBilleder: Module = {
  slug: "generering-af-billeder",
  title: "Generering af billeder",
  description: "Lær at skabe dine første billeder",
  order: 2,
  lessons: [
    {
      slug: "saadan-skaber-du-et-billede",
      title: "Sådan skaber du et billede (og får variationer)",
      order: 1,
      videoUrl: "https://youtu.be/aqSieHXahfE",
    },
    {
      slug: "grundlaeggende-indstillinger",
      title: "Grundlæggende indstillinger",
      order: 2,
      videoUrl: "https://youtu.be/aFOWPNryj6Q",
    },
  ],
};

// ============================================
// MODULE 3: Arbejd videre med dit billede
// ============================================
const arbejdVidereMedDitBillede: Module = {
  slug: "arbejd-videre-med-dit-billede",
  title: "Arbejd videre med dit billede",
  description: "Finpuds og bearbejd dine billeder",
  order: 3,
  lessons: [
    {
      slug: "variationer-og-opskalering",
      title: "Variationer og opskalering",
      order: 1,
      videoUrl: "https://youtu.be/yqsfZ9WQRiY",
    },
    {
      slug: "zoom-og-panorering",
      title: "Zoom og panorering",
      order: 2,
      videoUrl: "https://youtu.be/O3XEsDClVUA",
    },
    {
      slug: "editor",
      title: "Editor",
      order: 3,
      videoUrl: "https://youtu.be/SIZOngl_DHU",
    },
  ],
};

// ============================================
// MODULE 4: Skab billeder med billeder
// ============================================
const skabBillederMedBilleder: Module = {
  slug: "skab-billeder-med-billeder",
  title: "Skab billeder med billeder",
  description: "Brug billeder som udgangspunkt",
  order: 4,
  lessons: [
    {
      slug: "image-prompt",
      title: "Image Prompt",
      order: 1,
      videoUrl: "https://youtu.be/TQnRqxEspbY",
    },
    {
      slug: "style-reference",
      title: "Style Reference",
      order: 2,
      videoUrl: "https://youtu.be/QdJ7ziNRRoI",
    },
    {
      slug: "character-reference",
      title: "Character Reference",
      order: 3,
      videoUrl: "https://youtu.be/IWaPjsi8wDo",
    },
    {
      slug: "describe",
      title: "Describe",
      order: 4,
      videoUrl: "https://youtu.be/9FM8gnIA8Wo",
    },
  ],
};

// ============================================
// MODULE 5: Afrunding
// ============================================
const afrunding: Module = {
  slug: "afrunding",
  title: "Afrunding",
  description: "Afslutning på grundkurset",
  order: 5,
  lessons: [
    {
      slug: "nu-er-det-din-tur",
      title: "Nu er det din tur",
      order: 1,
      videoUrl: "https://youtu.be/cjVE-5L9-AY",
    },
  ],
};

// ============================================
// MODULE 6: Avancerede funktioner
// ============================================
const avanceredeFunktioner: Module = {
  slug: "avancerede-funktioner",
  title: "Avancerede funktioner",
  description: "Udnyt Midjourneys avancerede muligheder",
  order: 6,
  lessons: [
    {
      slug: "no",
      title: "No",
      order: 1,
      videoUrl: "https://youtu.be/AuWBKf0ktSM",
    },
    {
      slug: "repeat-og-permutation",
      title: "Repeat & Permutation",
      order: 2,
      videoUrl: "https://youtu.be/UwAzKnTAA-g",
    },
    {
      slug: "tile",
      title: "Tile",
      order: 3,
      videoUrl: "https://youtu.be/dat5RMf4m7Q",
    },
  ],
};

// ============================================
// MODULE 7: Nye funktioner
// ============================================
const nyeFunktioner: Module = {
  slug: "nye-funktioner",
  title: "Nye funktioner",
  description: "De nyeste funktioner i Midjourney",
  order: 7,
  lessons: [
    {
      slug: "style-reference-random-og-seeds",
      title: "Style Reference Random & Seeds",
      order: 1,
      videoUrl: "https://youtu.be/ckujArGTbb4",
    },
    {
      slug: "edit",
      title: "Edit",
      order: 2,
      content: (
        <div>
          <p>
            Her grundlæggende er der to forskellige editorer i Midjourney.
          </p>
          <p>
            Der er den version, som du ser, hvis du gerne vil redigere et billede, som du har skabt i Midjourney.
          </p>
          <p>
            Og så er der den "eksterne" editor, hvor du kan arbejde med billeder udefra (der både kan være Midjourney-billeder og "rigtige" billeder).
          </p>
          <p>
            Den første version er allerede gennemgået i det grundlæggende kursus. Dog er der kommet enkelte ekstra funktioner til sidenhen (som f.eks. "Smart Select").
          </p>
          <p>
            Den anden version tilbyder til gengæld et par ekstra muligheder.
          </p>

          <h2>Vælg et billede</h2>
          <p>
            For at bruge den eksterne editor, skal du først vælge den i den venstre menu under "Edit".
          </p>
          <p>
            Herefter har du mulighed for at vælge en URL eller at uploade et billede.
          </p>
          <p>
            Og det er her, at denne editor viser sin styrke. For nu kan du nemlig vælge at arbejde videre med et "rigtigt" billede.
          </p>
          <p>
            Du kan altså kombinere virkelige (fysiske) billeder med AI-billeder. Og dermed få det bedste fra begge verdener.
          </p>

          <h2>Rediger dit billede</h2>
          <p>
            Lad os kigge på et eksempel.
          </p>
          <p>
            Her har jeg uploadet et billede, som jeg har taget af Brooklyn Bridge i New York.
          </p>

          <img
            src="/images/edit/edit-01-brooklyn-bridge.webp"
            alt="Brooklyn Bridge billede uploadet til Midjourney editor"
          />

          <p>
            Det kan jeg skalere op og ned (som du allerede kender det fra den almindelige editor).
          </p>
          <p>
            Og jeg kan også markere en del af billede. Igen som ved brug af den normale editor.
          </p>

          <img
            src="/images/edit/edit-02-markering.webp"
            alt="Markering af område i billedet"
          />

          <p>
            Når jeg har gjort det, kan jeg så skrive en prompt i prompt-feltet.
          </p>
          <p>
            Det kunne f.eks. være:
          </p>
          <p><em>a yellow submarine</em></p>
          <p>
            Og så får jeg en gul ubåd tilføjet til mit billede af broen i New York.
          </p>

          <img
            src="/images/edit/edit-03-gul-ubaad.webp"
            alt="Gul ubåd tilføjet til Brooklyn Bridge billedet"
          />

          <p>
            Det er ikke altid, at Midjourney rammer den helt perfekt i første omgang. Så det kan være nødvendigt at prøve et par gange for at få et godt resultat.
          </p>
          <p>
            I stedet for det almindelige markeringsværktøj kan du også bruge "Smart Select".
          </p>
          <p>
            Her går Midjourney ind og automatisk finder ud af, hvad der skal markeres.
          </p>

          <img
            src="/images/edit/edit-04-smart-select.webp"
            alt="Smart Select funktion i Midjourney editor"
          />

          <p>
            Det kan enten være den del, der skal være med i markeringen ("Include"). Eller den del, der ikke skal markeres ("Exclude").
          </p>
          <p>
            Derefter vælger du enten "Erase Selection" eller "Erase Background".
          </p>
          <p>
            Og når du så har gjort det, kan du igen skrive en prompt og køre den for at få rettelser til dit billede.
          </p>

          <img
            src="/images/edit/edit-05-erase-selection.webp"
            alt="Resultat efter brug af Erase Selection"
          />

          <h2>Retexture</h2>
          <p>
            På mange måder minder editor-funktionerne om dem, som du finder i den normale Midjourney-editor. Eneste forskel er bare, at du også kan redigere i billeder, som du uploader.
          </p>
          <p>
            Der er dog en enkelt funktion, der er unik.
          </p>
          <p>
            Nemlig Retexture.
          </p>
          <p>
            Helt grundlæggende giver Retexture mulighed for at bibeholde den grundlæggende former i billedet. Men samtidig at give billedet et andet look.
          </p>
          <p>
            Lad os kigge på et par eksempler.
          </p>
          <p>
            For at bruge funktionen, skal du vælge "Retexture" øverst i menuen til venstre.
          </p>
          <p>
            Når du har gjort det, kan du så bare skrive din prompt.
          </p>
          <p>
            Det kunne f.eks. være:
          </p>
          <p><em>photo of a yellow submarine in front of brooklyn bridge in new york, golden hour</em></p>

          <img
            src="/images/edit/edit-06-retexture-golden.webp"
            alt="Retexture eksempel med golden hour"
          />

          <p>
            Så får du nu et billede af en gul ubåd foran Brooklyn Bridge lige før solnedgang.
          </p>
          <p>
            Eller du kan skrive en prompt i stil med:
          </p>
          <p><em>water color painting of a yellow submarine in front of brooklyn bridge in new york</em></p>

          <img
            src="/images/edit/edit-07-retexture-watercolor.webp"
            alt="Retexture eksempel med vandfarve-stil"
          />

          <p>
            Og så bliver dit foto lavet om til en vandfarve-tegning.
          </p>
          <p>
            Du kan endda også bruge Style Reference numre:
          </p>
          <p><em>illustration of a yellow submarine in front of brooklyn bridge in new york --sref 2057550389</em></p>

          <img
            src="/images/edit/edit-08-retexture-sref.webp"
            alt="Retexture eksempel med Style Reference"
          />

          <p>
            Med Retexture kan du altså ændre dit billedes grundlæggende udtryk. Uden at ændre selve motivet.
          </p>
          <p>
            Det er dog værd at bemærke, at det kun er de grundlæggende former, der fastholdes. Enkelte detaljer i billedet vil ofte blive ændret.
          </p>
          <p>
            Så hvis det er vigtigt for dig, at selve hovedmotivet ikke bliver ændret overhovedet, er det den almindelige editor-funktion, som du skal bruge i stedet.
          </p>
        </div>
      ),
    },
    {
      slug: "personalize",
      title: "Personalize",
      order: 3,
      content: (
        <div>
          <p>
            Midjourney har en ret unik stil.
          </p>
          <p>
            Du kan naturligvis påvirke den på flere måder. Både med de elementer, som du skriver i din prompt og med f.eks. Style Reference.
          </p>
          <p>
            Men som udgangspunkt bliver alle Midjourney generet med den samme overordnede æstetik.
          </p>
          <p>
            Det er dog ikke sikkert, at den æstetik også lige passer til din smag.
          </p>
          <p>
            Heldigvis er der råd for det. Du kan nemlig få personificeret æstetikken i de billeder, som du genererer.
          </p>
          <p>
            Funktionen ligger i den venstre menu under "Personalize".
          </p>

          <h2>Træn Midjourney i din æstetik</h2>
          
          <p>
            For at bruge Personalize i Midjourney, skal du først træne Midjourney i hvilken stil, som du foretrækker.
          </p>
          <p>
            Det gør du helt lavpraktisk ved at vælge imellem to billeder, som du får vist.
          </p>

          <img
            src="/images/personalize/personalize-01-traening.webp"
            alt="Personalize træning - vælg mellem to billeder"
          />

          <p>
            Når du så har gjort det minimum 200 gange, har Midjourney en idé om din æstetik.
          </p>
          <p>
            Det kan dog godt betale sig at gøre det endnu flere gange. For jo flere valg, jo bedre rammer Midjourney også.
          </p>

          <h2>Brug Personalize</h2>
          
          <p>
            Når træningsdata så er på plads, kan du begynde at bruge din personlige stil.
          </p>
          <p>
            Det gør du helt lavpraktisk ved at klikke på P'et ved siden af prompt-feltet.
          </p>

          <img
            src="/images/personalize/personalize-02-knap.webp"
            alt="Personalize knap i interface"
          />

          <p>
            Og så generer du dit billede på helt normal vis.
          </p>
          <p>
            Men med din unikke æstetik tilføjet.
          </p>

          <img
            src="/images/personalize/personalize-03-med-aestetik.webp"
            alt="Billede genereret med personlig æstetik"
          />

          <p>
            Og som du kan se, så er min personlige æstetik noget anderledes end Midjourneys standardæstetik (billedet herunder).
          </p>

          <img
            src="/images/personalize/personalize-04-uden-aestetik.webp"
            alt="Billede uden personlig æstetik - standard Midjourney"
          />

          <p>
            Når du bruger Personalize, får din prompt tilføjet parametren <em>--profile</em> plus en unik kode.
          </p>
          <p>
            Som f.eks. denne prompt:
          </p>
          <p><em>photo of an old man --profile k1e2c7r</em></p>
          <p>
            Den kan du også skrive i stedet for at vælge P'et.
          </p>
          <p>
            Men muligheden giver også mulighed for at bruge andres personlige æstetikker.
          </p>
          <p>
            Lidt på samme måde som med Style Reference nummeret.
          </p>
          <p>
            Det er også muligt at have flere Personalize-æstetikker.
          </p>
          <p>
            Har du det, kan du vælge den, som du vil bruge, ved at klikke på pilen lige ved siden af P'et.
          </p>
        </div>
      ),
    },
    {
      slug: "moodboards",
      title: "Moodboards",
      order: 4,
      content: (
        <div>
          <p>
            Moodboards er en kombination af Personalize og Style Reference.
          </p>
          <p>
            Formålet er også her at få en unik æstetik, der adskiller sig fra Midjourneys standardæstetik.
          </p>
          <p>
            ​Du finder Moodboards inde under menupunktet "Personalize" til i venstre-menuen.
          </p>

          <h2>Skab dit Moodboard</h2>
          <p>
            Før du kan bruge dit Moodboard, skal du først skabe det.
          </p>
          <p>
            Det gør du ved enten at uploade billeder, tilføje dem via et link eller vælge dem i galleriet med dine Midjourney-billeder.
          </p>
          <p>
            Og så tilføjer du bare de billeder, som du vil bruge.
          </p>

          <img
            src="/images/moodboards/moodboards-01-tilfoej.webp"
            alt="Moodboard - tilføjning af billeder"
          />

          <p>
            Du kan bruge både fotos og illustrationer.
          </p>
          <p>
            Men de bedste Moodboards får du, hvis alle dine billeder har noget til fælles (som f.eks. den dystre tone i eksemplet her).
          </p>

          <img
            src="/images/moodboards/moodboards-02-dyster.webp"
            alt="Moodboard eksempel med dyster tone"
          />

          <p>
            Det er muligt at lave lige så mange Moodboards, som du har lyst til.
          </p>
          <p>
            Her er der et andet Moodboard med en helt anden æstetik.
          </p>

          <img
            src="/images/moodboards/moodboards-03-anden.webp"
            alt="Moodboard eksempel med anden æstetik"
          />

          <h2>Brug dit Moodboard</h2>
          <p>
            Når du så skal bruge dit Moodboard, klikker du på P'et og derefter på dropdown-pilen.
          </p>

          <img
            src="/images/moodboards/moodboards-04-valg.webp"
            alt="Valg af Moodboard i interface"
          />

          <p>
            Så kan du se alle dine Moodboard (og dine personificerede æstetikker).
          </p>
          <p>
            Og så kan du kan skabe billeder med den unikke stil, som dit Moodboard giver.
          </p>

          <img
            src="/images/moodboards/moodboards-05-genereret.webp"
            alt="Billeder genereret med forskellige Moodboards"
          />

          <p>
            I eksemplet herover er der billeder med de to Moodboards, som vi allerede har kigget på.
          </p>
          <p>
            Det er endda også muligt at vælge flere forskellige Moodboards samtidig.
          </p>
          <p>
            Endda kombineret med din personlige æstetik.
          </p>

          <img
            src="/images/moodboards/moodboards-06-kombination.webp"
            alt="Kombination af Moodboards og personlig æstetik"
          />

          <p>
            Her er alle tre ting kombineret i samme billedgenerering.
          </p>

          <h2>Få upolerede billeder</h2>
          <p>
            Et lille hack til at få billeder, der ser mere almindelige og snapshot-agtige ud er at skabe et Moodboard med en række af dine egne fotos.
          </p>
          <p>
            ​Det kan f.eks. være billeder taget med din iPhone.
          </p>

          <img
            src="/images/moodboards/moodboards-07-iphone.webp"
            alt="Moodboard med iPhone fotos"
          />

          <p>
            Når du så bruger det Moodboard, får du billeder, der ser mere naturlige og upolerede ud.
          </p>

          <img
            src="/images/moodboards/moodboards-08-upoleret.webp"
            alt="Naturlige og upolerede billeder fra iPhone-baseret Moodboard"
          />

          <p>
            Du kan altså få en række spændende stile i dine AI-billeder ved at bruge Moodboards og personificering i stedet for bare Midjourneys standardæstetik.
          </p>
        </div>
      ),
    },
    {
      slug: "omni-reference",
      title: "Omni Reference",
      order: 5,
      content: (
        <div>
          <p>
            Omni Reference er erstatningen for den tidligere{" "}
            <a href="/kursus/skab-billeder-med-billeder/character-reference">
              Character Reference
            </a>
            .
          </p>
          <p>
            Langt henad vejen fungerer begge dele på samme måde.
          </p>
          <p>
            Den store forskel er dog, at det nu ikke kun er karakterer, der kan bruges som reference til nye billeder. Men også andre motiver som dyr og ting.
          </p>
          <p>
            ​Det åbner op for en række nye muligheder.
          </p>

          <h2>Skab nye billeder med reference-billeder</h2>
          <p>
            Når du skal bruge et billede som Omni Reference billede, trækker du det bare op til prompt-feltet og placerer det i Omni-Reference boksen.
          </p>

          <img
            src="/images/omni-reference/omni-01-traek.webp"
            alt="Omni Reference - træk billede til prompt-felt"
          />

          <p>
            Derefter skriver du din prompt på helt normal vis.
          </p>

          <img
            src="/images/omni-reference/omni-02-prompt.webp"
            alt="Omni Reference - skriv prompt"
          />

          <p>
            Og så får du en række billeder, med din Omni Reference karakter. Men baseret på den prompt, som du har skrevet.
          </p>

          <img
            src="/images/omni-reference/omni-03-karakter.webp"
            alt="Omni Reference - genererede billeder med karakter"
          />

          <p>
            Det er der som sådan ikke noget nyt i. Det kunne du også med den gamle Character Reference funktion.
          </p>
          <p>
            Det interessante kommer, hvis du f.eks. har et produkt-foto, som du gerne vil have i andre omgivelser.
          </p>
          <p>
            For du kan nemlig også bruge billeder, der ikke er skabt i Midjourney.
          </p>
          <p>
            ​Som f.eks. denne gummistøvle.
          </p>

          <img
            src="/images/omni-reference/omni-04-gummistoevle.webp"
            alt="Omni Reference - gummistøvle eksempel"
            className="w-[30%]"
          />

          <p>
            For at bruge et billede "udefra", skal du klikke på maleri-ikonet helt til venstre i prompt-feltet.
          </p>

          <img
            src="/images/omni-reference/omni-05-maleri.webp"
            alt="Omni Reference - maleri-ikon"
          />

          <p>
            Og derefter uploade et billede (eller vælge et af dem, der allerede ligger der) som Omni Reference billede.
          </p>

          <img
            src="/images/omni-reference/omni-06-upload.webp"
            alt="Omni Reference - upload billede"
          />

          <p>
            Nu kan du så skabe en række nye billeder med dit oprindelige produkt.
          </p>

          <img
            src="/images/omni-reference/omni-07-produkt.webp"
            alt="Omni Reference - nye billeder med produkt"
          />

          <p>
            Det er værd lige at bemærke, at karakteren/objektet, som du bruger som reference-billede, nogle gange kan skifte en smule udseende.
          </p>
          <p>
            Og der kan også være udfordringer med tekst.
          </p>
          <p>
            Generelt vil der dog altid være minimum ét billede, som du kan bruge. Og ellers kan du jo bare generere en række nye billeder.
          </p>
          <p>
            ​Du kan naturligvis også bruge et reference-billede til at skabe billeder i f.eks. en helt ny stil.
          </p>
          <p>
            Som her hvor vores karakter fra før er blevet til en 3D tegneserie-karakter.
          </p>

          <img
            src="/images/omni-reference/omni-08-3d.webp"
            alt="Omni Reference - 3D tegneserie-karakter"
          />

          <h2>Omni Reference Weight</h2>
          <p>
            På samme måde som både Character Reference og Style Reference som har Omni Reference også en Weight.
          </p>
          <p>
            Parameteren her hedder <em>--ow</em>.
          </p>
          <p>
            Og værdien går mellem 1 og 1000. Default er 100.
          </p>
          <p>
            ​I stedet for at skrive parameteren, kan du også bruge slideren lige ved siden af dit Omni Reference billede.
          </p>

          <img
            src="/images/omni-reference/omni-09-weight.webp"
            alt="Omni Reference - weight slider"
          />

          <p>
            Jo højere værdi, jo mere bliver reference-billedet brugt.
          </p>
          <p>
            Her er to eksempler med hhv. <em>--ow 10</em> og <em>--ow 800</em>.
          </p>

          <img
            src="/images/omni-reference/omni-10-sammenligning.webp"
            alt="Omni Reference - sammenligning af weight værdier"
          />

          <p>
            Og selvom begge sæt billeder bruger vores reference karakter, er det også tydeligt, at den lave værdi ændrer mere på personen end den høje.
          </p>
          <p>
            Så som udgangspunkt vil du normalt bruge en forholdsvis høj Omni Reference Weight.
          </p>
          <p>
            Men omvendt kan der også være tilfælde, hvor reference-billedet slår for meget igennem i forhold til prompten.
          </p>
          <p>
            Her kan du så teste med en lavere værdi.
          </p>
        </div>
      ),
    },
    {
      slug: "draft-og-conversational-mode",
      title: "Draft & Conversational Mode",
      order: 6,
      content: (
        <div>
          <p>
            Det er måske ikke altid, at du præcis ved, hvad du gerne vil generere af Midjourney-billede.
          </p>
          <p>
            Så kan du stille og roligt arbejde dig henimod målet med hhv. Draft og Conversational Mode.
          </p>
          <p>
            Begge dele vælger du med ikonerne til højre for prompt-feltet.
          </p>

          <img
            src="/images/draft-conversational/draft-01-ikoner.webp"
            alt="Draft & Conversational Mode ikoner"
          />

          <h2>Draft Mode</h2>
          
          <p>
            Draft Mode fungerer helt simpel.
          </p>
          <p>
            Billedet bliver genereret meget hurtigere.
          </p>
          <p>
            Til gengæld er billedkvaliteten så også lavere.
          </p>
          <p>
            Draft Mode fungerer altså rigtig godt, hvis du gerne vil have skabt en række billeder lidt hurtigt.
          </p>

          <h2>Conversational Mode</h2>
          
          <p>
            Conversational Mode er til gengæld noget mere avanceret.
          </p>
          <p>
            Formålet med den er, at du stille og roligt kan arbejde dig henimod det ønskede resultat.
          </p>
          <p>
            Men ved at bruge helt almindeligt (engelsk) sprog. Lidt som med ChatGPT.
          </p>
          <p>
            Her har jeg skrevet:
            <br /><br />
            <em>create a photo of a woman with red hair</em>
          </p>

          <img
            src="/images/draft-conversational/draft-02-prompt1.webp"
            alt="Conversational Mode prompt 1"
          />

          <p>
            Læg mærke til den langt mere avancerede prompt, som Midjourney selv har skabt, på baggrund af min simple prompt.
          </p>
          <p>
            Næste skridt har så været at skrive følgende i prompt-feltet:
            <br /><br />
            <em>can you place the woman in a garden</em>
          </p>

          <img
            src="/images/draft-conversational/draft-03-prompt2.webp"
            alt="Conversational Mode prompt 2"
          />

          <p>
            Nu har vi så en rødhåret kvinde i en have.
          </p>
          <p>
            Herefter har jeg skrevet:
            <br /><br />
            <em>the woman should wear a red dress</em>
          </p>

          <img
            src="/images/draft-conversational/draft-04-prompt3.webp"
            alt="Conversational Mode prompt 3"
          />

          <p>
            Og til sidst:
            <br /><br />
            <em>can you add a house to the background</em>
          </p>

          <img
            src="/images/draft-conversational/draft-05-prompt4.webp"
            alt="Conversational Mode prompt 4"
          />

          <p>
            Og så er vi altså gået fra vores indledende idé med en rødhåret kvinde til at hun står i en have med et hus i baggrunden. Og har en rød kjole på.
          </p>
          <p>
            Sidste step er så at skabe et billede i normal kvalitet (i stedet for Draft kvalitet).
          </p>
          <p>
            Det gør vi ved at holde musen hen over det ønskede billede og vælge "Enhance" (eller alternativt gå ind på billede og klikke på "Enhance"-knappen).
          </p>

          <img
            src="/images/draft-conversational/draft-06-enhance.webp"
            alt="Enhance knappen"
          />

          <p>
            Og så får vi en række billeder i god billedkvalitet.
          </p>

          <img
            src="/images/draft-conversational/draft-07-final.webp"
            alt="Endelige billeder i høj kvalitet"
          />

          <p>
            Draft Mode og Conversational fungerer altså rigtig godt, når vi ikke helt ved, hvad vi gerne vil have.
          </p>
          <p>
            Og hvor vi hellere vil arbejde os hen mod målet i samarbejde med Midjourney.
          </p>
        </div>
      ),
    },
  ],
};

// ============================================
// MODULE 8: Bedre billeder
// ============================================
const bedreBilleder: Module = {
  slug: "bedre-billeder",
  title: "Bedre billeder",
  description: "Lær at lave endnu bedre billeder",
  order: 8,
  lessons: [
    {
      slug: "de-4-prompt-niveauer",
      title: "De 4 prompt-niveauer",
      order: 1,
      videoUrl: "https://youtu.be/wT2_PiyvvCY",
    },
    {
      slug: "type-og-hovedmotiv",
      title: "Type og hovedmotiv",
      order: 2,
      videoUrl: "https://youtu.be/DcfEBNKNt3Y",
    },
    {
      slug: "detaljer",
      title: "Detaljer",
      order: 3,
      videoUrl: "https://youtu.be/dim4-q2-IVw",
    },
    {
      slug: "scenen",
      title: "Scenen",
      order: 4,
      videoUrl: "https://youtu.be/wAJgkw8Km_8",
    },
    {
      slug: "stilarter",
      title: "Stilarter",
      order: 5,
      videoUrl: "https://youtu.be/i_yjkVNkWl4",
    },
    {
      slug: "lys-og-farver",
      title: "Lys og farver",
      order: 6,
      videoUrl: "https://youtu.be/NMV45ie_cFY",
    },
    {
      slug: "komposition",
      title: "Komposition",
      order: 7,
      videoUrl: "https://youtu.be/d68sGWMlM18",
    },
    {
      slug: "kamera-effekter-kamera-og-film",
      title: "Kamera-effekter, kamera og film",
      order: 8,
      videoUrl: "https://youtu.be/cJGig5C54U8",
    },
  ],
};

// ============================================
// MODULE 9: Guides
// ============================================
const guides: Module = {
  slug: "guides",
  title: "Guides",
  description: "Praktiske guides til specifikke emner",
  order: 9,
  lessons: [
    {
      slug: "almindelige-mennesker",
      title: "Almindelige mennesker",
      order: 1,
      content: (
        <div>
          <p>
            Få opskriften til at generere billeder af helt almindelige mennesker ved at tilføje de rigtige prompt-elementer til din prompt.
          </p>
          <p>
            Klik på billedet herunder for at downloade guiden som PDF.
          </p>
          <a href="https://drive.google.com/uc?export=download&id=10zb01P5B3o84yfKUERCjYFBV9irU3iz5" target="_blank" rel="noopener noreferrer">
            <img
              src="/images/guides/guide-almindelige-mennesker.webp"
              alt="Guide: Almindelige mennesker"
              className="w-[300px] cursor-pointer hover:opacity-80 transition-opacity"
            />
          </a>
        </div>
      ),
    },
    {
      slug: "skift-perspektiv",
      title: "Skift perspektiv",
      order: 2,
      content: (
        <div>
          <p>
            Se hvor meget perspektivet betyder for udtrykket i dine Midjourney-billeder. Og lær hvad det enkelte perspektiv fortæller af historie.
          </p>
          <p>
            Klik på billedet herunder for at downloade guiden som PDF.
          </p>
          <a href="https://drive.google.com/uc?export=download&id=13LhTua4V4X9Cm7dgCsy2QmjPl3rYkrWS" target="_blank" rel="noopener noreferrer">
            <img
              src="/images/guides/guide-skift-perspektiv.webp"
              alt="Guide: Skift perspektiv"
              className="w-[300px] cursor-pointer hover:opacity-80 transition-opacity"
            />
          </a>
        </div>
      ),
    },
    {
      slug: "gennemgaaende-karakterer",
      title: "Gennemgående karakterer",
      order: 3,
      content: (
        <div>
          <p>
            Lær de avancerede teknikker til at skabe gennemgående karakterer igennem flere billeder.
          </p>
          <p>
            Klik på billedet herunder for at downloade guiden som PDF.
          </p>
          <a href="https://drive.google.com/uc?export=download&id=1IUUtyE0XoE7vu_AVy4Amn7xNs3WVAWt3" target="_blank" rel="noopener noreferrer">
            <img
              src="/images/guides/guide-gennemgaaende-karakterer.webp"
              alt="Guide: Gennemgående karakterer"
              className="w-[300px] cursor-pointer hover:opacity-80 transition-opacity"
            />
          </a>
        </div>
      ),
    },
  ],
};

// ============================================
// COMPLETE CURRICULUM
// ============================================
export const curriculum: Curriculum = {
  modules: [
    introduktionTilMidjourney,
    genereringAfBilleder,
    arbejdVidereMedDitBillede,
    skabBillederMedBilleder,
    afrunding,
    avanceredeFunktioner,
    nyeFunktioner,
    bedreBilleder,
    guides,
  ],
};

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Find a module by its slug
 */
export function getModuleBySlug(slug: string): Module | undefined {
  return curriculum.modules.find((m) => m.slug === slug);
}

/**
 * Find a lesson by module and lesson slug
 */
export function getLessonBySlug(
  moduleSlug: string,
  lessonSlug: string
): { module: Module; lesson: typeof curriculum.modules[0]["lessons"][0] } | undefined {
  const module = getModuleBySlug(moduleSlug);
  if (!module) return undefined;

  const lesson = module.lessons.find((l) => l.slug === lessonSlug);
  if (!lesson) return undefined;

  return { module, lesson };
}

/**
 * Get the previous and next lessons for navigation
 */
export function getNavigationLinks(
  moduleSlug: string,
  lessonSlug: string
): { previous: { moduleSlug: string; lessonSlug: string; title: string } | null; next: { moduleSlug: string; lessonSlug: string; title: string } | null } {
  // Flatten all lessons into a single array with module info
  const allLessons: { moduleSlug: string; lessonSlug: string; title: string }[] = [];
  
  for (const module of curriculum.modules) {
    for (const lesson of module.lessons) {
      allLessons.push({
        moduleSlug: module.slug,
        lessonSlug: lesson.slug,
        title: lesson.title,
      });
    }
  }

  // Find current lesson index
  const currentIndex = allLessons.findIndex(
    (l) => l.moduleSlug === moduleSlug && l.lessonSlug === lessonSlug
  );

  if (currentIndex === -1) {
    return { previous: null, next: null };
  }

  return {
    previous: currentIndex > 0 ? allLessons[currentIndex - 1] : null,
    next: currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null,
  };
}

/**
 * Get total lesson count
 */
export function getTotalLessonCount(): number {
  return curriculum.modules.reduce((count, module) => count + module.lessons.length, 0);
}

