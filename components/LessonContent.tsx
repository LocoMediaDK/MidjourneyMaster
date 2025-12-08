/**
 * LessonContent component - Wrapper for lesson content.
 * Displays video, title, and text content for a lesson.
 * Includes navigation to previous/next lessons.
 */

import { ReactNode } from "react";
import Link from "next/link";
import VideoEmbed from "./VideoEmbed";
import { getNavigationLinks } from "@/data/curriculum";

interface LessonContentProps {
  // Module slug for navigation
  moduleSlug: string;
  // Lesson slug for navigation
  lessonSlug: string;
  // Lesson title
  title: string;
  // Optional video URL
  videoUrl?: string;
  // Optional text content (HTML string or React components)
  content?: string | ReactNode;
}

export default function LessonContent({
  moduleSlug,
  lessonSlug,
  title,
  videoUrl,
  content,
}: LessonContentProps) {
  // Get previous and next lesson links
  const { previous, next } = getNavigationLinks(moduleSlug, lessonSlug);

  return (
    <article className="max-w-6xl">
      {/* Lesson title */}
      <h1 className="text-4xl font-bold mb-6">{title}</h1>

      {/* Video embed (if available) */}
      {videoUrl && (
        <div className="mb-8">
          <VideoEmbed url={videoUrl} title={title} />
        </div>
      )}

      {/* Text content (if available) */}
      {content && (
        <div className="prose max-w-none mb-8">
          {typeof content === "string" ? (
            <div dangerouslySetInnerHTML={{ __html: content }} />
          ) : (
            content
          )}
        </div>
      )}

      {/* Placeholder when no content is added yet */}
      {!videoUrl && !content && (
        <div className="alert alert-info mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-current shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Indhold kommer snart...</span>
        </div>
      )}

      {/* Divider */}
      <div className="divider"></div>

      {/* Previous/Next navigation */}
      <nav className="flex justify-between items-center">
        {/* Previous lesson link */}
        {previous ? (
          <Link
            href={`/kursus/${previous.moduleSlug}/${previous.lessonSlug}`}
            className="btn btn-outline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
            {previous.title}
          </Link>
        ) : (
          <div></div> // Empty div to maintain flex spacing
        )}

        {/* Next lesson link */}
        {next ? (
          <Link
            href={`/kursus/${next.moduleSlug}/${next.lessonSlug}`}
            className="btn btn-primary"
          >
            {next.title}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </Link>
        ) : (
          <div></div> // Empty div to maintain flex spacing
        )}
      </nav>
    </article>
  );
}

