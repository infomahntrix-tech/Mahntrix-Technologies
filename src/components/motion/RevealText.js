"use client";

import { motion } from "framer-motion";

const containerVariants = (delay = 0) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.045,
      delayChildren: delay,
    },
  },
});

const wordVariants = {
  hidden: { y: "110%" },
  show: {
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function RevealText({ text, className = "", delay = 0, as = "span" }) {
  const words = typeof text === "string" ? text.split(" ") : [];

  return (
    <motion.span
      className={`inline ${className}`}
      variants={containerVariants(delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px" }}
    >
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom"
          style={{ paddingBottom: "0.06em", marginBottom: "-0.06em" }}
        >
          <motion.span className="inline-block" variants={wordVariants}>
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
