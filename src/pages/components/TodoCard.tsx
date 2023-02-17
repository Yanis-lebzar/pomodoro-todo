import React, { useEffect, useState } from "react";
import TaskModal from "./TaskModalSettings";
import TaskModalSettings from "./TaskModalSettings";
import { useTodoContext } from "@/context/TodoProvider";
type Props = {
  handleClick: React.MouseEventHandler;
  taskTitle: string;
  todoId: string;
};
function TodoCard({ handleClick, taskTitle, todoId }: Props) {
  const { setTodoId } = useTodoContext();
  // useEffect(()=> {
  //   setTodoId(todoId)
  // },[])
  const handleSetTodoId = () => {
    setTodoId(todoId);
    handleClick();
  };
  return (
    <>
      <div className="w-full h-40 mb-11 text-nightBlue rounded-lg overflow-hidden  content-center  hover:bg-slate-100 bg-white flex flex-col justify-between items-center py-6 break-normal  ">
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
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10.5" stroke="#20414B" strokeWidth="3" />
          <path
            d="M5 12.569C7.16667 13.069 11.5 15.269 11.5 20.069C11.5 26.069 16 2.56905 24 4.06905"
            stroke="#20414B"
            strokeWidth="3"
          />
        </svg>
      </div>
      {/* <TaskModalSettings
        setModalClose={() => setIsModalOpen(false)}
        handleClick={() => setIsModalOpen(false)}
        isModalOpen={isModalOpen}
        taskId={taskId}
      /> */}
    </>
  );
}

export default TodoCard;
