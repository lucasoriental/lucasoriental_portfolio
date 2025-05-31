import { useEffect } from "react";
import "react-tooltip/dist/react-tooltip.css";

import Header from "../../components/layout/headerFreelance";
import AboutMe from "../Freelance/sections/aboutMe/aboutMe";
import Contact from "../Freelance/sections/contact/contact";
import Faq from "../Freelance/sections/faq/faq";
import Home from "../Freelance/sections/home/home";
import Projects from "../Freelance/sections/projects/projects";
import Services from "../Freelance/sections/services/services";
import Skills from "../Freelance/sections/skills/skills";
import Testimonials from "../Freelance/sections/testimonials/testimonials";

import AOS from "aos";
import "aos/dist/aos.css";
import Cta1 from "../Freelance/sections/ctas/cta1";
import Cta2 from "../Freelance/sections/ctas/cta2";
import Cta3 from "../Freelance/sections/ctas/cta3";

import ScrollToTopButton from "../../components/ui/scrollToTopButton";

import { useLocation } from "react-router-dom";

function Freelance() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
    if (location.state?.scrollTo) {
      document.getElementById(location.state.scrollTo)?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [location]);

  return (
    <div id="Freelance">
      <ScrollToTopButton />
      <Header />
      <Home />
      <Cta1 />
      <Services />
      <Cta2 />
      <Projects />
      <Cta3 />
      <Testimonials />
      <AboutMe />
      <Skills />
      <Contact />
      <Faq />
    </div>
  );
}

export default Freelance;
