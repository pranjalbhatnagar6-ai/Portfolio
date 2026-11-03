
import { FaGithub, FaCodeBranch, FaExternalLinkAlt } from "react-icons/fa";

const repositories = [
  {
    name: "CivicPlus+",
    description: "A civic service platform built around local problem-solving.",
    tech: "React • Node.js • Supabase",
    link: "https://github.com/pranjalbhatnagar6-ai/CivicPlus-",
  },
  {
    name: "E-commerce Fullstack",
    description: "A full-stack shopping application using the MERN stack.",
    tech: "MongoDB • Express • React • Node.js",
    link: "https://github.com/pranjalbhatnagar6-ai/E-commerce-fullstack",
  },
  {
    name: "Heart Disease Risk Prediction",
    description: "A machine learning project exploring health risk prediction.",
    tech: "Python • Pandas • Scikit-learn",
    link: "https://github.com/pranjalbhatnagar6-ai/Heart-Desease-Risk-Prediction",
  },
];

function Github() {
  return (
    <section id="github" className="bg-background px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <div className="mb-14">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-primary">
            Open Source & Code
          </p>

          <h2 className="text-4xl font-black uppercase md:text-6xl">
            Explore My <span className="text-primary">GitHub.</span>
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-muted">
            My repositories reflect my learning, experiments and development
            journey. Explore the code behind my projects.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {repositories.map((repo) => (
            <a
              key={repo.name}
              href={repo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60"
            >
              <div className="mb-7 flex items-center justify-between">
                <FaCodeBranch className="text-2xl text-primary" />
                <FaExternalLinkAlt className="text-sm text-muted transition-colors group-hover:text-primary" />
              </div>

              <h3 className="mb-3 text-lg font-bold text-foreground group-hover:text-primary">
                {repo.name}
              </h3>

              <p className="mb-6 min-h-14 text-sm leading-6 text-muted">
                {repo.description}
              </p>

              <div className="border-t border-border pt-4">
                <p className="text-xs leading-5 text-gray-400">
                  {repo.tech}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-2xl border border-border bg-surface p-8 text-center md:flex-row md:text-left">
          <div>
            <h3 className="text-2xl font-black text-foreground">
              More code. More experiments. More learning.
            </h3>
            <p className="mt-2 text-sm text-muted">
              Explore all my repositories and follow my development journey.
            </p>
          </div>

          <a
            href="https://github.com/pranjalbhatnagar6-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-3 rounded-lg bg-primary px-6 py-3 font-bold text-white transition-all hover:bg-red-700"
          >
            <FaGithub className="text-xl" />
            Visit GitHub
          </a>
        </div>

      </div>
    </section>
  );
}

export default Github;
