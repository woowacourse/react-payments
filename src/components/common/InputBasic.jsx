import React from "react";
import styled from "styled-components";

export const InputBasic = ({
  type,
  placeholder,
  value,
  onChange,
  onBlur,
  id,
  pattern,
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
      pattern={pattern}
      maxLength={maxLength}
      onChange={onChange}
      onBlur={onBlur}
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
  font-size: 16px;
  border-color: #9ca3af;
  border: none;
  border-radius: 0.25rem;
  font-weight: bold;

  &:invalid {
    color: #ff6d6d;
  }
`;
