import type { Metadata } from "next";
import { Experience } from "@/components/Experience";
import { PageNav } from "@/components/PageNav";
import { PageTransition } from "@/components/PageTransition";
import { profile } from "@/data/content";

export const metadata: Metadata = {
  title: `Experience — ${profile.name}`,
};

export default function ExperiencePage() {
  return (
    <PageTransition>
      <Experience />
      <PageNav current="/experience" />
    </PageTransition>
  );
}
