import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { profile } from "@/data/content";

const title = `${profile.name} — ${profile.title}`;
const description = `${profile.name} — ${profile.title}, based in ${profile.location}.`;

export const metadata: Metadata = {
  // Base URL so relative paths (the opengraph-image route, canonical links)
  // resolve to absolute URLs, as file-convention OG images and share
  // previews require. See:
  // node_modules/next/dist/docs/01-app/03-api-reference/04-functions/generate-metadata.md
  metadataBase: new URL("https://ismail-mazhar-cv.netlify.app"),
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: profile.name,
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Header />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
