import React from "react";
import { LuPenSquare, LuTrash } from "react-icons/lu";

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className='p-2 px-10'>
      <div className='flex justify-between items-center rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-600'>
        <p
          onClick={() => toggleComplete(task.id)}
          className={`${task.completed ? "completed" : "incompleted"}`}
        >
          {task.task}
        </p>
        <div className='flex'>
          <LuPenSquare onClick={() => editTodo(task.id)} />
          <LuTrash onClick={() => deleteTodo(task.id)} />
        </div>
      </div>
    </div>
  );
};
