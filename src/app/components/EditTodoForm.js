import React from "react";

// Import useState from 'react' library
import { useState } from "react";

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(task.id, value);
  };
  return (
    <>
      {/* make input form to update todo */}
      <form className='p-10' onSubmit={handleSubmit}>
        <div className='flex items-center'>
          <input
            type='text'
            className='w-full rounded-lg border border-gray-400 p-2'
            value={value}
            placeholder='Update task'
            onChange={(e) => setValue(e.target.value)}
          />
          <button className='ml-2 rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-600'>
            Update
          </button>
        </div>
      </form>
    </>
  );
};
