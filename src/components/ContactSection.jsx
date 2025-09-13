import React, { useState } from "react";
import { Mail, Phone, MessageCircle } from "lucide-react";

import { Button, Card, CardBody, CardHeader, Chip } from "@nextui-org/react";

export const ContactSection = () => {
  const whatsappPhoneNumber = "525614226132";

  return (
    <section
      id="contacto"
      className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden"
    >
      {/* Elementos decorativos */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-purple-500 rounded-full opacity-10 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-8xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center space-y-6 mb-20">
          <Chip className="bg-blue-600 text-white px-6 py-3 text-lg">
            Contacto
          </Chip>
          <h2 className="text-4xl lg:text-6xl font-bold max-w-4xl mx-auto leading-tight">
            ¿Necesitas Ayuda con tu
            <span className="text-blue-400"> Tecnología?</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Contáctanos hoy mismo y recibe una cotización gratuita para tu
            proyecto. Estamos aquí para ayudarte.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <CardHeader className="pb-6 flex flex-col items-center justify-center">
              <div className="w-16 h-16 mx-auto bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6">
                <Phone className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-white text-2xl">Teléfono</h3>
              <p className="text-gray-300 text-lg">
                Llámanos para soporte inmediato
              </p>
            </CardHeader>
            <CardBody>
              <p className="text-blue-400 font-bold text-xl text-center">
                +52(559) 296-4653
              </p>
              <Button
                className="mt-4 bg-blue-600 hover:bg-blue-700"
                size="sm"
                radius="lg"
              >
                <a href="tel:+5592964653">Llamar Ahora</a>
              </Button>
            </CardBody>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <CardHeader className="pb-6 flex flex-col items-center justify-center">
              <div className="w-16 h-16 mx-auto bg-green-500/20 rounded-2xl flex items-center justify-center mb-6">
                <MessageCircle className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-white text-2xl">WhatsApp</h3>
              <p className="text-gray-300 text-lg">
                Chatea con nosotros al instante
              </p>
            </CardHeader>
            <CardBody>
              <p className="text-green-400 font-bold text-xl text-center">
                +52(561)422-6132
              </p>
              <Button className="mt-4 bg-green-600 hover:bg-green-700">
                <a
                  href={`https://wa.me/${whatsappPhoneNumber}?text=${encodeURIComponent(
                    "Hola, me gustaría una cotización gratuita."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Abrir WhatsApp
                </a>
              </Button>
            </CardBody>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <CardHeader className="pb-6 flex flex-col items-center justify-center">
              <div className="w-16 h-16 mx-auto bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6">
                <Mail className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-white text-2xl">Email</h3>
              <p className="text-gray-300 text-lg">
                Envíanos un mensaje detallado
              </p>
            </CardHeader>
            <CardBody>
              <p className="text-purple-400 font-bold text-xl text-center">
                contacto@corcomputadoras.com
              </p>
              <Button className="mt-4 bg-purple-600 hover:bg-purple-700">
                <a href="mailto:contacto@corcomputadoras.com">Enviar Email</a>
              </Button>
            </CardBody>
          </Card>
        </div>

        <div className="text-center ">
           
        </div>
      </div>
    </section>
  );
};
