import React from "react";
import styled from "styled-components";

const Label = (props) => {
  return (
    <LabelContainer htmlFor={props.id}>{props.description}</LabelContainer>
  );
};

const LabelContainer = styled.label`
  color: #525252;
  font-size: 12px;
`;
export default Label;
