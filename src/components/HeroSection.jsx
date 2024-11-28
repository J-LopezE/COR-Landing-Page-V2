import React, { useState, useEffect } from "react";
import { Button, Image } from "@nextui-org/react";
import { motion, AnimatePresence } from "framer-motion";

// Datos del carrusel
const items = [
  {
    title: "Transforma tu empresa con COR Computadoras",
    subtitle: "Soluciones que impulsan el corazón de tu empresa",
    description:
      "En COR Computadoras, ofrecemos soporte técnico y soluciones tecnológicas personalizadas que optimizan tus operaciones y potencian el crecimiento empresarial.",
    image: "/server.webp",
  },
  {
    title: "Soporte Técnico Profesional",
    subtitle: "Mantén tus sistemas funcionando sin interrupciones",
    description:
      "Nuestro equipo experto garantiza un soporte técnico confiable, minimizando tiempos de inactividad y asegurando la continuidad operativa de tus sistemas en todo momento.",
    image: "/network.webp",
  },
  {
    title: "Desarrollo de Software a Medida",
    subtitle: "Innovación tecnológica adaptada a tus necesidades",
    description:
      "Diseñamos soluciones de software personalizadas que mejoran la productividad, automatizan procesos y se ajustan a los objetivos específicos de tu empresa.",
    image: "/developer.webp",
  },
  {
    title: "Cámaras de Vigilancia Inteligentes",
    subtitle: "Seguridad avanzada para proteger lo que más importa",
    description:
      "Ofrecemos soluciones de vigilancia modernas con cámaras de alta definición, proporcionando monitoreo continuo y acceso remoto para hogares y negocios.",
    image: "/camera.webp",
  },
];

export const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Carrusel automático
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 7000); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <section className="relative  h-auto gap-10 py-10 sm:py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-5 mb-10 gap-20">
        <div className="flex flex-col md:flex-row items-center mb-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2 space-y-4 text-text px-2 sm:px-4"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 font-montserrat text-center md:text-left">
                {items[currentIndex].title}
              </h1>
              <h2 className="text-lg sm:text-xl italic mb-8 font-open-sans text-center md:text-left">
                {items[currentIndex].subtitle}
              </h2>
              <p className="text-base sm:text-lg mb-6 font-open-sans text-justify max-w-prose mx-auto sm:mx-0">
                {items[currentIndex].description}
              </p>
              <div className="text-center md:text-left">
                <Button
                  color="primary"
                  onClick={() => (window.location.href = "#servicios")}
                  className="bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300"
                >
                  Descubre Más
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Imagen del carrusel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
            >
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
                <div className="absolute inset-0 rounded-lg filter blur-2xl transform rotate-6 "></div>
                <Image
                  isZoomed
                  src={items[currentIndex].image}
                  alt={`${items[currentIndex].title} - COR Computadoras`}
                  className="rounded-lg"
                  style={{ maxWidth: "100%", maxHeight: "300px" }}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {items.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-blue-600" : "bg-blue-300"
            } transition-all duration-300`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Ir a la diapositiva ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
