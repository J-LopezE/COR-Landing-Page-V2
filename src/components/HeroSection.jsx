import React, { useState, useEffect } from "react";
import { Button, Image, Chip, Card, CardBody } from "@nextui-org/react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, ArrowRight, CheckCircle, Award } from "lucide-react";

// Datos del carrusel

export const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden dark:from-gray-900 dark:via-blue-950 dark:to-indigo-950"
    >
      {/* Elementos decorativos */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 animate-pulse" />
      <div className="absolute top-1/2 -left-40 w-60 h-60 bg-indigo-200 rounded-full opacity-20 animate-pulse delay-1000" />
      <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-purple-200 rounded-full opacity-20 animate-pulse delay-2000" />

      <div className="max-w-8xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center mt-8">
          {/* Texto principal */}
          <div className="lg:col-span-7 space-y-8">
            <Chip
              variant="flat"
              className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 border-blue-200 px-4 py-2 dark:from-blue-900 dark:to-indigo-900 dark:text-blue-300 dark:border-blue-700"
              startContent={<Zap className="w-4 h-4" />}
            >
              Más de 8 años de experiencia
            </Chip>

            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold text-gray-900 dark:text-white leading-tight">
              Expertos en
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block">
                Tecnología
              </span>
              <span className="text-4xl lg:text-5xl xl:text-6xl text-gray-700 dark:text-gray-300 font-light">
                y Computación
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
              Soluciones tecnológicas integrales para hogares y empresas.
              Reparación, mantenimiento y venta de equipos de cómputo con
              garantía y soporte especializado.
            </p>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg"
                endContent={<ArrowRight className="ml-2 h-5 w-5" />}
              >
                <a href="#servicios">Ver Servicios</a>
              </Button>
              <Button
                size="lg"
                variant="bordered"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 bg-white/80 backdrop-blur-sm shadow-lg px-8 py-4 text-lg dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900 dark:bg-gray-800/80"
              >
                <a href="#contacto">Cotización Gratuita</a>
              </Button>
            </div>

            {/* Estadísticas */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              {[
                {
                  value: "100+",
                  label: "Clientes Satisfechos",
                  color: "text-blue-600",
                },
                {
                  value: "8+",
                  label: "Años de Experiencia",
                  color: "text-green-600",
                },
                {
                  value: "24/7",
                  label: "Soporte Técnico",
                  color: "text-purple-600",
                },
              ].map((stat, i) => (
                <div key={i} className="text-center group">
                  <div
                    className={`text-4xl lg:text-5xl font-bold ${stat.color} group-hover:scale-110 transition-transform`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm lg:text-base text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Imagen principal */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
              <Image
                src="./public/server.webp"
                alt="Técnico especializado reparando computadora"
                className="rounded-3xl shadow-2xl border border-white/20"
              />
            </div>

            {/* Etiquetas flotantes */}
            <Card className="absolute top-10 -left-6 shadow-xl animate-bounce">
              <CardBody className="flex items-center space-x-3 p-4">
                <CheckCircle className="h-8 w-8 text-green-500" />
                <div>
                  <div className="font-semibold text-gray-900">Diagnóstico</div>
                  <div className="text-sm text-gray-600">Gratuito</div>
                </div>
              </CardBody>
            </Card>

            <Card className="absolute bottom-10 -right-6 shadow-xl animate-bounce delay-1000">
              <CardBody className="flex items-center space-x-3 p-4">
                <Award className="h-8 w-8 text-blue-500" />
                <div>
                  <div className="font-semibold text-gray-900">Garantía</div>
                  <div className="text-sm text-gray-600">Asegurada</div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
