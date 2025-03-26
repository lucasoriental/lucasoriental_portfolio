import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { SiGithub, SiBehance } from "@icons-pack/react-simple-icons";
import { Globe } from "lucide-react";
import { X } from "lucide-react";

export default function MyProjectModal({ information, setOpenModal }) {
  const { t } = useTranslation();

  useEffect(() => {
    document.body.classList.add("modal-open");
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);

  const handleLinkClick = (url, e) => {
    e.stopPropagation(); // Evita que o clique no botão feche o modal
    window.open(url, "_blank");
  };

  return (
    <div className="modal-background" onClick={() => setOpenModal(false)}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <button
            className="ml-3 lg:ml-10"
            onClick={() => setOpenModal(false)}
          >
            <X className="text-white" />
          </button>
          <p className="modal-header-title">
            {t("sections.myProjectsPage.headerModalText")}
          </p>
        </div>
        <div className="modal-body">
          <img className="modal-img" src={information.img} alt="Project" />
          <div className="modal-body-text-area">
            <p className="modal-body-title">{information.projectName}</p>
            <p className="modal-body-sub-title">{information.projectArea}</p>
            <div
              className="modal-text"
              dangerouslySetInnerHTML={{
                __html: information.projectDescription,
              }}
            />
          </div>
        </div>
        <div className="modal-footer">
          {information.gitHubRepo && (
            <button
              className="modal-link-a"
              onClick={(e) => handleLinkClick(information.gitHubRepo, e)}
            >
              <div className="modal-button-project">
                <SiGithub className="text-white w-5 mx-2 lg:w-10" />
                <p className="text-white text-sm lg:text-base">GitHub</p>
              </div>
            </button>
          )}
          {information.website && (
            <button
              className="modal-link-a"
              onClick={(e) => handleLinkClick(information.website, e)}
            >
              <div className="modal-button-project">
                <Globe className="text-white w-5 mx-2 lg:w-10" />
                <p className="text-white text-sm lg:text-base">Website</p>
              </div>
            </button>
          )}
          {information.behanceRepo && (
            <button
              className="modal-link-a"
              onClick={(e) => handleLinkClick(information.behanceRepo, e)}
            >
              <div className="modal-button-project">
                <SiBehance className="text-white w-5 mx-2 lg:w-10" />
                <p className="text-white text-sm lg:text-base">Behance</p>
              </div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
