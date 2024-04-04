import React from "react";
import { LuPenSquare, LuTrash } from "react-icons/lu";

export const Todo = ({ task, toggleComplete, deleteTodo }) => {
  return (
    <div className='p-2 px-10'>
      <div className='flex justify-between items-center rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-600'>
        <p
          onClick={() => toggleComplete(task.id)}
          className={`${task.completed ? "completed" : ""}`}
        >
          {task.task}
        </p>
        <div className='flex'>
          <LuPenSquare />
          <LuTrash onClick={() => deleteTodo(task.id)} />
        </div>
      </div>
    </div>
  );
};
