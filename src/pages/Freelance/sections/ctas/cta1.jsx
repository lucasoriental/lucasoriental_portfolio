import React from "react";
import background1 from "../../../../assets/images/call-to-action-1.jpg";
import { useTranslation } from "react-i18next";

const Cta1 = () => {
  const { t } = useTranslation("freelance");
  return (
    <div className="w-screen h-60 lg:h-96 flex relative">
      <div
        className="absolute inset-0 grayscale overflow-hidden"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${background1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(100%)",
        }}
      />
      <div className="max-w-96 lg:max-w-2xl w-[90%] mx-auto self-center relative z-10">
        <p className="text-white text-start font-base text-xl lg:text-4xl ">
          "{t("callToAction.callToAction1.messageCta1")}"
        </p>
        <p className="text-white text-start font-base text-xl lg:text-3xl font-bold lg:mt-5 mt-2">
          {t("callToAction.callToAction1.authorCta1")}
        </p>
      </div>
    </div>
  );
};

export default Cta1;
