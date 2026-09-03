import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/data/content";

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.title}`,
  description: `${profile.name} — ${profile.title}, based in ${profile.location}.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
