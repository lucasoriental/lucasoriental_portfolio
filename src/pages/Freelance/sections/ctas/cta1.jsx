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
      <p className="text-white max-w-96 w-[90%] mx-auto font-base text-xl self-center relative z-10">
        "{t("callToAction.callToAction1.messageCta1")}"{" "}
        <span className="text-white text-xl font-bold">
          {t("callToAction.callToAction1.authorCta1")}
        </span>
      </p>
    </div>
  );
};

export default Cta1;
