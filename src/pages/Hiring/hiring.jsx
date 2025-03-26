import { useEffect } from "react";
import "react-tooltip/dist/react-tooltip.css";
import "../../styles/App.scss";

import HeaderHiring from "../../components/layout/headerHiring";
import MainPage from "../Hiring/sections/home"
import MyProjects from "../Hiring/sections/myProjects";
import EducationAndSkills from "../Hiring/sections/educationAndSkills";
import JobExperiences from "../Hiring/sections/jobExperiences";
import AboutMe from "../Hiring/sections/aboutMe";
import ContactMe from "../Hiring/sections/contactMe";

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
