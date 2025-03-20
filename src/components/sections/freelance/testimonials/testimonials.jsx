import React from "react";

const Testimonials = () => {
  return (
    <div className="bg-neutral-300 w-screen max-w-[90%] mr-auto ml-auto pt-24 pb-24">
      <p className="text-center text-2xl font-black mb-3">
        Avaliações dos Clientes
      </p>
      <p className="text-center mb-10">Descrição desta secção</p>
      <div className="flex flex-wrap justify-start gap-4">
        <div className="flex flex-col max-w-96 w-[90%]  mr-auto ml-auto border-gray-950 border rounded-lg bg-gray-50 p-5">
          {/* <img src="#" alt="profile" /> */}
          <div className="flex items-center">
            <canvas className="bg-green-300 rounded-full w-24 h-24" />
            <div className="ml-4 ">
              <p className="text-lg font-bold">Nome da Pessoa</p>
              <p className="text-sm font-medium">2023</p>
            </div>
          </div>
          <p className="text-sm text-justify font-light mt-3">
            "Avaliar os alunos, esconder os resultados O parecer do Conselho
            Nacional de Educação (CNE) sobre as provas que, por estes dias,
            começam a ser testadas no ensino básico, bem como as declarações de
            voto que o acompanham, mostram de forma clara as divisões que
            existem quando se fala de avaliação."
          </p>
        </div>
        <div className="flex flex-col max-w-96 w-[90%]  mr-auto ml-auto border-gray-950 border rounded-lg bg-gray-50 p-5">
          {/* <img src="#" alt="profile" /> */}
          <div className="flex items-center">
            <canvas className="bg-green-300 rounded-full w-24 h-24" />
            <div className="ml-4 ">
              <p className="text-lg font-bold">Nome da Pessoa</p>
              <p className="text-sm font-medium">2023</p>
            </div>
          </div>
          <p className="text-sm text-justify font-light mt-3">
            "Avaliar os alunos, esconder os resultados O parecer do Conselho
            Nacional de Educação (CNE) sobre as provas que, por estes dias,
            começam a ser testadas no ensino básico, bem como as declarações de
            voto que o acompanham, mostram de forma clara as divisões que
            existem quando se fala de avaliação."
          </p>
        </div>
        <div className="flex flex-col max-w-96 w-[90%]  mr-auto ml-auto border-gray-950 border rounded-lg bg-gray-50 p-5">
          {/* <img src="#" alt="profile" /> */}
          <div className="flex items-center">
            <canvas className="bg-green-300 rounded-full w-24 h-24" />
            <div className="ml-4 ">
              <p className="text-lg font-bold">Nome da Pessoa</p>
              <p className="text-sm font-medium">2023</p>
            </div>
          </div>
          <p className="text-sm text-justify font-light mt-3">
            "Avaliar os alunos, esconder os resultados O parecer do Conselho
            Nacional de Educação (CNE) sobre as provas que, por estes dias,
            começam a ser testadas no ensino básico, bem como as declarações de
            voto que o acompanham, mostram de forma clara as divisões que
            existem quando se fala de avaliação."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
