import React from "react";
import { Check, Code, Palette, ChartNoAxesCombined } from "lucide-react";
import developmentImg from "../../../../assets/images/background-development.jpg";
import designImg from "../../../../assets/images/background-design.jpg";
import marketingImg from "../../../../assets/images/background-marketing.jpg";

const Services = () => {
  // Service Card Component
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
        className={`w-fit flex flex-col lg:flex-row items-center lg:w-fit lg:gap-7 mx-auto lg:px-32 lg:py-5 lg:bg-zinc-100 lg:bg-opacity-50 rounded-2xl ${
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
              <p className="ml-3 lg:text-start font-bold text-base lg:text-xl text-white text-center">
                {title}
              </p>
            </div>
            <p className="lg:text-start font-medium text-sm lg:text-base text-zinc-300 text-justify">
              {description}
            </p>
          </div>
        </div>
        <div className="p-5 lg:basis-3/5 lg:pl-10 w-[90%] max-w-fit mr-auto ml-auto">
          {services.map((service, index) => (
            <div key={index} className="flex items-center">
              <Check className="w-5 mr-2 text-green-500" />
              <p className="text-justify text-sm font-semibold text-zinc-800 drop-shadow-sm">
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
      title: "Desenvolvimento/Programação",
      img: developmentImg,
      icon: Code,
      description:
        "Transforme a tua presença online com soluções personalizadas e de alta qualidade para o teu negócio digital.",
      services: [
        "Criação de Websites Completos",
        "Criação de Comércios Online (E-commerce)",
        "Criação de Landing Pages",
        "Criação de Aplicações Móveis",
        "Manutenção de Websites já Existentes",
        "Criação de Portfólios Digitais",
        "Criação de Páginas de Eventos",
      ],
      reverse: false,
    },
    {
      title: "Design",
      img: designImg,
      icon: Palette,
      description:
        "Dê vida à identidade visual da tua marca com designs criativos e que encantam os teus clientes.",
      services: [
        "Criação de Interface para Websites",
        "Criação de Interface para Aplicações Móveis",
        "Criação de Páginas Web Específicas",
        "Criação de Posts para Redes Sociais",
        "Criação de Banners e Thumbnails",
        "Criação de Flyers e Folders",
        "Criação de Cartões Empresariais",
        "Criação de Apresentações Digitais (Slides)",
      ],
      reverse: true, // This card has the reversed layout (row-reverse)
    },
    {
      title: "Marketing Digital",
      img: marketingImg,
      icon: ChartNoAxesCombined,
      description:
        "Amplie o alcance da tua marca e maximize lucros com estratégias eficazes de marketing digital.",
      services: [
        "Gestão de Mídias Sociais",
        "Criação de Loja no Instagram",
        "Gestão de tráfego Pago",
        "Criação de Páginas e Grupos no Facebook",
        "Análise de Resultados de Marketing",
        "Criação e Edição de Reels e TikToks",
      ],
      reverse: false,
    },
  ];

  return (
    <section className="dark: relative pb-36 pt-36">
      <div className="m-auto items-center flex flex-col lg:flex-row lg:flex-wrap">
        <div className="mx-auto w-[90%] max-w-4xl mb-12">
          <p className="text-4xl font-extrabold text-center text-zinc-900 mb-5 select-none lg:text-start lg:w-[20em]">
            Os Serviços que Impulsionam o Teu Negócio no Digital
          </p>
          <p className="text-lg font-medium text text-zinc-700 mb-7 text-center select-none lg:text-start lg:w-[40em]">
            Com uma abordagem estratégica e personalizada, ajudo a transformar a
            presença online da tua marca, desde o desenvolvimento até ao
            marketing digital.
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
