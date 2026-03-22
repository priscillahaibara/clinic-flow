import { Sidebar } from "./_components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full">
      <Sidebar />
      <main className="pt-16">{children}</main>
    </div>
  );
}
