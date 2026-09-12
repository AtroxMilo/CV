import type { Metadata } from "next";
import { About } from "@/components/About";
import { PageNav } from "@/components/PageNav";
import { PageTransition } from "@/components/PageTransition";
import { profile } from "@/data/content";

export const metadata: Metadata = {
  title: `About — ${profile.name}`,
};

export default function AboutPage() {
  return (
    <PageTransition>
      <About />
      <PageNav current="/about" />
    </PageTransition>
  );
}
