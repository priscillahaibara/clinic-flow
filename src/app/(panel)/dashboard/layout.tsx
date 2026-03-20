export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>Sidebar Layout</h1>
      {children}
    </>
  );
}
