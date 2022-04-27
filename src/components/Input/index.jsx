import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const InputSizeType = {
  large: "318",
  medium: "84",
  small: "43",
};

const Input = ({
  placeholder = "",
  type = "text",
  id,
  size,
  maxLength,
  value,
  textAlign = "center",
}) => {
  return (
    <Container
      placeholder={placeholder}
      type={type}
      id={id}
      size={size}
      maxLength={maxLength}
      value={value}
      textAlign={textAlign}
    />
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  size: PropTypes.string,
  maxLength: PropTypes.number,
  value: PropTypes.string,
  textAlign: PropTypes.string,
};

const Container = styled.input`
  text-align: ${(props) => props.textAlign};
  width: ${(props) => InputSizeType[props.size]}px;
  height: 45px;
  background-color: #ecebf1;
  color: #04c09e;
  border: none;
  border-radius: 7px;

  &::placeholder {
    color: #737373;
    font-size: 18px;
  }
`;

export default Input;
