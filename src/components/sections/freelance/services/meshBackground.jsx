import { motion } from "framer-motion";

const MeshBackground = () => {
  return (
    <div className="absolute overflow-hidden -z-10 inset-0">
      <div className="bg-gradient-to-t from-white to-slate-200 inset-0 absolute" />

      <motion.div
        className="absolute w-96 h-96 bg-red-500 rounded-full filter blur-3xl opacity-50 z-auto"
        animate={{
          x: ["-40%", "40%", "-40%"],
          y: ["-30%", "30%", "-30%"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      <motion.div
        className="absolute w-96 h-96 bg-red-400 rounded-full filter blur-3xl opacity-50 top-1/4 left-1/4"
        animate={{
          x: ["0%", "60%", "0%"],
          y: ["0%", "60%", "0%"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      <motion.div
        className="absolute w-96 h-96 bg-red-600 rounded-full filter blur-3xl opacity-50 top-1/2 left-1/2"
        animate={{
          rotate: [0, 360],
          x: ["0%", "50%", "0%"],
          y: ["0%", "50%", "0%"],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      <motion.div
        className="absolute w-96 h-96 bg-orange-400 rounded-full filter blur-3xl opacity-50 bottom-1/4 right-1/4"
        animate={{
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      <motion.div
        className="absolute w-96 h-96 bg-pink-400 rounded-full filter blur-3xl opacity-50 top-1/4 right-1/4"
        animate={{
          x: ["0%", "-50%", "0%"],
          y: ["0%", "-50%", "0%"],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      <motion.div
        className="absolute w-96 h-96 bg-red-700 rounded-full filter blur-3xl opacity-50 top-0 left-0"
        animate={{
          x: ["0%", "100%", "0%"],
          y: ["100%", "0%", "100%"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      <motion.div
        className="absolute w-96 h-96 bg-rose-500 rounded-full filter blur-3xl opacity-50 top-2/3 left-1/3"
        animate={{
          x: ["-30%", "30%", "-30%"],
          y: ["-40%", "40%", "-40%"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      <motion.div
        className="absolute w-96 h-96 bg-red-800 rounded-full filter blur-3xl opacity-50 bottom-1/2 left-1/2"
        animate={{
          rotate: [0, 360],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      <motion.div
        className="absolute w-96 h-96 bg-pink-300 rounded-full filter blur-3xl opacity-50 top-1/4 left-2/3"
        animate={{
          x: ["-20%", "20%", "-20%"],
          y: ["20%", "-20%", "20%"],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      <motion.div
        className="absolute w-96 h-96 bg-red-900 rounded-full filter blur-3xl opacity-50 top-1/2 right-1/4"
        animate={{
          scale: [1, 1.3, 1],
          y: ["-50%", "50%", "-50%"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      <motion.div
        className="absolute w-96 h-96 bg-orange-500 rounded-full filter blur-3xl opacity-50 top-3/4 left-1/2"
        animate={{
          rotate: [0, 360],
          x: ["0%", "50%", "0%"],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      {/*
      <motion.div
        className="absolute w-96 h-96 bg-red-300 rounded-full filter blur-3xl opacity-50 z-auto"
        animate={{
          x: ["-40%", "40%", "-40%"],
          y: ["-30%", "30%", "-30%"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      <motion.div
        className="absolute w-96 h-96 bg-red-400  rounded-full filter blur-3xl opacity-50 top-1/2 left-1/2"
        animate={{
          x: ["40%", "-40%", "40%"],
          y: ["30%", "-30%", "30%"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      <motion.div
        className="absolute w-96 h-96 bg-red-300 rounded-full filter blur-3xl opacity-50 bottom-0 right-0"
        animate={{
          x: ["0%", "100%", "0%"],
          y: ["100%", "0%", "100%"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />*/}
    </div>
  );
};

export default MeshBackground;
