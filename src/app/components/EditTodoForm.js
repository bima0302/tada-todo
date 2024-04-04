import React from "react";

// Import useState from 'react' library
import { useState } from "react";

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
  };
  return (
    <>
      {/* make input form to update todo */}
      <form class='p-10' onSubmit={handleSubmit}>
        <div class='flex items-center'>
          <input
            type='text'
            class='w-full rounded-lg border border-gray-400 p-2'
            value={value}
            placeholder='Update task'
            onChange={(e) => setValue(e.target.value)}
          />
          <button class='ml-2 rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-600'>
            Update
          </button>
        </div>
      </form>
    </>
  );
};
