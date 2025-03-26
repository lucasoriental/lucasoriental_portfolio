import React, { useEffect } from "react";
import XIconSvg from "../../../../assets/icons/icon_X";

import { useTranslation } from "react-i18next";

export default function JobExperiencesModal({ setOpenModal, information }) {
  const { t } = useTranslation();

  useEffect(() => {
    document.body.classList.add("modal-open");

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);

  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="modal-header">
          <button
            className="modal-close-button"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            <XIconSvg width={30} height={30} strokeWidth={3} color="white" />
          </button>
          <p className="modal-header-title">
            {t("sections.jobExperiencesPage.headerModalText")}
          </p>
        </div>
        <div className="modal-job-body">
          <div className="modal-body-img-and-info">
            <div className="modal-body-img-and-info-left">
              <img
                className="modal-job-img"
                src={information.image}
                alt="logo-company"
              />
            </div>
            <div className="modal-body-img-and-info-right">
              <div
                className="modal-job-company-name"
                dangerouslySetInnerHTML={{
                  __html: information.companyName,
                }}
              />
              <div
                className="modal-job-time"
                dangerouslySetInnerHTML={{
                  __html: information.time,
                }}
              />
              <div
                className="modal-job-title"
                dangerouslySetInnerHTML={{
                  __html: information.jobTitle,
                }}
              />
            </div>
          </div>
          <p className="modal-job-title-responsibilities">
            {t("sections.jobExperiencesPage.bodyModalText")}
          </p>
          <div
            className="modal-job-responsibilities"
            dangerouslySetInnerHTML={{
              __html: information.responsibilities,
            }}
          />
        </div>
      </div>
    </div>
  );
}
