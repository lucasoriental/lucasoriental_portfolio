import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "react-tooltip/dist/react-tooltip.css";
import "../../styles/App.scss";

import HeaderHiring from "../../components/layout/headerHiring";
import ScrollToTopButton from "../../components/ui/scrollToTopButton";
import AboutMe from "../Hiring/sections/aboutMe";
import ContactMe from "../Hiring/sections/contactMe";
import EducationAndSkills from "../Hiring/sections/educationAndSkills";
import MainPage from "../Hiring/sections/home";
import JobExperiences from "../Hiring/sections/jobExperiences";
import MyProjects from "../Hiring/sections/myProjects";

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
      <ScrollToTopButton />
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
