/** @format */

import React from "react";

const Team = (props) => {
  return (
    <div
      style={{
        margin: "20px 70px",
        backgroundColor: "rgb(232, 246, 228)",
        height: "300px",
        borderRadius: "10px",
        paddingTop: "50px",
      }}>
      <img
        src={props.image}
        alt=''
        style={{
          height: "100px",
          width: "100px",
          margin: "auto",
          borderRadius: "50%",
        }}
      />
      <h1
        className='text-center'
        style={{
          fontSize: "32px",
          color: "rgb(156, 176, 149)",
          fontWeight: "bold",
        }}>
        {props.name}
      </h1>
      <p
        className='text-center'
        style={{
          fontSize: "20px",
          color: "rgba(156, 176, 149, 0.7)",
          fontWeight: "bold",
        }}>
        {props.role}
      </p>
    </div>
  );
};

export default Team;
