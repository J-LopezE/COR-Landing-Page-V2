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
      <div className="container-fluid ">
        <div id="inicio" className="row flex-nowrap overflow-auto">
          <HeroSection />
        </div>
        <div
          id="sobre-nosotros"
          className="row flex-nowrap overflow-auto bg-blue-100"
        >
          <AboutSection />
        </div>

        <div id="clientes" className="row flex-nowrap overflow-auto bg-blue-100">
          <ProjectsSection />
        </div>
        <div id="servicios" className="row flex-nowrap overflow-auto bg-blue-100 ">
          <ServicesSection />
        </div>
        <div id="socios" className="row flex-nowrap overflow-auto bg-blue-100">
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
