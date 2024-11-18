import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection.jsx";
import LogoCapama from "../img/capama_r.webp";
import LogoCe from "../img/ceenergy.webp";
import LogoAyuntamiento from "../img/LOGOCENTRO.webp";
import LogoCortinas from "../img/cortinas.webp";

const clients = [
  { name: "CAPAMA", logo: LogoCapama },
  { name: "CE Energy", logo: LogoCe },
  { name: "Ayuntamiento", logo: LogoAyuntamiento },
  { name: "Cortinas", logo: LogoCortinas },
];

export const ProjectsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering) {
        setActiveIndex((prevIndex) => (prevIndex + 1) % clients.length);
      }
    }, 3000); 
    return () => clearInterval(interval);
  }, [isHovering]);

  return (
    <AnimatedSection className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-5 text-text"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Empresas Líderes que Confían en Nuestros Servicios
        </motion.h2>

        <div className="relative h-80">
          <div className="flex justify-center items-center h-80">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                transition={{ duration: 0.5 }}
                className="absolute"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  onHoverStart={() => setIsHovering(true)}
                  onHoverEnd={() => setIsHovering(false)}
                  className="bg-dark-glass backdrop-blur-lg dark:bg-light-glass dark:backdrop-blur-lg p-2 rounded-2xl shadow-2xl"
                >
                  <img
                    src={clients[activeIndex].logo}
                    alt={`Logo de ${clients[activeIndex].name}`}
                    className="w-64 h-64 object-contain"
                  />
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {clients.map((_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex ? "bg-light" : "bg-primary"
                }`}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-live="polite" 
              />
            ))}
          </div>
        </div>

        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-5"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="bg-dark-glass backdrop-blur-lg dark:bg-light-glass dark:backdrop-blur-lg p-2 rounded-lg flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={client.logo}
                alt={`Logo de ${client.name}`}
                className="w-24 h-24 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
};
