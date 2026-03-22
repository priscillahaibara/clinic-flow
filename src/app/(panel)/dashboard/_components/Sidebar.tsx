"use client";

import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { List } from "lucide-react";
import Link from "next/link";

export function Sidebar() {
  return (
    <header className="fixed top-0 z-40 h-14 w-full border-b bg-white/80 backdrop:blur">
      <div className="flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <Sheet>
          <div className="flex items-center gap-4">
            <SheetTrigger asChild>
              <Button
                variant="outline"
                className="md:hidden"
                aria-label="Open menu"
              >
                <List className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <h1 className="font-semibold md:text-lg">
              <Link href="/dashboard">
                Menu Clinic<span className="text-sky-600">Flow</span>
              </Link>
            </h1>
          </div>
        </Sheet>
      </div>
    </header>
  );
}
