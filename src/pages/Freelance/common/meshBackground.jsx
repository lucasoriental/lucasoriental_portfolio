import { motion } from "framer-motion";

const MeshBackground = () => {
  return (
    <div className="absolute overflow-hidden -z-10 inset-0">
      <div className="bg-gradient-to-t from-red-700 to-red-600 inset-0 absolute" />

      <motion.div
        className="absolute w-96 h-96 bg-red-400 rounded-full filter blur-3xl opacity-70 z-auto"
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
        className="absolute w-96 h-96 bg-red-500 rounded-full filter blur-3xl opacity-70 top-1/2 left-1/2"
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
        className="absolute w-96 h-96 bg-red-300 rounded-full filter blur-3xl opacity-80 bottom-0 right-0"
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
    </div>
  );
};

export default MeshBackground;
