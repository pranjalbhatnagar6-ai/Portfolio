
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Journey from "../sections/Journey";
import Experience from "../sections/Experience";
import Education from "../sections/Education";
import Github from "../sections/Github";
import Exploring from "../sections/Exploring";
import Philosophy from "../sections/Philosophy";
import Contact from "../sections/Contact";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Experience />
        <Education />
        <Github />
        <Exploring /> */
        <Philosophy />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default Home;
