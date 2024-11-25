import React, { useEffect, useState } from "react";
import { HeroSection } from "../components/HeroSection.jsx";
import { AboutSection } from "../components/AboutSection.jsx";
import { ServicesSection } from "../components/ServicesSection.jsx";
import { ProjectsSection } from "../components/ProjectsSection.jsx";
import { PartnersSection } from "../components/PartnersSection.jsx";
import { ContactSection } from "../components/ContactSection.jsx";
import { Spacer } from "@nextui-org/react";

function Home() {
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const sections = [
        "inicio",
        "sobre-nosotros",
        "clientes",
        "servicios",
        "socios",
        "contacto",
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= currentScrollPos + windowHeight / 2) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative  min-h-screen">
    
      <nav className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40">
        <ul className="space-y-2">
          <li>
            <a
              href="#inicio"
              className={`block w-3 h-3 rounded-full`}
            >
              <span className="sr-only">Inicio</span>
            </a>
          </li>
          <li>
            <a
              href="#sobre-nosotros"
              className={`block w-3 h-3 rounded-full ${
                activeSection === "sobre-nosotros" ? "bg-blue-500 dark:bg-blue-400" : "bg-gray-300 dark:bg-gray-600"
              }`}
            >
              <span className="sr-only">Sobre nosotros</span>
            </a>
          </li>
          <li>
            <a
              href="#clientes"
              className={`block w-3 h-3 rounded-full ${
                activeSection === "clientes" ? "bg-blue-500 dark:bg-blue-400" : "bg-gray-300 dark:bg-gray-600"
              }`}
            >
              <span className="sr-only">Clientes</span>
            </a>
          </li>
          <li>
            <a
              href="#servicios"
              className={`block w-3 h-3 rounded-full ${
                activeSection === "servicios" ? "bg-blue-500 dark:bg-blue-400" : "bg-gray-300 dark:bg-gray-600"
              }`}
            >
              <span className="sr-only">Servicios</span>
            </a>
          </li>
          <li>
            <a
              href="#socios"
              className={`block w-3 h-3 rounded-full ${
                activeSection === "socios" ? "bg-blue-500 dark:bg-blue-400" : "bg-gray-300 dark:bg-gray-600"
              }`}
            >
              <span className="sr-only">Socios</span>
            </a>
          </li>
          <li>
            <a
              href="#contacto"
              className={`block w-3 h-3 rounded-full ${
                activeSection === "contacto" ? "bg-blue-500 dark:bg-blue-400" : "bg-gray-300 dark:bg-gray-600"
              }`}
            >
              <span className="sr-only">Contacto</span>
            </a>
          </li>
        </ul>
      </nav>

      <section
        id="inicio"
        className="min-h-screen flex items-center justify-center snap-start"
      >
        <div className="row flex-nowrap overflow-auto ml-5 mr-8">
          <HeroSection />
        </div>
      </section>
      <Spacer y={1} />

      <section
        id="sobre-nosotros"
        className="min-h-screen flex items-center justify-center snap-start"
      >
        <div className="row flex-nowrap overflow-auto ml-12 mr-8">
          <AboutSection />
        </div>
      </section>

      <section
        id="clientes"
        className="min-h-screen flex items-center justify-center snap-start"
      >
        <div className="row flex-nowrap overflow-auto ml-2 mr-8">
          <ProjectsSection />
        </div>
      </section>

      <section
        id="servicios"
        className="min-h-screen flex items-center justify-center snap-start"
      >
        <div className="row flex-nowrap overflow-auto ml-2 mr-8">
          <ServicesSection />
        </div>
      </section>

      <section
        id="socios"
        className="min-h-screen flex items-center justify-center snap-start"
      >
        <div className="row flex-nowrap overflow-auto ml-5 mr-8">
          <PartnersSection />
        </div>
      </section>

      <section
        id="contacto"
        className=" flex items-center justify-center snap-start"
      >
        <div className="row flex-nowrap overflow-auto ml-2 mr-8">
          <ContactSection />
        </div>
      </section>
    </div>
  );
}

export default Home;
