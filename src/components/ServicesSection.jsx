import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { Laptop, Camera, Code } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection.jsx";

// Definir animaciones de transición y hover
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeInOut" },
};

const hoverEffect = {
  whileHover: { scale: 1.05, transition: { duration: 0.3 } },
};

export const ServicesSection = () => {
  const { isOpen, onOpen, onClose } = useDisclosure(); // Hook de NextUI para abrir/cerrar el modal
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      icon: Laptop,
      title: "Soporte Técnico Avanzado",
      description:
        "Asistencia experta 24/7 para mantener tus sistemas funcionando sin problemas.",
      fullDescription:
        "Nuestro equipo de élite está disponible en todo momento para resolver cualquier problema técnico que puedas enfrentar. Utilizamos tecnología de vanguardia para diagnósticos remotos y soluciones rápidas, garantizando que tu negocio nunca se detenga.",
      color: "from-indigo-500 to-indigo-700", // Gradiente más suave
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      icon: Code,
      title: "Desarrollo de Software Personalizado",
      description:
        "Creamos soluciones tecnológicas innovadoras que transforman tu visión en realidad.",
      fullDescription:
        "Nuestro equipo de desarrolladores de clase mundial crea software a medida que no solo cumple con tus necesidades actuales, sino que también se adapta a tu crecimiento futuro. Desde aplicaciones móviles hasta sistemas empresariales complejos, hacemos que la tecnología trabaje para ti.",
      color: "from-teal-500 to-teal-700", // Gradiente más suave
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      icon: Camera,
      title: "Sistemas de Videovigilancia Inteligente",
      description: "Protección avanzada con IA para hogares y empresas.",
      fullDescription:
        "Nuestros sistemas de videovigilancia utilizan inteligencia artificial para ofrecer una seguridad sin precedentes. Detección facial, análisis de comportamiento y alertas en tiempo real te mantienen un paso adelante de cualquier amenaza potencial.",
      color: "from-gray-600 to-gray-800", // Gradiente más sobrio
      image: "/placeholder.svg?height=400&width=600",
    },
  ];

  // Componente de la tarjeta de servicio
  const ServiceCard = ({ service, onClick, index }) => {
    const Icon = service.icon;
    return (
      <motion.div
        className="relative overflow-hidden rounded-2xl cursor-pointer group"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ scale: 1.05 }}
        onClick={onClick}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-75 group-hover:opacity-90 transition-opacity duration-300`}
        />
        <div className="relative p-8 h-full flex flex-col justify-between z-10">
          <div>
            <Icon className="w-16 h-16 mb-6" />
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p>{service.description}</p>
          </div>
          <motion.div
            className="mt-6"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <span className="text-white font-semibold inline-flex items-center">
              Descubre más
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </motion.div>
        </div>
      </motion.div>
    );
  };

  // Componente del modal de servicio usando NextUI con fondo blur
  const ServiceModal = ({ service, isOpen, onClose }) => {
    if (!service) return null;

    const Icon = service.icon;

    return (
      <Modal backdrop="blur" isOpen={isOpen} onClose={onClose} scroll>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1 text-text">
            {service.title}
          </ModalHeader>
          <ModalBody>
            <div className="mb-6">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <p className="text-text text-lg">{service.fullDescription}</p>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              Cerrar
            </Button>
            <Button
              className={`w-1/8 bg-gradient-to-r ${service.color} text-white font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105`}
              onClick={() => {
                window.location.href = "#contacto";
                onClose();
              }}
            >
              Solicitar este Servicio
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  };

  return (
    <section className="py-20 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-text">
          Servicios que Transforman
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tarjetas de servicios explícitas */}
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              onClick={() => {
                setSelectedService(service);
                onOpen(); // Abrir el modal al hacer clic
              }}
            />
          ))}
        </div>
        <div className="mt-16 text-center">
          <Button
            size="lg"
            color="primary"
            className="hover:scale-105"
            onClick={() => (window.location.href = "#contacto")}
          >
            Contáctanos Ahora
          </Button>
        </div>
      </div>

      {/* Modal de servicio */}
      <ServiceModal
        service={selectedService}
        isOpen={isOpen}
        onClose={onClose}
      />
    </section>
  );
};
