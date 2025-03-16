import React from "react";
import BehanceSVG from "../../../assets/light_theme/Behance";
import GitHubSVG from "../../../assets/light_theme/GitHub";
import InstagramSVG from "../../../assets/light_theme/Instagram";
import LinkedInSVG from "../../../assets/light_theme/LinkedIn";
import MouseSrollSvg from "../../../assets/light_theme/mouse_arrow_down";
import main_picture from "../../../assets/pictures/profile_photo_1.jpg";

import { Tooltip } from "react-tooltip";

import { Link } from "react-scroll";

import { useTranslation } from "react-i18next";

const MainPage = () => {
  const { t } = useTranslation();

  //const headerHeight = 120;

  return (
    <div id="home-main-container" className="bg-white">
      <div className="home-main-container-1">
        <div className="home-column1">
          <img
            alt="profile-image"
            src={main_picture}
            className="home-profile-picture"
          />
          {/* <div className="borda-animada" /> */}
        </div>
      </div>
      <div className="home-main-container-2">
        <MouseSrollSvg />
      </div>
    </div>
  );
};

export default MainPage;
