import Picture from "../../assets/images/home-profile.jpg";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../components/ui/LanguageSwitcher";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Home() {
  const { t } = useTranslation("home");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.scrollTo) {
      document.getElementById(location.state.scrollTo)?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [location]);

  const goToHiring = () => {
    navigate("/hiring", { state: { scrollTo: "home-main-container" } });
  };

  const goToFreelance = () => {
    navigate("/freelance", { state: { scrollTo: "container_hero" } });
  };

  return (
    <div>
      <div className="bg-red-700 dark:bg-gray-950 flex flex-col justify-center min-h-screen py-10 px-5">
        <div className="flex flex-col mx-auto border py-10 px-2">
          <h1 className="text-3xl font-extrabold text-center text-white mb-5 max-w-[90%] mr-auto ml-auto select-none drop-shadow-lg">
            {t("welcome")}
          </h1>
          <img
            src={Picture}
            alt="Profile"
            className="rounded-full w-60 h-60 self-center mb-5 object-cover select-none drop-shadow-2xl"
          />
          <p className="mb-5 text-xl font-bold text-white max-w-[90%] text-center mr-auto ml-auto select-none drop-shadow-lg">
            {t("introduction")}
          </p>

          <p className="text-xl font-bold text-center text-white mb-5 drop-shadow-lg">
            {t("title")}
          </p>
          <div className="flex flex-col items-center">
            <button
              className="bg-white w-72 pt-3 pb-3 rounded-full mb-1 text-red-800 font-semibold text-md"
              onClick={() => goToHiring()}
            >
              {t("button1")}
            </button>
            <p className="text-white text-center text-sm font-light max-w-[90%] mb-5 mr-auto ml-auto drop-shadow-lg">
              {t("textAuxButton1")}
            </p>
            <button
              className="bg-white w-72 pt-3 pb-3 mb-1 rounded-full text-red-800 font-semibold text-md"
              onClick={() => goToFreelance()}
            >
              {t("button2")}
            </button>
            <p className="text-white text-center text-sm max-w-[90%] font-light mr-auto ml-auto drop-shadow-lg">
              {t("textAuxButton2")}
            </p>
          </div>
          <div className="flex flex-col items-center w-fit mx-auto mt-10 gap-2">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
