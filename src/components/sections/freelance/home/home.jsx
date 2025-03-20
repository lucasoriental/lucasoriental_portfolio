import React from "react";
import iphoneMockup from "../../../../assets/mockups_renderizados/iphone14-em-pe.png";

import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <div className="dark: pt-36">
      <div className="w-[90%] max-w-3xl m-auto items-center flex flex-col lg:flex-row">
        <div className="flex flex-col items-center bg-cyan-500">
          <h1 className="text-4xl font-extrabold text text-zinc-900 mb-5 text-center select-none lg:text-start transition-shadow duration-500">
            Transformo a tua ideia num negócio digital{" "}
            <span className="text-red-500 font-black transition-shadow duration-500">
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
          <p className="text-lg font-medium text text-zinc-900 mb-7  text-center select-none lg:text-start transition-shadow duration-500">
            Não precisas fazer tudo sozinho – juntos, podemos criar a estratégia
            certa para o teu negócio brilhar no digital.
          </p>
          <div className="bg-green-500 lg:flex lg:justify-center">
            <button className="flex bg-red-600 pt-3 pb-3 w-64 justify-center border-none rounded-xl mb-5">
              <p className="text-white text-sm font-light">
                Solicitar um orçamento{" "}
                <span className="font-medium">gratuito</span>
              </p>
            </button>
            <button className="flex bg-gray-300 pt-3 pb-3 w-64 justify-center rounded-xl mb-5">
              <p className="text-red-600 font-normal text-sm">
                Ver meus Serviços
              </p>
            </button>
          </div>
        </div>
        <img
          src={iphoneMockup}
          alt="Profile"
          className="h-72 mt-11 bg-green-500"
          /* id="image-home" */
        />
      </div>
    </div>
  );
};

export default Home;
