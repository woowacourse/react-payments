import React from "react";
import styled from "styled-components";

const Label = (props) => {
  return <Container htmlFor={props.id}>{props.description}</Container>;
};

const Container = styled.label`
  color: #525252;
  font-size: 12px;
`;
export default Label;
