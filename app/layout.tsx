/**
 * Root layout for MJkursus.dk
 * Sets up the basic HTML structure, fonts, and navigation.
 */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import GoogleAnalytics from "@/components/GoogleAnalytics";

// Using Inter font for a clean, modern look
const inter = Inter({ subsets: ["latin"] });

// Site metadata for SEO
export const metadata: Metadata = {
  title: "MJkursus.dk - Lær Midjourney",
  description: "Komplet kursus i Midjourney. Lær at skabe fantastiske AI-billeder.",
  // Custom favicon from public/images
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // data-theme="cupcake" applies the DaisyUI cupcake theme
    <html lang="da" data-theme="cupcake">
      <body className={`${inter.className} min-h-screen`}>
        {/* Google Analytics tracking */}
        <GoogleAnalytics />
        
        {/* Top navigation bar */}
        <Navigation />
        
        {/* Main content area */}
        <main>{children}</main>
      </body>
    </html>
  );
}
