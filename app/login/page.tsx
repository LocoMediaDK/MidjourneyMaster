/**
 * Login Page
 * Allows users to sign in with Magic Link (primary) or Email/Password.
 */

"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  // Form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // UI state
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [loginMethod, setLoginMethod] = useState<"magic-link" | "password">("magic-link");

  const supabase = createClient();

  // Handle Magic Link login
  const handleMagicLink = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    console.log("[Magic Link] Starting login process for:", email);

    try {
      // First check if user exists and has paid
      console.log("[Magic Link] Checking if user can login...");
      const response = await fetch("/api/auth/send-magic-link", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      console.log("[Magic Link] API response:", data);

      if (!data.canLogin) {
        console.log("[Magic Link] ❌ User cannot login:", data.error);
        setMessage({ type: "error", text: data.error || "Du har ikke adgang" });
        setLoading(false);
        return;
      }

      console.log("[Magic Link] ✅ User authorized, sending magic link...");

      // User can login - send magic link via Supabase client
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
          shouldCreateUser: false,
        },
      });

      if (error) {
        console.log("[Magic Link] ❌ Supabase error:", error.message);
        setMessage({ type: "error", text: error.message });
      } else {
        console.log("[Magic Link] ✅ Magic link sent successfully to:", email);
        setMessage({
          type: "success",
          text: "Tjek din email! Vi har sendt dig et login-link.",
        });
      }
    } catch (error) {
      console.error("[Magic Link] ❌ Unexpected error:", error);
      setMessage({ type: "error", text: "Der opstod en fejl. Prøv igen." });
    }

    setLoading(false);
  };

  // Handle Email/Password login
  const handlePasswordLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    console.log("[Password Login] Starting login for:", email);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.log("[Password Login] ❌ Auth error:", error.message);
      setMessage({ type: "error", text: error.message });
      setLoading(false);
      return;
    }

    console.log("[Password Login] ✅ Auth successful, checking payment status...");

    // Check if user has paid
    if (data.user) {
      const { data: profile } = await supabase
        .from("profiles")
        .select("has_paid")
        .eq("id", data.user.id)
        .single();

      console.log("[Password Login] Profile:", profile);

      if (!profile || !profile.has_paid) {
        console.log("[Password Login] ❌ User has not paid, signing out");
        await supabase.auth.signOut();
        setMessage({ 
          type: "error", 
          text: "Du har ikke adgang til kurset. Gennemfør venligst købet først." 
        });
        setLoading(false);
        return;
      }

      console.log("[Password Login] ✅ User has paid, redirecting to /kursus");
    }

    // User has paid - redirect
    window.location.href = "/kursus";
  };

  return (
    <div className="min-h-[calc(100vh-90px)] flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <Link href="/">
              <Image
                src="/images/Logo.png"
                alt="Midjourney Master"
                width={200}
                height={53}
              />
            </Link>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-center mb-2">
            Log ind på kurset
          </h1>
          <p className="text-center text-base-content/70 mb-6">
            Få adgang til alle lektioner og ressourcer
          </p>


          {/* Status messages */}
          {message && (
            <div
              className={`alert ${
                message.type === "success" ? "alert-success" : "alert-error"
              } mb-4`}
            >
              <span>{message.text}</span>
            </div>
          )}

          {/* Magic Link Form - Primary method */}
          {loginMethod === "magic-link" && (
            <form onSubmit={handleMagicLink}>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="din@email.dk"
                  className="input input-bordered w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full"
                disabled={loading}
              >
                {loading ? (
                  <span className="loading loading-spinner loading-sm"></span>
                ) : (
                  "Send login-link"
                )}
              </button>

              <p className="text-sm text-center text-base-content/60 mt-4">
                Vi sender dig et link til din email, som logger dig ind automatisk.
              </p>

              <div className="text-center mt-6">
                <button
                  type="button"
                  onClick={() => setLoginMethod("password")}
                  className="link link-hover text-sm text-base-content/60"
                >
                  Eller log ind med password
                </button>
              </div>
            </form>
          )}

          {/* Password Form - Secondary method */}
          {loginMethod === "password" && (
            <form onSubmit={handlePasswordLogin}>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="din@email.dk"
                  className="input input-bordered w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-control mb-6">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="input input-bordered w-full"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full"
                disabled={loading}
              >
                {loading ? (
                  <span className="loading loading-spinner loading-sm"></span>
                ) : (
                  "Log ind"
                )}
              </button>

              <div className="text-center mt-6 space-y-3">
                <div>
                  <Link
                    href="/forgot-password"
                    className="link link-hover text-sm text-base-content/60"
                  >
                    Glemt password?
                  </Link>
                </div>
                <div>
                  <button
                    type="button"
                    onClick={() => setLoginMethod("magic-link")}
                    className="link link-hover text-sm text-base-content/60"
                  >
                    Eller brug Magic Link i stedet
                  </button>
                </div>
              </div>
            </form>
          )}

          {/* Back to home */}
          <div className="divider my-6"></div>
          <Link href="/" className="btn btn-ghost btn-sm w-full">
            ← Tilbage til forsiden
          </Link>
        </div>
      </div>
    </div>
  );
}

