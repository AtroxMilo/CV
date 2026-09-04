import type { Metadata } from "next";
import { Contact } from "@/components/Contact";
import { PageNav } from "@/components/PageNav";
import { profile } from "@/data/content";

export const metadata: Metadata = {
  title: `Contact — ${profile.name}`,
};

export default function ContactPage() {
  return (
    <>
      <Contact />
      <PageNav current="/contact" />
    </>
  );
}
