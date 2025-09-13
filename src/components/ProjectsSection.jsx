import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardHeader, CardBody, Image, Chip} from "@nextui-org/react";
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
      <section
        id="clientes"
        className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-gray-900 dark:to-blue-950/30"
      >
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="text-center space-y-6 mb-20">
            <Chip className="bg-purple-100 text-purple-800 px-6 py-3 text-lg dark:bg-purple-900 dark:text-purple-300">
              Nuestros Clientes
            </Chip>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white max-w-4xl mx-auto leading-tight">
              Confían en
              <span className="text-purple-600 dark:text-purple-400"> Nuestra Experiencia</span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Hemos tenido el privilegio de trabajar con diversas empresas y particulares, brindando soluciones
              tecnológicas de alta calidad.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 items-center justify-center">
            {/* Placeholder Logos */}
            <div className="flex items-center justify-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 dark:bg-gray-800">
              <Image
                src="../../src/img/capama_r.webp"
                alt="Logo Empresa A"
                width={150}
                height={80}
                className="object-contain h-20 w-full dark:invert"
              />
            </div>
            <div className="flex items-center justify-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 dark:bg-gray-800">
              <Image
                src="../../src/img/ceenergy.webp"
                alt="Logo Empresa B"
                width={150}
                height={80}
                className="object-contain h-20 w-full dark:invert"
              />
            </div>
            <div className="flex items-center justify-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 dark:bg-gray-800">
              <Image
                src="../../src/img/LOGOCENTRO.webp"
                alt="Logo Empresa C"
                width={150}
                height={80}
                className="object-contain h-20 w-full dark:invert"
              />
            </div>
            <div className="flex items-center justify-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 dark:bg-gray-800">
              <Image
                src="../../src/img/cortinasSaucedo.webp"
                alt="Logo Empresa D"
                width={150}
                height={80}
                className="object-contain h-20 w-full dark:invert"
              />
            </div>
            <div className="flex items-center justify-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 dark:bg-gray-800">
              <Image
                src="../../src/img/crissadata.webp"
                alt="Logo Empresa E"
                width={150}
                height={80}
                className="object-contain h-20 w-full dark:invert"
              />
            </div>
            <div className="flex items-center justify-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 dark:bg-gray-800">
              <Image
                src="../../src/img/lupuztech.webp"
                alt="Logo Empresa F"
                width={150}
                height={80}
                className="object-contain h-20 w-full dark:invert"
              />
            </div>
          </div>
        </div>
      </section>
  );
};
