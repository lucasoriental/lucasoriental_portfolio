import React, { useState, useEffect } from "react";
import LanguageSwitcher from "../../../../LanguageSwitcher";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import { X, AlignJustify } from "lucide-react";

export default function HeaderFreelancer() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    console.log("Antes:", isOpen);
    setIsOpen(!isOpen);
    console.log("Depois:", isOpen);
  };

  useEffect(() => {
    console.log("Estado atualizado:", isOpen);
  }, [isOpen]); // O log será disparado sempre que `isOpen` mudar.
  

  const HeaderFreelance = [
    {
      name: t("header.freelance.services"),
      to: "container_services",
    },
    {
      name: t("header.freelance.projects"),
      to: "container_projects",
    },
    {
      name: t("header.freelance.testimonials"),
      to: "container_testimonials",
    },
    {
      name: t("header.freelance.skills"),
      to: "container_skills",
    },
    {
      name: t("header.freelance.about"),
      to: "container_about",
    },
    {
      name: t("header.freelance.contact"),
      to: "container_contact",
    },
    {
      name: t("header.freelance.faq"),
      to: "container_faq",
    },
    {
      name: t("header.freelance.hireMe"),
      to: "container_hireMe",
    },
  ];

  console.log(isOpen);

  return (
    <header className="flex p-5 justify-between bg-red-600 items-center fixed z-50 w-full">
      <div className="flex">
        <LanguageSwitcher />
        {/* nav bar for large devices */}
        <nav className="hidden lg:flex items-center pl-5 gap-5">
          {HeaderFreelance.map((item) => {
            return (
              <Link
                className="text-sm font-semibold text-white align-middle hover:text-red-300 m-auto cursor-pointer select-none"
                key={item.name}
                to={item.to}
                activeClass="active"
                duration={1000}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
        {/* nav bar for small/medium devices */}
        <div
          className={`flex lg:hidden flex-col fixed right-0 top-0 text-right pt-5 h-screen bg-white transition-transform transform duration-500 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } ease-in-out`}
        >
          {isOpen && (
            <X
              onClick={() => handleClick()}
              size={25}
              className="flex text-red-600 cursor-pointer ml-auto mr-5 mb-5"
            />
          )}
          <nav id="sideNavBar" className="flex lg:hidden flex-col mb-auto">
            {isOpen &&
              HeaderFreelance.map((item) => {
                return (
                  <Link
                    className="text-sm font-semibold text-red-600 hover:bg-red-300 m-auto cursor-pointer select-none w-full pt-2 pb-2 pr-5 pl-20"
                    key={item.name}
                    to={item.to}
                    activeClass="active"
                    duration={1000}
                    onClick={() => handleClick()}
                  >
                    {item.name}
                  </Link>
                );
              })}
          </nav>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <button
          type="button"
          className="bg-green-50 pl-5 pr-5 pt-2 pb-2  text-sm rounded-full hover:bg-red-300 select-none flex font-bold"
        >
          Request a Free Quote!
        </button>
        <button
          className="flex lg:hidden cursor-pointer text-white"
          onClick={handleClick}
        >
          <AlignJustify size={25} />
        </button>
      </div>
    </header>
  );
}
