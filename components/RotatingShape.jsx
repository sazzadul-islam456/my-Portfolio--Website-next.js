"use client";

import { motion } from "framer-motion";

const RotatingShape = ({ content, direction = "left", duration = 6 }) => {
  return (
    <motion.div
      animate={{
        rotate: direction === "right" ? 360 : -360, 
      }}
      transition={{
        duration: duration,
        ease: "linear", 
        repeat: Infinity, 
      }}
    >
      {content}
    </motion.div>
  );
};

export default RotatingShape;
