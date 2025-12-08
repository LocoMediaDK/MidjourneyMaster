/**
 * Sidebar component - Shows the course curriculum structure.
 * Displays all modules and their lessons in a collapsible menu.
 * Highlights the current lesson.
 */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { curriculum } from "@/data/curriculum";

export default function Sidebar() {
  // Get current path to highlight active lesson
  const pathname = usePathname();

  return (
    <aside className="w-72 bg-base-200 min-h-screen border-r border-base-300 overflow-y-auto">
      {/* Sidebar header */}
      <div className="p-4 border-b border-base-300">
        <h2 className="font-bold text-lg">Kursusindhold</h2>
      </div>

      {/* Module list */}
      <ul className="menu p-4 w-full">
        {curriculum.modules.map((module) => (
          <li key={module.slug}>
            {/* Module title - collapsible */}
            <details open={pathname?.includes(module.slug)}>
              <summary className="font-semibold text-sm uppercase tracking-wide text-base-content/70 hover:text-base-content">
                {module.title}
              </summary>
              
              {/* Lessons within module */}
              <ul>
                {module.lessons.map((lesson) => {
                  // Check if this lesson is currently active
                  const lessonPath = `/kursus/${module.slug}/${lesson.slug}`;
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
    </aside>
  );
}

