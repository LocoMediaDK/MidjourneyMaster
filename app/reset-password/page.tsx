/**
 * Reset Password Page
 * Allows users to set a new password after clicking the reset link from email.
 */

"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  
  const supabase = createClient();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    // Validate passwords match
    if (password !== confirmPassword) {
      setMessage({ type: "error", text: "Passwords matcher ikke" });
      setLoading(false);
      return;
    }

    // Validate password length
    if (password.length < 6) {
      setMessage({ type: "error", text: "Password skal være mindst 6 tegn" });
      setLoading(false);
      return;
    }

    console.log("[Reset Password] Updating password...");

    const { error } = await supabase.auth.updateUser({
      password: password,
    });

    if (error) {
      console.error("[Reset Password] Error:", error.message);
      setMessage({ type: "error", text: error.message });
      setLoading(false);
    } else {
      console.log("[Reset Password] Password updated successfully");
      setMessage({
        type: "success",
        text: "Dit password er opdateret! Omdirigerer til kurset...",
      });
      
      // Redirect to course after 2 seconds
      setTimeout(() => {
        router.push("/kursus");
      }, 2000);
    }
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
            Nulstil dit password
          </h1>
          <p className="text-center text-base-content/70 mb-6">
            Vælg et nyt password til din konto
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

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Nyt password</span>
              </label>
              <input
                type="password"
                placeholder="Mindst 6 tegn"
                className="input input-bordered w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="form-control mb-6">
              <label className="label">
                <span className="label-text">Bekræft password</span>
              </label>
              <input
                type="password"
                placeholder="Gentag dit password"
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
                "Gem nyt password"
              )}
            </button>
          </form>

          {/* Back to login */}
          <div className="divider my-6"></div>
          <Link href="/login" className="btn btn-ghost btn-sm w-full">
            ← Tilbage til login
          </Link>
        </div>
      </div>
    </div>
  );
}
