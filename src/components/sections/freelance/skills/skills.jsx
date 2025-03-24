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

const Skills = () => {
  const skillLingProg = [
    { icon: SiJavascript, name: "JavaScript" },
    { icon: SiTypescript, name: "TypeScript" },
    { icon: SiPython, name: "Python" },
  ];

  const skillLingMarNStyle = [
    { icon: SiHtml5, name: "HTML5" },
    { icon: SiCss, name: "CSS3" },
    { icon: SiSass, name: "Sass" },
  ];

  const skillFrameworksFront = [
    { icon: SiReact, name: "React" },
    { icon: SiReactrouter, name: "React Router" },
    { icon: SiCreatereactapp, name: "Create React App" },
    { icon: SiVite, name: "Vite" },
    { icon: SiReactbootstrap, name: "React Bootstrap" },
    { icon: SiTailwindcss, name: "Tailwind CSS" },
    { icon: SiLucide, name: "Lucide" },
    { icon: SiSimpleicons, name: "Simple Icons" },
    { icon: SiMaterialdesign, name: "Material Design" },
  ];

  const skillbackNInfra = [
    { icon: SiNodedotjs, name: "Node.js" },
    { icon: SiAmazonwebservices, name: "Amazon Web Services" },
    { icon: VscAzure, name: "Microsoft Azure" },
    { icon: SiJenkins, name: "Jenkins" },
    { icon: SiDocker, name: "Docker" },
    { icon: SiNpm, name: "NPM" },
  ];

  const skillControleVersao = [
    { icon: SiGit, name: "Git" },
    { icon: SiGithub, name: "GitHub" },
    { icon: SiJson, name: "JSON" },
    { icon: SiGithubpages, name: "GitHub Pages" },
  ];

  const skillDb = [
    { icon: SiMongodb, name: "MongoDB" },
    { icon: SiPostgresql, name: "PostgreSQL" },
    { icon: SiMysql, name: "MySQL" },
  ];

  const skillTest = [
    { icon: SiJest, name: "Jest" },
    { icon: SiSonarqube, name: "SonarQube" },
    { icon: SiSonarlint, name: "SonarLint" },
    { icon: SiEslint, name: "ESLint" },
  ];

  const skillDes = [
    { icon: SiFigma, name: "Figma" },
    { icon: SiAdobephotoshop, name: "Photoshop" },
    { icon: SiCanva, name: "Canva" },
  ];

  const skillGerenciamento = [
    { icon: SiJira, name: "Jira" },
    { icon: SiTrello, name: "Trello" },
    { icon: RiFileExcel2Fill, name: "Excel" },
    { icon: SiNotion, name: "Notion" },
  ];

  const skillFerramentas = [
    { icon: VscVscode, name: "VS Code" },
    { icon: SiJupyter, name: "Jupyter Notebook" },
  ];

  const skillSistemas = [
    { icon: SiUbuntu, name: "Linux Ubuntu" },
    { icon: RiWindowsFill, name: "Windows 7, 10 e 11" },
  ];
  const skillHostsNDns = [
    { icon: SiHostinger, name: "Hostinger" },
    { icon: SiWix, name: "Wix" },
  ];

  const skillCMS = [
    { icon: SiWordpress, name: "WordPress" },
    { icon: SiShopify, name: "Shopify" },
    { icon: SiWix, name: "Wix" },
  ];

  return (
    <section className="dark: relative pb-36 pt-36">
      <div className="w-[90%] max-w-screen mr-auto ml-auto">
        <div className="mx-auto w-[90%] max-w-4xl mb-12">
          <p className="text-4xl font-extrabold text-center text-zinc-900 mb-5 select-none lg:text-start lg:w-[20em]">
            Avaliações de Clientes e Colegas Profissionais
          </p>
          <p className="text-lg font-medium text text-zinc-700 mb-7 text-center select-none lg:text-start lg:w-[40em]">
            As avaliações seguintes são um reflexo do meu modo de trabalho,
            ficarei muito contente em trabalhar consigo e obter uma avaliação
            similar ou ainda melhor!
          </p>
        </div>
        <div className="max-w-4xl w-[90%] mr-auto ml-auto">
          <div>
            <p className="mb-3 mt-8 text-lg font-bold text-zinc-950">
              Linguagens de Programação
            </p>
            <div className="flex gap-3 flex-wrap justify-start">
              {skillLingProg.map(({ icon: SkillIcon, name }) => (
                <div
                  key={name}
                  className="flex items-center bg-red-700 pr-4 pl-4 pt-1 pb-1 rounded-xl flex-grow basis-auto"
                >
                  <SkillIcon className="text-3xl text-white" />
                  <span className="text-sm mt-2 h-full ml-2 text-white">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-3 mt-8 text-lg font-bold text-zinc-950">
              Linguagens de Marcação e Estilização
            </p>
            <div className="flex gap-3 flex-wrap justify-start">
              {skillLingMarNStyle.map(({ icon: SkillIcon, name }) => (
                <div
                  key={name}
                  className="flex items-center bg-red-700 pr-4 pl-4 pt-1 pb-1 rounded-xl flex-grow basis-auto"
                >
                  <SkillIcon className="text-3xl text-white" />
                  <span className="text-sm mt-2 h-full ml-2 text-white">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-3 mt-8 text-lg font-bold text-zinc-950">
              Frameworks e Bibliotecas Frontend
            </p>
            <div className="flex flex-wrap justify-start gap-3">
              {skillFrameworksFront.map(({ icon: SkillIcon, name }) => (
                <div
                  key={name}
                  className="flex items-center bg-red-700 pr-4 pl-4 pt-1 pb-1 rounded-xl flex-grow basis-auto"
                >
                  <SkillIcon className="text-3xl text-white" />
                  <span className="text-sm mt-2 h-full ml-2 text-white">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-3 mt-8 text-lg font-bold text-zinc-950">
              Backend e Infraestrutura
            </p>
            <div className="flex gap-3 flex-wrap justify-start">
              {skillbackNInfra.map(({ icon: SkillIcon, name }) => (
                <div
                  key={name}
                  className="flex items-center bg-red-700 pr-4 pl-4 pt-1 pb-1 rounded-xl flex-grow basis-auto"
                >
                  <SkillIcon className="text-3xl text-white" />
                  <span className="text-sm mt-2 h-full ml-2 text-white">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-3 mt-8 text-lg font-bold text-zinc-950">
              Base de Dados
            </p>
            <div className="flex gap-3 flex-wrap justify-start">
              {skillDb.map(({ icon: SkillIcon, name }) => (
                <div
                  key={name}
                  className="flex items-center bg-red-700 pr-4 pl-4 pt-1 pb-1 rounded-xl flex-grow basis-auto"
                >
                  <SkillIcon className="text-3xl text-white" />
                  <span className="text-sm mt-2 h-full ml-2 text-white">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-3 mt-8 text-lg font-bold text-zinc-950">
              Controle de Versão
            </p>
            <div className="flex gap-3 flex-wrap justify-start">
              {skillControleVersao.map(({ icon: SkillIcon, name }) => (
                <div
                  key={name}
                  className="flex items-center bg-red-700 pr-4 pl-4 pt-1 pb-1 rounded-xl flex-grow basis-auto"
                >
                  <SkillIcon className="text-3xl text-white" />
                  <span className="text-sm mt-2 h-full ml-2 text-white">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-3 mt-8 text-lg font-bold text-zinc-950">
              Testes e Qualidade de Código
            </p>
            <div className="flex gap-3 flex-wrap justify-start">
              {skillTest.map(({ icon: SkillIcon, name }) => (
                <div
                  key={name}
                  className="flex items-center bg-red-700 pr-4 pl-4 pt-1 pb-1 rounded-xl flex-grow basis-auto"
                >
                  <SkillIcon className="text-3xl text-white" />
                  <span className="text-sm mt-2 h-full ml-2 text-white">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-3 mt-8 text-lg font-bold text-zinc-950">
              Ferramentas de Desenvolvimento
            </p>
            <div className="flex gap-3 flex-wrap justify-start">
              {skillFerramentas.map(({ icon: SkillIcon, name }) => (
                <div
                  key={name}
                  className="flex items-center bg-red-700 pr-4 pl-4 pt-1 pb-1 rounded-xl flex-grow basis-auto"
                >
                  <SkillIcon className="text-3xl text-white" />
                  <span className="text-sm mt-2 h-full ml-2 text-white">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-3 mt-8 text-lg font-bold text-zinc-950">
              Sistemas Operacionais
            </p>
            <div className="flex gap-3 flex-wrap justify-start">
              {skillSistemas.map(({ icon: SkillIcon, name }) => (
                <div
                  key={name}
                  className="flex items-center bg-red-700 pr-4 pl-4 pt-1 pb-1 rounded-xl flex-grow basis-auto"
                >
                  <SkillIcon className="text-3xl text-white" />
                  <span className="text-sm mt-2 h-full ml-2 text-white">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-3 mt-8 text-lg font-bold text-zinc-950">
              Hospedagem e DNS
            </p>
            <div className="flex gap-3 flex-wrap justify-start">
              {skillHostsNDns.map(({ icon: SkillIcon, name }) => (
                <div
                  key={name}
                  className="flex items-center bg-red-700 pr-4 pl-4 pt-1 pb-1 rounded-xl flex-grow basis-auto"
                >
                  <SkillIcon className="text-3xl text-white" />
                  <span className="text-sm mt-2 h-full ml-2 text-white">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-3 mt-8 text-lg font-bold text-zinc-950">
              Gerenciamento e Produtividade
            </p>
            <div className="flex gap-3 flex-wrap justify-start">
              {skillGerenciamento.map(({ icon: SkillIcon, name }) => (
                <div
                  key={name}
                  className="flex items-center bg-red-700 pr-4 pl-4 pt-1 pb-1 rounded-xl flex-grow basis-auto"
                >
                  <SkillIcon className="text-3xl text-white" />
                  <span className="text-sm mt-2 ml-2 text-white h-full">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-3 mt-8 text-lg font-bold text-zinc-950">
              CMS & Website Builders
            </p>
            <div className="flex gap-3 flex-wrap justify-start">
              {skillCMS.map(({ icon: SkillIcon, name }) => (
                <div
                  key={name}
                  className="flex items-center bg-red-700 pr-4 pl-4 pt-1 pb-1 rounded-xl flex-grow basis-auto"
                >
                  <SkillIcon className="text-3xl text-white" />
                  <span className="text-sm mt-2 h-full ml-2 text-white">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
