
import { FaLightbulb, FaRocket, FaCompass } from "react-icons/fa";

const principles = [
  {
    icon: FaLightbulb,
    number: "01",
    title: "Stay Curious",
    description:
      "Never stop asking questions. Every new concept is an opportunity to learn something valuable.",
  },
  {
    icon: FaRocket,
    number: "02",
    title: "Build, Don't Just Learn",
    description:
      "Knowledge becomes valuable when applied. I believe in learning through experimentation and building real projects.",
  },
  {
    icon: FaCompass,
    number: "03",
    title: "Think Beyond Limits",
    description:
      "Technology is a tool to solve meaningful problems. I want to create solutions that make a difference.",
  },
];

function Philosophy() {
  return (
    <section id="philosophy" className="bg-background px-6 py-28">
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-primary">
            My Mindset
          </p>

          <h2 className="text-4xl font-black uppercase leading-tight md:text-6xl">
            More Than Code.
            <br />
            <span className="text-primary">A Way Of Thinking.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-muted md:text-base">
            I believe engineering is not just about writing code.
            It's about curiosity, creativity, discipline and solving
            problems that matter.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {principles.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-8 transition-all duration-300 hover:border-primary/60"
              >
                <span className="absolute right-6 top-3 text-6xl font-black text-white/[0.04]">
                  {item.number}
                </span>

                <Icon className="mb-8 text-3xl text-primary" />

                <h3 className="mb-4 text-2xl font-black uppercase text-foreground">
                  {item.title}
                </h3>

                <p className="text-sm leading-7 text-muted">
                  {item.description}
                </p>

                <div className="mt-8 h-1 w-12 rounded-full bg-primary transition-all duration-300 group-hover:w-24" />
              </article>
            );
          })}
        </div>

        <div className="mt-20 border-y border-border py-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-muted">
            A thought I believe in
          </p>

          <h3 className="mx-auto mt-5 max-w-4xl text-2xl font-black leading-relaxed text-foreground md:text-4xl">
            "Dream big. Learn continuously.
            <span className="text-primary"> Build fearlessly.</span>"
          </h3>
        </div>

      </div>
    </section>
  );
}

export default Philosophy;
