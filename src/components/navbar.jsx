import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Navbar as NextUINavbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle } from "@nextui-org/react";
import Logo from "../../src/img/logocoruru.jpg";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { setTheme, theme } = useTheme();
  const [isDark, setIsDark] = useState(theme === "dark");

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setTheme(newTheme);
    setIsDark(!isDark);
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

  return (
    <NextUINavbar isBordered variant="sticky" className="bg-white/80 backdrop-blur-md dark:bg-gray-950/80">
      <NavbarBrand>
        <a href="/" className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <div className="p-2">
            <img src={Logo} alt="Logo" style={{ height: '4rem', width: 'auto' }} />
          </div>
        </a>
      </NavbarBrand>

      <NavbarContent>
        <NavbarMenuToggle className="md:hidden" onClick={() => setIsOpen(!isOpen)} />

        <div className={`flex items-baseline space-x-4 ${isOpen ? 'block' : 'hidden md:flex'}`}>

          <NavbarItem>
            <a
              href="#inicio"
              onClick={(e) => handleSmoothScroll(e, "#inicio")}
              className={`relative px-3 py-2 text-sm font-medium ${location.hash === "#inicio" ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'}`}
            >
              Inicio
              {location.hash === "#inicio" && <motion.div className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-600 dark:bg-blue-400" layoutId="navbar-underline" />}
            </a>
          </NavbarItem>

          <NavbarItem>
            <a
              href="#sobre-nosotros"
              onClick={(e) => handleSmoothScroll(e, "#sobre-nosotros")}
              className={`relative px-3 py-2 text-sm font-medium ${location.hash === "#sobre-nosotros" ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'}`}
            >
              Acerca de Nosotros
              {location.hash === "#sobre-nosotros" && <motion.div className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-600 dark:bg-blue-400" layoutId="navbar-underline" />}
            </a>
          </NavbarItem>

          <NavbarItem>
            <a
              href="#proyectos"
              onClick={(e) => handleSmoothScroll(e, "#proyectos")}
              className={`relative px-3 py-2 text-sm font-medium ${location.hash === "#proyectos" ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'}`}
            >
              Nuestros Clientes
              {location.hash === "#proyectos" && <motion.div className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-600 dark:bg-blue-400" layoutId="navbar-underline" />}
            </a>
          </NavbarItem>

          <NavbarItem>
            <a
              href="#servicios"
              onClick={(e) => handleSmoothScroll(e, "#servicios")}
              className={`relative px-3 py-2 text-sm font-medium ${location.hash === "#servicios" ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'}`}
            >
              Servicios
              {location.hash === "#servicios" && <motion.div className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-600 dark:bg-blue-400" layoutId="navbar-underline" />}
            </a>
          </NavbarItem>

          <NavbarItem>
            <a
              href="#socios"
              onClick={(e) => handleSmoothScroll(e, "#socios")}
              className={`relative px-3 py-2 text-sm font-medium ${location.hash === "#socios" ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'}`}
            >
              Socios
              {location.hash === "#socios" && <motion.div className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-600 dark:bg-blue-400" layoutId="navbar-underline" />}
            </a>
          </NavbarItem>

          <NavbarItem>
            <a
              href="#contacto"
              onClick={(e) => handleSmoothScroll(e, "#contacto")}
              className={`relative px-3 py-2 text-sm font-medium ${location.hash === "#contacto" ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'}`}
            >
              Contacto
              {location.hash === "#contacto" && <motion.div className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-600 dark:bg-blue-400" layoutId="navbar-underline" />}
            </a>
          </NavbarItem>

        </div>
      </NavbarContent>

      <NavbarItem className="flex items-center">
        <button onClick={toggleTheme}>
          {isDark ? (
            <Sun className="h-6 w-6" color="primary" variant="shadow" />
          ) : (
            <Moon className="h-6 w-6" color="primary" variant="light" />
          )}
        </button>
      </NavbarItem>

      <NavbarItem className="md:hidden">
        <div className={`absolute top-16 left-0 right-0 bg-white dark:bg-gray-950 p-4 flex flex-col items-start space-y-4 ${isOpen ? 'block' : 'hidden'}`}>
          <a href="#inicio" onClick={(e) => handleSmoothScroll(e, "#inicio")} className="text-gray-700 dark:text-white">Inicio</a>
          <a href="#sobre-nosotros" onClick={(e) => handleSmoothScroll(e, "#sobre-nosotros")} className="text-gray-700 dark:text-white">Acerca de Nosotros</a>
          <a href="#proyectos" onClick={(e) => handleSmoothScroll(e, "#proyectos")} className="text-gray-700 dark:text-white">Proyectos</a>
          <a href="#servicios" onClick={(e) => handleSmoothScroll(e, "#servicios")} className="text-gray-700 dark:text-white">Servicios</a>
          <a href="#socios" onClick={(e) => handleSmoothScroll(e, "#socios")} className="text-gray-700 dark:text-white">Socios</a>
          <a href="#contacto" onClick={(e) => handleSmoothScroll(e, "#contacto")} className="text-gray-700 dark:text-white">Contacto</a>
        </div>
      </NavbarItem>

    </NextUINavbar>
  );
}
