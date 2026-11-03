
import {
  FiCode,
  FiCpu,
  FiTarget,
  FiTrendingUp,
} from "react-icons/fi";

const highlights = [
  {
    icon: FiCode,
    title: "Full Stack Development",
    description:
      "Building responsive web applications using modern frontend and backend technologies.",
  },
  {
    icon: FiCpu,
    title: "AI & Emerging Tech",
    description:
      "Exploring AI, machine learning and innovative technologies to solve real-world problems.",
  },
  {
    icon: FiTarget,
    title: "Problem Solving",
    description:
      "Learning data structures, algorithms and engineering fundamentals to write better solutions.",
  },
  {
    icon: FiTrendingUp,
    title: "Entrepreneurial Mindset",
    description:
      "Turning ideas into practical products through experimentation, collaboration and execution.",
  },
];

function About() {
  return (
    <section id="about" className="bg-background px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-14">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-primary">
            01 // Get to know me
          </p>

          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
            About <span className="text-primary">Me.</span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
            A little introduction about who I am, what I build,
            and what drives me forward.
          </p>
        </div>

        {/* About Content */}
        <div className="grid gap-8 lg:grid-cols-5">

          {/* Main Introduction */}
          <div className="rounded-xl border border-border bg-surface p-7 lg:col-span-3 lg:p-9">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              The Person Behind The Code
            </span>

            <h3 className="mt-5 text-2xl font-bold leading-snug text-white sm:text-3xl">
              Engineering ideas into
              <span className="text-primary"> meaningful digital experiences.</span>
            </h3>

            <div className="mt-6 space-y-4 text-sm leading-8 text-muted sm:text-base">
              <p>
                I'm Pranjal Bhatnagar, a Computer Science Engineering
                student passionate about software development,
                technology and innovation.
              </p>

              <p>
                I enjoy building web applications, exploring modern
                development tools and understanding how technology
                can solve practical problems.
              </p>

              <p>
                My journey is driven by curiosity, continuous learning
                and the ambition to create products that make a
                meaningful difference.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Curious Learner", "Problem Solver", "Builder Mindset"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-md border border-border px-4 py-2 text-xs text-muted"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Quick Information */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <div className="flex-1 rounded-xl border border-border bg-surface p-7">
              <p className="text-xs uppercase tracking-widest text-muted">
                Current Focus
              </p>
              <h3 className="mt-4 text-xl font-bold text-white">
                Full Stack Development
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted">
                React, JavaScript, Node.js, Express and MongoDB.
              </p>
            </div>

            <div className="flex-1 rounded-xl border border-border bg-surface p-7">
              <p className="text-xs uppercase tracking-widest text-muted">
                Beyond Coding
              </p>
              <h3 className="mt-4 text-xl font-bold text-white">
                Innovation & Entrepreneurship
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted">
                Interested in startups, leadership, communication
                and building impactful solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:border-primary/50"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-background text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon size={21} />
                </div>

                <h3 className="text-base font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default About;