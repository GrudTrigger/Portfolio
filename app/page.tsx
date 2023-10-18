import AboutMe from "@/components/Aboutme";
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <div className="w-10/12 mx-auto pt-4">
        <Navbar />
      </div>
      <Container />
      <div className="border-t-2 w-10/12 mx-auto mt-10" id="about"></div>
      <AboutMe />
      <div className="border-t-2 w-10/12 mx-auto mt-10" id="skills"></div>
      <Skills />
      <div className="border-t-2 w-10/12 mx-auto mt-10" id="project"></div>
      <Projects />
    </div>
  );
}
