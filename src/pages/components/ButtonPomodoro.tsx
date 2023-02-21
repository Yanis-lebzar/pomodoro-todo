import React from "react";
import { motion } from "framer-motion";

import { IconInterface } from "@/datas/icons";

export interface Icon {
  viewBox: string;
  path: JSX.Element;
}

type Props = {
  icon: IconInterface;
  handleClick?: React.MouseEventHandler;
};

function ButtonPomodoro({ icon, handleClick }: Props) {
  return (
    <motion.div
      variants={childrenVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={` w-[51px] h-10 bg-white rounded-md justify-center  items-center  flex object-contain  cursor-pointer
    ${icon.name == "pauseIcon.svg" ? "p-4" : "p-2.5"} `}
      onClick={handleClick}
    >
      <svg
        width={icon.name === "playIcon.svg" ? "70%" : "100%"}
        viewBox={icon.viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {icon.path}
      </svg>
    </motion.div>
  );
}

export default ButtonPomodoro;

const childrenVariants = {
  out: {
    opacity: 0,
    y: 50,
  },
  in: {
    opacity: 1,
    y: 0,
  },
};
