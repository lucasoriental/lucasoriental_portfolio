import React from "react";
import background2 from "../../../../assets/pictures/backgrounds/pic2.jpg";

const Cta2 = () => {
  return (
    <div className="w-screen h-60 lg:h-96 flex relative">
      <div
        className="absolute inset-0 grayscale"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${background2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(100%)",
        }}
      />
      <p className="text-white max-w-96 w-[90%] mx-auto font-base text-xl self-center relative z-10 text-end">
        "A inovação é a chave para o sucesso em qualquer negócio, e a internet é
        a plataforma onde ela acontece."{" "}
        <span className="text-white text-xl font-bold">~ Sundar Pichai</span>
      </p>
    </div>
  );
};

export default Cta2;
