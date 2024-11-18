import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, Eye } from "lucide-react";
import { TabSelector } from "../components/TabSelector";

const content = {
  mission: {
    title: "Misión",
    content:
      "En COR Computadoras, aspiramos a ser la empresa líder en infraestructura tecnológica, seguridad digital y redes de comunicación, con presencia a nivel nacional. Buscamos la eficiencia y continuidad operativa de nuestros clientes, generando vínculos sólidos a largo plazo, y desarrollando a nuestro capital humano para impactar positivamente en nuestra labor empresarial y la sociedad.",
    icon: Compass,
  },
  vision: {
    title: "Visión",
    content:
      "Trabajamos para crear un ambiente organizacional positivo donde cada miembro se sienta valorado y parte de un equipo sólido. Promovemos valores como integridad, honestidad, pasión e innovación, con el fin de ofrecer soluciones que fomenten el crecimiento tanto para nuestros empleados como para nuestros clientes.",
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
    }, 10000); // Cambia entre Misión y Visión cada 10 segundos
    return () => clearInterval(interval);
  }, [isHovering]);

  return (
    <section id="sobre-nosotros" className="py-20 overflow-hidden bg-gray-50 dark:bg-gray-900">
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
              <div className="bg-white dark:bg-gray-800 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden">
                <div className="p-6">
                  <motion.div
                    className="flex items-center justify-center mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    {content[activeTab]?.icon &&
                      React.createElement(content[activeTab].icon, {
                        size: 64,
                        className: "text-blue-900 dark:text-blue-400",
                      })}
                  </motion.div>
                  <h3 className="text-3xl font-bold mb-4 text-center text-blue-900 dark:text-blue-400">
                    {content[activeTab]?.title}
                  </h3>
                  <p className="leading-relaxed text-gray-900 dark:text-gray-300">
                    {content[activeTab]?.content}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="w-full lg:w-1/3">
            <TabSelector
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              setIsHovering={setIsHovering}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
