import React, { useState } from "react";
import TaskModalAdd from "./TaskModalAdd";
type Props = {
  handleClick?: React.MouseEventHandler;
};
function ButtonAddTask({ handleClick }: Props) {
  return (
    <>
      <div
        onClick={handleClick}
        className="w-full h-[6%] bg-nightBlue rounded-full flex items-center justify-center text-white space-x-5 hover:bg-lightGreen transition-colors duration-300 cursor-pointer "
      >
        <p className="font-inter text-base font-normal">Add a task</p>
        <svg
          width="20"
          height="20"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="16" height="16" rx="8" fill="white" />
          <path
            d="M8.00195 5.46344V10.5366"
            stroke="#215143"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M10.5371 8L5.46394 8"
            stroke="#215143"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </>
  );
}

export default ButtonAddTask;
