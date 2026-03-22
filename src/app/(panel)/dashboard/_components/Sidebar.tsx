"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { SidebarLink } from "./SidebarLink";
import { Banknote, CalendarCheck2, Folder, List, Settings } from "lucide-react";

export function Sidebar() {
  const pathname = usePathname();

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

          <SheetContent>
            <SheetHeader>
              <SheetTitle className="text-lg">ClinicFlow</SheetTitle>
              <SheetDescription>Admin menu</SheetDescription>
            </SheetHeader>

            <nav className="flex flex-col gap-2 px-4">
              <SidebarLink
                href="/dashboard"
                label="Appointments"
                pathname={pathname}
                icon={<CalendarCheck2 />}
              />
              <SidebarLink
                href="/dashboard/services"
                label="Services"
                pathname={pathname}
                icon={<Folder />}
              />
              <SidebarLink
                href="/dashboard/profile"
                label="Profile"
                pathname={pathname}
                icon={<Settings />}
              />
              <SidebarLink
                href="/dashboard/plans"
                label="Plans"
                pathname={pathname}
                icon={<Banknote />}
              />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
