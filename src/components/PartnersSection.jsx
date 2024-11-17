import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection.jsx";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import Lupuztech from "../../src/img/lupuztech.webp";
import Crissadata from "../../src/img/crissadata.webp";

export const PartnersSection = () => {
  return (
    <AnimatedSection id="socios" className="py-20 bg-blue-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">
          Socios Estratégicos
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-full sm:w-1/2 md:w-1/4"
          >
            <Card isHoverable isPressable>
              <Image
                src={Lupuztech}
                alt="Socio 1"
                objectFit="contain"
                className="filter grayscale hover:grayscale-0 transition-all duration-500"
                height={200}
                width={200}
              />

             
            </Card>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-full sm:w-1/2 md:w-1/4"
          >
            <Card
              isHoverable
              isPressable
              isFooterBlurred
              radius="lg"
              className="border-none"
            >
              <Image
                src={Crissadata}
                alt="Socio 2"
                height={100}
                whit="auto"
                objectFit="contain"
                className="filter grayscale hover:grayscale-0 transition-all duration-300 objet-cover"
              />
            
            </Card>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};
