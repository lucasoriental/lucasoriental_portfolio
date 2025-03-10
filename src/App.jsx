import { useEffect } from "react";
import "react-tooltip/dist/react-tooltip.css";
import Header from "../src/components/global/header/header";
import "./App.scss";
import AboutMe from "./components/sections/about-me-page/aboutMe";
import ContactMe from "./components/sections/contact-me-page/contactMe";
import EducationAndSkills from "./components/sections/education-and-skills-page/educationAndSkills";
import MainPage from "./components/sections/home-page/home";
import JobExperiences from "./components/sections/job-experiences-page/jobExperiences";
import MyProjects from "./components/sections/my-projects-page/myProjects";
import CookieConsent from "react-cookie-consent"

import AOS from "aos";
import "aos/dist/aos.css";

import { useTranslation } from "react-i18next";

function App() {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  const { t } = useTranslation();

  return (
    <>
      <Header />
      <MainPage />
      <MyProjects />
      <EducationAndSkills />
      <JobExperiences />
      <AboutMe />
      <ContactMe />

      <CookieConsent
        location="bottom"
        buttonText={t('cookieMessage.button')}
        cookieName="analytics_consent"
        onAccept={() => {
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag('js', new Date());
          gtag('config', 'G-W7R929G221', { anonymize_ip: true });
        }}
      >
        {t('cookieMessage.message')}
      </CookieConsent>
    </>
  );
}

export default App;
