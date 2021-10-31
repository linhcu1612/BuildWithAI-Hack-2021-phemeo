/** @format */

import React from "react";
import Sidebar from "./Sidebar";

const Layout = (props) => {
  return (
    <div
      className='h-screen bg-gray-200 font-roboto'
      style={{ backgroundColor: "rgb(156,176,149)" }}>
      <Sidebar />

      <div className='flex-1 flex flex-col overflow-hidden'>
        <main className='flex-1 overflow-x-hidden overflow-y-auto'>
          <div className='container mx-auto px-0 py-16'>{props.children}</div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
