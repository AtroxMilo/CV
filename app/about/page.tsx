import type { Metadata } from "next";
import { About } from "@/components/About";
import { PageNav } from "@/components/PageNav";
import { profile } from "@/data/content";

export const metadata: Metadata = {
  title: `About — ${profile.name}`,
};

export default function AboutPage() {
  return (
    <>
      <About />
      <PageNav current="/about" />
    </>
  );
}
