import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Button, Tooltip } from "@nextui-org/react";
import { X, MessageCircle } from "react-feather";

export const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumber = "525614226132";
  const openWhatsApp = (message) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
    setIsOpen(false);
  };

  const quickMessages = [
    "Hola, necesito ayuda con mi computadora 💻",
    "Quiero una cotización para reparación 🔧",
    "Información sobre sus servicios 📋",
    "Consulta sobre productos disponibles 🛒",
  ];

  return (
    <>
      {/* Botón flotante principal */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="h-14 w-10 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-100 animate-pulse"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <MessageCircle className="h-6 w-6 text-white" />
          )}
        </Button>
      </div>

      {/* Panel de mensajes rápidos */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 bg-white rounded-2xl shadow-2xl border p-4 w-80 animate-in slide-in-from-bottom-5">
          <div className="space-y-3">
            <div className="text-center">
              <h3 className="font-semibold text-gray-900">¡Hola! 👋</h3>
              <p className="text-sm text-gray-600">¿En qué podemos ayudarte?</p>
            </div>

            <div className="space-y-2">
              {quickMessages.map((message, index) => (
                <button
                  key={index}
                  onClick={() => openWhatsApp(message)}
                  className="w-full text-left p-3 rounded-lg bg-gray-50 hover:bg-green-50 hover:border-green-200 border border-transparent transition-colors text-sm"
                >
                  {message}
                </button>
              ))}
            </div>

            <button
              onClick={() =>
                openWhatsApp("Hola, tengo una consulta personalizada")
              }
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg font-medium transition-colors"
            >
              Escribir mensaje personalizado
            </button>
          </div>
        </div>
      )}
    </>
  );
};
