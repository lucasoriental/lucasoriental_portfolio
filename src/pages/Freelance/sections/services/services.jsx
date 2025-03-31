import React from "react";
import { Check, Code, Palette, ChartNoAxesCombined } from "lucide-react";
import developmentImg from "../../../../assets/images/background-development.jpg";
import designImg from "../../../../assets/images/background-design.jpg";
import marketingImg from "../../../../assets/images/background-marketing.jpg";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation("freelance");

  const ServiceCard = ({
    img,
    icon: Icon,
    title,
    description,
    services,
    reverse,
  }) => (
    <div className="w-screen">
      <div
        className={`w-fit flex flex-col lg:flex-row items-center lg:w-fit lg:gap-7 mx-auto lg:px-32 lg:py-5 rounded-2xl ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        <div
          className="lg:basis-2/5 max-w-96 rounded-xl h-52 mt-5 mb-5 w-[90%] shadow-xl"
          style={{
            background: `url(${img})`,
            backgroundSize: "cover",
          }}
        >
          <div className="p-5 bg-red-950 bg-opacity-80 h-full text-zinc-100 rounded-xl">
            <div className="flex items-center">
              <Icon />
              <p className="ml-3 lg:text-start font-bold text-base lg:text-xl text-white text-center drop-shadow-2xl">
                {title}
              </p>
            </div>
            <p className="lg:text-start font-medium text-sm lg:text-base text-zinc-200 text-justify mt-2">
              {description}
            </p>
          </div>
        </div>
        <div className="p-5 lg:basis-3/5 lg:pl-10 w-[90%] max-w-fit mr-auto ml-auto flex flex-col gap-y-3">
          {services.map((service, index) => (
            <div key={index} className="flex items-start gap-2">
              <span className="w-5 h-5 flex items-center justify-center">
                <Check className="w-5 h-5 text-green-500" />
              </span>
              <p className="text-sm lg:text-base font-semibold text-zinc-800 drop-shadow-sm">
                {service}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const arrayServices = [
    {
      title: t("servicesSection.devService.title"),
      img: developmentImg,
      icon: Code,
      description: t("servicesSection.devService.subTitle"),
      services: t("servicesSection.devService.services", {
        returnObjects: true,
      }),
      reverse: false,
    },
    {
      title: t("servicesSection.desService.title"),
      img: designImg,
      icon: Palette,
      description: t("servicesSection.desService.subTitle"),
      services: t("servicesSection.desService.services", {
        returnObjects: true,
      }),
      reverse: true,
    },
    {
      title: t("servicesSection.markService.title"),
      img: marketingImg,
      icon: ChartNoAxesCombined,
      description: t("servicesSection.markService.subTitle"),
      services: t("servicesSection.markService.services", {
        returnObjects: true,
      }),
      reverse: false,
    },
  ];

  return (
    <section id="container_services" className="dark: relative pb-36 pt-36">
      <div className="m-auto items-center flex flex-col lg:flex-row lg:flex-wrap">
        <div className="mx-auto w-[90%] max-w-4xl mb-12">
          <p className="text-4xl font-extrabold text-center text-zinc-900 mb-5 select-none lg:text-start lg:w-[20em]">
            {t("servicesSection.title")}
          </p>
          <p className="text-lg font-medium text text-zinc-700 mb-7 text-center select-none lg:text-start lg:w-[40em]">
            {t("servicesSection.subTitle")}
          </p>
        </div>

        {arrayServices.map((service, index) => (
          <ServiceCard
            key={index}
            img={service.img}
            icon={service.icon}
            title={service.title}
            description={service.description}
            services={service.services}
            reverse={service.reverse}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
