import React, { useState } from "react";
import ButtonAddTask from "./ButtonAddTask";
import TaskModalAdd from "./TaskModalAdd";

function AddTask() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(isModalOpen);
  return (
    <div className="w-full h-[6%]">
      {/* <Button
    <ButtonAddTask handleClick={() => setIsModalOpen(true)} />
    <TaskModal
      handleClick={() => setIsModalOpen(false)}
      isModalOpen={isModalOpen}
    /> */}
      <ButtonAddTask handleClick={() => setIsModalOpen(true)} />
      <TaskModalAdd
        handleClick={() => setIsModalOpen(false)}
        isModalOpen={isModalOpen}
      />
    </div>
  );
}

export default AddTask;
