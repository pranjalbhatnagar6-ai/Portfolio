
import { Link } from "react-router-dom";
import { FaArrowRight, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="bg-background px-6 py-28">
      <div className="mx-auto max-w-7xl">

        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface px-7 py-16 text-center md:px-16 md:py-24">

          {/* Decorative Glow */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary/10 blur-[100px]" />

          <div className="relative z-10">

            <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-primary">
              Have an Idea? Let's Talk
            </p>

            <h2 className="text-4xl font-black uppercase leading-tight md:text-7xl">
              Let's Build
              <br />
              Something <span className="text-primary">Great.</span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-muted md:text-base">
              Have a project idea, collaboration opportunity or just want
              to connect? I'd love to hear from you. Let's turn ideas
              into something meaningful.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

              <Link
                to="/connect"
                className="inline-flex items-center justify-center gap-3 rounded-lg bg-primary px-8 py-4 font-bold text-white transition-all hover:-translate-y-1 hover:bg-red-700"
              >
                Let's Connect
                <FaArrowRight />
              </Link>

              <a
                href="https://github.com/pranjalbhatnagar6-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-lg border border-border px-8 py-4 font-bold text-foreground transition-all hover:border-primary hover:text-primary"
              >
                <FaGithub />
                GitHub Profile
              </a>

            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-7 border-t border-border pt-8">

              <a
                href="https://github.com/pranjalbhatnagar6-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-primary"
              >
                <FaGithub /> GitHub
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-primary"
              >
                <FaLinkedin /> LinkedIn
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=pranjalbhatnagar6@gmail.com&su=Business%20Inquiry"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-primary cursor-pointer"
              >
                <FaEnvelope />
                Open to Opportunities
              </a>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
