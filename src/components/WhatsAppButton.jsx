import React from "react";
import { FaWhatsapp } from 'react-icons/fa';
import { Button, Tooltip } from "@nextui-org/react";

export const WhatsAppButton = () => {
    const phoneNumber = "525614226132";
    const message = "¡Hola! Quisiera contactar a un especialista de COR Computadoras, que me brinde información de sus servicios.";
    const WhatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    return (
        <a
            href={WhatsappLink}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Contactar via WhatsApp"
            className="fixed bottom-3 right-2 sm:bottom-3 sm:right-3 md:bottom-1.5 md:right-2 z-50"
        >
            <Tooltip content="¡Hablemos por WhatsApp!" placement="left-start" className="bg-green-600 text-white">
                <Button
                    auto
                    className="bg-green-500 text-white shadow-lg hover:bg-green-600 transform transition-transform hover:scale-105 w-10 h-10 sm:w-14 sm:h-18 md:w-8 md:h-12 p-3 rounded-2xl"
                    icon={<FaWhatsapp size={32} />}
                >
                    <FaWhatsapp size={32} />
                </Button>
            </Tooltip>
        </a>
    );
};
