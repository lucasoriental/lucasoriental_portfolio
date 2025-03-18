import { useEffect } from "react";
import "react-tooltip/dist/react-tooltip.css";
import HeaderHiring from "../global/header/hiring/headerHiring";
import "../../App.scss";
import AboutMe from "../sections/hiring/about-me-page/aboutMe";
import ContactMe from "../sections/hiring/contact-me-page/contactMe";
import EducationAndSkills from "../sections/hiring/education-and-skills-page/educationAndSkills";
import MainPage from "../sections/hiring/home-page/home";
import JobExperiences from "../sections/hiring/job-experiences-page/jobExperiences";
import MyProjects from "../sections/hiring/my-projects-page/myProjects";

import AOS from "aos";
import "aos/dist/aos.css";

function Hiring() {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  return (
    <div id="Hiring">
      <HeaderHiring />
      <p>Hiring</p>
      <MainPage />
      <MyProjects />
      <EducationAndSkills />
      <JobExperiences />
      <AboutMe />
      <ContactMe />
    </div>
  );
}

export default Hiring;
