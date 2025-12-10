/**
 * Navigation component - Top navigation bar for the site.
 * Shows the site logo/title and main navigation links.
 */

import Link from "next/link";
import Image from "next/image";
import UserMenu from "./UserMenu";

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
      
      {/* User menu - positioned absolutely on the right */}
      <div className="absolute right-4">
        <UserMenu />
      </div>
    </div>
  );
}

