import { AlignJustify, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import LanguageSwitcher from "../../components/ui/LanguageSwitcher";

export default function HeaderFreelancer() {
  const { t } = useTranslation("freelance");
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const navigate = useNavigate();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const goToHiring = () => {
    navigate("/hiring", { state: { scrollTo: "home-main-container" } });
  };

  const HeaderFreelance = [
    { name: t("header.services"), to: "container_services" },
    { name: t("header.projects"), to: "container_projects" },
    { name: t("header.testimonials"), to: "container_testimonials" },
    { name: t("header.aboutMe"), to: "container_about" },
    { name: t("header.skills"), to: "container_skills" },
    { name: t("header.contact"), to: "container_contact" },
    { name: t("header.faq"), to: "container_faq" },
    { name: t("header.hireMe"), to: goToHiring },
  ];

  return (
    <header className="flex p-5 justify-between bg-red-600 items-center fixed z-50 w-full">
      <div className="flex">
        <LanguageSwitcher />
        {/* Navbar for large devices */}
        <nav className="hidden lg:flex items-center pl-5 gap-5">
          {HeaderFreelance.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                if (typeof item.to === "function") {
                  item.to();
                } else {
                  document
                    .getElementById(item.to)
                    ?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="text-sm font-semibold text-white hover:text-red-300 cursor-pointer select-none"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Sidebar for small/medium devices */}
        <div
          className={`fixed top-0 right-0 h-screen bg-white text-right pt-5 w-3/4 max-w-[300px] transition-transform duration-500 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <X
            onClick={handleClick}
            size={25}
            className="text-red-600 cursor-pointer ml-auto mr-5 mb-5"
          />
          <nav className="flex flex-col">
            {HeaderFreelance.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  if (typeof item.to === "function") {
                    item.to();
                  } else {
                    document
                      .getElementById(item.to)
                      ?.scrollIntoView({ behavior: "smooth" });
                    setIsOpen(false);
                  }
                }}
                className="text-sm font-semibold text-red-600 hover:bg-red-300 cursor-pointer select-none w-full py-2 px-5"
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <a
          href="https://wa.me/message/54TN4AJGPRJXD1"
          target="_blank"
          type="button"
          className={
            isVisible === true
              ? "bg-green-50 px-5 py-2 text-sm rounded-full hover:bg-red-300 text-red-700 font-bold"
              : "hidden"
          }
        >
          {t("header.buttonText")}
        </a>
        <button
          className="lg:hidden cursor-pointer text-white"
          onClick={handleClick}
        >
          <AlignJustify size={25} />
        </button>
      </div>
    </header>
  );
}
