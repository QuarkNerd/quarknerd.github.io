import Image from "next/image";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  blogUrl?: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-links">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          )}
          {project.blogUrl && (
            <a
              href={project.blogUrl}
              className="btn btn-tertiary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
