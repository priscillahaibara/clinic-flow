import clsx from "clsx";
import Link from "next/link";

type SidebarLinkProps = {
  href: string;
  label: string;
  pathname: string;
  icon: React.ReactNode;
};

export function SidebarLink({ href, label, pathname, icon }: SidebarLinkProps) {
  return (
    <Link href={href}>
      <div
        className={clsx(
          "flex items-center gap-2 rounded-md px-3 py-2 text-gray-800 transition-colors",
          {
            "bg-sky-400": pathname === href,
            "hover:bg-gray-100": pathname !== href,
          },
        )}
      >
        <span className="h-6 w-6">{icon}</span>
        <p>{label}</p>
      </div>
    </Link>
  );
}
