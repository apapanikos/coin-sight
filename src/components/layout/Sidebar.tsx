// src/components/Sidebar.tsx

"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, Home, Settings } from "lucide-react";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside
      className={cn(
        "bg-background h-screen p-4 transition-all duration-300 border-r flex flex-col",
        {
          "w-64": isOpen,
          "w-20": !isOpen,
        }
      )}
    >
      <div className="flex items-center justify-between mb-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Sidebar"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>
      <nav className="flex-1 space-y-2 p-2">
        <Link
          href="/"
          className="flex items-center space-x-2 hover:text-primary mb-4"
        >
          <Home className="h-5 w-5" />
          {isOpen && <span>Dashboard</span>}
        </Link>
        <Link
          href="/settings"
          className="flex items-center space-x-2 hover:text-primary"
        >
          <Settings className="h-5 w-5" />
          {isOpen && <span>Settings</span>}
        </Link>
        {/* Add more navigation links as needed */}
      </nav>
    </aside>
  );
}
