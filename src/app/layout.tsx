import { Roboto, Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Clinic Flow",
  description:
    "Healthcare appointment scheduling platform for managing patient bookings, provider availability, and clinic calendars.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <body className={`${roboto.className} antialiased`}>{children}</body>
    </html>
  );
}
