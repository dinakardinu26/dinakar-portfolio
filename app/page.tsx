import Hero from "@/components/Hero";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Highlights from "@/components/Highlights";
import About from "@/components/About";
import ExpertiseSkills from "@/components/ExpertiseSkills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-[100dvh] no-scrollbar font-sans selection:bg-purple-500/30">
      <Hero />
      <ScrollyCanvas>
        <Overlay />
      </ScrollyCanvas>
      <Highlights />
      <div id="about">
        <About />
      </div>
      <ExpertiseSkills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </main>
  );
}
