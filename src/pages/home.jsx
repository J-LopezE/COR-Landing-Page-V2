import React, { useEffect, useState } from "react";
import { HeroSection } from "../components/HeroSection.jsx";
import { AboutSection } from "../components/AboutSection.jsx";
import { ServicesSection } from "../components/ServicesSection.jsx";
import { ProjectsSection } from "../components/ProjectsSection.jsx";
import { PartnersSection } from "../components/PartnersSection.jsx";
import { ContactSection } from "../components/ContactSection.jsx";
import { WhatsAppButton } from "../components/WhatsAppButton.jsx";
function Home() {
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const sections = [
        "inicio",
        "quiénes-somos",
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
      <section
        id="inicio"
        className="min-h-screen flex items-center justify-center snap-start"
      >
        <div className="row flex-nowrap overflow-auto ml-5 mr-8">
          <HeroSection />
        </div>
      </section>

      <section
        id="quiénes-somos"
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
      <WhatsAppButton />
    </div>
  );
}

export default Home;
