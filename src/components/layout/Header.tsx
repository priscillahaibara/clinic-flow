import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 z-40 h-16 w-full border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-3xl font-bold tracking-tight">
          Clinic<span className="text-sky-600">Flow</span>
        </Link>

        <nav>NAV</nav>
      </div>
    </header>
  );
}
