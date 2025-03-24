import { useEffect } from "react";
import "react-tooltip/dist/react-tooltip.css";
import Header from "../global/header/freelance/headerFreelance";
import Home from "../sections/freelance/home/home";
import Services from "../sections/freelance/services/services";
import Projects from "../sections/freelance/projects/projects";
import Testimonials from "../sections/freelance/testimonials/testimonials";
import AboutMe from "../sections/freelance/aboutMe/aboutMe";
import Skills from "../sections/freelance/skills/skills";
import Contact from "../sections/freelance/contact/contact";
import Faq from "../sections/freelance/faq/faq";

import AOS from "aos";
import "aos/dist/aos.css";
import Cta1 from "../sections/freelance/ctas/cta1";
import Cta2 from "../sections/freelance/ctas/cta2";
import Cta3 from "../sections/freelance/ctas/cta3";

function Freelance() {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  return (
    <div id="Freelance">
      <Header />
      <Home />
      <Cta1 />
      <Services />
      <Cta2 />
      <Projects />
      <Cta3/>
      <Testimonials />
      <AboutMe />
      <Skills />
      <Contact />
      <Faq />
    </div>
  );
}

export default Freelance;
