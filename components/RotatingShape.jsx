"use client";

import { motion } from "framer-motion";

const RotatingShape = ({ content, direction = "left", duration = 6 }) => {
  return (
    <motion.div
      animate={{
        rotate: direction === "right" ? 360 : -360, // Rotate 360° based on direction
      }}
      transition={{
        duration: duration,
        ease: "linear", // Fix typo (should be lowercase 'linear')
        repeat: Infinity, // Infinite loop
      }}
    >
      {content}
    </motion.div>
  );
};

export default RotatingShape;
