import React, { useState } from "react";
import { Button, Input, Textarea } from "@nextui-org/react";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Send } from "lucide-react";
import { motion } from "framer-motion";
import DOMPurify from 'dompurify'; 
import { Alert, AlertTitle, CircularProgress } from '@mui/material'; 
import { useTheme } from "next-themes";

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
  const [showAlert, setShowAlert] = useState(false); // Para manejar las alertas
  const [alertMessage, setAlertMessage] = useState(""); // Mensaje de la alerta
  const [isSubmitting, setIsSubmitting] = useState(false); // Estado de envío
  const [loading, setLoading] = useState(false); // Estado de "loading" mientras se envía el formulario
  const { theme } = useTheme();
  const backgroundColor = theme === "dark" ? "#034aa6" : "#0f6ca7";

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
    if (!formState.phone.trim()) newErrors.phone = "El telefono es requerido";
    if (!formState.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = "Email inválido";
    }
    if (!formState.message.trim()) newErrors.message = "El mensaje es requerido";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setLoading(true); // Iniciamos el estado de loading
      setIsSubmitting(true); // Marcamos que el formulario está siendo enviado
      setAlertMessage("Enviando..."); // Mostramos alerta de "Enviando"

      try {
        // Enviar el formulario a FormSubmit
        const response = await fetch("https://formsubmit.co/ajax/jorgeisrael.lopez@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formState),
        });

        if (response.ok) {
          setAlertMessage("¡Mensaje Enviado!"); 
          setShowAlert(true);
          setFormState({ name: "",phone: "", email: "", message: "" }); // Limpiar el formulario

          // Ocultar la alerta después de 5 segundos
          setTimeout(() => {
            setShowAlert(false);
          }, 5000); // La alerta desaparecerá después de 5 segundos
        } else {
          setAlertMessage("Hubo un error al enviar el mensaje.");
          setShowAlert(true); // Mostrar alerta de error
        }
      } catch (error) {
        setAlertMessage("Hubo un error al enviar el mensaje.");
        setShowAlert(true); // Mostrar alerta de error
      } finally {
        setLoading(false); // Regresar al estado original de "loading"
        setIsSubmitting(false); // Regresar al estado de formulario normal
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <footer className=" text-white py-2  relative overflow-hidden" style={{
      
      backgroundColor: backgroundColor, // Cambiar el color de fondo según el tema
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
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
              {[{ icon: Facebook, label: "Facebook" }, { icon: Twitter, label: "Twitter" }, { icon: Instagram, label: "Instagram" }].map(
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
                    className="bg-white/10 backdrop-blur-sm text-white !bg-white/10 !text-white"
                    required
                  />
                </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="text-white" htmlFor="name">
                   Telefono
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    variant="bordered"
                    color={errors.phone ? "error" : "default"}
                    errorMessage={errors.phone}
                    className="bg-white/10 backdrop-blur-sm text-white !bg-white/10 !text-white"
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
                    className="bg-white/10 backdrop-blur-sm text-white !bg-white/10 !text-white"
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
                  className="bg-white/10 backdrop-blur-sm text-white !bg-white/10 !text-white"
                  required
                />
              </div>
              <Button
                type="submit"
                color="primary"
                size="lg"
                className="w-full mt-4"
                endContent={<Send className="ml-2" size={17} />}
                disabled={loading} // Deshabilitar el botón si se está enviando el mensaje
              >
                {loading ? "Enviando..." : "Enviar mensaje"}
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Alerta de carga o éxito */}
        {showAlert && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            {loading ? (
              <Alert severity="info" className="text-center bg-blue-600 w-1/2">
                <AlertTitle>Enviando...</AlertTitle>
                <CircularProgress color="inherit" />
              </Alert>
            ) : (
              <Alert severity="success" className="text-center bg-green-600 w-1/2">
                <AlertTitle>{alertMessage}</AlertTitle>
                Mensaje enviado. Un agente se pondrá en contacto con usted en breve. Agradecemos su interés.
              </Alert>
            )}
          </div>
        )}

        <motion.div
          className="mt-6 text-center text-sm mr-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p>&copy; 2024 COR-Computadoras - Todos los derechos reservados.</p>
        </motion.div>
      </div>
    </footer>
  );
};
