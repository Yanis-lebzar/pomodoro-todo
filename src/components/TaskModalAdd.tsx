import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { createTodo } from "../pages/api/todo-api";
import { useTodoContext } from "@/context/TodoProvider";

type Props = {
  handleClick?: React.MouseEventHandler;
  isModalOpen: boolean;
  setModalClose: () => void;
};

interface Todo {
  title: string;
  description: string;
}

function TaskModalAdd({ handleClick, isModalOpen, setModalClose }: Props) {
  const { setTodos, todos } = useTodoContext();
  const [todo, setTodo] = useState<Todo>({ title: "", description: "" });

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({ ...todo, title: event.target.value });
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTodo({ ...todo, description: event.target.value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("todo submit", todo);
    const addTodo = async () => {
      try {
        const response = await createTodo(todo);
        console.log("res =>", response);
        setTodo(response);
        setTodos([todo, ...todos]);
      } catch (error) {
        console.error(error);
      }
    };
    addTodo();
    setModalClose();
  };
  return (
    <AnimatePresence>
      {isModalOpen ? (
        <motion.div
          variants={variant}
          initial="containerInitial"
          animate="containerAnimate"
          exit="containerExit"
          className="w-full h-full bg-nightBlue bg-opacity-40 absolute top-0 left-0 flex justify-center items-center font-inter"
        >
          {/* modal inner */}
          <motion.form
            onSubmit={handleSubmit}
            variants={modalVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-[30%] h-auto min-w-[90%] md:min-w-[400px] max-w-4xl min-h-[400px] max-h-[500px] lg:max-h-[500px] bg-white rounded-2xl p-6 flex  flex-col  relative"
          >
            {/* cross */}
            <div
              onClick={handleClick}
              className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-x"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            {/* itext and inputs */}
            <h2 className=" text-xl font-semibold text-nightBlue mb-8">
              Add a new task
            </h2>

            <div className="flex flex-col mb-8 ">
              <label
                className="text-sm font-bold  text-nightBlue mb-1"
                htmlFor="Task"
              >
                Task* :
              </label>
              <input
                required
                className="border rounded-md p-2 border-lightGreen border-opacity-40 focus:outline-2 focus:outline-lightGreen text-base "
                type="text"
                placeholder="Write a title for your task"
                value={todo.title}
                onChange={handleTitleChange}
              />
            </div>
            <div className="flex flex-col  mb-8">
              <label
                className="text-sm font-bold text-nightBlue  mb-1"
                htmlFor="Description"
              >
                Description :
              </label>

              <textarea
                className="border rounded-md p-2 border-lightGreen border-opacity-40 focus:outline-2 focus:outline-lightGreen text-base"
                placeholder="Write a description if you want to"
                value={todo.description}
                onChange={handleDescriptionChange}
              />
            </div>
            <div className="modal-actions ">
              <div className="flex items-center justify-center w-full">
                <button
                  type="submit"
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white w-full py-2 text-sm"
                >
                  Submit
                </button>
                <button
                  onClick={handleClick}
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded w-full py-2 text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </motion.form>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default TaskModalAdd;

const variant = {
  containerInitial: {
    opacity: 0,
  },
  containerAnimate: {
    opacity: 1,
  },
  containerExit: {
    opacity: 0,
    transition: {
      delay: 0,
    },
  },
};

const modalVariant = {
  initial: {
    opacity: 0,
    y: 50,
    transition: {
      type: "spring",
      duration: 0.5,
      mass: 2,
      damping: 10,
      delay: 0.4,
    },
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.5,
      mass: 2,
      damping: 10,
      delay: 0.2,
    },
  },
  exit: {
    opacity: 0,
    y: 50,
    transition: {
      type: "spring",
    },
  },
};
