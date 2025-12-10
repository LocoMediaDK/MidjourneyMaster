/**
 * Stripe Webhook Handler
 * Handles Stripe events, particularly checkout.session.completed.
 * Creates user in Supabase when payment is successful.
 */

import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { createClient } from "@supabase/supabase-js";
import Stripe from "stripe";

// Create Supabase admin client for user creation
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
  const body = await request.text();
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    console.error("No Stripe signature found");
    return NextResponse.json({ error: "No signature" }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error) {
    console.error("Webhook signature verification failed:", error);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  // Handle the event
  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      
      console.log("Checkout session completed:", session.id);
      
      // Get customer email
      const customerEmail = session.customer_details?.email;
      const customerId = session.customer as string;

      if (!customerEmail) {
        console.error("No customer email found in session");
        return NextResponse.json({ error: "No email" }, { status: 400 });
      }

      try {
        // Check if user already exists
        const { data: existingUsers } = await supabaseAdmin.auth.admin.listUsers();
        const existingUser = existingUsers?.users?.find(
          (u) => u.email?.toLowerCase() === customerEmail.toLowerCase()
        );

        if (existingUser) {
          // User exists - update their profile with payment info
          console.log("User already exists, updating payment status:", customerEmail);
          
          await supabaseAdmin
            .from("profiles")
            .upsert({
              id: existingUser.id,
              email: customerEmail,
              stripe_customer_id: customerId,
              has_paid: true,
              paid_at: new Date().toISOString(),
            });
        } else {
          // Create new user without password (they'll use magic link)
          console.log("Creating new user:", customerEmail);
          
          const { data: newUser, error: createError } = await supabaseAdmin.auth.admin.createUser({
            email: customerEmail,
            email_confirm: true, // Auto-confirm email
            user_metadata: {
              stripe_customer_id: customerId,
            },
          });

          if (createError) {
            console.error("Error creating user:", createError);
            throw createError;
          }

          // Create profile for the new user
          if (newUser.user) {
            await supabaseAdmin
              .from("profiles")
              .insert({
                id: newUser.user.id,
                email: customerEmail,
                stripe_customer_id: customerId,
                has_paid: true,
                paid_at: new Date().toISOString(),
              });
          }
        }

        console.log("Successfully processed payment for:", customerEmail);
      } catch (error) {
        console.error("Error processing checkout:", error);
        return NextResponse.json(
          { error: "Failed to process checkout" },
          { status: 500 }
        );
      }
      break;
    }

    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  return NextResponse.json({ received: true });
}




