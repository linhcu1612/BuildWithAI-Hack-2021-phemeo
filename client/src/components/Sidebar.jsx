/** @format */

import React from "react";

const Sidebar = () => {
  return (
    <div className='fixed z-30 inset-x-0 top-0'>
      <nav className='flex justify-between mt-3'>
        <h1 className='flex items-center mt-0 py-2 px-6'>MHAS</h1>
        <div className='flex justify-center'>
          <a
            className='flex items-center mt-0 py-2 px-0 mx-4 text-gray-500 border-b-2 border-green-400'
            href='/'>
            <span className='mx-3'>Dashboard</span>
          </a>

          <a
            className='flex items-center mt-0 py-2 px-0 mx-4 text-gray-500'
            href='/team_member'>
            <span className='mx-3'>Team Members</span>
          </a>

          <a
            className='flex items-center mt-0 py-2 px-0 mx-4 text-gray-500'
            href='/behind_the_scene'>
            <span className='mx-3'>Behind The Scene</span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
