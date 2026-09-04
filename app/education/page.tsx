import type { Metadata } from "next";
import { Education } from "@/components/Education";
import { PageNav } from "@/components/PageNav";
import { profile } from "@/data/content";

export const metadata: Metadata = {
  title: `Education — ${profile.name}`,
};

export default function EducationPage() {
  return (
    <>
      <Education />
      <PageNav current="/education" />
    </>
  );
}
