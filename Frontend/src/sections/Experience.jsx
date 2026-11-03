
const experiences = [
  {
    role: "Frontend Developer",
    organization: "CivicPlus+ — Hackathon Project",
    period: "2026",
    description:
      "Worked on developing the frontend experience of a civic service platform, including role-based interfaces and dashboards for citizens, staff and sanitation workers.",
    skills: ["React", "JavaScript", "Tailwind CSS", "UI Development"],
    type: "Project Experience",
  },
  {
    role: "Frontend Contributor",
    organization: "TransitOps — Team Project",
    period: "2026",
    description:
      "Contributed to a collaborative transportation technology project as part of a development team.",
    skills: ["React", "Vite", "Team Collaboration"],
    type: "Team Contribution",
  },
  {
    role: "Hackathon Participant",
    organization: "GDG Vibe Coding Hackathon",
    period: "2026",
    description:
      "Participated in a collaborative hackathon environment, exploring AI-assisted development and building practical software solutions.",
    skills: ["Vibe Coding", "Problem Solving", "Collaboration"],
    type: "Hackathon",
  },
];

function Experience() {
  return (
    <section id="experience" className="bg-background px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <div className="mb-14">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-primary">
            What I've Done
          </p>

          <h2 className="text-4xl font-black uppercase md:text-6xl">
            Experience <span className="text-primary">& Work.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-muted">
            My practical experience through projects, hackathons and
            collaborative development.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {experiences.map((item, index) => (
            <article
              key={index}
              className="rounded-2xl border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60"
            >
              <div className="mb-5 flex items-center justify-between gap-3">
                <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {item.type}
                </span>

                <span className="text-sm text-muted">{item.period}</span>
              </div>

              <h3 className="text-2xl font-bold text-foreground">
                {item.role}
              </h3>

              <p className="mt-2 text-sm font-semibold text-primary">
                {item.organization}
              </p>

              <p className="mt-5 text-sm leading-7 text-muted">
                {item.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-border px-3 py-1.5 text-xs text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;
