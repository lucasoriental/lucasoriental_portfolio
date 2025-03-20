import React from "react";
import { PlusCircle } from "lucide-react";

const Projects = () => {
  return (
    <div className="pt-24 pb-24 max-w-[90%] mr-auto ml-auto">
      <p className="text-center text-2xl font-black mb-3">Título da Seção</p>
      <p className="text-center">Sub-Título da Seção</p>
      {/* <div>
        <p>Desenvolvimento/Programação</p>
        <div className="bg-gray-200 w-[90%] max-w-96 pb-5 pt-5 flex flex-col justify-center items-center mr-auto ml-auto">
          <canvas className="bg-gray-500 w-52 h-52" />
          <p>Título do Projeto 1</p>
          <p className="text-md font-medium text-justify w-[90%]">
            Breve explicação sobre o projeto trabalhado e um hook para clicar no
            seguinte botão:
          </p>
          <button className="flex bg-red-600 text-white pr-5 pl-5 pt-2 pb-2 w-fit rounded-full text-sm items-center">
            <PlusCircle className="mr-2 w-5" />
            Mais Informações
          </button>
        </div>
      </div> */}
      <div className="flex flex-wrap justify-center gap-10">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mt-5">
          <canvas className="bg-gray-800 w-full" />
          <div className="p-5">
            <h5 className="mb-2 text-xl font-bold">Título de Projeto 1</h5>
            <p className="mb-3 font-normal text-gray-950 dark:text-gray-400">
              Descrição do Projeto 1 em questão
            </p>
            <button className="flex bg-red-600 pt-2 pb-2 pr-6 pl-6 text-white rounded-full">
              <PlusCircle className="mr-2" />
              More Information
            </button>
          </div>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mt-5">
          <canvas className="bg-gray-800 w-full" />
          <div className="p-5">
            <h5 className="mb-2 text-xl font-bold">Título de Projeto 1</h5>
            <p className="mb-3 font-normal text-gray-950 dark:text-gray-400">
              Descrição do Projeto 1 em questão
            </p>
            <button className="flex bg-red-600 pt-2 pb-2 pr-6 pl-6 text-white rounded-full">
              <PlusCircle className="mr-2" />
              More Information
            </button>
          </div>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mt-5">
          <canvas className="bg-gray-800 w-full" />
          <div className="p-5">
            <h5 className="mb-2 text-xl font-bold">Título de Projeto 1</h5>
            <p className="mb-3 font-normal text-gray-950 dark:text-gray-400">
              Descrição do Projeto 1 em questão
            </p>
            <button className="flex bg-red-600 pt-2 pb-2 pr-6 pl-6 text-white rounded-full">
              <PlusCircle className="mr-2" />
              More Information
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
