import type { Metadata } from "next";
import { PageNav } from "@/components/PageNav";
import { PageTransition } from "@/components/PageTransition";
import { Skills } from "@/components/Skills";
import { profile } from "@/data/content";

export const metadata: Metadata = {
  title: `Skills — ${profile.name}`,
};

export default function SkillsPage() {
  return (
    <PageTransition>
      <Skills />
      <PageNav current="/skills" />
    </PageTransition>
  );
}
