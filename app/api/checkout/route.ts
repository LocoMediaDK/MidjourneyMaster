/**
 * Stripe Checkout API Route
 * Creates a Stripe Checkout session and returns the URL to redirect to.
 */

import { NextRequest, NextResponse } from "next/server";
import { stripe, STRIPE_CONFIG } from "@/lib/stripe";

export async function POST(request: NextRequest) {
  try {
    // Get the origin for redirect URLs
    const origin = request.headers.get("origin") || "http://localhost:3000";

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price: STRIPE_CONFIG.priceId,
          quantity: 1,
        },
      ],
      // Collect customer email for user creation
      customer_creation: "always",
      // Success and cancel URLs
      success_url: `${origin}/betaling/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/betaling/cancelled`,
      // Allow promotion codes
      allow_promotion_codes: true,
      // Automatic tax calculation (Danish VAT 25%)
      automatic_tax: {
        enabled: true,
      },
      // Metadata for webhook processing
      metadata: {
        product: "midjourney-master",
      },
    });

    // Return the checkout URL
    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}

