import React, { useEffect, useState } from "react";
import Certificates from "../common/education-and-skills-page/certificates";
import College from "../common/education-and-skills-page/college";
//import Skills from "../common/education-and-skills-page/skills";

import {
  SiGithub,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTypescript,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiSass,
  SiJest,
  SiNodedotjs,
  SiReactbootstrap,
  SiFigma,
  SiAmazonwebservices,
  SiSonarqube,
  SiSonarlint,
  SiReactrouter,
  SiVite,
  SiGit,
  SiJson,
  SiCreatereactapp,
  SiLucide,
  SiSimpleicons,
  SiMaterialdesign,
  SiDocker,
  SiJenkins,
  SiNpm,
  SiUbuntu,
  SiJupyter,
  SiHostinger,
  SiEslint,
  SiCanva,
  SiJira,
  SiTrello,
  SiGithubpages,
  SiWix,
  SiWordpress,
  SiNotion,
  SiShopify,
} from "@icons-pack/react-simple-icons";
import { RiFileExcel2Fill, RiWindowsFill } from "react-icons/ri";
import { VscAzure, VscVscode } from "react-icons/vsc";
import {
  SiAdobephotoshop,
  SiFastapi,
  SiExpress,
  SiSqlalchemy,
} from "react-icons/si";
import { useTranslation } from "react-i18next";

import i18n from "../../../locales/i18n";

