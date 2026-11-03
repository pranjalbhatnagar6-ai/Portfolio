
const education = [
  {
    degree: "Bachelor of Technology",
    field: "Computer Science & Engineering",
    institution: "SR Institute of Management & Technology",
    location: "Lucknow, Uttar Pradesh",
    duration: "2024 – 2028",
    status: "Currently Pursuing",
  },
];

function Education() {
  return (
    <section id="education" className="bg-background px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <div className="mb-14">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-primary">
            Academic Background
          </p>

          <h2 className="text-4xl font-black uppercase md:text-6xl">
            My <span className="text-primary">Education.</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {education.map((item, index) => (
            <article
              key={index}
              className="group rounded-2xl border border-border bg-surface p-8 transition-all duration-300 hover:border-primary/60"
            >
              <div className="mb-7 flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-2xl text-primary">
                  <span>🎓</span>
                </div>

                <span className="rounded-full border border-primary/30 px-3 py-1 text-xs font-semibold text-primary">
                  {item.status}
                </span>
              </div>

              <h3 className="text-2xl font-black text-foreground">
                {item.degree}
              </h3>

              <p className="mt-2 text-lg font-semibold text-primary">
                {item.field}
              </p>

              <p className="mt-5 font-semibold text-gray-300">
                {item.institution}
              </p>

              <p className="mt-2 text-sm text-muted">
                {item.location}
              </p>

              <div className="mt-7 border-t border-border pt-5">
                <p className="text-sm font-bold text-foreground">
                  {item.duration}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Education;
