
import {
  FaDatabase,
  FaBrain,
  FaCode,
  FaServer,
  FaRobot,
  FaLaptopCode,
} from "react-icons/fa";

const explorations = [
  {
    icon: FaServer,
    title: "Backend Development",
    description:
      "Building scalable server-side applications, REST APIs and understanding backend architecture.",
    topics: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    icon: FaDatabase,
    title: "Databases",
    description:
      "Learning how to design, manage and work with structured and unstructured data.",
    topics: ["MongoDB", "SQL", "Database Design"],
  },
  {
    icon: FaCode,
    title: "Data Structures & Algorithms",
    description:
      "Strengthening problem-solving skills and understanding efficient algorithms.",
    topics: ["DSA", "Problem Solving", "Algorithms"],
  },
  {
    icon: FaBrain,
    title: "Artificial Intelligence",
    description:
      "Exploring machine learning concepts and practical AI-powered applications.",
    topics: ["Machine Learning", "Python", "Generative AI"],
  },
  {
    icon: FaRobot,
    title: "Emerging Technologies",
    description:
      "Interested in the future of technology, intelligent systems and robotics.",
    topics: ["Robotics", "Automation", "Innovation"],
  },
  {
    icon: FaLaptopCode,
    title: "Full-Stack Engineering",
    description:
      "Connecting frontend interfaces with backend systems to build complete products.",
    topics: ["MERN Stack", "System Design", "Deployment"],
  },
];

function Exploring() {
  return (
    <section id="exploring" className="bg-[#0D0D0D] px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <div className="mb-14">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-primary">
            Beyond My Current Skills
          </p>

          <h2 className="text-4xl font-black uppercase md:text-6xl">
            Currently <span className="text-primary">Exploring.</span>
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-muted">
            Technology never stands still, and neither do I. These are
            the areas I am actively learning and exploring.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {explorations.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group rounded-2xl border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-xl text-primary transition-all group-hover:bg-primary group-hover:text-white">
                  <Icon />
                </div>

                <h3 className="mb-3 text-xl font-bold text-foreground">
                  {item.title}
                </h3>

                <p className="mb-6 text-sm leading-7 text-muted">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.topics.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-md border border-border px-3 py-1.5 text-xs text-gray-300"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Exploring;
