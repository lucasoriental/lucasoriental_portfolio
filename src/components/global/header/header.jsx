import React, { useState } from "react";
import XIconSvg from "../../../assets/common_elements/icon_X";
import MenuHamburguer from "../../../assets/common_elements/icon_menu_hamburger";

import { useTranslation } from "react-i18next";

import LanguageSwitcher from "../../../LanguageSwitcher";

import { Link } from "react-scroll";

const Header = () => {
  const { t } = useTranslation();

  const headerHeight = 120;

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    const btnMenu = document.querySelector(".hamburguer");
    const mob_menu = document.querySelector(".header-mobile-side-bar");

    btnMenu.classList.toggle("is-active");
    mob_menu.classList.toggle("is-active");
    setIsActive(!isActive);
  };

  const handleClickLink = () => {
    setIsActive(false);
  };

  return (
    <>
      <header
        id="header-desktop"
        className="flex pt-5 pb-5 items-center justify-between bg-red-600 md:none"
      >
        <div className="flex-row flex items-center">
          <div className="pl-5">
            <LanguageSwitcher />
          </div>
          <nav className="flex items-center ml-5 overflow-auto whitespace-nowrap">
            <Link
              className="text-center pt-0 pb-0 pr-2 pl-2 cursor-pointer font-semibold text-sm hover:text-white text-white"
              activeClass="active"
              to="home-main-container"
              spy={true}
              smooth={true}
              offset={-headerHeight}
              duration={1000}
            >
              {t("header.freelance_side.home")}
            </Link>
            <Link
              className="text-center pt-0 pb-0 pr-2 pl-2 cursor-pointer font-semibold text-sm hover:text-white text-white"
              activeClass="active"
              to="my-projects-container"
              spy={true}
              smooth={true}
              offset={-headerHeight}
              duration={1000}
            >
              {t("header.freelance_side.services")}
            </Link>
            <Link
              className="text-center pt-0 pb-0 pr-2 pl-2 cursor-pointer font-semibold text-sm hover:text-white text-white"
              activeClass="active"
              to="education-and-skills-page"
              spy={true}
              smooth={true}
              offset={-headerHeight}
              duration={1000}
            >
              {t("header.freelance_side.projects")}
            </Link>
            <Link
              className="text-center pt-0 pb-0 pr-2 pl-2 cursor-pointer font-semibold text-sm hover:text-white text-white"
              activeClass="active"
              to="job-experiences-container"
              spy={true}
              smooth={true}
              offset={-headerHeight}
              duration={1000}
            >
              {t("header.freelance_side.testimonials")}
            </Link>
            <Link
              className="text-center pt-0 pb-0 pr-2 pl-2 cursor-pointer font-semibold text-sm hover:text-white text-white"
              activeClass="active"
              to="about-me-container"
              spy={true}
              smooth={true}
              offset={-headerHeight}
              duration={1000}
            >
              {t("header.freelance_side.skills")}
            </Link>
            <Link
              className="text-center pt-0 pb-0 pr-2 pl-2 cursor-pointer font-semibold text-sm hover:text-white text-white"
              activeClass="active"
              to="contact-me-container"
              spy={true}
              smooth={true}
              offset={-headerHeight}
              duration={1000}
            >
              {t("header.freelance_side.about")}
            </Link>
            <Link
              className="text-center pt-0 pb-0 pr-2 pl-2 cursor-pointer font-semibold text-sm hover:text-white text-white"
              activeClass="active"
              to="contact-me-container"
              spy={true}
              smooth={true}
              offset={-headerHeight}
              duration={1000}
            >
              {t("header.freelance_side.contact")}
            </Link>
            <Link
              className="text-center pt-0 pb-0 pr-2 pl-2 cursor-pointer font-semibold text-sm hover:text-white text-white"
              activeClass="active"
              to="contact-me-container"
              spy={true}
              smooth={true}
              offset={-headerHeight}
              duration={1000}
            >
              {t("header.freelance_side.faq")}
            </Link>
          </nav>
        </div>
        <div className="header-desktop-div-right">
          <button
            type="button"
            className="text-red-800 font-bold bg-slate-50 hover:bg-red-900 hover:text-white rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
          >
            Hire me
          </button>
        </div>
      </header>
      <header
        id="header-mobile"
        className="flex pt-5 pb-5 items-center justify-between bg-red-600 lg:none"
      >
        <div className="header-mobile-bar">
          <button className="hamburguer" onClick={handleClick}>
            <MenuHamburguer
              width={35}
              height={25}
              strokeWidth={3}
              strokeColor="white"
            />
          </button>
          <LanguageSwitcher onClick={handleClickLink} />
        </div>
        <div
          className={`header-mobile-side-bar ${isActive ? "is-active" : ""}`}
        >
          <div className="header-mobile-side-bar-top">
            <div className="header-mobile-side-bar-top-XIcon">
              <button className="hamburguer" onClick={handleClick}>
                <XIconSvg
                  width={25}
                  height={25}
                  strokeWidth={3}
                  color="white"
                />
              </button>
            </div>
          </div>
          <nav>
            <Link
              activeClass="active"
              to="home-main-container"
              spy={true}
              smooth={true}
              offset={-headerHeight}
              duration={1000}
              onClick={handleClickLink}
            >
              {t("header.freelance_side.home")}
            </Link>
            <Link
              activeClass="active"
              to="my-projects-container"
              spy={true}
              smooth={true}
              offset={-headerHeight}
              duration={1000}
              onClick={handleClickLink}
            >
              {t("header.freelance_side.projects")}
            </Link>
            <Link
              activeClass="active"
              to="education-and-skills-page"
              spy={true}
              smooth={true}
              offset={-headerHeight}
              duration={1000}
              onClick={handleClickLink}
            >
              {t("header.freelance_side.education")}
            </Link>
            <Link
              activeClass="active"
              to="job-experiences-container"
              spy={true}
              smooth={true}
              offset={-headerHeight}
              duration={1000}
              onClick={handleClickLink}
            >
              {t("header.freelance_side.jobs")}
            </Link>
            <Link
              activeClass="active"
              to="about-me-container"
              spy={true}
              smooth={true}
              offset={-headerHeight}
              duration={1000}
              onClick={handleClickLink}
            >
              {t("header.freelance_side.about")}
            </Link>
            <Link
              activeClass="active"
              to="contact-me-container"
              spy={true}
              smooth={true}
              offset={-headerHeight}
              duration={1000}
              onClick={handleClickLink}
            >
              {t("header.freelance_side.contact")}
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
