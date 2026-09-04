import type { Metadata } from "next";
import { Experience } from "@/components/Experience";
import { PageNav } from "@/components/PageNav";
import { profile } from "@/data/content";

export const metadata: Metadata = {
  title: `Experience — ${profile.name}`,
};

export default function ExperiencePage() {
  return (
    <>
      <Experience />
      <PageNav current="/experience" />
    </>
  );
}
