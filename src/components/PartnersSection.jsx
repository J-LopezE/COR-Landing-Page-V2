import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection.jsx";

export const PartnersSection = () => {
  return (
    <AnimatedSection id="socios" className="py-20 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">Socios Estratégicos</h2>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {[1, 2, 3, 4].map((partner) => (
            <motion.div key={partner} whileHover={{ scale: 1.1 }}>
              <div className="bg-white/30 backdrop-blur-sm p-4 rounded-lg">
                <image src="/placeholder-logo.svg" width={150} height={75} alt={`Socio ${partner}`} className="filter grayscale hover:grayscale-0 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};


