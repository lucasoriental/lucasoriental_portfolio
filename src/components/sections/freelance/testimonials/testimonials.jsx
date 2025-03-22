import React from "react";
//import tempPic from "../../../../assets/pictures/profile_photo_1.jpg";

import TestimonialCarousel from "./testimonialsCarousel";

const Testimonials = () => {
  return (
    <section className="dark: pb-36 pt-36 bg-red-600">
      <div className="w-screen max-w-[90%] mr-auto ml-auto">
        <div className="mr-auto ml-auto w-[90%] max-w-4xl">
          <p className="text-4xl font-extrabold text-center text-white mb-5 select-none lg:text-end lg:w-[20em] mx-auto">
            Avaliações de Clientes e Colegas Profissionais
          </p>
          <p className="text-lg font-medium text-zinc-200 mb-7 text-center select-none lg:text-end lg:w-[40em] mx-auto">
            As avaliações seguintes são um reflexo do meu modo de trabalho,
            ficarei muito contente em trabalhar consigo e obter uma avaliação
            similar ou ainda melhor!
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <TestimonialCarousel />
          {/*<figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 max-w-3xl w-[90%]">
                     <img
                       className="w-40 lg:h-full object-cover md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                       src={tempPic}
                       alt=""
                     />
                     <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                       <blockquote>
                         <p className="text-lg font-medium">
                           “Tailwind CSS is the only framework that I've seen scale on
                           large teams. It’s easy to customize, adapts to any design, and
                           the build size is tiny.”
                         </p>
                       </blockquote>
                       <figcaption className="font-medium">
                         <div className="text-sky-500 dark:text-sky-400">
                           Sarah Dayan
                         </div>
                         <div className="text-slate-700 dark:text-slate-500">
                           Staff Engineer, Algolia
                         </div>
                       </figcaption>
                     </div>
                   </figure> */}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
