import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LogIn, Menu } from "lucide-react";
import { Button } from "../ui/button";

const navItems = [
  { href: "#professionals", label: "Professionals" },
  { href: "#about", label: "About" },
];

export function Header() {
  const session = null;

  return (
    <header className="fixed top-0 z-40 h-16 w-full border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-3xl font-bold tracking-tight">
          Clinic<span className="text-sky-600">Flow</span>
        </Link>

        <nav className="hidden items-center space-x-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-800 transition-colors hover:text-sky-800"
            >
              {item.label}
            </Link>
          ))}

          <Button asChild>
            <Link href={session ? "/dashboard" : "/login"}>
              {session ? (
                "Dashboard"
              ) : (
                <>
                  <LogIn className="mr-2 h-4 w-4" />
                  Sign In
                </>
              )}
            </Link>
          </Button>
        </nav>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button size="icon" variant="ghost" aria-label="Open menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="px-6 py-12">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <SheetClose asChild key={item.href}>
                  <Link
                    href={item.href}
                    className="py-2 text-base font-medium text-gray-800 hover:text-sky-800"
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              ))}

              <SheetClose asChild>
                <Button asChild className="mt-4">
                  <Link href={session ? "/dashboard" : "/login"}>
                    {session ? (
                      "Dashboard"
                    ) : (
                      <>
                        <LogIn className="mr-2 h-4 w-4" />
                        Sign In
                      </>
                    )}
                  </Link>
                </Button>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
