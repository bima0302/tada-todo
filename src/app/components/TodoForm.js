import React from "react";

// Import useState from 'react' library
import { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      addTodo(value);
      setValue("");
    }
  };
  return (
    <>
      {/* make input form to make new todo */}
      <form className='p-10' onSubmit={handleSubmit}>
        <div className='flex items-center'>
          <input
            type='text'
            className='w-full rounded-lg border border-gray-400 p-2'
            value={value}
            placeholder='What needs to be done?'
            onChange={(e) => setValue(e.target.value)}
          />
          <button className='ml-2 rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-600'>
            Add
          </button>
        </div>
      </form>
    </>
  );
};
