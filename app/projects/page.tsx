import type { Metadata } from "next";
import { PageNav } from "@/components/PageNav";
import { Projects } from "@/components/Projects";
import { profile } from "@/data/content";

export const metadata: Metadata = {
  title: `Projects — ${profile.name}`,
};

export default function ProjectsPage() {
  return (
    <>
      <Projects />
      <PageNav current="/projects" />
    </>
  );
}
