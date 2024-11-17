import React, {useState} from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection.jsx";
import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import Lupuztech from "../../src/img/lupuztech.webp";
import Crissadata from "../../src/img/crissadata.webp";


const partners = [
  {
    name: "LupuzTech",
    logo: "../../src/img/lupuztech.webp",
    description: "LupuzTech es líder en soluciones de soporte técnico y gestión de infraestructura tecnológica para empresas de todos los tamaños.",
    specialties: ["Soporte Técnico", "Infraestructura Tecnológica", "Automatización de Procesos"]
  },
  {
    name: "CrissaData",
    logo: "../../src/img/crissadata.webp",
    description: "CrissaData se especializa en el análisis y gestión de redes, ofreciendo soluciones integrales para optimizar la conectividad empresarial.",
    specialties: ["Redes", "Soporte Técnico", "Gestión de Infraestructura"]
  },
 
]

export const PartnersSection = () => {
  return (
    <section className="py-15 mb-20">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600">
          Nuestros Socios Estratégicos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 justify-center items-center">
  {/* Tarjetas de socios explícitas */}
  {partners.map((partner, index) => (
    <PartnerCard key={index} partner={partner} index={index} />
  ))}
</div>
        {/* <div className="mt-16 text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Explora Nuestras Alianzas
          </Button>
        </div> */}
      </div>
    </section>
  )
}

function PartnerCard({ partner, index }) {
  return (
    <Card 
      className="overflow-hidden cursor-pointer group"
    >
      <CardBody className="p-6 h-full flex flex-col justify-between z-10">
        <div
          className="transition-all duration-300 filter grayscale group-hover:grayscale-0"
        >
          <img 
            src={partner.logo} 
            alt={`${partner.name} logo`} 
            className="w-full h-40 object-contain mb-4"
          />
        </div>
        <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">{partner.name}</h3>
        <p className="text-sm text-gray-600 text-center">{partner.specialties.join(' • ')}</p>
      </CardBody>
    </Card>
  );
};
