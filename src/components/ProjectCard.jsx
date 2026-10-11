
import { ArrowUpRight, ExternalLink } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card__top">
        <span className="project-card__number">
          PROJECT / {project.number}
        </span>

        <span className="project-card__icon">
          <ExternalLink size={19} />
        </span>
      </div>

      <div className="project-card__content">
        <span className="project-card__category">
          {project.category}
        </span>

        <h3>{project.name}</h3>

        <p>{project.description}</p>
      </div>

      <a
        className="project-card__link"
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${project.name} website`}
      >
        Visit website
        <ArrowUpRight size={18} />
      </a>
    </article>
  );
}
