import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Skills } from "@/components/skills";
import { ProjectsSection } from "@/components/projects-section";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <ProjectsSection />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
