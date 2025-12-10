/**
 * Payment Cancelled Page
 * Shown when user cancels Stripe checkout.
 */

import Link from "next/link";

export default function PaymentCancelledPage() {
  return (
    <div className="min-h-[calc(100vh-90px)] flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-lg bg-base-100 shadow-xl">
        <div className="card-body text-center">
          {/* Icon */}
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 rounded-full bg-warning/20 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-10 h-10 text-warning"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                />
              </svg>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold mb-2">
            Betaling afbrudt
          </h1>
          
          <p className="text-base-content/80 mb-6">
            Din betaling blev ikke gennemført. Du er ikke blevet opkrævet.
          </p>

          {/* CTA Buttons */}
          <div className="space-y-3">
            <Link
              href="/"
              className="btn btn-primary btn-lg w-full"
            >
              Prøv igen
            </Link>
            
            <Link
              href="/"
              className="btn btn-ghost w-full"
            >
              ← Tilbage til forsiden
            </Link>
          </div>

          {/* Help text */}
          <p className="text-sm text-base-content/60 mt-4">
            Har du spørgsmål? Kontakt os på{" "}
            <a href="mailto:support@mjkursus.dk" className="link">
              support@mjkursus.dk
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}




