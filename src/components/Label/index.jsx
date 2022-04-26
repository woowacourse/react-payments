import React from "react";
import "./label.css";

const Label = (props) => {
  return <label htmlFor={props.id}>{props.description}</label>;
};

export default Label;
