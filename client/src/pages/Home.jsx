/** @format */

import React from "react";
import background from "../assets/background.jpeg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className='text-white z-10 absolute top-1/2 font'>
        <h1>Mental Health Alert System</h1>
        <p>
          A system tracks student performance and alert the healthcare system
          <br />
          in university about help-seeking behaviours to support university in
          <br />
          maintaining students' health
        </p>
        <Link to='/dashboard'>
          <div className='w-10 rounder-2 h-10'>
            <span>Get Started</span>
          </div>
        </Link>
      </div>
      <img
        src={background}
        alt='landing page'
        className='inset-0 absolute w-screen h-screen z-0'
      />
    </>
  );
};

export default Home;
