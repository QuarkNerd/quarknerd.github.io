import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="css-projects" className="section">
      <div className="container">
        <div className="section-title-container">
          <h2 className="section-title">CSS Projects</h2>A selection of apps
          built entirely using HTML and CSS and avoiding all javascripts
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
