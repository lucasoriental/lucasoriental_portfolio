import React from "react";
import background2 from "../../../../assets/images/call-to-action-2.jpg";
import { useTranslation } from "react-i18next";

const Cta2 = () => {
  const { t } = useTranslation("freelance");
  return (
    <div className="w-screen h-60 lg:h-96 flex relative">
      <div
        className="absolute inset-0 grayscale overflow-hidden"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${background2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(100%)",
        }}
      />
      <div className="max-w-96 w-[90%] mx-auto self-center relative z-10 lg:max-w-2xl" >
        <p className="text-white font-base text-xl lg:text-4xl text-end">
          "{t("callToAction.callToAction2.messageCta2")}"
        </p>
        <p className="text-white font-base text-xl font-bold lg:mt-5 lg:text-3xl mt-2 text-end">
          {t("callToAction.callToAction2.authorCta2")}
        </p>
      </div>
    </div>
  );
};

export default Cta2;
