import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardBody, ScrollShadow, Button } from "@nextui-org/react";
import { Laptop, Server, Code } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection.jsx";

export const ServicesSection = () => {
  return (
    <AnimatedSection className="py-20 bg-blue-100">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">
          Servicios
        </h2>
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Soporte Técnico Avanzado */}
          <motion.div whileHover={{ scale: 1.02 }}>
            <Card className="overflow-hidden group">
              <CardHeader className="bg-gradient-to-r from-[#0048aa] to-[#006cac] text-white p-6 relative">
                <Laptop className="w-12 h-12 mb-4 relative z-10" />
                <h3 className="text-xl font-semibold mb-2 relative z-10">
                  Soporte Técnico Avanzado
                </h3>
              </CardHeader>
              <CardBody className="p-6 bg-white text-blue-800 relative">
                <ScrollShadow hideScrollBar className="w-full h-[160px]">
                  <p>Asistencia experta y soluciones rápidas.</p>
                </ScrollShadow>
              </CardBody>
            </Card>
          </motion.div>

          {/* Gestión de Infraestructura Cloud */}
          <motion.div whileHover={{ scale: 1.02 }}>
            <Card className="overflow-hidden group">
              <CardHeader className="bg-[#006cac] text-white p-6 relative">
                <Server className="w-12 h-12 mb-4 relative z-10" />
                <h3 className="text-xl font-semibold mb-2 relative z-10">
                  Gestión de Infraestructura Cloud
                </h3>
              </CardHeader>
              <CardBody className="p-6 bg-white text-blue-800 relative">
                <ScrollShadow hideScrollBar className="w-full h-[160px]">
                  <p>Optimización y mantenimiento de tu infraestructura de TI.</p>
                </ScrollShadow>
              </CardBody>
            </Card>
          </motion.div>

          {/* Desarrollo de Software Personalizado */}
          <motion.div whileHover={{ scale: 1.02 }}>
            <Card className="overflow-hidden group">
              <CardHeader className="bg-gradient-to-r from-[#006cac] to-[#0048aa] text-white p-6 relative">
                <Code className="w-12 h-12 mb-4 relative z-10" />
                <h3 className="text-xl font-semibold mb-2 relative z-10">
                  Desarrollo de Software Personalizado
                </h3>
              </CardHeader>
              <CardBody className="p-6 bg-white text-blue-800 relative">
                <ScrollShadow hideScrollBar className="w-full h-[160px]">
                  <p>
                    Nuestro propósito es entregar soluciones tecnológicas de
                    vanguardia que se alinean perfectamente con las necesidades
                    y objetivos estratégicos de cada cliente. Nos especializamos
                    en desarrollar herramientas precisas y eficientes, diseñadas
                    para maximizar el rendimiento y garantizar que cada
                    inversión genere resultados tangibles y medibles en el tiempo.
                  </p>
                  <Button color="primary" type="submit" className="mt-2">
                    Descubre Más
                  </Button>
                </ScrollShadow>
              </CardBody>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};
