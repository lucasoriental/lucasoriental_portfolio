import React, { useEffect, useState } from "react";
import JobExperience from "../job-experiences-page/common/jobExperience";

import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";

const JobExperiencesPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobExperiences, setJobExperiences] = useState(null);
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
        { jobExperiencesPage: dynamicTranslations },
        true,
        true
      );
      setJobExperiences(dynamicTranslations);
      setIsLoading(false);
    } catch (err) {
      console.error(
        "Something went wrong during the fetch. Please try refreshing the site..."
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
    <div id="job-experiences-container">
      <div className="container-general">
        <div>
          <p
            className="title-general"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            {t("sections.jobExperiencesPage.title")}
          </p>
        </div>
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
          <JobExperience data={jobExperiences.jobExperiences} />
        )}
      </div>
    </div>
  );
};

export default JobExperiencesPage;
