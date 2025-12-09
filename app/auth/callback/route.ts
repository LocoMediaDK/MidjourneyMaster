/**
 * Auth Callback Route
 * Handles the redirect from Supabase after Magic Link authentication.
 * Exchanges the auth code for a session and redirects to /kursus.
 */

import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  
  // Get the auth code from the URL
  const code = searchParams.get("code");
  
  // Get the next URL to redirect to (default: /kursus)
  const next = searchParams.get("next") ?? "/kursus";

  if (code) {
    const supabase = await createClient();
    
    // Exchange the code for a session
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    
    if (!error) {
      // Successful auth - redirect to the next page
      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  // If something went wrong, redirect to login with error
  return NextResponse.redirect(`${origin}/login?error=auth_failed`);
}
