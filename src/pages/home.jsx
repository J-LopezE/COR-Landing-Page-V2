import React, { useEffect, useState } from "react";
import { HeroSection } from "../components/HeroSection.jsx";
import { AboutSection } from "../components/AboutSection.jsx";
import { ServicesSection } from "../components/ServicesSection.jsx";
import { ProjectsSection } from "../components/ProjectsSection.jsx";
import { PartnersSection } from "../components/PartnersSection.jsx";
import { ContactSection } from "../components/ContactSection.jsx";
import { WhatsAppButton } from "../components/WhatsAppButton.jsx";
import { Footer } from "../components/Footer.jsx";
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
        if (
          section &&
          section.offsetTop <= currentScrollPos + windowHeight / 2
        ) {
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
      <section id="inicio">
        <div className="row flex-nowrap overflow-auto ">
          <HeroSection />
        </div>
      </section>

      <section id="servicios">
        <div className="row flex-nowrap overflow-auto">
          <ServicesSection />
        </div>
      </section>

      <section id="clientes">
        <div className="row flex-nowrap overflow-auto ml-2 mr-8">
          <ProjectsSection />
        </div>
      </section>

      <section id="quiénes-somos">
        <div className="row flex-nowrap overflow-auto">
          <AboutSection />
        </div>
      </section>

      <section id="contacto">
        <div className="row flex-nowrap overflow-auto">
          <ContactSection />
        </div>
      </section>

      <section id="footer">
        <div className="row flex-nowrap overflow-auto">
          <Footer />
        </div>
      </section>
      <WhatsAppButton />
    </div>
  );
}

export default Home;
