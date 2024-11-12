import React from "react";
import { HeroSection } from "../components/HeroSection.jsx";
import { AboutSection } from "../components/AboutSection.jsx";
import { ServicesSection } from "../components/ServicesSection.jsx";
import { ProjectsSection } from "../components/ProjectsSection.jsx";
import { PartnersSection } from "../components/PartnersSection.jsx";
import { ContactSection } from "../components/ContactSection.jsx";
function Home() {
  return (
    <>
      <div className="container-fluid bg-blue-100">
        <div id="inicio" className="row flex-nowrap overflow-auto mb-3">
          <HeroSection />
        </div>
        <div
          id="sobre-nosotros"
          className="row flex-nowrap overflow-auto mb-12"
        >
          <AboutSection />
        </div>
        <div id="proyectos" className="row flex-nowrap overflow-auto mb-3">
          <ProjectsSection />
        </div>
        <div id="servicios" className="row flex-nowrap overflow-auto mb-3">
          <ServicesSection />
        </div>
        <div id="socios" className="row flex-nowrap overflow-auto mb-3">
          <PartnersSection />
        </div>
        <div id="contacto" className="row flex-nowrap overflow-auto">
          <ContactSection />
        </div>
      </div>
    </>
  );
}

export default Home;
