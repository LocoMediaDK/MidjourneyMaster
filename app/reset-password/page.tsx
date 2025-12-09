/**
 * Reset Password Page
 * Allows users to set a new password after clicking the reset link.
 */

"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import Image from "next/image";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [isValidSession, setIsValidSession] = useState(false);

  const supabase = createClient();

  // Check if user has a valid session (from reset link)
  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsValidSession(!!session);
    };

    checkSession();
  }, [supabase.auth]);

  // Handle password update
  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    // Validate passwords match
    if (password !== confirmPassword) {
      setMessage({ type: "error", text: "Passwordene matcher ikke." });
      return;
    }

    // Validate password length
    if (password.length < 6) {
      setMessage({ type: "error", text: "Password skal være mindst 6 tegn langt." });
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.updateUser({
      password,
    });

    if (error) {
      setMessage({ type: "error", text: error.message });
    } else {
      setMessage({
        type: "success",
        text: "Password opdateret! Du bliver nu omdirigeret til login...",
      });
      
      // Redirect to login after 2 seconds
      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    }

    setLoading(false);
  };

  // Show error if no valid session
  if (!isValidSession) {
    return (
      <div className="min-h-[calc(100vh-90px)] flex items-center justify-center bg-base-200 px-4">
        <div className="card w-full max-w-md bg-base-100 shadow-xl">
          <div className="card-body">
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

            <h1 className="text-2xl font-bold text-center mb-4">
              Link er udløbet
            </h1>
            <p className="text-center text-base-content/70 mb-6">
              Dit password reset link er udløbet. Prøv igen.
            </p>

            <div className="alert alert-error mb-4">
              <span>Du skal bruge et gyldigt reset-link fra din email.</span>
            </div>

            <Link href="/forgot-password" className="btn btn-primary w-full">
              Anmod om nyt reset-link
            </Link>
          </div>
        </div>
      </div>
    );
  }

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
            Sæt nyt password
          </h1>
          <p className="text-center text-base-content/70 mb-6">
            Vælg et stærkt password til din konto.
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

          {/* Reset Password Form */}
          <form onSubmit={handleUpdatePassword}>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Nyt password</span>
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="input input-bordered w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label className="label">
                <span className="label-text-alt text-xs text-base-content/60">
                  Mindst 6 tegn
                </span>
              </label>
            </div>

            <div className="form-control mb-6">
              <label className="label">
                <span className="label-text">Gentag password</span>
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="input input-bordered w-full"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
                "Sæt nyt password"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
