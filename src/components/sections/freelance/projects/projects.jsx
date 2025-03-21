import React from "react";
import tempImg from "../../../../assets/pictures/development-services-img.jpg";

const Projects = () => {
  return (
    <section className="dark: pb-36 pt-36">
      <div className="mr-auto ml-auto w-[90%] max-w-4xl">
        <p className="text-4xl font-extrabold text-center text-zin-950 mb-5 select-none lg:text-start lg:w-[20em]">
          Os Serviços que Impulsionam o Teu Negócio no Digital
        </p>
        <p className="text-lg font-medium text text-zinc-800 mb-7 text-center select-none lg:text-start lg:w-[38em]">
          Com uma abordagem estratégica e personalizada, ajudo a transformar a
          presença online da tua marca, desde o desenvolvimento até ao marketing
          digital.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        <div
          className="flex flex-col h-96 max-w-80 w-[90%] relative"
          style={{
            background: `url(${tempImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="w-full h-full">
            <div className="bg-red-700 absolute bottom-0 flex flex-col w-[80%] p-5 ">
              <p className="text-white text-wrap font-semibold text-xl ">
                Dra. Rute Matos
              </p>
              <p className="text-white text-wrap font-light text-xl mb-3">
                Criação de Website
              </p>
              <button className="w-fit flex bg-red-600 pt-2 pb-2 pr-6 pl-6 text-white self-end">
                More Information
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
