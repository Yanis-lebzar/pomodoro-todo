import React, { useState } from "react";
import TaskModal from "./TaskModalSettings";
import TodoContainer from "./TodoCard";

function Task() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="w-full">
      <TodoContainer handleClick={() => setIsModalOpen(true)} />
      <TaskModal
        handleClick={() => setIsModalOpen(false)}
        isModalOpen={isModalOpen}
      />
    </div>
  );
}

export default Task;
