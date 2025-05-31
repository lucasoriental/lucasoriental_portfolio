import { useTranslation } from "react-i18next";
import backgroundImg from "../../../../assets/images/call-to-action-3.jpg";

const Cta3 = () => {
  const { t } = useTranslation("freelance");
  return (
    <div className="w-screen h-60 lg:h-96 flex relative">
      <div
        className="absolute inset-0 grayscale overflow-hidden"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url(${backgroundImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(100%)",
        }}
      />
      <div className="flex flex-col items-center justify-center z-10 mx-auto max-w-2xl w-[90%]">
        <p className="text-white text-2xl max-w-96 lg:max-w-2xl mx-auto font-semibold lg:text-4xl self-center text-center mb-5 lg:mb-10 shadow-white">
          {t("callToAction.callToAction3.messageCta3")}
          <span className="text-red-600 font-bold animate-text-attention lg:text-4xl">
            {t("callToAction.callToAction3.auxMessageCta3")}
          </span>
        </p>
        <a
          href="https://wa.me/message/54TN4AJGPRJXD1"
          target="_blank"
          type="button"
          className="bg-red-600 text-white px-5 py-2 shadow-2xl shadow-red-600 font-semibold"
        >
          {t("callToAction.callToAction3.buttonCta3")}
        </a>
      </div>
    </div>
  );
};

export default Cta3;
