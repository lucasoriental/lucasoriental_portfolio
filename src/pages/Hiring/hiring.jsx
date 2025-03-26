import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import "react-tooltip/dist/react-tooltip.css";
import "../../styles/App.scss";

import HeaderHiring from "../../components/layout/headerHiring";
import MainPage from "../Hiring/sections/home";
import MyProjects from "../Hiring/sections/myProjects";
import EducationAndSkills from "../Hiring/sections/educationAndSkills";
import JobExperiences from "../Hiring/sections/jobExperiences";
import AboutMe from "../Hiring/sections/aboutMe";
import ContactMe from "../Hiring/sections/contactMe";

function Hiring() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      document.getElementById(location.state.scrollTo)?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [location]);

  return (
    <div id="Hiring">
      <HeaderHiring />
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
