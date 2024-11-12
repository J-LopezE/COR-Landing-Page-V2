import React, { useState } from "react";
import { Button, Input, Textarea } from "@nextui-org/react";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Send } from "lucide-react";
import { motion } from "framer-motion";
import DOMPurify from 'dompurify'; 
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const sanitizeInput = (input) => {
    return DOMPurify.sanitize(input); 
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: sanitizeInput(value) }));

    // Limpiar error si el campo cambia
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formState.name.trim()) newErrors.name = "El nombre es requerido";
    if (!formState.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = "Email inválido";
    }
    if (!formState.message.trim()) newErrors.message = "El mensaje es requerido";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      // Enviar formulario
      console.log("Form submitted", formState);
      setFormState({ name: "", email: "", message: "" });
    } else {
      // Mostrar los errores
      setErrors(newErrors);
    }
  };

  return (
    <footer className="bg-gradient-to-r from-[#0048aa] to-[#006cac] text-white py-2">
      <div className="mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Información de contacto */}
          <motion.div
            variants={fadeIn}
            initial="initial"
            animate="animate"
            className="flex flex-col"
          >
            <h3 className="text-lg font-semibold mb-2">Información de Contacto</h3>
            <hr className="border-white mb-5 mx-auto w-full" />
            <ul>
              <li className="flex items-center mb-3">
                <Mail className="mr-2 h-5 w-5 text-blue-300" />
                <span>Email:</span>
                <a
                  href="mailto:info@techsupport.com"
                  className="ml-2 text-blue-200 hover:text-white transition-colors"
                >
                  info@techsupport.com
                </a>
              </li>
              <li className="flex items-center mb-3">
                <Phone className="mr-2 h-5 w-5 text-blue-300" />
                <span>Teléfono:</span>
                <a
                  href="tel:+525592964653"
                  className="ml-2 text-blue-200 hover:text-white transition-colors"
                >
                  +52(559) 296-4653
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-blue-300 mt-1" />
                <span>Dirección:</span>
                <p className="ml-2 text-blue-200">
                  Tepeyollotl mz 1 lt 3 CD Ecatepec CP 55067
                </p>
              </li>
            </ul>
          </motion.div>

          {/* Redes Sociales */}
          <motion.div
            variants={fadeIn}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center"
          >
            <h4 className="font-semibold mb-3">Síguenos</h4>
            <hr className="border-white mb-5 mx-auto w-1/2" />
            <div className="flex space-x-3">
              {[{ icon: Facebook, label: "Facebook" }, { icon: Twitter, label: "Twitter" }, { icon: Linkedin, label: "LinkedIn" }].map(
                (social) => (
                  <a
                    key={social.label}
                    href="#"
                    className="bg-white/20 hover:bg-white/30 transition-colors p-2 rounded-full"
                    aria-label={`Síguenos en ${social.label}`}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                )
              )}
            </div>
          </motion.div>

          {/* Formulario de contacto */}
          <motion.div
            variants={fadeIn}
            initial="initial"
            animate="animate"
            className="flex flex-col"
          >
            <h3 className="text-lg font-semibold mb-2 text-center">Contáctanos</h3>
            <hr className="border-white mb-4" />
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="text-white" htmlFor="name">
                    Nombre
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    variant="bordered"
                    color={errors.name ? "error" : "default"}
                    errorMessage={errors.name}
                    className="bg-white/10 backdrop-blur-sm text-white"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-white" htmlFor="email">
                    Correo electrónico
                  </label>
                  <Input
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    variant="bordered"
                    color={errors.email ? "error" : "default"}
                    errorMessage={errors.email}
                    className="bg-white/10 backdrop-blur-sm text-white"
                    required
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="text-white" htmlFor="message">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  variant="bordered"
                  color={errors.message ? "error" : "default"}
                  errorMessage={errors.message}
                  rows={4}
                  className="bg-white/10 backdrop-blur-sm text-white"
                  required
                />
              </div>
              <Button
                type="submit"
                color="primary"
                size="lg"
                className="w-full mt-4"
                endContent={<Send className="ml-2" size={17} />}
              >
                Enviar mensaje
              </Button>
            </form>
          </motion.div>
        </div>

        <motion.div
          className="mt-6 text-center text-sm mr-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p>&copy; 2024 COR COMPUTADORAS - Todos los derechos reservados.</p>
        </motion.div>
      </div>
    </footer>
  );
};
