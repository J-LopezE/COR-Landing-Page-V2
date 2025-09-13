import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  useDisclosure,
  Chip,
  Card,
  CardHeader,
  CardBody,
} from "@nextui-org/react";
import {
  Monitor,
  CheckCircle,
  Wifi,
  HardDrive,
  Shield,
  Clock,
} from "lucide-react";
import { Code } from "react-feather";

export const ServicesSection = () => {
  return (
    <section id="servicios" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        <div className="text-center space-y-6 mb-20">
          <Chip
            className="bg-blue-100 text-blue-800 px-6 py-3 text-lg dark:bg-blue-900 dark:text-blue-300"
            variant="flat"
          >
            Nuestros Servicios
          </Chip>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white max-w-4xl mx-auto leading-tight">
            Soluciones Tecnológicas
            <span className="text-blue-600"> Completas</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Ofrecemos una amplia gama de servicios especializados para mantener
            tu tecnología funcionando perfectamente
          </p>
        </div>

        {/* Grid optimizado para pantallas ultra-wide */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6 gap-8">
          <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-blue-50/30 dark:from-gray-800 dark:to-blue-950/30 dark:shadow-xl">
            <CardHeader className="pb-4 flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Monitor className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold">Reparación de PC</h3>
              <p className="text-gray-600 text-start">
                Diagnóstico y reparación completa de computadoras de escritorio
                y portátiles
              </p>
            </CardHeader>
            <CardBody>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Diagnóstico gratuito</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Reparación de hardware</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Instalación de software</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Limpieza interna</span>
                </li>
              </ul>
            </CardBody>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-green-50/30 dark:from-gray-800 dark:to-green-950/30 dark:shadow-xl">
            <CardHeader className="pb-4 flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Code className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold">Desarrollo de Software</h3>
              <p className="text-gray-600 text-start">
                Sistemas y aplicaciones personalizados para tu empresa.
              </p>
            </CardHeader>
            <CardBody>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-500" />
                  <span>Desarrollo de sistemas a medida</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-500" />
                  <span>Diseño y programación de sitios web</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-500" />
                  <span>Landing pages de alto impacto</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-500" />
                  <span>Integraciones y soluciones personalizadas</span>
                </li>
              </ul>
            </CardBody>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-purple-50/30 dark:from-gray-800 dark:to-purple-950/30 dark:shadow-xl">
            {" "}
            <CardHeader className="pb-4 flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Wifi className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold">Redes y Conectividad</h3>
              <p className="text-gray-600 text-start">
                Instalación y configuración de redes domésticas y empresariales
              </p>
            </CardHeader>
            <CardBody>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Instalación de redes WiFi</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Configuración de routers</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Cableado estructurado</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Seguridad de red</span>
                </li>
              </ul>
            </CardBody>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-orange-50/30 dark:from-gray-800 dark:to-orange-950/30 dark:shadow-xl">
            {" "}
            <CardHeader className="pb-4 flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <HardDrive className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold">Recuperación de Datos</h3>
              <p className="text-gray-600 text-start">
                Recuperación profesional de información perdida o dañada
              </p>
            </CardHeader>
            <CardBody>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Discos duros dañados</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Memorias USB</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Tarjetas SD</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Respaldo de datos</span>
                </li>
              </ul>
            </CardBody>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-red-50/30 dark:from-gray-800 dark:to-red-950/30 dark:shadow-xl">
            {" "}
            <CardHeader className="pb-4 flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold">Seguridad Informática</h3>
              <p className="text-gray-600 text-start">
                Protección contra virus, malware y amenazas digitales
              </p>
            </CardHeader>
            <CardBody>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Eliminación de virus</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Instalación de antivirus</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Configuración de firewall</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Auditorías de seguridad</span>
                </li>
              </ul>
            </CardBody>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-teal-50/30 dark:from-gray-800 dark:to-teal-950/30 dark:shadow-xl">
            {" "}
            <CardHeader className="pb-4 flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-teal-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold">Mantenimiento Preventivo</h3>
              <p className="text-gray-600 text-start">
                Mantenimiento regular para prevenir fallas y optimizar
                rendimiento
              </p>
            </CardHeader>
            <CardBody>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Limpieza profunda</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Actualización de software</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Optimización del sistema</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Planes de mantenimiento</span>
                </li>
              </ul>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
};
