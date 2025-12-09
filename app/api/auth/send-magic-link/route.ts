/**
 * Check if user can login API Route
 * Only allows magic link for existing users who have paid.
 * Returns success if user can login, client then sends the actual magic link.
 */

import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Create Supabase admin client
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  }
);

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email er påkrævet", canLogin: false },
        { status: 400 }
      );
    }

    // Check if user exists
    const { data: users } = await supabaseAdmin.auth.admin.listUsers();
    const user = users?.users?.find(
      (u) => u.email?.toLowerCase() === email.toLowerCase()
    );

    if (!user) {
      return NextResponse.json(
        { error: "Ingen bruger fundet med denne email. Har du købt kurset?", canLogin: false },
        { status: 404 }
      );
    }

    // Check if user has paid
    const { data: profile } = await supabaseAdmin
      .from("profiles")
      .select("has_paid")
      .eq("id", user.id)
      .single();

    if (!profile || !profile.has_paid) {
      return NextResponse.json(
        { error: "Du har ikke adgang til kurset. Gennemfør venligst købet først.", canLogin: false },
        { status: 403 }
      );
    }

    // User exists and has paid - allow login
    return NextResponse.json({
      canLogin: true,
    });
  } catch (error) {
    console.error("Check login error:", error);
    return NextResponse.json(
      { error: "Der opstod en fejl. Prøv igen senere.", canLogin: false },
      { status: 500 }
    );
  }
}
