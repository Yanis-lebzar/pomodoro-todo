import React from "react";
import { motion } from "framer-motion";

function TextMain() {
  return (
    <motion.div
      variants={boxVariants}
      initial="out"
      animate="in"
      className="font-inter space-y-7 text-white text-center md:text-left"
    >
      <motion.h2 variants={iconVariants} className=" font-normal text-3xl ">
        Todo Pomodoro
      </motion.h2>
      <motion.h1 variants={iconVariants} className=" font-semibold text-4xl ">
        Boost your productivity
      </motion.h1>
      <motion.p
        variants={iconVariants}
        className=" font-normal text-lg md:w-2/3"
      >
        Lorem ipsum dolor sit amet consectetur. Aenean placerat cursus nec
        ridiculus cursus. Lorem ipsum dolor sit amet consectetur. Aenean
        placerat cursus nec ridiculus cursus.
      </motion.p>
    </motion.div>
  );
}

export default TextMain;

const boxVariants = {
  out: {
    x: 600,
  },
  in: {
    x: 0,
    transition: {
      duration: 0.3,
      // The first child will appear AFTER the parrent has appeared on the screen
      delayChildren: 0.6,
      // The next sibling will appear 0.5s after the previous one
      staggerChildren: 0.3,
    },
  },
};

const iconVariants = {
  out: {
    opacity: 0,
    y: -10,
  },
  in: {
    opacity: 1,
    y: 0,
  },
};