const EducationAndSkillsPage = () => {
  const { t } = useTranslation("hiring");
  const [isLoading, setIsLoading] = useState(true);
  const [educationAndSkillsInformation, setEducationAndSkillsInformation] =
    useState(null);

  const skills = [
    {
      category: t("skillsSection.skillSections.cat1"),
      items: [
        { icon: SiJavascript, name: "JavaScript" },
        { icon: SiTypescript, name: "TypeScript" },
        { icon: SiPython, name: "Python" },
      ],
    },
    {
      category: t("skillsSection.skillSections.cat2"),
      items: [
        { icon: SiHtml5, name: "HTML5" },
        { icon: SiCss, name: "CSS3" },
        { icon: SiSass, name: "Sass" },
      ],
    },
    {
      category: t("skillsSection.skillSections.cat3"),
      items: [
        { icon: SiReact, name: "React" },
        { icon: SiReactrouter, name: "React Router" },
        { icon: SiCreatereactapp, name: "Create React App" },
        { icon: SiVite, name: "Vite" },
        { icon: SiReactbootstrap, name: "React Bootstrap" },
        { icon: SiTailwindcss, name: "Tailwind CSS" },
        { icon: SiLucide, name: "Lucide" },
        { icon: SiSimpleicons, name: "Simple Icons" },
        { icon: SiMaterialdesign, name: "Material Design" },
      ],
    },
    {
      category: t("skillsSection.skillSections.cat4"),
      items: [
        { icon: SiNodedotjs, name: "Node.js" },
        { icon: SiExpress, name: "Express" },
        { icon: SiAmazonwebservices, name: "Amazon Web Services" },
        { icon: VscAzure, name: "Microsoft Azure" },
        { icon: SiJenkins, name: "Jenkins" },
        { icon: SiDocker, name: "Docker" },
        { icon: SiNpm, name: "NPM" },
      ],
    },
    {
      category: t("skillsSection.skillSections.cat5"),
      items: [
        { icon: SiMongodb, name: "MongoDB" },
        { icon: SiPostgresql, name: "PostgreSQL" },
        { icon: SiSqlalchemy, name: "SQLAlchemy" },
        { icon: SiFastapi, name: "FastAPI" },
      ],
    },
    {
      category: t("skillsSection.skillSections.cat6"),
      items: [
        { icon: SiGit, name: "Git" },
        { icon: SiGithub, name: "GitHub" },
        { icon: SiJson, name: "JSON" },
        { icon: SiGithubpages, name: "GitHub Pages" },
      ],
    },
    {
      category: t("skillsSection.skillSections.cat7"),
      items: [
        { icon: SiJest, name: "Jest" },
        { icon: SiSonarqube, name: "SonarQube" },
        { icon: SiSonarlint, name: "SonarLint" },
        { icon: SiEslint, name: "ESLint" },
      ],
    },
    {
      category: t("skillsSection.skillSections.cat8"),
      items: [
        { icon: VscVscode, name: "VS Code" },
        { icon: SiJupyter, name: "Jupyter Notebook" },
      ],
    },
    {
      category: t("skillsSection.skillSections.cat9"),
      items: [
        { icon: SiUbuntu, name: "Linux Ubuntu" },
        { icon: RiWindowsFill, name: "Windows 7, 10 e 11" },
      ],
    },
    {
      category: t("skillsSection.skillSections.cat10"),
      items: [
        { icon: SiHostinger, name: "Hostinger" },
        { icon: SiWix, name: "Wix" },
      ],
    },
    {
      category: t("skillsSection.skillSections.cat11"),
      items: [
        { icon: SiWordpress, name: "WordPress" },
        { icon: SiShopify, name: "Shopify" },
        { icon: SiWix, name: "Wix" },
      ],
    },
    {
      category: t("skillsSection.skillSections.cat12"),
      items: [
        { icon: SiFigma, name: "Figma" },
        { icon: SiAdobephotoshop, name: "Photoshop" },
        { icon: SiCanva, name: "Canva" },
      ],
    },
    {
      category: t("skillsSection.skillSections.cat13"),
      items: [
        { icon: SiJira, name: "Jira" },
        { icon: SiTrello, name: "Trello" },
        { icon: RiFileExcel2Fill, name: "Excel" },
        { icon: SiNotion, name: "Notion" },
      ],
    },
  ];

  const fetchData = async (lng) => {
    try {
      const response = await fetch(
        `https://lucasoriental.github.io/lucasorientalapi/database.json`
      );
      const data = await response.json();
      const dynamicTranslations = data[lng];

      i18n.addResourceBundle(
        lng,
        "translation",
        { myEducationAndSkillsPage: dynamicTranslations },
        true,
        true
      );
      setEducationAndSkillsInformation(dynamicTranslations);
      setIsLoading(false);
    } catch (err) {
      console.error(
        'Something error happend during fetch on the "My Projects" page, please try refreshing the site...'
      );
    }
  };

  useEffect(() => {
    fetchData(i18n.language);

    const handleLanguageChange = () => {
      fetchData(i18n.language);
    };

    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, []);

  return (
    <div id="education-and-skills-page">
      <div className="container-general">
        <p
          className="title-general"
          style={{ color: "#444444" }}
          data-aos="fade-right"
          data-aos-anchor-placement="bottom-bottom"
        >
          {t("sections.educationAndSkillsPage.title")}
        </p>
        {isLoading === true ? (
          <p
            style={{
              textAlign: "center",
              fontSize: "25px",
              color: "#FF003D",
              margin: "90px 0px",
              fontWeight: "500",
            }}
          >
            {t("errorMessages")}
          </p>
        ) : (
          <div>
            <div>
              <div className="title-and-canvas">
                <div className="column-1-teste">
                  <p
                    className="EAS-title-general"
                    style={{ color: "#444444" }}
                    data-aos="fade-right"
                    data-aos-anchor-placement="bottom-bottom"
                  >
                    {t("sections.educationAndSkillsPage.section1.title")}
                  </p>
                </div>
                <div className="column-2-teste">
                  <canvas
                    className="bar-1"
                    data-aos="fade-right"
                    data-aos-anchor-placement="bottom-bottom"
                  />
                  <canvas
                    className="bar-2"
                    data-aos="fade-left"
                    data-aos-anchor-placement="bottom-bottom"
                  />
                </div>
              </div>
              <College data={educationAndSkillsInformation.college} />
            </div>
            <div>
              <div className="title-and-canvas">
                <div className="column-1-teste">
                  <p
                    className="EAS-title-general"
                    style={{ color: "#444444" }}
                    data-aos="fade-right"
                    data-aos-anchor-placement="bottom-bottom"
                  >
                    {t(
                      "sections.educationAndSkillsPage.section2and3.titleSkills"
                    )}
                  </p>
                </div>
                <div className="column-2-teste">
                  <canvas
                    className="bar-1"
                    data-aos="fade-right"
                    data-aos-anchor-placement="bottom-bottom"
                  />
                  <canvas
                    className="bar-2"
                    data-aos="fade-left"
                    data-aos-anchor-placement="bottom-bottom"
                  />
                </div>
              </div>
              <p className="justify-center text-center mx-auto max-w-[90%] text-red-900 font-medium lg:text-base md:text-sm" data-aos="fade-left"
                    data-aos-anchor-placement="center-bottom">
                {t("skillsSection.note")}
              </p>
              <div className="flex gap-3 flex-wrap justify-start max-w-[90%] mx-auto flex-col" >
                {skills.map(({ category, items }) => (
                  <div key={category} data-aos="fade-left"
                  data-aos-anchor-placement="center-bottom">
                    <p className="mb-3 mt-8 text-lg font-bold text-zinc-950">
                      {category}
                    </p>
                    <div className="flex gap-3 flex-wrap justify-start" data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom">
                      {items.map(({ icon: SkillIcon, name }) => (
                        <div
                          key={name}
                          className="flex items-center bg-red-700 pr-4 pl-4 pt-1 pb-1 rounded-xl flex-grow basis-auto hover:bg-red-900"
                        >
                          <SkillIcon
                            className="text-3xl text-white"
                            aria-label={name}
                          />
                          <span className="text-sm mt-2 h-full ml-2 text-white">
                            {name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              {/* <div className="subtitle-and-canvas">
                <canvas
                  className="bar-before"
                  data-aos="fade-right"
                  data-aos-anchor-placement="bottom-bottom"
                />
                <p
                  className="EAS-title-section"
                  style={{ color: "#444444" }}
                  data-aos="fade-right"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  {t("sections.educationAndSkillsPage.section2and3.itSec")}
                </p>
                <canvas
                  className="bar-after"
                  data-aos="fade-left"
                  data-aos-anchor-placement="bottom-bottom"
                />
              </div>
              <Skills data={educationAndSkillsInformation.skillsIT} />
              <div className="subtitle-and-canvas">
                <canvas
                  className="bar-before"
                  data-aos="fade-right"
                  data-aos-anchor-placement="bottom-bottom"
                />
                <p
                  className="EAS-title-section"
                  style={{ color: "#444444" }}
                  data-aos="fade-right"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  {t("sections.educationAndSkillsPage.section2and3.desSec")}
                </p>
                <canvas
                  className="bar-after"
                  data-aos="fade-left"
                  data-aos-anchor-placement="bottom-bottom"
                />
              </div>
              <Skills data={educationAndSkillsInformation.skillsDesign} /> */}
            </div>
            <div>
              <div className="title-and-canvas">
                <div className="column-1-teste">
                  <p
                    className="EAS-title-general"
                    style={{ color: "#444444" }}
                    data-aos="fade-right"
                    data-aos-anchor-placement="bottom-bottom"
                  >
                    {t(
                      "sections.educationAndSkillsPage.section2and3.titleCert"
                    )}
                  </p>
                </div>
                <div className="column-2-teste">
                  <canvas
                    className="bar-1"
                    data-aos="fade-right"
                    data-aos-anchor-placement="bottom-bottom"
                  />
                  <canvas
                    className="bar-2"
                    data-aos="fade-left"
                    data-aos-anchor-placement="bottom-bottom"
                  />
                </div>
              </div>
              <div className="subtitle-and-canvas">
                <canvas
                  className="bar-before"
                  data-aos="fade-right"
                  data-aos-anchor-placement="bottom-bottom"
                />
                <p
                  className="EAS-title-section"
                  style={{ color: "#444444" }}
                  data-aos="fade-right"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  {t("sections.educationAndSkillsPage.section2and3.itSec")}
                </p>
                <canvas
                  className="bar-after"
                  data-aos="fade-left"
                  data-aos-anchor-placement="bottom-bottom"
                />
              </div>
              <Certificates
                data={educationAndSkillsInformation.certificatesIT}
              />
              <div className="subtitle-and-canvas">
                <canvas
                  className="bar-before"
                  data-aos="fade-right"
                  data-aos-anchor-placement="bottom-bottom"
                />
                <p
                  className="EAS-title-section"
                  style={{ color: "#444444" }}
                  data-aos="fade-right"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  {t("sections.educationAndSkillsPage.section2and3.desSec")}
                </p>
                <canvas
                  className="bar-after"
                  data-aos="fade-left"
                  data-aos-anchor-placement="bottom-bottom"
                />
              </div>
              <Certificates
                data={educationAndSkillsInformation.certificatesDesign}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EducationAndSkillsPage;
