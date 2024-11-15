import React from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection.jsx";
import LogoCapama from "../img/capama_r.webp";
import LogoCe from "../img/ceenergy.webp";
import LogoAyuntamiento from "../img/LOGOCENTRO.webp";
import LogoCortinas from "../img/cortinas.webp";

export const ProjectsSection = () => {
  return (
    <AnimatedSection className="py-20 bg-blue-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">
        Empresas Líderes que Confían en Nuestros Servicios
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-12">
          <motion.div
            whileHover={{
              scale: 1.7, 
              transition: { type: "spring", stiffness: 200, damping: 20 },
            }}
            className="w-56 h-48 p-4 flex justify-center items-center"
          >
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-lg shadow-lg transition-all duration-300 flex justify-center items-center">
              <img
                src={LogoCapama}
                alt="Logo de CAPAMA"
                className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.7,  
              transition: { type: "spring", stiffness: 200, damping: 20 },
            }}
            className="w-48 h-48 p-4 flex justify-center items-center"
          >
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-lg shadow-lg transition-all duration-300 flex justify-center items-center">
              <img
                src={LogoCe}
                alt="Logo de CE Energy"
                className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.7,  
              transition: { type: "spring", stiffness: 200, damping: 20 },
            }}
            className="w-40 h-48 p-4 flex justify-center items-center"
          >
            <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-lg transition-all duration-300 flex justify-center items-center">
              <img
                src={LogoAyuntamiento}
                alt="Logo del Ayuntamiento"
                className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.7,  
              transition: { type: "spring", stiffness: 200, damping: 20 },
            }}
            className="w-52  h-48 p-4 flex justify-center items-center"
          >
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-lg shadow-lg transition-all duration-300 flex justify-center items-center">
              <img
                src={LogoCortinas}
                alt="Logo de Socio 4"
                className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};
