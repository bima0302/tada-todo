import React from "react";
import { LuPenSquare, LuTrash } from "react-icons/lu";

export const Todo = () => {
  return (
    <>
      <div className='mx-10 rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-600'>
        <p>Buy iPhone 12</p>
        <LuPenSquare />
        <LuTrash />
      </div>
    </>
  );
};
