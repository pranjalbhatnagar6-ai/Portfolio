
import projects from "../data/projects";
import ProjectCard from "../components/ui/ProjectCard";

function Projects() {
  return (
    <section id="projects" className="bg-background px-6 py-24">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-14">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-primary">
            What I've Built
          </p>

          <h2 className="text-4xl font-black uppercase tracking-tight text-foreground md:text-6xl">
            Featured <span className="text-primary">Projects.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-muted">
            A collection of projects where I turn ideas into practical
            digital experiences through development, experimentation and
            collaboration.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* GitHub Link */}
        <div className="mt-14 text-center">
          <a
            href="https://github.com/pranjalbhatnagar6-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border px-7 py-3 text-sm font-bold uppercase tracking-wider text-foreground transition-all hover:border-primary hover:bg-primary"
          >
            Explore More on GitHub →
          </a>
        </div>

      </div>
    </section>
  );
}

export default Projects;