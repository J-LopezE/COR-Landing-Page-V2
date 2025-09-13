import React from "react";
import { Star, Users, Clock, Shield, Award } from "lucide-react";
import { Chip, Image } from "@nextui-org/react";

export const AboutSection = () => {
  return (
    <section id="nosotros" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6">
              <Chip
                className="bg-blue-100 text-blue-800 px-6 py-3 text-lg dark:bg-blue-900 dark:text-blue-300"
                size="lg"
              >
                Sobre Nosotros
              </Chip>
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Expertos en Tecnología con
                <span className="text-blue-600 dark:text-blue-400">
                  {" "}
                  Más de 8 Años
                </span>{" "}
                de Experiencia
              </h2>
              <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed">
                En COR Computadoras nos especializamos en brindar soluciones
                tecnológicas integrales. Nuestro equipo de técnicos certificados
                cuenta con amplia experiencia en reparación, mantenimiento,
                venta de equipos de cómputo y desarrollo de software.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl dark:from-blue-950 dark:to-blue-900/50">
                {" "}
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Equipo Especializado
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Técnicos certificados con años de experiencia en el sector
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl dark:from-green-950 dark:to-green-900/50">
                {" "}
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Servicio Rápido
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Diagnóstico y reparación en el menor tiempo posible
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-2xl dark:from-purple-950 dark:to-purple-900/50">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Garantía Asegurada
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Todos nuestros servicios incluyen garantía completa
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-2xl dark:from-orange-950 dark:to-orange-900/50">
                <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Calidad Certificada
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Reconocimientos y certificaciones de calidad
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-6 pt-6">
              <div className="flex items-center space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="h-6 w-6 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-lg text-gray-600 font-medium">
                4.9/5 basado en 200+ reseñas
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur-2xl opacity-20"></div>
              <Image
                src="/placeholder.svg?height=600&width=500&text=Equipo+de+técnicos+profesionales+en+laboratorio+moderno"
                alt="Equipo de técnicos profesionales de COR Computadoras"
                width={500}
                height={600}
                className="rounded-3xl shadow-2xl relative z-10 border border-white/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
