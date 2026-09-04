import type { Metadata } from "next";
import { LookingFor } from "@/components/LookingFor";
import { PageNav } from "@/components/PageNav";
import { profile } from "@/data/content";

export const metadata: Metadata = {
  title: `Looking for — ${profile.name}`,
};

export default function LookingForPage() {
  return (
    <>
      <LookingFor />
      <PageNav current="/looking-for" />
    </>
  );
}
