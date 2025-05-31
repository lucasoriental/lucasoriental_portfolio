import { useState } from "react";
import { Tooltip } from "react-tooltip";
import CapCourseLightSVG from "../../../../assets/light_theme/cap_course_SVG";
import ClockLightSVG from "../../../../assets/light_theme/clock_SVG";
import CertModal from "./modals/certModal";

import PropTypes from "prop-types";

import { useTranslation } from "react-i18next";

export default function Certificates(props) {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const { t } = useTranslation("hiring");

  return (
    <div className="container-certificates">
      <div className="allCertificates">
        {props.data.map((certificate, index) => {
          return (
            <div className="EAS-certificates" key={certificate.id}>
              <img
                data-aos="fade-right"
                data-aos-anchor-placement="bottom-bottom"
                alt="credential_img"
                src={certificate.img}
                className="EAS-certificates-picture"
              />
              <div
                className="EAS-certificates-div"
                data-aos="fade-left"
                data-aos-anchor-placement="bottom-bottom"
              >
                <button
                  className="EAS-certificates-title-link"
                  onClick={() => {
                    setModalOpen(true);
                    setSelectedCourse(index);
                  }}
                >
                  <Tooltip id="my-tooltip-cert" />
                  <p
                    data-tooltip-id="my-tooltip-cert"
                    data-tooltip-content={t(
                      "sections.educationAndSkillsPage.section2and3.toolTipCert"
                    )}
                    className="EAS-certificates-title"
                  >
                    {certificate.course}
                  </p>
                </button>
                <div className="EAS-certificates-div-icon-text">
                  <CapCourseLightSVG width={20} height={18} color="#444444" />
                  <div
                    className="EAS-certificates-div-text"
                    dangerouslySetInnerHTML={{
                      __html: certificate.platform,
                    }}
                  />
                </div>
                <div className="EAS-certificates-div-icon-text">
                  <ClockLightSVG width={20} height={18} color="#444444" />
                  <div
                    className="EAS-certificates-div-text"
                    dangerouslySetInnerHTML={{
                      __html: certificate.time,
                    }}
                  />
                  <p className="EAS-certificates-div-text">h</p>
                </div>
              </div>
              {modalOpen && selectedCourse === index && (
                <CertModal
                  information={certificate}
                  setOpenModal={setModalOpen}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

Certificates.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      course: PropTypes.string.isRequired,
      platform: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
    })
  ).isRequired,
};
