/** @format */

import React from "react";
import background from "../assets/background.jpeg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div
        className='text-white z-10 absolute top-1/2'
        style={{ transform: "translateY(-50%)" }}>
        <h1 style={{ fontSize: "60px", lineHeight: "initial" }}>
          Mental Health
          <br />
          Alert System
        </h1>
        <p className='my-3' style={{ fontSize: "14px" }}>
          A system tracks student performance and alert the healthcare system
          <br />
          in university about help-seeking behaviours to support university in
          <br />
          maintaining students' health
        </p>
        <Link to='/dashboard'>
          <div
            className='flex justify-center mt-8'
            style={{
              height: "50px",
              width: "170px",
              borderRadius: "16px",
              backgroundColor: "rgb(232,246,228)",
              alignItems: "center",
              color: "rgb(156,176,149)",
            }}>
            <p style={{ fontSize: "24px" }}>Get Started</p>
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
