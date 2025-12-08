/**
 * Course overview page.
 * Shows all modules and their lessons in a grid layout.
 */

import Link from "next/link";
import { curriculum } from "@/data/curriculum";

export default function KursusPage() {
  return (
    <div className="max-w-6xl">
      {/* Page header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Kursusoversigt</h1>
        <p className="text-base-content/70">
          Vælg et modul for at starte eller fortsætte kurset.
        </p>
      </div>

      {/* Module list */}
      <div className="space-y-8">
        {curriculum.modules.map((module, moduleIndex) => (
          <div key={module.slug} className="card bg-base-200">
            <div className="card-body">
              {/* Module header */}
              <div className="flex items-center gap-4 mb-4">
                <div className="badge badge-primary badge-lg">
                  {moduleIndex + 1}
                </div>
                <div>
                  <h2 className="card-title text-xl">{module.title}</h2>
                  {module.description && (
                    <p className="text-sm text-base-content/60">
                      {module.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Lesson list */}
              <ul className="menu bg-base-100 rounded-box">
                {module.lessons.map((lesson, lessonIndex) => (
                  <li key={lesson.slug}>
                    <Link
                      href={`/kursus/${module.slug}/${lesson.slug}`}
                      className="flex items-center gap-3"
                    >
                      <span className="badge badge-ghost badge-sm">
                        {lessonIndex + 1}
                      </span>
                      {lesson.title}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Start module button */}
              <div className="card-actions justify-end mt-4">
                <Link
                  href={`/kursus/${module.slug}/${module.lessons[0].slug}`}
                  className="btn btn-primary btn-sm"
                >
                  Start modul
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

