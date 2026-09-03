import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LookingFor } from "@/components/LookingFor";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <LookingFor />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
