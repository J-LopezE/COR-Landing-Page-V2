import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardBody, Button } from "@nextui-org/react";
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
  const [selectedService, setSelectedService] = useState(null)

  const services = [
    {
      icon: Laptop,
      title: "Soporte Técnico Avanzado",
      description: "Asistencia experta 24/7 para mantener tus sistemas funcionando sin problemas.",
      fullDescription: "Nuestro equipo de élite está disponible en todo momento para resolver cualquier problema técnico que puedas enfrentar. Utilizamos tecnología de vanguardia para diagnósticos remotos y soluciones rápidas, garantizando que tu negocio nunca se detenga.",
      color: "from-blue-400 to-blue-600",
      image: "/placeholder.svg?height=400&width=600"
    },
    {
      icon: Code,
      title: "Desarrollo de Software Personalizado",
      description: "Creamos soluciones tecnológicas innovadoras que transforman tu visión en realidad.",
      fullDescription: "Nuestro equipo de desarrolladores de clase mundial crea software a medida que no solo cumple con tus necesidades actuales, sino que también se adapta a tu crecimiento futuro. Desde aplicaciones móviles hasta sistemas empresariales complejos, hacemos que la tecnología trabaje para ti.",
      color: "from-purple-400 to-purple-600",
      image: "/placeholder.svg?height=400&width=600"
    },
    {
      icon: Camera,
      title: "Sistemas de Videovigilancia Inteligente",
      description: "Protección avanzada con IA para hogares y empresas.",
      fullDescription: "Nuestros sistemas de videovigilancia utilizan inteligencia artificial para ofrecer una seguridad sin precedentes. Detección facial, análisis de comportamiento y alertas en tiempo real te mantienen un paso adelante de cualquier amenaza potencial.",
      color: "from-teal-400 to-teal-600",
      image: "/placeholder.svg?height=400&width=600"
    }
  ]

  // Componente de la tarjeta de servicio
  const ServiceCard = ({ service, onClick, index }) => {
    const Icon = service.icon
    return (
      <motion.div
        className="relative overflow-hidden rounded-2xl cursor-pointer group"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ scale: 1.05 }}
        onClick={onClick}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-75 group-hover:opacity-90 transition-opacity duration-300`} />
        <div className="relative p-8 h-full flex flex-col justify-between z-10">
          <div>
            <Icon className="w-16 h-16 text-white mb-6" />
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-gray-200">{service.description}</p>
          </div>
          <motion.div 
            className="mt-6"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <span className="text-white font-semibold inline-flex items-center">
              Descubre más
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </motion.div>
        </div>
      </motion.div>
    )
  }

  // Componente del modal de servicio
  const ServiceModal = ({ service, isOpen, onClose }) => {
    if (!service) return null

    const Icon = service.icon

    return (
      <Dialog open={isOpen} onClose={onClose}>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="bg-white rounded-2xl overflow-hidden max-w-3xl w-full shadow-2xl">
                <div className={`p-6 bg-gradient-to-r ${service.color} text-white`}>
                  <div className="flex justify-between items-center">
                    <h3 className="text-3xl font-bold flex items-center gap-3">
                      <Icon className="w-8 h-8" />
                      {service.title}
                    </h3>
                    <Button 
                      auto
                      icon={<X className="w-6 h-6" />}
                      onClick={onClose}
                      color="error"
                      rounded
                    />
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <img src={service.image} alt={service.title} className="w-full h-64 object-cover rounded-lg" />
                  </div>
                  <p className="text-gray-700 text-lg mb-6">{service.fullDescription}</p>
                  <Button 
                    className={`w-full bg-gradient-to-r ${service.color} text-white font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105`}
                  >
                    Solicitar este Servicio
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Dialog>
    )
  }

  return (
    <section className="py-24  text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400">
          Servicios que Transforman
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tarjetas de servicios explícitas */}
          <ServiceCard
            service={services[0]}
            index={0}
            onClick={() => setSelectedService(services[0])}
          />
          <ServiceCard
            service={services[1]}
            index={1}
            onClick={() => setSelectedService(services[1])}
          />
          <ServiceCard
            service={services[2]}
            index={2}
            onClick={() => setSelectedService(services[2])}
          />
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
      <ServiceModal
        service={selectedService}
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  )
}