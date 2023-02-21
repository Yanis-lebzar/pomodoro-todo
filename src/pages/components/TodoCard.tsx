import React, { useEffect, useState } from "react";
import { useTodoContext } from "@/context/TodoProvider";
import { updateTodo } from "../api/todo-api";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";

type Props = {
  handleClick: () => void;
  taskTitle: string;
  taskId: string;
  taskCompletion: boolean;
};

interface Todo {
  title?: string;
  description?: string;
  _id: string;
  completed: boolean;
}

function TodoCard({ handleClick, taskTitle, taskId, taskCompletion }: Props) {
  const { setTodoId } = useTodoContext();
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const pathLength = useMotionValue(0);
  const opacity = useTransform(pathLength, [0, 0.5], [0, 1]);

  useEffect(() => {
    setIsCompleted(taskCompletion);
  }, []);
  const handleSetTodoId = () => {
    setTodoId(taskId);
    handleClick();
  };

  const handleCompletedTask = async () => {
    setIsCompleted(!isCompleted);
    console.log(isCompleted);
    try {
      await updateTodo(taskId, { completed: !isCompleted ? true : false });
      console.log("updated");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={item}
        className={`w-full xl:h-40 h-28 mb-11 text-nightBlue font-semibold rounded-lg overflow-hidden  content-center   hover:bg-slate-100 bg-white flex flex-col justify-between items-center py-4 md:py-6 lg:py-4 break-normal -z-0 ${
          isCompleted
            ? "bg-opacity-40  hover:bg-opacity-75 backdrop-blur-sm "
            : " "
        } transition-all duration-300 `}
      >
        <svg
          onClick={handleSetTodoId}
          className="cursor-pointer"
          width="24"
          height="5"
          viewBox="0 0 24 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="21"
            cy="2.5"
            r="2.5"
            transform="rotate(180 21 2.5)"
            fill="#20414B"
          />
          <circle
            cx="12"
            cy="2.5"
            r="2.5"
            transform="rotate(180 12 2.5)"
            fill="#20414B"
          />
          <circle
            cx="3"
            cy="2.5"
            r="2.5"
            transform="rotate(180 3 2.5)"
            fill="#20414B"
          />
        </svg>

        <p className="break-words  text-center px-3">{taskTitle}</p>
        <svg
          onClick={() => handleCompletedTask()}
          className="cursor-pointer"
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10.5" stroke="#20414B" strokeWidth="3" />
          <AnimatePresence>
            {isCompleted && (
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                exit={{ pathLength: 0 }}
                transition={{ duration: 0.3 }}
                style={{ pathLength, opacity }}
                d="M5 12.569C7.16667 13.069 11.5 15.269 11.5 20.069C11.5 26.069 16 2.56905 24 4.06905"
                stroke="#20414B"
                strokeWidth="3"
              />
            )}
          </AnimatePresence>
        </svg>
      </motion.div>
    </AnimatePresence>
  );
}

export default TodoCard;

const item = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    x: -10,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    y: -100,
    transition: {
      duration: 0.5,
    },
  },
};
