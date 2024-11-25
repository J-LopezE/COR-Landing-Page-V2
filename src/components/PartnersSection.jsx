import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody } from "@nextui-org/react";

import Lupuztech from "../../src/img/lupuztech.webp";
import Crissadata from "../../src/img/crissadata.webp";

const partners = [
  {
    name: "LupuzTech",
    logo: Lupuztech,
    description: "LupuzTech es líder en soluciones de soporte técnico y gestión de infraestructura tecnológica para empresas de todos los tamaños.",
    specialties: ["Soporte Técnico", "Infraestructura Tecnológica", "Automatización de Procesos"]
  },
  {
    name: "CrissaData",
    logo: Crissadata,
    description: "CrissaData se especializa en el análisis y gestión de redes, ofreciendo soluciones integrales para optimizar la conectividad empresarial.",
    specialties: ["Redes", "Soporte Técnico", "Gestión de Infraestructura"]
  },
];

export const PartnersSection = () => {
  return (
    <section className="py-20 mb-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-5 text-text">
          Nuestros Socios Estratégicos
        </h2>
        <p className="text-center mb-10 text-text">
          Trabajamos con los mejores para ofrecerte soluciones tecnológicas de vanguardia.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 justify-center items-center">
          {partners.map((partner, index) => (
            <PartnerCard key={index} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  );
};

function PartnerCard({ partner }) {
  return (
<Card 
  className="overflow-hidden group p-6 rounded-lg 
    bg-cardBackground text-text shadow-card dark:bg-cardBackground dark:text-cardText transition-shadow duration-300"
>
      <CardBody className="p-4 h-full flex flex-col justify-between ">
        <motion.div
          className="transition-all duration-300 filter grayscale group-hover:grayscale-0"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          <img 
            src={partner.logo} 
            alt={`${partner.name} logo`} 
            className="w-full h-40 object-contain mb-4"
          />
        </motion.div>
        <h3 className="text-xl font-semibold text-center text-text mb-2">{partner.name}</h3>
        <p className="text-sm text-center text-text">
          {partner.specialties.join(' • ')}
        </p>
      </CardBody>
    </Card>
  );
}
