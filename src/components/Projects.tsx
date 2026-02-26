import { Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";

interface ProjectsProps {
  id?: string;
  title: string;
  description?: string;
  projects: Project[];
}

export default function Projects({
  id,
  title,
  description,
  projects,
}: ProjectsProps) {
  return (
    <section id={id || "projects"} className="section">
      <div className="container">
        <div className="section-title-container">
          <h2 className="section-title">{title}</h2>
          {description && <p>{description}</p>}
        </div>
        <div className="projects-grid">
          {projects.map((project, id) => (
            <ProjectCard key={id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
