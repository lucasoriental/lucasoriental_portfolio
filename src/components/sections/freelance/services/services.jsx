import React from "react";
import { Check, Code, Palette, ChartNoAxesCombined } from "lucide-react";
import developmentImg from "../../../../assets/pictures/development-services-img.jpg";
import designImg from "../../../../assets/pictures/design-services-image.jpg";
import marketingImg from "../../../../assets/pictures/marketing-services-img.jpg";

import MeshBackground from "./meshBackground";

const Services = () => {
  const arrayServices = [
    {
      title: "Desenvolvimento/Programação",
      img: developmentImg,
      icon: Code,
      services: {},
    },
  ];

  return (
    <section className="dark: relative pb-36 pt-36">
      <MeshBackground />
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
        <div className="flex flex-wrap justify-center items-center mx-auto">
          <div className="w-screen">
            <div className="flex flex-col lg:flex-row items-center lg:w-fit lg:gap-7 mx-auto lg:px-32 lg:py-5 lg:bg-zinc-100 lg:bg-opacity-50 rounded-2xl">
              <div
                className="lg:basis-1/5 max-w-96 rounded-xl h-52 mt-5 mb-5 w-[90%] shadow-xl"
                style={{
                  background: `url(${developmentImg})`,
                  backgroundSize: "cover",
                }}
              >
                <div className="p-5 bg-red-950 bg-opacity-80 h-full text-zinc-100 rounded-xl">
                  <div className="flex items-center">
                    <Code />
                    <p className="ml-3 lg:text-start font-bold text-base lg:text-xl text-white-800 text-center">
                      Desenvolvimento/Programação
                    </p>
                  </div>
                  <p className="lg:text-start font-medium text-sm lg:text-base text-zinc-300 text-justify">
                    Transforme a tua presença online com soluções personalizadas
                    e de alta qualidade para o teu negócio digital.
                  </p>
                </div>
              </div>

              <div className="p-5 lg:basis-3/5 lg:pl-10 w-[90%] max-w-fit mr-auto ml-auto">
                <div className="flex items-center">
                  <Check className="w-5 mr-2 text-green-500" />
                  <p className="text-justify text-sm font-semibold text-zinc-800 drop-shadow-sm">
                    Criação de Websites Completos
                  </p>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 mr-2 text-green-500" />
                  <p className="text-justify text-sm font-semibold text-zinc-800 drop-shadow-sm">
                    Criação de Comércios Online (E-commerce)
                  </p>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 mr-2 text-green-500" />
                  <p className="text-justify text-sm font-semibold text-zinc-800 drop-shadow-sm">
                    Criação de Landing Pages
                  </p>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 mr-2 text-green-500" />
                  <p className="text-justify text-sm font-semibold text-zinc-800 drop-shadow-sm">
                    Criação de Aplicações Móveis
                  </p>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 mr-2 text-green-500" />
                  <p className="text-justify text-sm font-semibold text-zinc-800 drop-shadow-sm">
                    Manutenção de Websites já Existentes
                  </p>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 mr-2 text-green-500" />
                  <p className="text-justify text-sm font-semibold text-zinc-800 drop-shadow-sm">
                    Criação de Portfólios Digitais
                  </p>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 mr-2 text-green-500" />
                  <p className="text-justify text-sm font-semibold text-zinc-800 drop-shadow-sm">
                    Criação de Páginas de Eventos
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-screen">
            <div className="flex flex-col lg:flex-row-reverse items-center lg:w-fit lg:gap-7 mx-auto lg:px-32 lg:py-5 lg:bg-zinc-100 lg:bg-opacity-50 rounded-2xl">
              <div
                className="lg:basis-4/5 max-w-96 rounded-xl h-52 mt-5 mb-5 w-[90%] shadow-xl"
                style={{
                  background: `url(${designImg})`,
                  backgroundSize: "cover",
                }}
              >
                <div className="p-5 bg-red-950 bg-opacity-80  h-full text-zinc-100 rounded-xl">
                  <div className="flex items-center">
                    <Palette />
                    <p className="ml-3 lg:text-start font-bold text-base lg:text-xl text-white-800 text-center">
                      Design
                    </p>
                  </div>
                  <p className="lg:text-start font-medium text-sm lg:text-base text-zinc-200 text-justify">
                    Dê vida à identidade visual da tua marca com designs
                    criativos e que encantam os teus clientes.
                  </p>
                </div>
              </div>
              <div className="p-5 basis-2/5 lg:pl-10 w-[90%] max-w-fit mr-auto ml-auto">
                <div className="flex items-center justify-end ">
                  <p className="text-end text-sm font-semibold text-zinc-800 drop-shadow-sm">
                    Criação de Interface para Websites
                  </p>
                  <Check className="w-5 ml-2 text-green-500" />
                </div>
                <div className="flex items-center justify-end">
                  <p className="text-end text-sm font-semibold text-zinc-800 drop-shadow-sm">
                    Criação de Interface para Aplicações Móveis
                  </p>
                  <Check className="w-5 ml-2 text-green-500" />
                </div>
                <div className="flex items-center justify-end">
                  <p className="text-end text-sm font-semibold text-zinc-800 drop-shadow-sm">
                    Criação de Páginas Web Específicas
                  </p>
                  <Check className="w-5 ml-2 text-green-500" />
                </div>
                <div className="flex items-center justify-end">
                  <p className="text-end text-sm font-semibold text-zinc-800 drop-shadow-sm">
                    Criação de Posts para Redes Sociais
                  </p>
                  <Check className="w-5 ml-2 text-green-500" />
                </div>
                <div className="flex items-center justify-end">
                  <p className="text-end text-sm font-semibold text-zinc-800 drop-shadow-sm">
                    Criação de Banners e Thumbnails
                  </p>
                  <Check className="w-5 ml-2 text-green-500" />
                </div>
                <div className="flex items-center justify-end">
                  <p className="text-end text-sm font-semibold text-zinc-800 drop-shadow-sm">
                    Criação de Flyers e Folders
                  </p>
                  <Check className="w-5 ml-2 text-green-500" />
                </div>
                <div className="flex items-center justify-end">
                  <p className="text-end text-sm font-semibold text-zinc-800 drop-shadow-sm">
                    Criação de Cartões Empresariais
                  </p>
                  <Check className="w-5 ml-2 text-green-500" />
                </div>
                <div className="flex items-center justify-end">
                  <p className="text-end text-sm font-semibold text-zinc-800 drop-shadow-sm">
                    Criação de Apresentações Digitais (Slides)
                  </p>
                  <Check className="w-5 ml-2 text-green-500" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-screen">
            <div className="flex flex-col lg:flex-row items-center lg:w-fit lg:gap-7 mx-auto lg:px-32 lg:py-5 lg:bg-zinc-100 lg:bg-opacity-50 rounded-2xl">
              <div
                className="lg:basis-2/5 max-w-96 rounded-xl h-52 mt-5 mb-5 w-[90%] shadow-xl"
                style={{
                  background: `url(${marketingImg})`,
                  backgroundSize: "cover",
                }}
              >
                <div className="p-5 bg-red-950 bg-opacity-80  h-full text-zinc-100 rounded-xl">
                  <div className="flex items-center">
                    <ChartNoAxesCombined />
                    <p className="ml-3 lg:text-start font-bold text-base lg:text-xl text-white text-center">
                      Marketing Digital
                    </p>
                  </div>
                  <p className="lg:text-start font-medium text-sm lg:text-base text-zinc-300 text-justify">
                    Amplie o alcance da tua marca e maximize lucros com
                    estratégias eficazes de marketing digital.
                  </p>
                </div>
              </div>

              <div className="p-5 lg:basis-4/5 lg:pl-10 w-[90%] max-w-fit mr-auto ml-auto">
                <div className="flex items-center">
                  <Check className="w-5 mr-2 text-green-500" />
                  <p className="text-justify text-sm font-semibold text-zinc-800 drop-shadow-sm">
                    Gestão de Mídias Sociais
                  </p>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 mr-2 text-green-500" />
                  <p className="text-justify text-sm font-semibold text-zinc-800 drop-shadow-sm">
                    Criação de Loja no Instagram
                  </p>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 mr-2 text-green-500" />
                  <p className="text-justify text-sm font-semibold text-zinc-800 drop-shadow-sm">Gestão de tráfego Pago</p>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 mr-2 text-green-500" />
                  <p className="text-justify text-sm font-semibold text-zinc-800 drop-shadow-sm">
                    Criação de Páginas e Grupos no Facebook
                  </p>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 mr-2 text-green-500" />
                  <p className="text-justify text-sm font-semibold text-zinc-800 drop-shadow-sm">
                    Análise de Resultados de Marketing
                  </p>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 mr-2 text-green-500" />
                  <p className="text-justify text-sm font-semibold text-zinc-800 drop-shadow-sm">
                    Criação e Edição de Reels e TikToks
                  </p>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 mr-2 text-green-500" />
                  <p className="text-justify text-sm font-semibold text-zinc-800 drop-shadow-sm">
                    Criação de Estratégia para maximizar lucro
                  </p>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 mr-2 text-green-500" />
                  <p className="text-justify text-sm font-semibold text-zinc-800 drop-shadow-sm">
                    Criação de Campanhas Online
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
