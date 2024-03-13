// To inform next js, this is a client component
"use client";

// Import useState from 'react' library
import { useState } from "react";

import { MdMenu, MdAccountCircle, MdEventNote } from "react-icons/md";

export default function Home() {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(value);
  };
  return (
    <>
      <div className='max-w-sm mx-auto'>
        {/* header */}
        <div className='bg-gray-100 h-12 flex items-center justify-between sticky top-0'>
          <div className='ml-4 mr-6'>
            <MdMenu size={24} />
          </div>
          <div className='text-lg'>Tada Todo</div>
          {/* add user image on right */}
          <div className='ml-6 mr-4'>
            <MdAccountCircle size={24} />
          </div>
        </div>
        {/* body */}
        <div className='container '>
          {/* make input form to make new todo */}
          <form
            class='h-screen bg-white p-10 shadow-lg'
            onSubmit={handleSubmit}
          >
            <div class='mb-4 flex items-center'>
              <input
                type='text'
                class='w-full rounded-lg border border-gray-400 p-2'
                placeholder='What needs to be done?'
                onChange={(e) => setValue(e.target.value)}
              />
              <button class='ml-2 rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-600'>
                <MdEventNote size={24} />
              </button>
            </div>
            {/* tasks */}
            <ul class='list-desc'>
              <li>Task 1</li>
              <li>Task 2</li>
              <li>Task 3</li>
            </ul>
          </form>
        </div>
        {/* footer */}
        <div className='bg-gray-100 h-16 flex items-center justify-between sticky bottom-0'>
          <div className='mx-auto'>
            Build With &hearts; by{" "}
            <a href='https://www.bimasetyo.com/'>Bima Setyo</a>
          </div>
        </div>
      </div>
    </>
  );
}
