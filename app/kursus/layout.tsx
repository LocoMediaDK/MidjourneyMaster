/**
 * Layout for the course section.
 * Includes the sidebar with curriculum navigation.
 */

import Sidebar from "@/components/Sidebar";

export default function KursusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-[calc(100vh-64px)]">
      {/* Sidebar with course navigation */}
      <Sidebar />
      
      {/* Main content area */}
      <div className="flex-1 p-8 overflow-y-auto">
        {children}
      </div>
    </div>
  );
}

