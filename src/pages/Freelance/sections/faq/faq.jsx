import React from "react";
import { useTranslation } from "react-i18next";

const Faq = () => {
  const { t } = useTranslation("freelance");

  const arr = t("faqSection.questions", { returnObjects: true });

  return (
    <section id="container_faq" className="dark: relative pb-36 pt-36">
      <div className="w-[90%] max-w-screen mx-auto">
        <div className="mx-auto w-[90%] max-w-4xl mb-12">
          <p className="text-4xl font-extrabold text-center text-zinc-900 mb-5 select-none lg:text-start lg:w-[20em]">
            {t("faqSection.title")}
          </p>
          <p className="text-lg font-medium text-zinc-700 mb-7 text-center select-none lg:text-start lg:w-[40em]">
            {t("faqSection.subTitle")}
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          {arr.map((seccao) => (
            <div key={seccao.id} className="flex flex-col">
              <h3 className="text-xl font-bold pt-10 pb-2 ">{seccao.seccao}</h3>
              <div className="flex flex-col gap-6">
                {seccao.questions.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col lg:flex-row lg:justify-between bg-slate-200"
                  >
                    <h4 className=" basis-2/5 p-5 text-lg text-justify">
                      {item.question}
                    </h4>
                    <div
                      dangerouslySetInnerHTML={{ __html: item.answear }}
                      className="text-justify basis-2/4 p-5 text-sm font-light text-gray-600"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-white bg-red-600 p-6 rounded-lg max-w-4xl mx-auto">
          {t("faqSection.auxText")}
          <a
            href="mailto:lucasoriental@gmail.com"
            className="font-bold underline"
          >
            lucasoriental@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default Faq;
