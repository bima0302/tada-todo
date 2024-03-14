import React from "react";
import { LuPenSquare, LuTrash } from "react-icons/lu";

export const Todo = ({ task }) => {
  return (
    <div className='p-2 px-10'>
      <div className='flex justify-between items-center rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-600'>
        <p>{task.task}</p>
        <div className='flex'>
          <LuPenSquare />
          <LuTrash />
        </div>
      </div>
    </div>
  );
};
