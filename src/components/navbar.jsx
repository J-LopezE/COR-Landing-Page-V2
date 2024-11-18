import React, { useState, useEffect, useCallback } from "react";
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
import classNames from "classnames";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { setTheme, theme } = useTheme();
  const [isDark, setIsDark] = useState(theme === "dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      setIsDark(storedTheme === "dark");
    }
  }, [setTheme]);

  const toggleTheme = useCallback(
    (checked) => {
      const newTheme = checked ? "dark" : "light";
      setTheme(newTheme);
      setIsDark(checked);
      localStorage.setItem("theme", newTheme); // Guardar tema en localStorage
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

  useEffect(() => {
    setIsDark(theme === "dark");
  }, [theme]);

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
            <div className="p-2">
              <img
                src={Logo}
                alt="Logo"
                style={{ height: "10rem", width: "auto" }}
                className="h-40 w-auto text-[#034aa6] dark:text-white fill-current sm:h-52 md:h-40 lg:h-40"
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
            "inicio",
            "sobre-nosotros",
            "clientes",
            "servicios",
            "socios",
            "contacto",
          ].map((item) => (
            <NavbarItem key={item}>
              <a
                href={`#${item}`}
                onClick={(e) => handleSmoothScroll(e, `#${item}`)}
                className={`relative px-3 py-2 text-sm font-medium ${
                  location.hash === `#${item}`
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                {location.hash === `#${item}` && (
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
        </div>
      </NavbarContent>

      <NavbarItem className="flex items-center">
        <Switch
          selected={isDark}
          size="sm"
          color="primary"
          startContent={<Sun className="h-5 w-5 text-yellow-500" />}
          endContent={<Moon className="h-5 w-5 text-gray-500" />}
          onChange={(e) => toggleTheme(e.target.checked)}
          aria-checked={isDark ? "true" : "false"}
          aria-label="Switch between light and dark mode"
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
              "sobre-nosotros",
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
