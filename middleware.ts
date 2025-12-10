/**
 * Next.js Middleware
 * Runs on every request to protected routes.
 * Handles auth session refresh and route protection.
 */

import { updateSession } from "@/lib/supabase/middleware";
import { type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

// Configure which routes the middleware should run on
export const config = {
  matcher: [
    // Match all routes except static files and api routes
    "/((?!_next/static|_next/image|favicon.ico|images|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif)$).*)",
  ],
};
