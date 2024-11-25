import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import { AnimatedSection } from "./AnimatedSection.jsx";
import LogoCapama from "../img/capama_r.webp";
import LogoCe from "../img/ceenergy.webp";
import LogoAyuntamiento from "../img/LOGOCENTRO.webp";
import LogoCortinas from "../img/cortinasSaucedo.webp";

const clients = [
  { name: "CAPAMA", logo: LogoCapama },
  { name: "CE Energy", logo: LogoCe },
  { name: "H. Ayuntamiento", logo: LogoAyuntamiento },
  { name: "Cortinas Saucedo", logo: LogoCortinas },
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

        {/* Carrusel con tarjetas */}
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
                <Card
                  isHoverable
                  isPressable
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  className="rounded-2xl shadow-lg transition-transform transform hover:scale-105"
                  style={{
                    maxWidth: "18rem",
                    backgroundColor: "var(--nextui-colors-cardBackground)",
                  }}
                >
                  <CardHeader className="flex justify-center items-center">
                    <Image
                    isBlurred
                      src={clients[activeIndex].logo}
                      alt={`Logo de ${clients[activeIndex].name}`}
                      className="w-40 h-40 object-contain"
                    />
                  </CardHeader>
                  <CardBody>
                    <h3 className="text-center font-bold text-lg text-primary">
                      {clients[activeIndex].name}
                    </h3>
                  </CardBody>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Botones de selección */}
          <div className="flex justify-center mt-8 space-x-2">
            {clients.map((_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex
                    ? "bg-primary"
                    : "bg-gray-400 dark:bg-gray-600"
                }`}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-live="polite"
              />
            ))}
          </div>
        </div>

        {/* Logos de clientes como cuadrícula */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-5"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {clients.map((client, index) => (
            <Card
              key={index}
              isHoverable
              className="rounded-lg shadow-md flex items-center justify-center p-4"
              style={{
                backgroundColor: "var(--nextui-colors-cardBackground)",
              }}
            >
              <Image
              isBlurred
                src={client.logo}
                alt={`Logo de ${client.name}`}
                className="w-24 h-24 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </Card>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
};
