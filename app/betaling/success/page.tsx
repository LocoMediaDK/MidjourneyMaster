/**
 * Payment Success Page
 * Shown after successful Stripe checkout.
 * Guides user to login with magic link.
 */

import Link from "next/link";

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-[calc(100vh-90px)] flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-lg bg-base-100 shadow-xl">
        <div className="card-body text-center">
          {/* Success Icon */}
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 rounded-full bg-success/20 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-10 h-10 text-success"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-success mb-2">
            Tak for dit køb! 🎉
          </h1>
          
          <p className="text-lg text-base-content/80 mb-6">
            Din betaling er gennemført, og du har nu adgang til hele kurset.
          </p>

          {/* Instructions */}
          <div className="bg-base-200 rounded-lg p-6 mb-6 text-left">
            <h2 className="font-semibold text-lg mb-3">Sådan logger du ind:</h2>
            <ol className="list-decimal list-inside space-y-2 text-base-content/80">
              <li>Klik på knappen herunder</li>
              <li>Indtast den email du brugte ved købet</li>
              <li>Vi sender dig et login-link på email</li>
              <li>Klik på linket, og du er inde!</li>
            </ol>
          </div>

          {/* CTA Button */}
          <Link
            href="/login"
            className="btn btn-primary btn-lg w-full"
          >
            Log ind på kurset
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>

          {/* Help text */}
          <p className="text-sm text-base-content/60 mt-4">
            Tjek også din spam-mappe, hvis du ikke modtager login-linket inden for få minutter.
          </p>
        </div>
      </div>
    </div>
  );
}




