import React from "react";
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
import { SiAdobephotoshop } from "react-icons/si";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation("freelance");
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
        { icon: SiMysql, name: "MySQL" },
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
  return (
    <section className="dark: relative pb-36 pt-36">
      <div className="w-[90%] max-w-screen mr-auto ml-auto">
        <div className="mx-auto w-[90%] max-w-4xl mb-12">
          <p className="text-4xl font-extrabold text-center text-zinc-900 mb-5 select-none lg:text-start lg:w-[20em]">
            {t("skillsSection.title")}
          </p>
          <p className="text-lg font-medium text-zinc-700 mb-7 text-center select-none lg:text-start lg:w-[40em]">
            {t("skillsSection.subTitle")}
          </p>
        </div>
        <div className="max-w-4xl w-[90%] mr-auto ml-auto">
          {skills.map(({ category, items }) => (
            <div key={category}>
              <p className="mb-3 mt-8 text-lg font-bold text-zinc-950">
                {category}
              </p>
              <div className="flex gap-3 flex-wrap justify-start">
                {items.map(({ icon: SkillIcon, name }) => (
                  <div
                    key={name}
                    className="flex items-center bg-red-700 pr-4 pl-4 pt-1 pb-1 rounded-xl flex-grow basis-auto"
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
      </div>
    </section>
  );
};

export default Skills;
