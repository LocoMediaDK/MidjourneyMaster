/**
 * TypeScript types for the course curriculum structure.
 * These types define how modules and lessons are organized.
 */

import { ReactNode } from "react";

// A single lesson within a module
export interface Lesson {
  // Unique identifier for the lesson (used in URL)
  slug: string;
  
  // Display title of the lesson
  title: string;
  
  // Optional video URL for embedding (YouTube, etc.)
  videoUrl?: string;
  
  // Optional text content for the lesson (can be HTML string or React components)
  content?: string | ReactNode;
  
  // Order of the lesson within the module
  order: number;
}

// A module containing multiple lessons
export interface Module {
  // Unique identifier for the module (used in URL)
  slug: string;
  
  // Display title of the module
  title: string;
  
  // Description of what the module covers
  description?: string;
  
  // All lessons in this module
  lessons: Lesson[];
  
  // Order of the module in the curriculum
  order: number;
}

// The complete curriculum structure
export interface Curriculum {
  // All modules in the course
  modules: Module[];
}

// Helper type for navigation - represents current position in course
export interface CoursePosition {
  moduleSlug: string;
  lessonSlug: string;
}

// Helper type for prev/next navigation
export interface NavigationLinks {
  previous: CoursePosition | null;
  next: CoursePosition | null;
}

