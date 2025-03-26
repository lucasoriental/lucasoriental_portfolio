import { useState, useRef } from "react";
import { motion } from "framer-motion";

import tempPic from "../../../../assets/images/home-profile.jpg";

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
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const deltaX = touchStartX.current - touchEndX.current;

    if (deltaX > 50) {
      nextSlide();
    } else if (deltaX < -50) {
      prevSlide();
    }
  };

  return (
    <div
      className="flex flex-col items-center max-w-3xl overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <motion.figure
        key={index}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
        className="md:flex bg-red-600 rounded-xl p-8 md:p-0 dark:bg-slate-800 w-[90%]"
      >
        <img
          className="w-40 lg:h-full object-cover md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src={testimonials[index].img}
          alt={testimonials[index].name}
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium text-white">
              “{testimonials[index].quote}”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-white dark:text-sky-400">
              {testimonials[index].name}
            </div>
            <div className="text-zinc-300 dark:text-slate-500">
              {testimonials[index].position}
            </div>
          </figcaption>
        </div>
      </motion.figure>

      {/* Botões de Navegação */}
      <div className="flex gap-4 pt-10">
        <button
          onClick={prevSlide}
          className="px-4 py-2 rounded-full bg-red-600 text-white"
        >
          {"<"}
        </button>
        <button
          onClick={nextSlide}
          className="px-4 py-2 rounded-full bg-red-600 text-white"
        >
          {">"}
        </button>
      </div>
    </div>
  );
}
