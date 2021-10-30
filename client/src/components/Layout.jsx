/** @format */

import React from "react";
import Sidebar from "./Sidebar";

const Layout = (props) => {
  return (
    <div className='h-screen bg-gray-200 font-roboto'>
      <Sidebar />

      <div className='flex-1 flex flex-col overflow-hidden'>
        <main className='flex-1 overflow-x-hidden overflow-y-auto bg-gray-200'>
          <div className='container mx-auto px-0 py-16'>{props.children}</div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
