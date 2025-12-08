/**
 * Sidebar component - Shows the course curriculum structure.
 * Displays categories, modules, and lessons in a collapsible menu.
 * Highlights the current lesson.
 */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { curriculum } from "@/data/curriculum";

// Define the category structure for sidebar organization
// This maps modules to their respective categories
const sidebarCategories = [
  {
    title: "Grundkursus",
    moduleSlugs: [
      "introduktion-til-midjourney",
      "generering-af-billeder",
      "arbejd-videre-med-dit-billede",
      "skab-billeder-med-billeder",
      "afrunding",
    ],
  },
  {
    title: "Ekstra",
    moduleSlugs: [
      "avancerede-funktioner",
      "nye-funktioner",
    ],
  },
  {
    title: "Bonus",
    moduleSlugs: [
      "bedre-billeder",
    ],
  },
  {
    title: "Guides",
    moduleSlugs: [
      "guides",
    ],
  },
];

export default function Sidebar() {
  // Get current path to highlight active lesson
  const pathname = usePathname();

  return (
    <aside className="w-72 bg-base-200 min-h-screen border-r border-base-300 overflow-y-auto">
      {/* Categories and modules list - no global header */}
      <div className="p-4">
        {sidebarCategories.map((category, categoryIndex) => {
          // Find the modules for this category
          const categoryModules = category.moduleSlugs
            .map(slug => curriculum.modules.find(m => m.slug === slug))
            .filter(Boolean);

          return (
            <div key={categoryIndex} className="mb-6">
              {/* Category title as section header */}
              <h2 className="text-lg font-bold text-black mb-1 bg-base-300 px-3 py-2 rounded-lg">
                {category.title}
              </h2>
              
              {/* Modules within category */}
              <ul className="menu p-0 w-full">
                {categoryModules.map((module) => (
                  <li key={module!.slug}>
                    {/* Module title - collapsible */}
                    <details open={pathname?.includes(module!.slug)}>
                      <summary className="font-semibold text-sm hover:text-base-content">
                        {module!.title}
                      </summary>
                      
                      {/* Lessons within module */}
                      <ul>
                        {module!.lessons.map((lesson) => {
                          // Check if this lesson is currently active
                          const lessonPath = `/kursus/${module!.slug}/${lesson.slug}`;
                          const isActive = pathname === lessonPath;

                          return (
                            <li key={lesson.slug}>
                              <Link
                                href={lessonPath}
                                className={isActive ? "active font-medium" : ""}
                              >
                                {lesson.title}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </details>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
        
        {/* External link to Prompt Database */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-black mb-1 bg-base-300 px-3 py-2 rounded-lg">
            Prompt database
          </h2>
          <div className="pl-4 pt-2">
            <a 
              href="https://midhero.com/database" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm hover:underline flex items-center gap-1"
            >
              <span>MidHero Database</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}

