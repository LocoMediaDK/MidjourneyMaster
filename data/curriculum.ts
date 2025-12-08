/**
 * Course curriculum data for MJkursus.dk
 * This file contains all modules and lessons for the Midjourney course.
 * 
 * To add content to a lesson:
 * 1. Add videoUrl for embedded videos (YouTube, Vimeo, etc.)
 * 2. Add content for text descriptions (supports HTML)
 */

import React from "react";
import { Module, Curriculum, Category } from "@/types/curriculum";

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
    },
    {
      slug: "zoom-og-panorering",
      title: "Zoom og panorering",
      order: 2,
    },
    {
      slug: "editor",
      title: "Editor",
      order: 3,
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
    },
    {
      slug: "style-reference",
      title: "Style Reference",
      order: 2,
    },
    {
      slug: "character-reference",
      title: "Character Reference",
      order: 3,
    },
    {
      slug: "describe",
      title: "Describe",
      order: 4,
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
    },
    {
      slug: "repeat-og-permutation",
      title: "Repeat & Permutation",
      order: 2,
    },
    {
      slug: "tile",
      title: "Tile",
      order: 3,
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
    },
    {
      slug: "edit",
      title: "Edit",
      order: 2,
      content: (
        <>
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

          <h3>Vælg et billede</h3>
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
            src="/images/edit/edit-1.png"
            alt="Brooklyn Bridge billede uploadet til Midjourney editor"
            className="w-full rounded-lg shadow-lg my-6"
          />

          <p>
            Det kan jeg skalere op og ned (som du allerede kender det fra den almindelige editor).
          </p>
          <p>
            Og jeg kan også markere en del af billede. Igen som ved brug af den normale editor.
          </p>

          <img
            src="/images/edit/edit-2.png"
            alt="Markering af område i billedet"
            className="w-full rounded-lg shadow-lg my-6"
          />

          <p>
            Når jeg har gjort det, kan jeg så skrive en prompt i prompt-feltet.
          </p>
          <p>
            Det kunne f.eks. være:
          </p>
          <p className="italic">
            a yellow submarine
          </p>
          <p>
            Og så får jeg en gul ubåd tilføjet til mit billede af broen i New York.
          </p>

          <img
            src="/images/edit/edit-3.png"
            alt="Gul ubåd tilføjet til Brooklyn Bridge billedet"
            className="w-full rounded-lg shadow-lg my-6"
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
            src="/images/edit/edit-4.png"
            alt="Smart Select funktion i Midjourney editor"
            className="w-full rounded-lg shadow-lg my-6"
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
            src="/images/edit/edit-5.png"
            alt="Resultat efter brug af Erase Selection"
            className="w-full rounded-lg shadow-lg my-6"
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
          <p className="italic">
            photo of a yellow submarine in front of brooklyn bridge in new york, golden hour
          </p>

          <img
            src="/images/edit/edit-6.png"
            alt="Retexture eksempel med golden hour"
            className="w-full rounded-lg shadow-lg my-6"
          />

          <p>
            Så får du nu et billede af en gul ubåd foran Brooklyn Bridge lige før solnedgang.
          </p>
          <p>
            Eller du kan skrive en prompt i stil med:
          </p>
          <p className="italic">
            water color painting of a yellow submarine in front of brooklyn bridge in new york
          </p>

          <img
            src="/images/edit/edit-7.png"
            alt="Retexture eksempel med vandfarve-stil"
            className="w-full rounded-lg shadow-lg my-6"
          />

          <p>
            Og så bliver dit foto lavet om til en vandfarve-tegning.
          </p>
          <p>
            Du kan endda også bruge Style Reference numre:
          </p>
          <p className="italic">
            illustration of a yellow submarine in front of brooklyn bridge in new york --sref 2057550389
          </p>

          <img
            src="/images/edit/edit-8.png"
            alt="Retexture eksempel med Style Reference"
            className="w-full rounded-lg shadow-lg my-6"
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
        </>
      ),
    },
    {
      slug: "personalize",
      title: "Personalize",
      order: 3,
    },
    {
      slug: "moodboards",
      title: "Moodboards",
      order: 4,
    },
    {
      slug: "omni-reference",
      title: "Omni Reference",
      order: 5,
    },
    {
      slug: "draft-og-conversational-mode",
      title: "Draft & Conversational Mode",
      order: 6,
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
    },
    {
      slug: "type-og-hovedmotiv",
      title: "Type og hovedmotiv",
      order: 2,
    },
    {
      slug: "detaljer",
      title: "Detaljer",
      order: 3,
    },
    {
      slug: "scenen",
      title: "Scenen",
      order: 4,
    },
    {
      slug: "stilarter",
      title: "Stilarter",
      order: 5,
    },
    {
      slug: "lys-og-farver",
      title: "Lys og farver",
      order: 6,
    },
    {
      slug: "komposition",
      title: "Komposition",
      order: 7,
    },
    {
      slug: "kamera-effekter-kamera-og-film",
      title: "Kamera-effekter, kamera og film",
      order: 8,
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
    },
    {
      slug: "skift-perspektiv",
      title: "Skift perspektiv",
      order: 2,
    },
    {
      slug: "gennemgaaende-karakterer",
      title: "Gennemgående karakterer",
      order: 3,
    },
  ],
};

// ============================================
// CATEGORIES
// ============================================
const categories: Category[] = [
  {
    slug: "grundkursus",
    title: "Grundkursus",
    order: 1,
    modules: [
      introduktionTilMidjourney,
      genereringAfBilleder,
      arbejdVidereMedDitBillede,
      skabBillederMedBilleder,
      afrunding,
    ],
  },
  {
    slug: "ekstra",
    title: "Ekstra",
    order: 2,
    modules: [
      avanceredeFunktioner,
      nyeFunktioner,
    ],
  },
  {
    slug: "bonus",
    title: "Bonus",
    order: 3,
    modules: [
      bedreBilleder,
    ],
  },
  {
    slug: "guides",
    title: "Guides",
    order: 4,
    modules: [
      guides,
    ],
  },
];

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
  categories,
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

