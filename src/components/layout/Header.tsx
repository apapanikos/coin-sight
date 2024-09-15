"use client";

import { ModeToggle } from "@/components/ModeToggle";

export function Header() {
  return (
    <header className="flex items-center justify-between p-4">
      {/* Other header content */}
      <ModeToggle />
    </header>
  );
}
