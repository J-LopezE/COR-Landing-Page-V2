import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, Eye } from "lucide-react";
import { TabSelector } from "../components/TabSelector";
import { Card, CardBody, CardHeader, CardFooter } from "@nextui-org/react";

const content = {
  mission: {
    title: "Misión",
    content:
      "Nuestra misión es crear soluciones innovadoras diseñadas para satisfacer necesidades únicas de cada cliente mediante el desarrollo web e infraestructura tecnológica a través del diagnóstico, instalación y mantenimiento de plataformas, optimizando y asegurando el rendimiento y eficiencia de sus procesos operativos o administrativos.",
    icon: Compass,
  },
  vision: {
    title: "Visión",
    content:
      "En COR Computadoras, aspiramos a transformarnos en la empresa líder del sector de la infraestructura tecnológica, la seguridad digital y las redes de comunicación con presencia a nivel nacional; asegurando la eficiencia y continuidad operativa de cada uno de nuestros clientes, generando vínculos sólidos a largo plazo. Asimismo, buscamos el desarrollo integral de nuestro capital humano, quien es el corazón de nuestras operaciones, para impactar positivamente no solo nuestra labor empresarial, sino también la sociedad en su conjunto.",
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
    <section id="sobre-nosotros" className="py-10 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-text">
          Nuestra Esencia
        </h2>
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full lg:w-2/3 min-h-[350px] flex flex-col justify-between"
            >
              <Card
                className="rounded-2xl shadow-xl bg-cardBackground text-text  shadow-card dark:bg-cardBackground dark:text-cardText"
                
              >
                <CardHeader className="flex justify-center items-center">
                  {content[activeTab]?.icon &&
                    React.createElement(content[activeTab].icon, {
                      size: 64,
                      className: "",
                    })}
                </CardHeader>
                <CardBody>
                  <h3 className="text-3xl font-bold text-center  mb-4">
                    {content[activeTab]?.title}
                  </h3>
                  <p className="leading-relaxed  text-justify">
                    {content[activeTab]?.content}
                  </p>
                </CardBody>
                <CardFooter className="text-center">
                  <p className="text-sm italic text-text">
                  </p>
                </CardFooter>
              </Card>
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
