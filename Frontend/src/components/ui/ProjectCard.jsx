
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-2 hover:border-primary/60">

      {/* Project Preview */}
      <div className="relative flex h-48 items-center justify-center overflow-hidden bg-[#181818]">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />

        <span className="absolute left-4 top-4 rounded-full border border-primary/40 bg-black/80 px-3 py-1 text-xs font-semibold text-primary">
          {project.status}
        </span>
      </div>

      {/* Project Details */}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2 flex items-center justify-between gap-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            {project.category}
          </span>
          <span className="text-xs text-muted">
            {project.role}
          </span>
        </div>

        <h3 className="mb-3 text-xl font-bold text-foreground transition-colors group-hover:text-primary">
          {project.title}
        </h3>

        <p className="mb-5 flex-1 text-sm leading-6 text-muted">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mb-6 flex flex-wrap gap-2">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="rounded-md border border-border bg-background px-2.5 py-1 text-xs text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 border-t border-border pt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
          >
            <FaGithub /> GitHub
          </a>

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
