/**
 * Dynamic lesson page.
 * Renders the content for any lesson based on URL parameters.
 * URL format: /kursus/[modul]/[lektion]
 */

import { notFound } from "next/navigation";
import { Metadata } from "next";
import LessonContent from "@/components/LessonContent";
import { getLessonBySlug, curriculum } from "@/data/curriculum";

// Define the props type for this page
interface LessonPageProps {
  params: {
    modul: string;
    lektion: string;
  };
}

/**
 * Generate static paths for all lessons.
 * This enables static generation for better performance.
 */
export async function generateStaticParams() {
  const paths: { modul: string; lektion: string }[] = [];

  // Loop through all modules and lessons to create paths
  for (const module of curriculum.modules) {
    for (const lesson of module.lessons) {
      paths.push({
        modul: module.slug,
        lektion: lesson.slug,
      });
    }
  }

  return paths;
}

/**
 * Generate metadata for SEO.
 */
export async function generateMetadata({
  params,
}: LessonPageProps): Promise<Metadata> {
  const result = getLessonBySlug(params.modul, params.lektion);

  if (!result) {
    return {
      title: "Lektion ikke fundet - MJkursus.dk",
    };
  }

  return {
    title: `${result.lesson.title} - ${result.module.title} - MJkursus.dk`,
    description: `Lær om ${result.lesson.title} i dette Midjourney kursus.`,
  };
}

/**
 * The lesson page component.
 */
export default function LessonPage({ params }: LessonPageProps) {
  // Look up the lesson in our curriculum data
  const result = getLessonBySlug(params.modul, params.lektion);

  // If lesson not found, show 404
  if (!result) {
    notFound();
  }

  const { module, lesson } = result;

  return (
    <div>
      {/* Breadcrumb navigation */}
      <div className="text-sm breadcrumbs mb-6">
        <ul>
          <li>
            <a href="/kursus">Kursus</a>
          </li>
          <li>
            <a href={`/kursus/${module.slug}/${module.lessons[0].slug}`}>
              {module.title}
            </a>
          </li>
          <li className="text-primary">{lesson.title}</li>
        </ul>
      </div>

      {/* Lesson content */}
      <LessonContent
        moduleSlug={module.slug}
        lessonSlug={lesson.slug}
        title={lesson.title}
        videoUrl={lesson.videoUrl}
        content={lesson.content}
      />
    </div>
  );
}

