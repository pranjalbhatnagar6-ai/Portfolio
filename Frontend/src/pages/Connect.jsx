
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  FaArrowLeft,
  FaArrowRight,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

function Connect() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    purpose: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setError("");

    try {
      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

      await axios.post(`${API_URL}/api/inquiries`, formData);

      if (response.data.success) {
        setSubmitted(true);
      } else {
        setError("Unable to submit your inquiry. Please try again.");
      }
    } catch (err) {
      console.error("Inquiry Submission Error:", err);

      setError(
        err.response?.data?.message ||
          "Something went wrong. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-background px-5 py-8 md:px-10 md:py-12">
      <div className="mx-auto max-w-7xl">

        {/* Back to Home */}
        <Link
          to="/"
          className="mb-12 inline-flex items-center gap-3 text-sm font-semibold text-muted transition-colors hover:text-primary"
        >
          <FaArrowLeft />
          Back to Portfolio
        </Link>

        {/* Page Heading */}
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-primary">
            Start a Conversation
          </p>

          <h1 className="text-4xl font-black uppercase leading-tight md:text-7xl">
            Let's Create
            <br />
            Something <span className="text-primary">Together.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-muted md:text-base">
            Have a project in mind, an opportunity to share, or an idea
            worth discussing? Tell me a little about it.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Left Information Panel */}
          <aside className="flex flex-col justify-between rounded-2xl border border-border bg-surface p-7 md:p-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                Get In Touch
              </p>

              <h2 className="mt-5 text-3xl font-black uppercase leading-tight">
                Have an idea?
                <br />
                Let's discuss it.
              </h2>

              <p className="mt-5 text-sm leading-7 text-muted">
                I'm interested in meaningful projects, new opportunities
                and collaborations with people who love building things.
              </p>

              <div className="mt-12 space-y-7">

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                    <FaEnvelope />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-foreground">
                      Email
                    </p>
                    <p className="mt-1 text-xs text-muted">
                      Send me your inquiry through this form.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                    <FaGithub />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-foreground">
                      GitHub
                    </p>
                    <a
                      href="https://github.com/pranjalbhatnagar6-ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block text-xs text-muted hover:text-primary"
                    >
                      Explore my repositories
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                    <FaLinkedin />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-foreground">
                      LinkedIn
                    </p>
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block text-xs text-muted hover:text-primary"
                    >
                      Let's connect professionally
                    </a>
                  </div>
                </div>

              </div>
            </div>

            <div className="mt-16 border-t border-border pt-7">
              <p className="text-xs font-bold uppercase tracking-widest text-muted">
                PRANJAL BHATNAGAR
              </p>
              <p className="mt-2 text-xs text-muted">
                Computer Science Engineer • Full-Stack Developer
              </p>
            </div>
          </aside>

          {/* Inquiry Form */}
          <section className="rounded-2xl border border-border bg-surface p-6 md:p-10">

            <div className="mb-9">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                Project Inquiry
              </p>

              <h2 className="mt-3 text-2xl font-black uppercase">
                Tell Me About It.
              </h2>

              <p className="mt-2 text-sm text-muted">
                Fields marked with * are required.
              </p>
            </div>

            {submitted ? (
              <div className="rounded-xl border border-primary/30 bg-background p-8 text-center">
                <FaPaperPlane className="mx-auto text-4xl text-primary" />

                <h3 className="mt-5 text-2xl font-bold">
                  Inquiry Submitted!
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted">
                  Thank you for reaching out! Your inquiry has been
                  successfully saved. I'll get back to you soon.
                </p>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      purpose: "",
                      budget: "",
                      timeline: "",
                      message: "",
                    });
                  }}
                  className="mt-7 font-bold text-primary hover:text-white"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Name and Email */}
                <div className="grid gap-6 sm:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-all placeholder:text-gray-600 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-all placeholder:text-gray-600 focus:border-primary"
                    />
                  </div>

                </div>

                {/* Phone */}
                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Phone / WhatsApp
                    <span className="ml-2 text-xs font-normal text-muted">
                      (Optional)
                    </span>
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-all placeholder:text-gray-600 focus:border-primary"
                  />
                </div>

                {/* Purpose */}
                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    What would you like to discuss? *
                  </label>

                  <select
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-muted outline-none focus:border-primary"
                  >
                    <option value="">Select your purpose</option>
                    <option value="Freelance Project">Freelance Project</option>
                    <option value="Internship">Internship Opportunity</option>
                    <option value="Hiring">Hiring / Job Opportunity</option>
                    <option value="Collaboration">Project Collaboration</option>
                    <option value="Consultation">Consultation</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Budget and Timeline */}
                <div className="grid gap-6 sm:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      Budget
                      <span className="ml-2 text-xs font-normal text-muted">
                        (Optional)
                      </span>
                    </label>

                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-muted outline-none focus:border-primary"
                    >
                      <option value="">Select budget</option>
                      <option value="Under ₹5,000">Under ₹5,000</option>
                      <option value="₹5,000 - ₹15,000">₹5,000 - ₹15,000</option>
                      <option value="₹15,000 - ₹30,000">₹15,000 - ₹30,000</option>
                      <option value="₹30,000+">₹30,000+</option>
                      <option value="To be discussed">To be discussed</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      Expected Timeline
                      <span className="ml-2 text-xs font-normal text-muted">
                        (Optional)
                      </span>
                    </label>

                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-muted outline-none focus:border-primary"
                    >
                      <option value="">Select timeline</option>
                      <option value="ASAP">As soon as possible</option>
                      <option value="1-2 weeks">1–2 weeks</option>
                      <option value="1 month">Within a month</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                  </div>

                </div>

                {/* Message */}
                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Project / Message Details *
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your idea, requirements or opportunity..."
                    rows={5}
                    required
                    className="w-full resize-y rounded-lg border border-border bg-background px-4 py-3 text-sm leading-6 outline-none transition-all placeholder:text-gray-600 focus:border-primary"
                  />
                </div>

                {/* Error Message */}
                {error && (
                  <div
                    role="alert"
                    className="rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-400"
                  >
                    {error}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-3 rounded-lg bg-primary px-6 py-4 font-bold text-white transition-all hover:-translate-y-1 hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                >
                  {loading ? "Submitting..." : "Submit Inquiry"}
                  {!loading && <FaArrowRight />}
                </button>

                <p className="text-center text-xs leading-5 text-muted">
                  Your inquiry will be securely stored in our database.
                </p>

              </form>
            )}

          </section>
        </div>

      </div>
    </main>
  );
}

export default Connect;