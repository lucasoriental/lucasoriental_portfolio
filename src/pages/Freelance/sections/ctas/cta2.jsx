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
      <p className="text-white max-w-96 w-[90%] mx-auto font-base text-xl self-center relative z-10 text-end">
        "{t("callToAction.callToAction2.messageCta2")}"{" "}
        <span className="text-white text-xl font-bold">{t("callToAction.callToAction2.authorCta2")}</span>
      </p>
    </div>
  );
};

export default Cta2;
