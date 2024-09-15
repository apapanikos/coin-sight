// src/components/Header.tsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menu, Search, Bell, User, LogOut } from "lucide-react";

interface HeaderProps {
  onSidebarToggle?: () => void;
}

export function Header({ onSidebarToggle }: HeaderProps) {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b w-full">
      <div className="flex items-center justify-between px-4 py-2">
        {/* Left Side (Logo and Sidebar Toggle) */}
        <div className="flex items-center space-x-2">
          {/* Sidebar Toggle Button (Visible on small screens) */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={onSidebarToggle}
          >
            <Menu className="h-6 w-6" />
          </Button>
          {/* Logo or Brand Name */}
          <Link href="/" className="text-xl font-bold hidden md:block">
            CoinSightDev
          </Link>
        </div>

        {/* Right Side (Search, Notifications, Theme Toggle, User Menu) */}
        <div className="flex items-center space-x-2">
          {/* Search Button */}
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>

          {/* Notifications Button */}
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>

          {/* Theme Mode Toggle */}
          <ModeToggle />

          {/* User Authentication */}
          {session ? (
            // User is signed in
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="relative">
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src={session.user?.image || undefined}
                      alt={session.user?.name || "User"}
                    />
                    <AvatarFallback>
                      <User className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => router.push("/profile")}>
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => signOut()}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            // User is not signed in
            <Button variant="default" size="sm" onClick={() => signIn()}>
              Sign In
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
