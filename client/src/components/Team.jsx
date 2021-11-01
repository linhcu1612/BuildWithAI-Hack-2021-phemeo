/** @format */

import React from "react";

import classes from "./Team.module.css";

const Team = (props) => {
  return (
    <div className={classes.wrapper}>
      <img src={props.image} alt='' className={classes.avatar} />
      <h1 className={classes.name}>{props.name}</h1>
      <p className={classes.role}>{props.role}</p>
    </div>
  );
};

export default Team;
