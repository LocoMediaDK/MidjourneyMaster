/**
 * Checkout Button Component
 * Handles the Stripe checkout flow.
 * Can be used anywhere to trigger payment.
 */

"use client";

import { useState } from "react";

interface CheckoutButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function CheckoutButton({ children, className }: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (data.url) {
        // Redirect to Stripe Checkout
        window.location.href = data.url;
      } else {
        console.error("No checkout URL returned");
        alert("Der opstod en fejl. Prøv venligst igen.");
        setLoading(false);
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Der opstod en fejl. Prøv venligst igen.");
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className={className}
    >
      {loading ? (
        <>
          <span className="loading loading-spinner loading-sm"></span>
          Indlæser...
        </>
      ) : (
        children
      )}
    </button>
  );
}

