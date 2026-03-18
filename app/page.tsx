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
    <main className="bg-[#121212] min-h-screen no-scrollbar font-sans selection:bg-purple-500/30">
      <ScrollyCanvas>
        <Overlay />
      </ScrollyCanvas>
      <Highlights />
      <About />
      <ExpertiseSkills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </main>
  );
}
