import React from "react";
import { Check, Code, Palette, ChartNoAxesCombined } from "lucide-react";

const Services = () => {
  return (
    <section className="dark: pb-36 pt-36 bg-red-600">
      <div className="w-[90%] max-w-4xl m-auto items-center flex flex-col lg:flex-row lg:flex-wrap">
        <p className="text-4xl font-extrabold text-center text-zinc-900 mb-5 select-none lg:text-start">
          Os Serviços que Impulsionam o Teu Negócio no Digital
        </p>
        <p className="text-lg font-medium text text-zinc-500 mb-7 text-center select-none lg:text-start">
          Com uma abordagem estratégica e personalizada, ajudo a transformar a
          presença online da tua marca, desde o desenvolvimento até ao marketing
          digital.
        </p>
        <div className="flex gap-5 flex-wrap">
          <div className="flex flex-col justify-center items-center w-[90%] max-w-96 mr-auto ml-auto">
            <div className="mt-5 flex items-center">
              <Code />
              <p className="ml-3 text-justify font-bold text-xl">
                Desenvolvimento/Programação
              </p>
            </div>
            <p className="text-justify font-medium text-md mb-2">
              Transforme a tua presença online com soluções personalizadas e de
              alta qualidade para o teu negócio digital.
            </p>
            <div>
              <div className="flex items-center">
                <Check className="w-5 mr-2" />
                <p className="text-justify text-sm">
                  Criação de Websites Completos
                </p>
              </div>
              <div className="flex items-center">
                <Check className="w-5 mr-2" />
                <p className="text-justify text-sm">
                  Criação de Comércios Online (E-commerce)
                </p>
              </div>
              <div className="flex items-center">
                <Check className="w-5 mr-2" />
                <p className="text-justify text-sm">Criação de Landing Pages</p>
              </div>
              <div className="flex items-center">
                <Check className="w-5 mr-2" />
                <p className="text-justify text-sm">
                  Criação de Aplicações Móveis
                </p>
              </div>
              <div className="flex items-center">
                <Check className="w-5 mr-2" />
                <p className="text-justify text-sm">
                  Manutenção de Websites já Existentes
                </p>
              </div>
              <div className="flex items-center">
                <Check className="w-5 mr-2" />
                <p className="text-justify text-sm">
                  Criação de Portfólios Digitais
                </p>
              </div>
              <div className="flex items-center">
                <Check className="w-5 mr-2" />
                <p className="text-justify text-sm">
                  Criação de Páginas de Eventos
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-[90%] max-w-96 mr-auto ml-auto">
            <div className="mt-5 flex items-center">
              <Palette />
              <p className="ml-3 text-justify font-bold text-xl">Design</p>
            </div>
            <p className="text-justify font-medium text-md mb-2">
              Dê vida à identidade visual da tua marca com designs criativos e
              que encantam os teus clientes.
            </p>
            <div>
              <div className="flex items-center">
                <Check className="w-5 mr-2" />
                <p className="text-justify text-sm">
                  Criação de Interface para Websites
                </p>
              </div>
              <div className="flex items-center">
                <Check className="w-5 mr-2" />
                <p className="text-justify text-sm">
                  Criação de Interface para Aplicações Móveis
                </p>
              </div>
              <div className="flex items-center">
                <Check className="w-5 mr-2" />
                <p className="text-justify text-sm">
                  Criação de Páginas Web Específicas
                </p>
              </div>
              <div className="flex items-center">
                <Check className="w-5 mr-2" />
                <p className="text-justify text-sm">
                  Criação de Posts para Redes Sociais
                </p>
              </div>
              <div className="flex items-center">
                <Check className="w-5 mr-2" />
                <p className="text-justify text-sm">
                  Criação de Banners e Thumbnails
                </p>
              </div>
              <div className="flex items-center">
                <Check className="w-5 mr-2" />
                <p className="text-justify text-sm">
                  Criação de Flyers e Folders
                </p>
              </div>
              <div className="flex items-center">
                <Check className="w-5 mr-2" />
                <p className="text-justify text-sm">
                  Criação de Cartões Empresariais
                </p>
              </div>
              <div className="flex items-center">
                <Check className="w-5 mr-2" />
                <p className="text-justify text-sm">
                  Criação de Apresentações Digitais (Slides)
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-[90%] max-w-96 mr-auto ml-auto">
            <div className="mt-5 flex items-center">
              <ChartNoAxesCombined />
              <p className="ml-3 text-justify font-bold text-xl">
                Marketing Digital
              </p>
            </div>
            <p className="text-justify font-medium text-md mb-2">
              Amplie o alcance da tua marca e maximize lucros com estratégias
              eficazes de marketing digital.
            </p>
            <div>
              <div className="flex items-center">
                <Check className="w-5 mr-2" />
                <p className="text-justify text-sm">Gestão de Mídias Sociais</p>
              </div>
              <div className="flex items-center">
                <Check className="w-5 mr-2" />
                <p className="text-justify text-sm">
                  Criação de Loja no Instagram
                </p>
              </div>
              <div className="flex items-center">
                <Check className="w-5 mr-2" />
                <p className="text-justify text-sm">Gestão de tráfego Pago</p>
              </div>
              <div className="flex items-center">
                <Check className="w-5 mr-2" />
                <p className="text-justify text-sm">
                  Criação de Páginas e Grupos no Facebook
                </p>
              </div>
              <div className="flex items-center">
                <Check className="w-5 mr-2" />
                <p className="text-justify text-sm">
                  Análise de Resultados de Marketing
                </p>
              </div>
              <div className="flex items-center">
                <Check className="w-5 mr-2" />
                <p className="text-justify text-sm">
                  Criação e Edição de Reels e TikToks
                </p>
              </div>
              <div className="flex items-center">
                <Check className="w-5 mr-2" />
                <p className="text-justify text-sm">
                  Criação de Estratégia para maximizar lucro
                </p>
              </div>
              <div className="flex items-center">
                <Check className="w-5 mr-2" />
                <p className="text-justify text-sm">
                  Criação de Campanhas Online
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
