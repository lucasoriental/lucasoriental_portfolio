import React from "react";
import MeshBackground from "../../common/meshBackground";
import picture from "../../../../assets/images/about-me-profile.jpg";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation("freelance");
  return (
    <section id="container_about" className="dark: relative py-36">
      <MeshBackground />
      <div className="mx-auto w-[90%] max-w-4xl">
        <p className="text-4xl font-extrabold drop-shadow-xl text-center text-white mb-5 select-none lg:text-start lg:w-[20em]">
          {t("aboutMeSection.title")}
        </p>
        <p className="text-lg font-medium text text-zinc-100 mb-7 text-center select-none lg:text-start lg:w-[40em]">
          {t("aboutMeSection.subTitle")}
        </p>
      </div>
      <div className="max-w-4xl w-[90%] mx-auto">
        <img
          src={picture}
          alt="img"
          className="w-48 h-48 self-center mb-5 float-left mr-5"
        />
        <div
          className="text-justify mx-auto text-zinc-100"
          dangerouslySetInnerHTML={{
            __html: t("aboutMeSection.aboutMeText"),
          }}
        />
      </div>
    </section>
  );
};
export default AboutMe;
