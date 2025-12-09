/**
 * Forgot Password Page
 * Allows users to request a password reset email.
 */

"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import Image from "next/image";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const supabase = createClient();

  // Handle password reset request
  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    if (error) {
      setMessage({ type: "error", text: error.message });
    } else {
      setMessage({
        type: "success",
        text: "Tjek din email! Vi har sendt dig et link til at nulstille dit password.",
      });
      setEmail("");
    }

    setLoading(false);
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
            Nulstil password
          </h1>
          <p className="text-center text-base-content/70 mb-6">
            Indtast din email, og vi sender dig et link til at nulstille dit password.
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
          <form onSubmit={handleResetPassword}>
            <div className="form-control mb-6">
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
                "Send reset-link"
              )}
            </button>
          </form>

          {/* Back to login */}
          <div className="divider my-6">eller</div>
          <Link href="/login" className="btn btn-ghost btn-sm w-full">
            ← Tilbage til login
          </Link>
        </div>
      </div>
    </div>
  );
}
