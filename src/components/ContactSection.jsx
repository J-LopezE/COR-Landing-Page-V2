import React, { useState } from "react";
import { Button, Input, Textarea } from "@nextui-org/react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  XCircle,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import { motion } from "framer-motion";
import DOMPurify from "dompurify";
import { CircularProgress } from "@nextui-org/react";
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
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("success");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(false);
  const { theme } = useTheme();

  const sanitizeInput = (input) => {
    return DOMPurify.sanitize(input);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: sanitizeInput(value) }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formState.name.trim()) newErrors.name = "El nombre es requerido";
    if (!formState.phone.trim()) newErrors.phone = "El teléfono es requerido";
    if (!formState.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = "Email inválido";
    }
    if (!formState.message.trim())
      newErrors.message = "El mensaje es requerido";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setLoading(true);
      setIsSubmitting(true);
      setAlertMessage("Enviando...");
      setAlertType("info");
      setShowAlert(true); 

      try {
        const response = await fetch(
          "https://formsubmit.co/ajax/contacto@corcomputadoras.com",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formState),
          }
        );

        if (response.ok) {
          setAlertMessage("¡Mensaje Enviado!");
          setAlertType("success");
          setFormState({ name: "", phone: "", email: "", message: "" });

          setTimeout(() => {
            setShowAlert(false);
          }, 5000);
        } else {
          setAlertMessage("Hubo un error al enviar el mensaje.");
          setAlertType("error");
        }
      } catch (error) {
        setAlertMessage("Hubo un error al enviar el mensaje.");
        setAlertType("error");
      } finally {
        setLoading(false);
        setIsSubmitting(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <footer className="text-text py-2 relative overflow-hidden">
      <div className="mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            variants={fadeIn}
            initial="initial"
            animate="animate"
            className="flex flex-col"
          >
            <h3 className="text-lg font-semibold mb-2">
              Información de Contacto
            </h3>
            <hr
              className={`${
                theme === "dark" ? "border-white" : "border-gray-400"
              } mb-5 mx-auto w-full`}
            />
            <ul>
              <li className="flex items-center mb-3">
                <Mail className="mr-2 h-5 w-5 text-text" />
                <span>Email:</span>
                <a
                  href="mailto:contacto@corcomputadoras.com"
                  className="ml-2 text-text "
                >
                  contacto@corcomputadoras.com
                </a>
              </li>
              <li className="flex items-center mb-3">
                <Phone className="mr-2 h-5 w-5 text-text" />
                <span>Teléfono:</span>
                <a href="tel:+525592964653" className="ml-2 text-text ">
                  +52(559) 296-4653
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-text mt-1" />
                <span>Dirección:</span>
                <p className="ml-2 text-text">
                  Tepeyollotl mz 1 lt 3 CD Ecatepec CP 55067
                </p>
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center"
          >
            <h4 className="font-semibold mb-3">Síguenos</h4>
            <hr
              className={`${
                theme === "dark" ? "border-white" : "border-gray-400"
              } mb-5 mx-auto w-1/2`}
            />
            <div className="flex space-x-3">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Instagram, label: "Instagram" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="bg-transparent hover:bg-blue-500/20 transition-all p-3 rounded-full"
                  aria-label={`Síguenos en ${social.label}`}
                >
                  <social.icon
                    className={`h-6 w-6 ${
                      theme === "dark" ? "text-white" : "text-blue-500"
                    } transition-all duration-200`}
                  />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="initial"
            animate="animate"
            className="flex flex-col"
          >
            <h3 className="text-lg font-semibold mb-2 text-center">
              Contáctanos
            </h3>
            <hr
              className={`${
                theme === "dark" ? "border-white" : "border-gray-400"
              } mb-4`}
            />
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label className="text-text" htmlFor="name">
                  Nombre Completo
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  variant="bordered"
                  color={errors.name ? "error" : "default"}
                  errorMessage={errors.name}
                  className="bg-transparent border-2 border-blue-500 rounded-lg p-1 mt-1 focus:ring-4 focus:ring-blue-300"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="text-text" htmlFor="email">
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
                    className="bg-transparent border-2 border-blue-500 rounded-lg p-1 mt-1 focus:ring-4 focus:ring-blue-300 w-2/2" // Ajuste con margen negativo
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-text" htmlFor="phone">
                    Teléfono
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    variant="bordered"
                    color={errors.phone ? "error" : "default"}
                    errorMessage={errors.phone}
                    className="bg-transparent border-2 border-blue-500 rounded-lg p-1 mt-1 focus:ring-4 focus:ring-blue-300 w-3/3"
                    required
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="text-text" htmlFor="message">
                  Comentarios
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
                  className="bg-transparent border-2 border-blue-500 rounded-lg p-1 mt-1 focus:ring-4 focus:ring-blue-300"
                  required
                />
              </div>

              <Button
                type="submit"
                color="primary"
                size="lg"
                className="w-full mt-4 text-white"
                disabled={loading}
                startContent={
                  loading ? (
                    <CircularProgress
                      size="sm"
                      aria-label="Loading..."
                      className="mr-2"
                    />
                  ) : (
                    <Send className="mr-2" size={18} />
                  )
                }
              >
                {loading ? "Enviando..." : "Enviar mensaje"}
              </Button>
            </form>
          </motion.div>
        </div>

        {showAlert && (
          <motion.div
            className={`fixed inset-x-0 bottom-10 mx-auto p-4 w-full max-w-md rounded-lg z-50 mb-40 flex items-center justify-center ${
              alertType === "info"
                ? "bg-blue-200 text-blue-700"
                : alertType === "success"
                ? "bg-green-200 text-green-700"
                : "bg-red-200 text-red-700"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center">
              {alertType === "info" ? (
                <CircularProgress
                  size="xl"
                  aria-label="Enviando..."
                  color="blue"
                  className="mr-4"
                />
              ) : alertType === "success" ? (
                <CheckCircle className="mr-3 h-8 w-8" />
              ) : (
                <XCircle className="mr-3 h-8 w-8" />
              )}
              <p className="text-center">
                {alertType === "info"
                  ? "Enviando..."
                  : "Mensaje enviado. Un agente se pondrá en contacto con usted en breve. Agradecemos su interés."}
              </p>
            </div>
          </motion.div>
        )}

        <motion.div
          className="mt-6 text-center text-sm mr-5 text-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p>&copy; Todos los derechos reservados © 2017 © COR Computadoras 2024</p>
        </motion.div>
      </div>
    </footer>
  );
};
