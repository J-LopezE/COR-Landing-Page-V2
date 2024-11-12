import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

export const AnimatedSection = ({ children, className = "" }) => {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      exit="exit"
      variants={fadeInUp}
      viewport={{ once: true, amount: 0.3 }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

