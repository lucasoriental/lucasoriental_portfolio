import React from "react";
import TestimonialCarousel from "./testimonialsCarousel";

const Testimonials = () => {
  return (
    <section className="dark: pb-36 pt-36">
      <div className="w-screen max-w-[90%] mr-auto ml-auto">
        <div className="mx-auto w-[90%] max-w-4xl mb-12">
          <p className="text-4xl font-extrabold text-center text-zinc-900 mb-5 select-none lg:text-start lg:w-[20em]">
            Avaliações de Clientes e Colegas Profissionais
          </p>
          <p className="text-lg font-medium text text-zinc-700 mb-7 text-center select-none lg:text-start lg:w-[40em]">
            As avaliações seguintes são um reflexo do meu modo de trabalho,
            ficarei muito contente em trabalhar consigo e obter uma avaliação
            similar ou ainda melhor!
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <TestimonialCarousel />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
