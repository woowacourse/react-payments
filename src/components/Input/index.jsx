import React from "react";
import styled from "styled-components";

const Input = ({
  placeholder,
  type,
  id,
  width,
  length,
  value,
  textAlign = "center",
}) => {
  return (
    <InputContainer
      placeholder={placeholder}
      type={type}
      id={id}
      width={width}
      maxLength={length}
      value={value}
      textAlign={textAlign}
    />
  );
};

const InputContainer = styled.input`
  text-align: ${(props) => props.textAlign};
  width: ${(props) => props.width}px;
  height: 45px;
  background-color: #ecebf1;
  border: none;
  border-radius: 7px;

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::placeholder {
    color: #737373;
    font-size: 18px;
  }
`;

export default Input;
