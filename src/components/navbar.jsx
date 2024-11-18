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
} from "@nextui-org/react"; 
import { Moon, Sun } from "lucide-react";
import Logo from "../../src/img/logocor.svg";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { setTheme, theme } = useTheme();
  const [isDark, setIsDark] = useState(theme === "dark");

  const toggleTheme = (checked) => {
    const newTheme = checked ? "dark" : "light";
    setTheme(newTheme);
    setIsDark(checked); 
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

  useEffect(() => {
    setIsDark(theme === "dark");
  }, [theme]);

  // Función para cerrar el menú cuando se hace clic en una opción
  const closeMenu = () => {
    setIsOpen(false);
  };

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
                src={Logo} 
                alt="Logo"
                style={{ height: "10rem", width: "auto" }}
                className="h-40 w-auto text-[#034aa6] dark:text-white fill-current"
              />
            </div>
          </a>
        </NavbarItem>
      </NavbarBrand>

      <NavbarContent className="sm:hidden" justify="start">
        {/* Toggle de la barra de menú */}
        <NavbarMenuToggle 
          className="sm:hidden" 
          size="2xl" 
          onClick={() => setIsOpen(!isOpen)} // Alterna el estado del menú
        />
      </NavbarContent>

      <NavbarContent>
        <div
          className={`flex items-baseline space-x-4 ${isOpen ? "block" : "hidden md:flex"}`}
        >
          <NavbarItem>
            <a
              href="#inicio"
              onClick={(e) => {
                handleSmoothScroll(e, "#inicio");
                closeMenu(); // Cierra el menú al hacer clic
              }}
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
              onClick={(e) => {
                handleSmoothScroll(e, "#sobre-nosotros");
                closeMenu(); // Cierra el menú al hacer clic
              }}
              className={`relative px-3 py-2 text-sm font-medium ${
                location.hash === "#sobre-nosotros"
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              }`}
            >
              Acerca de Nosotros
            </a>
          </NavbarItem>

          <NavbarItem>
            <a
              href="#clientes"
              onClick={(e) => {
                handleSmoothScroll(e, "#clientes");
                closeMenu(); // Cierra el menú al hacer clic
              }}
              className={`relative px-3 py-2 text-sm font-medium ${
                location.hash === "#clientes"
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              }`}
            >
              Nuestros Clientes
            </a>
          </NavbarItem>

          <NavbarItem>
            <a
              href="#servicios"
              onClick={(e) => {
                handleSmoothScroll(e, "#servicios");
                closeMenu(); // Cierra el menú al hacer clic
              }}
              className={`relative px-3 py-2 text-sm font-medium ${
                location.hash === "#servicios"
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              }`}
            >
              Servicios
            </a>
          </NavbarItem>

          <NavbarItem>
            <a
              href="#socios"
              onClick={(e) => {
                handleSmoothScroll(e, "#socios");
                closeMenu(); // Cierra el menú al hacer clic
              }}
              className={`relative px-3 py-2 text-sm font-medium ${
                location.hash === "#socios"
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              }`}
            >
              Socios
            </a>
          </NavbarItem>

          <NavbarItem>
            <a
              href="#contacto"
              onClick={(e) => {
                handleSmoothScroll(e, "#contacto");
                closeMenu(); // Cierra el menú al hacer clic
              }}
              className={`relative px-3 py-2 text-sm font-medium ${
                location.hash === "#contacto"
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              }`}
            >
              Contacto
            </a>
          </NavbarItem>
        </div>
      </NavbarContent>

      <NavbarItem className="flex items-center">
        <Switch
          defaultSelected={isDark}
          size="sm"
          color="primary"
          startContent={<Sun className="h-5 w-5 text-yellow-500" />}
          endContent={<Moon className="h-5 w-5 text-gray-500" />}
          onChange={(e) => toggleTheme(e.target.checked)} 
        />
      </NavbarItem>

      {/* Menú desplegable para pantallas pequeñas */}
      <NavbarMenu 
        className={`sm:hidden ${isDark ? 'bg-gray-800' : 'bg-white'} backdrop-blur-md bg-opacity-30`}
      >
        <NavbarItem className="sm:hidden">
          <div
            className={`absolute left-0 right-0 p-5 flex flex-col items-start ${isDark ? 'text-white' : 'text-gray-800'}`}
          >
            <a
              href="#inicio"
              className="text-lg mb-2 hover:text-blue-600"
              onClick={() => closeMenu()} // Cierra el menú al hacer clic
            >
              Inicio
            </a>
            <a
              href="#sobre-nosotros"
              className="text-lg mb-2 hover:text-blue-600"
              onClick={() => closeMenu()} // Cierra el menú al hacer clic
            >
              Acerca de Nosotros
            </a>
            <a
              href="#clientes"
              className="text-lg mb-2 hover:text-blue-600"
              onClick={() => closeMenu()} // Cierra el menú al hacer clic
            >
              Nuestros Clientes
            </a>
            <a
              href="#servicios"
              className="text-lg mb-2 hover:text-blue-600"
              onClick={() => closeMenu()} // Cierra el menú al hacer clic
            >
              Servicios
            </a>
            <a
              href="#socios"
              className="text-lg mb-2 hover:text-blue-600"
              onClick={() => closeMenu()} // Cierra el menú al hacer clic
            >
              Socios
            </a>
            <a
              href="#contacto"
              className="text-lg mb-2 hover:text-blue-600"
              onClick={() => closeMenu()} // Cierra el menú al hacer clic
            >
              Contacto
            </a>
          </div>
        </NavbarItem>
      </NavbarMenu>
    </NextUINavbar>
  );
}
