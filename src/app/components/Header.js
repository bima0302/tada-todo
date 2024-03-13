import React from "react";
import { MdMenu, MdAccountCircle } from "react-icons/md";

export const Header = () => {
  return (
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
  );
};
