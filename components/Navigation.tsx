/**
 * Navigation component - Top navigation bar for the site.
 * Shows the site logo/title and main navigation links.
 */

import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  return (
    <div className="navbar bg-base-200 border-b border-base-300 min-h-[90px] justify-center relative">
      {/* Logo - centered */}
      <Link href="/" className="p-2 hover:bg-transparent">
        <Image 
          src="/images/Logo.png" 
          alt="MJkursus.dk" 
          width={263}
          height={70}
          priority
        />
      </Link>
      
      {/* Main navigation links - positioned absolutely on the right */}
      <div className="absolute right-4">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/kursus" className="font-medium">
              Medlem
            </Link>
          </li>
          {/* 
            TODO: Add more links when needed, e.g.:
            - Login/logout button
            - User profile menu
          */}
        </ul>
      </div>
    </div>
  );
}

