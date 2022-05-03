import React from "react";
import styled from "styled-components";

export const InputBasic = ({
  type,
  placeholder,
  value,
  onChange,
  id,
  width,
  inputRef,
  maxLength,
}) => {
  return (
    <InputBasicStyle
      width={width}
      type={type}
      ref={inputRef}
      placeholder={placeholder}
      value={value}
      id={id}
      maxLength={maxLength}
      onChange={onChange}
    />
  );
};

const InputBasicStyle = styled.input`
  background-color: #ecebf1;
  color: #04c09e;
  height: 45px;
  width: ${(props) => props.width || "100%"};
  text-align: center;
  outline: 2px solid transparent;
  outline-offset: 2px;
  font-size: 18px;
  border-color: #9ca3af;
  border: none;
  border-radius: 0.25rem;
`;
