import React from "react";
import background1 from "../../../../assets/pictures/backgrounds/pic1.jpg";

const Cta1 = () => {
  return (
    <div className="w-screen h-60 lg:h-96 flex relative">
      <div
        className="absolute inset-0 grayscale"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${background1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(100%)",
        }}
      />
      <p className="text-white max-w-96 w-[90%] mx-auto font-base text-xl self-center relative z-10">
        "Se o teu negócio não está na Internet, então o teu negócio estará fora
        dos negócios."{" "}
        <span className="text-white text-xl font-bold">~ Bill Gates</span>
      </p>
    </div>
  );
};

export default Cta1;
