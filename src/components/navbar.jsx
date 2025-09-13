import React, { useState, useCallback } from "react";
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
  Button,
} from "@nextui-org/react";
import { MessageCircle } from "react-feather";
import { Moon, Sun, Phone } from "lucide-react";
import Logo from "../../src/img/logocor.svg";
import classNames from "classnames";

export const Navbar = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const whatsappPhoneNumber = "525614226132";

  const isDark = resolvedTheme === "dark";

  const toggleTheme = useCallback(
    (checked) => {
      const newTheme = checked ? "dark" : "light";
      setTheme(newTheme);
      localStorage.setItem("theme", newTheme);
    },
    [setTheme]
  );

  const handleSmoothScroll = useCallback((event, target) => {
    event.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      window.location.hash = target;
    }
  }, []);

  const menuClasses = classNames("flex items-baseline space-x-4", {
    block: isOpen,
    "hidden md:flex": !isOpen,
  });

  return (
    <NextUINavbar
      isBordered
      variant="sticky"
      className="bg-white/80 backdrop-blur-md dark:bg-gray-950/80"
    >
      <NavbarBrand>
        <NavbarItem>
          <a href="/">
            <div className="">
              <img
                src={Logo}
                alt="Logo de Cor Computadoras"
                className="sm:h-40  lg:h-40"
              />
            </div>
          </a>
        </NavbarItem>
      </NavbarBrand>

      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          className="sm:hidden text-text"
          size="xl"
          onClick={() => setIsOpen((prev) => !prev)}
        />
      </NavbarContent>

      <NavbarContent>
        <div className={menuClasses}>
          {[
            { id: "inicio", label: "Inicio" },
            { id: "servicios", label: "Servicios" },
            { id: "clientes", label: "Clientes" },
            { id: "quiénes-somos", label: "Quiénes somos" },
            { id: "contacto", label: "Contacto" },
          ].map(({ id, label }) => (
            <NavbarItem key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => handleSmoothScroll(e, `#${id}`)}
                className={`relative px-3 py-2 text-sm font-medium ${
                  location.hash === `#${id}`
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                }`}
              >
                {label}
                {location.hash === `#${id}` && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-600 dark:bg-blue-400"
                    layoutId="navbar-underline"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </a>
            </NavbarItem>
          ))}
          <NavbarItem className="flex items-center">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                className="hidden md:flex border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900"
                asChild
              >
                <Phone className="mr-2 h-4 w-4" />
                <a href="tel:+5592964653">Llamar </a>
              </Button>
              <Button
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg"
                asChild
              >
                {" "}
                <MessageCircle className="mr-2 h-4 w-4" />
                <a
                  href={`https://wa.me/${whatsappPhoneNumber}?text=${encodeURIComponent(
                    "Hola, me gustaría una cotización gratuita."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </Button>
            </div>
          </NavbarItem>
        </div>
      </NavbarContent>

      <NavbarItem className="flex items-center">
        <Switch
          selected={isDark}
          size="md"
          color="primary"
          onChange={(e) => toggleTheme(e.target.checked)}
          aria-checked={isDark ? "true" : "false"}
          aria-label="Switch between light and dark mode"
          thumbIcon={({ isSelected }) =>
            isSelected ? (
              <Moon className="h-5 w-5 bg-none text-blue-900" />
            ) : (
              <Sun className="h-5 w-5 bg-none text-blue-900" />
            )
          }
        />
      </NavbarItem>

      <NavbarMenu
        role="navigation"
        className="bg-white/80 backdrop-blur-md dark:bg-gray-950/80"
      >
        <NavbarItem className="sm:hidden">
          <div className="absolute left-0 right-0 p-5 flex flex-col items-start">
            {[
              "inicio",
              "quiénes somos",
              "clientes",
              "servicios",
              "socios",
              "contacto",
            ].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={(e) => {
                  handleSmoothScroll(e, `#${item}`);
                  setIsOpen(false); // Cierra el menú cuando se haga clic en un ítem
                }}
                className="text-gray-700 text-text mb-2 text-xl"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>
        </NavbarItem>
      </NavbarMenu>
    </NextUINavbar>
  );
};
