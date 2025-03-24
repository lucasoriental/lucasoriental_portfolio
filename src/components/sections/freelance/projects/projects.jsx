import React, { useState, useEffect } from "react";
import tempImg from "../../../../assets/pictures/development-services-img.jpg";

import { useTranslation } from "react-i18next";
import MeshBackground from "../home/meshBackground";

import MyProjectModal from "./common/myProjectModal";

import i18n from "../../../../i18n";

const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [project, setProject] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const { t } = useTranslation();

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
        { Projects: dynamicTranslations },
        true,
        true
      );
      setProject(dynamicTranslations);
      setIsLoading(false);
    } catch (err) {
      console.error(
        "Something error happend during fetch on the My Projects page, please try refreshing the site..."
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

  console.log(project.projects);

  return (
    <section className="dark: relative pb-36 pt-36">
      <MeshBackground />
      <div className="mx-auto w-[90%] max-w-4xl">
        <p className="text-4xl font-extrabold drop-shadow-xl text-center text-white mb-5 select-none lg:text-start lg:w-[20em]">
          Os Serviços que Impulsionam o Teu Negócio no Digital
        </p>
        <p className="text-lg font-medium text text-zinc-100 mb-7 text-center select-none lg:text-start lg:w-[40em]">
          Com uma abordagem estratégica e personalizada, ajudo a transformar a
          presença online da tua marca, desde o desenvolvimento até ao marketing
          digital.
        </p>
      </div>
      {/* Main Grid of all projects */}
      {isLoading === true ? (
        <p
          style={{
            textAlign: "center",
            fontSize: "25px",
            color: "#FFF",
            margin: "90px 0px",
            fontWeight: "500",
          }}
        >
          {t("errorMessages")}
        </p>
      ) : (
        <div className="flex flex-wrap justify-center gap-5 max-w-[90rem] w-[95%] items-center mx-auto">
          {project.projects.map((project, index) => {
            return (
              <a
                key={index}
                onClick={() => {
                  setSelectedProject(index);
                  setModalOpen(true);
                }}
                className="bg-green-400 px-10 py-2"
              >
                Clique aqui
                {modalOpen && selectedProject === index && (
                  <MyProjectModal
                    information={project}
                    setOpenModal={setModalOpen}
                  />
                )}
              </a>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Projects;
