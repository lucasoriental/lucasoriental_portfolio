import React from "react";
import iphoneMockup from "../../../../assets/mockups_renderizados/iphone14-em-pe.png";
import MeshBackground from "./meshBackground";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <main className="dark: relative pt-36 pb-36 lg:h-[calc(100vh*0.9)]">
      <MeshBackground />
      <div className="w-[90%] max-w-4xl m-auto flex flex-col lg:flex-row items-center relative z-10">
        <div className="flex flex-col items-center lg:basis-3/5">
          <h1 className="text-5xl font-extrabold drop-shadow-xl text-center text-white mb-5 select-none lg:text-start">
            Transformo a tua ideia num negócio digital{" "}
            <span
              className="text-white drop-shadow-[0 0 5px text-red-600;] font-black inline-block min-w-32 text-nowrap"
              id="textTempGlow"
            >
              <Typewriter
                words={["de Sucesso!", "Incrível!", "Perfeito!"]}
                loop={true}
                cursor
                cursorStyle=""
                typeSpeed={150}
                deleteSpeed={150}
                delaySpeed={1500}
              />
            </span>
          </h1>
          <p className="text-lg font-medium text-zinc-100 mb-7 text-center select-none lg:text-start">
            Não precisas fazer tudo sozinho – juntos, podemos criar a estratégia
            certa para o teu negócio brilhar no digital.
          </p>
          <div className="lg:flex lg:self-start lg:gap-6 items-center">
            <button className="flex bg-red-600 pt-3 pb-3 w-64 justify-center border-none rounded-xl mb-5 lg:w-fit lg:pl-4 lg:pr-4">
              <p className="text-white text-sm font-light self-center lg:text-xs">
                Solicitar um orçamento{" "}
                <span className="font-medium lg:text-xs">grátis</span>
              </p>
            </button>
            <button className="flex bg-white pt-3 pb-3 w-64 justify-center rounded-xl mb-5 lg:w-44">
              <p className="text-red-600 font-normal text-sm self-center lg:text-xs">
                Ver meus Serviços
              </p>
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center lg:basis-2/5 mt-5 lg:mt-0">
          <img
            src={iphoneMockup}
            alt="Profile"
            className="h-[35em] lg:h-96 mb-5"
            id="image-home"
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
