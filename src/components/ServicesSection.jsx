import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { Laptop, Server, Code } from "lucide-react";
import {AnimatedSection} from "./AnimatedSection.jsx";

export const ServicesSection = () => {
  return (
    <AnimatedSection  className="py-20 bg-blue-100" >
      <div  className="container mx-auto px-4">
        <h2  className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900" >Servicios</h2>
        <motion.div className="grid md:grid-cols-3 gap-8 ">
          
          <motion.div whileHover={{ scale: 1.02 }} >
            <Card className="overflow-hidden group">
              <CardHeader className="bg-gradient-to-r from-[#0048aa] to-[#006cac] text-white p-6 relative">
                <Laptop className="w-12 h-12 mb-4 relative z-10" />
                <h3 className="text-xl font-semibold mb-2 relative z-10">Soporte Técnico Avanzado</h3>
              </CardHeader>
              <CardBody className="p-6 bg-white text-blue-800 relative">
                <p>Asistencia experta y soluciones rápidas.</p>
              </CardBody>
            </Card>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }}>
            <Card className="overflow-hidden group">
              <CardHeader className="bg-[#006cac] text-white p-6 relative">
                <Server className="w-12 h-12 mb-4 relative z-10" />
                <h3 className="text-xl font-semibold mb-2 relative z-10">Gestión de Infraestructura Cloud</h3>
              </CardHeader>
              <CardBody className="p-6 bg-white text-blue-800 relative">
                <p>Optimización y mantenimiento de tu infraestructura de TI.</p>
              </CardBody>
            </Card>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }}>
            <Card className="overflow-hidden group">
              <CardHeader className="bg-gradient-to-r from-[#006cac] to-[#0048aa] text-white p-6 relative">
                <Code className="w-12 h-12 mb-4 relative z-10" />
                <h3 className="text-xl font-semibold mb-2 relative z-10">Desarrollo de Software Personalizado</h3>
              </CardHeader>
              <CardBody className="p-6 bg-white text-blue-800 relative">
                <p>Creación de soluciones de software a medida.</p>
              </CardBody>
            </Card>
          </motion.div>

        </motion.div>
      </div>
    </AnimatedSection>
  );
};
