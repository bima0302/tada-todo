import React from "react";

// Import useState from 'react' library
import { useState } from "react";

import { MdEventNote } from "react-icons/md";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      addTodo(value);
      setValue("");
    }
    // console.log(value);
  };
  return (
    <div>
      {/* make input form to make new todo */}
      <form class='p-10' onSubmit={handleSubmit}>
        <div class='mb-4 flex items-center'>
          <input
            type='text'
            class='w-full rounded-lg border border-gray-400 p-2'
            value={value}
            placeholder='What needs to be done?'
            onChange={(e) => setValue(e.target.value)}
          />
          <button class='ml-2 rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-600'>
            <MdEventNote size={24} />
          </button>
        </div>
      </form>
    </div>
  );
};
