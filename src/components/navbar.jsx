import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import {
  Switch,
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
} from "@nextui-org/react"; // Importamos Switch de NextUI
import { Moon, Sun } from "lucide-react";
import Logo from "../../src/img/logocor.svg";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { setTheme, theme } = useTheme();
  const [isDark, setIsDark] = useState(theme === "dark");

  // Función para alternar el tema cuando el Switch cambie
  const toggleTheme = (checked) => {
    const newTheme = checked ? "dark" : "light";
    setTheme(newTheme);
    setIsDark(checked); // Actualizamos el estado local para reflejar el cambio
  };

  const handleSmoothScroll = (event, target) => {
    event.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      window.location.hash = target;
    }
  };

  // Sincronizamos el estado isDark con el tema cada vez que se actualiza el theme
  useEffect(() => {
    setIsDark(theme === "dark");
  }, [theme]);

  return (
    <NextUINavbar
      isBordered
      variant="sticky"
      className="bg-white/80 backdrop-blur-md dark:bg-gray-950/80"
    >
      <NavbarBrand>
        <NavbarItem>
          <a href="/">
            <div className="p-2">
              <img
                src={Logo} // Logo SVG
                alt="Logo"
                style={{ height: "10rem", width: "auto" }}
                className="h-40 w-auto text-[#034aa6] dark:text-white fill-current"
              />
            </div>
          </a>
        </NavbarItem>
      </NavbarBrand>

      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle className="sm:hidden" size="xl" />
      </NavbarContent>

      <NavbarContent>
        <div
          className={`flex items-baseline space-x-4 ${
            isOpen ? "block" : "hidden md:flex"
          }`}
        >
          <NavbarItem>
            <a
              href="#inicio"
              onClick={(e) => handleSmoothScroll(e, "#inicio")}
              className={`relative px-3 py-2 text-sm font-medium ${
                location.hash === "#inicio"
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              }`}
            >
              Inicio
              {location.hash === "#inicio" && (
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-600 dark:bg-blue-400"
                  layoutId="navbar-underline"
                />
              )}
            </a>
          </NavbarItem>

          <NavbarItem>
            <a
              href="#sobre-nosotros"
              onClick={(e) => handleSmoothScroll(e, "#sobre-nosotros")}
              className={`relative px-3 py-2 text-sm font-medium ${
                location.hash === "#sobre-nosotros"
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              }`}
            >
              Acerca de Nosotros
              {location.hash === "#sobre-nosotros" && (
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-600 dark:bg-blue-400"
                  layoutId="navbar-underline"
                />
              )}
            </a>
          </NavbarItem>

          <NavbarItem>
            <a
              href="#clientes"
              onClick={(e) => handleSmoothScroll(e, "#clientes")}
              className={`relative px-3 py-2 text-sm font-medium ${
                location.hash === "#clientes"
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              }`}
            >
              Nuestros Clientes
              {location.hash === "#clientes" && (
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-600 dark:bg-blue-400"
                  layoutId="navbar-underline"
                />
              )}
            </a>
          </NavbarItem>

          <NavbarItem>
            <a
              href="#servicios"
              onClick={(e) => handleSmoothScroll(e, "#servicios")}
              className={`relative px-3 py-2 text-sm font-medium ${
                location.hash === "#servicios"
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              }`}
            >
              Servicios
              {location.hash === "#servicios" && (
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-600 dark:bg-blue-400"
                  layoutId="navbar-underline"
                />
              )}
            </a>
          </NavbarItem>

          <NavbarItem>
            <a
              href="#socios"
              onClick={(e) => handleSmoothScroll(e, "#socios")}
              className={`relative px-3 py-2 text-sm font-medium ${
                location.hash === "#socios"
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              }`}
            >
              Socios
              {location.hash === "#socios" && (
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-600 dark:bg-blue-400"
                  layoutId="navbar-underline"
                />
              )}
            </a>
          </NavbarItem>

          <NavbarItem>
            <a
              href="#contacto"
              onClick={(e) => handleSmoothScroll(e, "#contacto")}
              className={`relative px-3 py-2 text-sm font-medium ${
                location.hash === "#contacto"
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              }`}
            >
              Contacto
              {location.hash === "#contacto" && (
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-600 dark:bg-blue-400"
                  layoutId="navbar-underline"
                />
              )}
            </a>
          </NavbarItem>
        </div>
      </NavbarContent>

      <NavbarItem className="flex items-center">
        {/* Switch para alternar entre el modo claro y oscuro */}
        <Switch
          defaultSelected={isDark}
          size="sm"
          color="primary"
          startContent={<Sun className="h-5 w-5 text-yellow-500" />}
          endContent={<Moon className="h-5 w-5 text-gray-500" />}
          onChange={(e) => toggleTheme(e.target.checked)} // Cambio de tema al alternar el switch
        >
        </Switch>
      </NavbarItem>

      <NavbarMenu>
        <NavbarItem className="sm:hidden">
          <div
            className={`absolute left-0 right-0 bg-white dark:bg-gray-950 p-5 flex flex-col items-start`}
          >
            <a
              href="#inicio"
              className="text-gray-700 dark:text-white mb-2 text-lg"
            >
              Inicio
            </a>
            <a
              href="#sobre-nosotros"
              className="text-gray-700 dark:text-white mb-2 text-lg"
            >
              Acerca de Nosotros
            </a>
            <a
              href="#clientes"
              className="text-gray-700 dark:text-white mb-2 text-lg"
            >
              Nuestros Clientes
            </a>
            <a
              href="#servicios"
              className="text-gray-700 dark:text-white mb-2 text-lg"
            >
              Servicios
            </a>
            <a
              href="#socios"
              className="text-gray-700 dark:text-white mb-2 text-lg"
            >
              Socios
            </a>
            <a
              href="#contacto"
              className="text-gray-700 dark:text-white mb-2 text-lg"
            >
              Contacto
            </a>
          </div>
        </NavbarItem>
      </NavbarMenu>
    </NextUINavbar>
  );
}
