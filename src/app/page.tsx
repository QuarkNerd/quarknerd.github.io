import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { projectSections } from "@/data/projects";

export default function Home() {
  return (
    <>
      <Header />
      <Navigation />
      <main>
        <About />
        {projectSections.map((section) => (
          <Projects
            key={section.id}
            id={section.id}
            title={section.title}
            description={section.description}
            projects={section.projects}
          />
        ))}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
