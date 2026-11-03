
import {
  FiCode,
  FiMonitor,
  FiServer,
  FiDatabase,
  FiTool,
  FiCpu,
} from "react-icons/fi";

const skillCategories = [
  {
    icon: FiMonitor,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Tailwind CSS",
    ],
  },
  {
    icon: FiServer,
    title: "Backend Development",
    description: "Developing server-side applications and APIs.",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Python",
    ],
  },
  {
    icon: FiDatabase,
    title: "Database Management",
    description: "Working with databases and data management.",
    skills: [
      "MongoDB",
      "MongoDB Atlas",
      "SQL",
    ],
  },
  {
    icon: FiCode,
    title: "Programming Languages",
    description: "Programming fundamentals and problem solving.",
    skills: [
      "JavaScript",
      "Python",
      "Java",
      "C",
    ],
  },
  {
    icon: FiTool,
    title: "Tools & Platforms",
    description: "Development workflow and collaboration tools.",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Vite",
    ],
  },
  {
    icon: FiCpu,
    title: "Core Concepts & Exploring",
    description: "Expanding engineering knowledge and technical foundations.",
    skills: [
      "Data Structures & Algorithms",
      "OOP",
      "DBMS",
      "AI / ML Fundamentals",
      "Prompt Engineering",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="bg-background px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-14">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-primary">
            02 // Technical Arsenal
          </p>

          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
            Skills & <span className="text-primary">Technologies.</span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
            Technologies, tools and concepts I use while building
            applications and continuously improving my engineering skills.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="group rounded-xl border border-border bg-surface p-7 transition-all duration-300 hover:border-primary/50"
              >
                {/* Icon and Title */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-background text-primary transition-all group-hover:bg-primary group-hover:text-white">
                    <Icon size={22} />
                  </div>

                  <h3 className="text-lg font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                <p className="mt-5 text-sm leading-6 text-muted">
                  {category.description}
                </p>

                {/* Technology Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-border bg-background px-3 py-2 text-xs font-medium text-muted transition-colors hover:border-primary hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-8 flex flex-col gap-3 rounded-xl border border-border bg-surface p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-white">
              Always learning. Always building.
            </p>
            <p className="mt-1 text-sm text-muted">
              Exploring new technologies and improving through practical projects.
            </p>
          </div>

          <span className="w-fit rounded-md border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold text-primary">
            CONTINUOUS LEARNING
          </span>
        </div>

      </div>
    </section>
  );
}

export default Skills;
