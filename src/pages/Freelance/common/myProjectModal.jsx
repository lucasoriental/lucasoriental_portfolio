// MyProjectModal.js
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function MyProjectModal({ information, setOpenModal }) {
  const { t } = useTranslation();

  useEffect(() => {
    document.body.classList.add("modal-open");
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);

  return (
    <div className="modal-background" onClick={() => setOpenModal(false)}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <button className="modal-close-button" onClick={() => setOpenModal(false)}>
            X
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
              dangerouslySetInnerHTML={{ __html: information.projectDescription }}
            />
          </div>
        </div>
        <div className="modal-footer">
          {information.gitHubRepo && (
            <a className="modal-link-a" href={information.gitHubRepo} target="_blank">
              <div className="modal-button-project">
                <div className="modal-button-project-icon"></div>
                <p className="modal-button-project-text">GitHub</p>
              </div>
            </a>
          )}
          {information.website && (
            <a className="modal-link-a" href={information.website} target="_blank">
              <div className="modal-button-project">
                <div className="modal-button-project-icon"></div>
                <p className="modal-button-project-text">WebSite</p>
              </div>
            </a>
          )}
          {information.behanceRepo && (
            <a className="modal-link-a" href={information.behanceRepo} target="_blank">
              <div className="modal-button-project">
                <div className="modal-button-project-icon"></div>
                <p className="modal-button-project-text">Behance</p>
              </div>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
