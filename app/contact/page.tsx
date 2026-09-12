import type { Metadata } from "next";
import { Contact } from "@/components/Contact";
import { PageNav } from "@/components/PageNav";
import { PageTransition } from "@/components/PageTransition";
import { profile } from "@/data/content";

export const metadata: Metadata = {
  title: `Contact — ${profile.name}`,
};

export default function ContactPage() {
  return (
    <PageTransition>
      <Contact />
      <PageNav current="/contact" />
    </PageTransition>
  );
}
