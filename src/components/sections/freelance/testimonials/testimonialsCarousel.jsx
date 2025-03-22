import { useState } from "react";
import { motion } from "framer-motion";

import tempPic from "../../../../assets/pictures/profile_photo_1.jpg";


const testimonials = [
  {
    img: tempPic,
    quote:
      "Tailwind CSS is the only framework that I've seen scale on large teams. It’s easy to customize, adapts to any design, and the build size is tiny.",
    name: "Sarah Dayan",
    position: "Staff Engineer, Algolia",
  },
  {
    img: tempPic,
    quote:
      "I’ve been using Tailwind CSS for the past two years, and it has completely changed the way I build interfaces.",
    name: "Adam Wathan",
    position: "Creator of Tailwind CSS",
  },
  {
    img: tempPic,
    quote:
      "Tailwind CSS makes styling so much easier, and the developer experience is just fantastic!",
    name: "Guillermo Rauch",
    position: "CEO, Vercel",
  },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <div className="flex flex-col items-center w-full max-w-3xl">
      <motion.figure
        key={index}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
        className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 w-[90%]"
      >
        <img
          className="w-40 lg:h-full object-cover md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src={testimonials[index].img}
          alt={testimonials[index].name}
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">“{testimonials[index].quote}”</p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              {testimonials[index].name}
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              {testimonials[index].position}
            </div>
          </figcaption>
        </div>
      </motion.figure>

      {/* Botões de Navegação */}
      <div className="flex gap-4 mt-4">
        <button onClick={prevSlide} className="px-4 py-2 bg-gray-300 rounded">
          {"<"}
        </button>
        <button onClick={nextSlide} className="px-4 py-2 bg-gray-300 rounded">
          {">"}
        </button>
      </div>
    </div>
  );
}
