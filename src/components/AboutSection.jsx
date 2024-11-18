import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, Eye } from "lucide-react";
import { TabSelector } from "../components/TabSelector";

const content = {
  mission: {
    title: "Misión",
    content:
      "En COR Computadoras, aspiramos a transformarnos en la empresa líder del sector de la infraestructura tecnológica, la seguridad digital y las redes de comunicación con presencia a nivel nacional; asegurando la eficiencia y continuidad operativa de cada uno de nuestros clientes, generando vínculos sólidos a largo plazo. Asimismo, buscamos el desarrollo integral de nuestro capital humano, quien es el corazón de nuestras operaciones, para impactar positivamente no solo nuestra labor empresarial, sino también la sociedad en su conjunto.",
    icon: Compass,
  },
  vision: {
    title: "Visión",
    content:
      "En nuestra empresa trabajamos cada día para generar un entorno organizacional estimulante y positivo donde cada colaborador que forme parte de la familia COR Computadoras se sienta valorado y parte de un gran equipo. Creemos que la vivencia de valores como la integridad, honestidad, pasión, inclusión, innovación y curiosidad es fundamental para construir un equipo sólido y motivado. Nuestro propósito es que cada miembro de nuestro capital humano crezca, se capacite y disfrute de su trabajo en un clima sano que fomente la colaboración y la proactividad de modo que brinde soluciones para nuestros clientes, pero también vías de desarrollo y éxito para esta familia.",
    icon: Eye,
  },
};

export const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("mission");
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering) {
        setActiveTab((prev) => (prev === "mission" ? "vision" : "mission"));
      }
    }, 10000);
    return () => clearInterval(interval);
  }, [isHovering]);

  return (
    <section
    id="sobre-nosotros"
    className="py-20 overflow-hidden"
  >
    <div className="container mx-auto px-4 flex flex-col justify-center">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-text">
        Nuestra Esencia
      </h2>
      <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ rotateY: -90 }}  
            animate={{ rotateY: 0 }}    
            exit={{ rotateY: 90 }}      
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full lg:w-2/3"
          >
            <div
              className="bg-dark-glass backdrop-blur-lg dark:bg-light-glass dark:backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden"
              style={{ minHeight: "400px" }}  
            >
              <div className="p-6">
                <motion.div
                  className="flex items-center justify-center mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, rotateY: 360 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {content[activeTab]?.icon &&
                    React.createElement(content[activeTab].icon, {
                      size: 64,
                      className: "text-blue-900",
                    })}
                </motion.div>
                <h3 className="text-3xl font-bold mb-4 text-center text-blue-900">
                  {content[activeTab]?.title}
                </h3>
                <p className="leading-relaxed text-blue-900">
                  {content[activeTab]?.content}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="w-full lg:w-1/3 ">
          <TabSelector
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            setIsHovering={setIsHovering}
          />
        </div>
      </div>
    </div>
  </section>  );
};
