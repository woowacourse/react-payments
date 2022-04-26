import React from "react";
import styled from "styled-components";

const Input = ({ placeholder, type, id, width }) => {
  return (
    <InputContainer
      placeholder={placeholder}
      type={type}
      id={id}
      width={width}
    />
  );
};

const InputContainer = styled.input`
  text-align: center;
  width: ${(props) => props.width}px;
  height: 45px;
  background-color: #ecebf1;
  border: none;
  border-radius: 7px;

  &::placeholder {
    color: #737373;
    font-size: 18px;
  }
`;

export default Input;
