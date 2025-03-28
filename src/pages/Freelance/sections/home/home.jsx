import React from "react";
import iphoneMockup from "../../../../assets/mockups/hero-mockup.png";
import MeshBackground from "../../common/meshBackground";
import { Typewriter } from "react-simple-typewriter";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Link } from "react-scroll";

const Home = () => {
  const { t } = useTranslation("freelance");
  return (
    <main className="dark: relative pt-36 pb-36 lg:h-[calc(100vh*0.9)]">
      <MeshBackground />
      <div className="w-[90%] max-w-4xl m-auto flex flex-col lg:flex-row items-center relative z-10">
        <div className="flex flex-col items-center lg:basis-3/5">
          <h1 className="text-5xl font-extrabold drop-shadow-xl text-center text-white mb-5 select-none lg:text-start">
            {t("heroSection.title1")}
            <span className="text-zinc-200 underline drop-shadow-[0 0 5px text-red-600;] font-black inline-block min-w-32 text-nowrap">
              <Typewriter
                words={t("heroSection.titleAux", { returnObjects: true })}
                loop={true}
                cursor
                cursorStyle=""
                typeSpeed={150}
                deleteSpeed={150}
                delaySpeed={1500}
              />
            </span>
            {t("heroSection.title2")}
          </h1>
          <p className="text-lg font-medium text-zinc-100 mb-7 text-center select-none lg:text-start">
            {t("heroSection.subTitle")}
          </p>
          <div className="lg:flex lg:self-start lg:gap-6 items-center">
            <a
              href="https://wa.me/message/54TN4AJGPRJXD1"
              target="_blank"
              className="flex bg-zinc-100 pt-3 pb-3 w-64 justify-center rounded-xl mb-5 lg:w-fit lg:pl-4 lg:pr-4 border border-red-950 shadow-2xl shadow-red-950"
            >
              <p className="text-red-600 text-md font-base self-center lg:text-sm">
                {t("heroSection.button1")}
                <span className="font-medium lg:text-md animate-text-attention">
                  {t("heroSection.auxButton1")}
                </span>
                {t("heroSection.aux2Button1")}
              </p>
            </a>
            <Link
              to="container_services"
              smooth={true}
              className="flex pt-3 pb-3 w-64 justify-center rounded-xl mb-5 lg:w-44 cursor-pointer"
            >
              <p className="text-white font-normal text-sm self-center lg:text-md flex items-center gap-2">
                {t("heroSection.button2")}
                <ArrowRight className="w-4" />
              </p>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center lg:basis-2/5 mt-5 lg:mt-0">
          <img
            src={iphoneMockup}
            alt="Profile"
            className="w-[30rem] h-fit lg:h-96 mb-5 drop-shadow-2xl"
            id="image-home"
            style={{ backgroundSize: "cover", backgroundPosition: "center" }}
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
