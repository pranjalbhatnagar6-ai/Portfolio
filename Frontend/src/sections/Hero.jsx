
import { FiArrowUpRight, FiDownload, FiGithub, FiLinkedin } from "react-icons/fi";
import { SiGmail } from "react-icons/si";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-background px-6 pb-16 pt-32 lg:px-10"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[130px]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* Left Content */}
        <div className="animate-fade-in">

          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-border bg-surface px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            <span className="text-xs font-medium tracking-wide text-muted">
              OPEN TO OPPORTUNITIES
            </span>
          </div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Pranjal
            <br />
            <span className="text-primary">Bhatnagar.</span>
          </h1>

          <h2 className="mt-7 text-xl font-semibold text-white sm:text-2xl">
            Full Stack Developer
            <span className="text-primary"> &</span> Engineer
          </h2>

          <p className="mt-5 max-w-xl text-base leading-8 text-muted">
            I build modern web experiences and explore technology
            to solve real-world problems. Passionate about software
            development, innovation, and turning ideas into reality.
          </p>

          {/* Technology Tags */}
          <div className="mt-7 flex flex-wrap gap-3">
            {["React", "JavaScript", "Node.js", "MongoDB", "Python"].map(
              (skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-border bg-surface px-3 py-2 text-xs font-medium text-muted"
                >
                  {skill}
                </span>
              )
            )}
          </div>

          {/* CTA Buttons */}
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-md bg-primary px-6 py-4 text-sm font-semibold text-white transition-all hover:bg-red-700"
            >
              Explore My Work
              <FiArrowUpRight />
            </a>

            <a
              href="/Pranjal_Bhatnagar_Resume.pdf"
              download
              className="flex items-center gap-2 rounded-md border border-border px-6 py-4 text-sm font-semibold text-white transition-all hover:border-primary hover:text-primary"
            >
              Download Resume
              <FiDownload />
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-10 flex items-center gap-5">
            <span className="text-xs uppercase tracking-widest text-muted">
              Find me on
            </span>

            <a
              href="https://github.com/pranjalbhatnagar6-ai"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-xl text-muted transition-colors hover:text-primary"
            >
              <FiGithub />
            </a>

            <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=pranjalbhatnagar6@gmail.com&su=Business%20Inquiry"
            target="_blank"
            rel="noreferrer"
            aria-label="Gmail"
            className="text-xl text-muted transition-colors hover:text-primary"
          >
            <SiGmail />
          </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-xl text-muted transition-colors hover:text-primary"
            >
              <FiLinkedin />
            </a>
          </div>
        </div>

        {/* Right Profile Visual */}
        <div className="relative mx-auto flex w-full max-w-md items-center justify-center">

          <div className="absolute h-72 w-72 rounded-full border border-primary/20 sm:h-96 sm:w-96" />

          <div className="absolute h-60 w-60 rounded-full border border-border sm:h-80 sm:w-80" />

          <div className="red-glow relative flex h-56 w-56 items-center justify-center rounded-full border border-primary/40 bg-surface sm:h-72 sm:w-72">
            <span className="text-7xl font-black tracking-tighter text-white sm:text-8xl">
              PB<span className="text-primary">.</span>
            </span>
          </div>

          <div className="absolute bottom-5 right-0 rounded-lg border border-border bg-surface px-4 py-3 shadow-xl sm:right-[-10px]">
            <p className="text-xs text-muted">Currently building</p>
            <p className="mt-1 text-sm font-semibold text-white">
              Digital Experiences
            </p>
          </div>

          <div className="absolute left-0 top-10 rounded-lg border border-border bg-surface px-4 py-3 shadow-xl sm:left-[-10px]">
            <p className="text-xs text-muted">My mindset</p>
            <p className="mt-1 text-sm font-semibold text-primary">
              Think. Build. Innovate.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
