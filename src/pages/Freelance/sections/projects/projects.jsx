import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import MeshBackground from "../../common/meshBackground";

import MyProjectModal from "../../common/myProjectModal";

import i18n from "../../../../locales/i18n";

const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [project, setProject] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const { t } = useTranslation("freelance");

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

  return (
    <section id="container_projects" className="dark: relative pb-36 pt-36">
      <MeshBackground />
      <div className="mx-auto w-[90%] max-w-4xl">
        <p className="text-4xl font-extrabold drop-shadow-xl text-center text-white mb-5 select-none lg:text-start lg:w-[20em]">
          {t("projectsSection.title")}
        </p>
        <p className="text-lg font-medium text text-zinc-100 mb-7 text-center select-none lg:text-start lg:w-[40em]">
          {t("projectsSection.subTitle")}
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
        <div className="flex flex-wrap justify-center lg:justify-between gap-5 max-w-4xl mx-auto items-center">
          {project.projects.map((project, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  setSelectedProject(index);
                  setModalOpen(true);
                }}
                className="relative w-[90%] h-[25rem] max-w-96"
                style={{
                  backgroundImage: `url(${project.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute bottom-0 mb-6 bg-red-700 py-5 w-[90%] left-1/2 -translate-x-1/2 px-5 flex flex-col">
                  <p className="text-white font-bold text-lg text-start">
                    {project.projectName}
                  </p>
                  <p className="border-t text-red-200 font-semibold text-base text-start">
                    {project.projectArea}
                  </p>
                </div>
                {modalOpen && selectedProject === index && (
                  <MyProjectModal
                    information={project}
                    setOpenModal={setModalOpen}
                  />
                )}
              </button>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Projects;
