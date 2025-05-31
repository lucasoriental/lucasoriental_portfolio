import { useState } from "react";
import JobExperiencesModal from "./jobExperiencesModal";

import { useTranslation } from "react-i18next";

import PropTypes from "prop-types";

export default function JobExperiences(props) {
  const [jobExperience, setJobExperience] = useState(null);

  const [modalOpen, setModalOpen] = useState(false);

  const { t } = useTranslation("hiring");

  return (
    <div className="block-of-jobs">
      {props.data.map((job, index) => {
        return (
          <div key={job.id}>
            <div
              className="job-entire-item"
              data-aos="fade-right"
              data-aos-anchor-placement="bottom-bottom"
            >
              <img alt="Company Logo" src={job.image} className="job-image" />
              <div className="job-entire-item-paragraph">
                <p className="job-title">{job.jobTitle}</p>
                <div
                  className="job-company-name"
                  dangerouslySetInnerHTML={{
                    __html: job.companyName,
                  }}
                />
                <p className="job-time">{job.time}</p>
                <div
                  className="job-responsibilities"
                  dangerouslySetInnerHTML={{ __html: job.responsibilities }}
                />
                <a className="job-button-link">
                  <button
                    onClick={() => {
                      setModalOpen(true);
                      setJobExperience(index);
                    }}
                    className="job-button"
                  >
                    {t("sections.jobExperiencesPage.buttonText")}
                  </button>
                </a>
              </div>
            </div>
            {modalOpen && jobExperience === index && (
              <JobExperiencesModal
                information={job}
                setOpenModal={setModalOpen}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

JobExperiences.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      jobTitle: PropTypes.string.isRequired,
      companyName: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      responsibilities: PropTypes.string.isRequired,
    })
  ).isRequired,
};
