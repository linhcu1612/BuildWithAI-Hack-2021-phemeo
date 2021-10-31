/** @format */

import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  let location = useLocation();

  const activeCal = (path) => {
    let classes = "flex items-center mt-0 py-2 px-0 mx-4 text-white";
    const activeClass = " border-b-2 border-green-800";
    if (location.pathname === path) {
      classes = classes + activeClass;
    }
    return classes;
  };

  return (
    <div className='fixed z-30 inset-x-0 top-0'>
      <nav className='flex justify-between mt-3'>
        <Link className='' to='/'>
          <h1
            className='flex items-center mt-0 py-2 px-6'
            style={{ fontSize: "24px", color: "rgb(232,246,228)" }}>
            MHAS
          </h1>
        </Link>
        <div className='flex justify-center'>
          <Link
            className={activeCal("/dashboard")}
            to='/dashboard'
            style={{ fontSize: "24px", color: "rgb(232,246,228)" }}>
            <span className='mx-3'>Dashboard</span>
          </Link>

          <Link
            className={activeCal("/about_us")}
            to='/about_us'
            style={{ fontSize: "24px", color: "rgb(232,246,228)" }}>
            <span className='mx-3'>About Us</span>
          </Link>

          <Link
            className={activeCal("/behind_the_scene")}
            to='/behind_the_scene'
            style={{ fontSize: "24px", color: "rgb(232,246,228)" }}>
            <span className='mx-3'>Behind The Scene</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
