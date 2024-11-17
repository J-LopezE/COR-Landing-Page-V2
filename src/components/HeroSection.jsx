import React from "react";
import { Button, Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import ImgServer from "../img/server.webp";
import { useTheme } from "next-themes";

export const HeroSection = () => {
  const { theme } = useTheme();
  const backgroundColor = theme === "dark" ? "#034aa6" : "#0f6ca7";
  return (
    <section className=" text-white py-20 md:py-32 relative overflow-hidden" style={{
      
      backgroundColor: backgroundColor, // Cambiar el color de fondo según el tema
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      {" "}
      <div className=" mx-auto px-4 flex flex-col md:flex-row items-center relative z-10 ">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 font-montserrat"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Soluciones que impulsan el corazón de tu empresa.
          </motion.h1>
          <motion.p
            className="text-xl mb-10 font-open-sans"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Innovación tecnológica a tu alcance
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button
              color="secondary"
              type="submit"
              onClick={() => (window.location.href = "#servicios")}
            >
              Descubre Más
            </Button>
          </motion.div>
        </div>
        <motion.div
          className="md:w-1/2"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="relative">
            <div className="absolute inset-0  rounded-lg filter blur-2xl  transform rotate-6"></div>
            <Image
              isBlurred
              isZoomed
              src={ImgServer}
              alt="Innovación Tecnológica"
              className="m-5"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
