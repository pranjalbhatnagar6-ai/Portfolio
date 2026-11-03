
const journey = [
  {
    year: "2024 — 2028",
    title: "B.Tech Computer Science & Engineering",
    organization: "SR Institute of Management & Technology",
    description:
      "Building a foundation in computer science, programming, software development and engineering.",
    type: "Education",
  },
  {
    year: "2025",
    title: "Python & Machine Learning",
    organization: "Learning & Experimentation",
    description:
      "Started exploring Python, data analysis and machine learning through hands-on projects.",
    type: "Learning",
  },
  {
    year: "2026",
    title: "Frontend Development",
    organization: "React & Modern Web Technologies",
    description:
      "Learned HTML, CSS, JavaScript and React while building practical web development projects.",
    type: "Development",
  },
  {
    year: "2026",
    title: "Hackathons & Team Projects",
    organization: "Collaborative Development",
    description:
      "Participated in hackathons, collaborated with developers and worked on real-world problem-solving ideas.",
    type: "Experience",
  },
];

function Journey() {
  return (
    <section id="journey" className="bg-background px-6 py-24">
      <div className="mx-auto max-w-5xl">

        <div className="mb-16">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-primary">
            My Progress
          </p>
          <h2 className="text-4xl font-black uppercase md:text-6xl">
            My <span className="text-primary">Journey.</span>
          </h2>
          <p className="mt-5 max-w-xl text-muted">
            Every step, every project and every challenge is part of my
            continuous learning journey.
          </p>
        </div>

        <div className="relative ml-3 border-l border-border">
          {journey.map((item, index) => (
            <div key={index} className="relative pb-12 pl-8 last:pb-0">

              <div className="absolute -left-[7px] top-1 h-3.5 w-3.5 rounded-full border-2 border-primary bg-background shadow-[0_0_12px_#D91E26]" />

              <div className="rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:border-primary/60">
                <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-sm font-bold text-primary">
                    {item.year}
                  </span>
                  <span className="rounded-full border border-border px-3 py-1 text-xs text-muted">
                    {item.type}
                  </span>
                </div>

                <h3 className="mb-2 text-xl font-bold text-foreground">
                  {item.title}
                </h3>

                <p className="mb-3 text-sm font-medium text-gray-400">
                  {item.organization}
                </p>

                <p className="text-sm leading-6 text-muted">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Journey;
