import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export const StyledInput = styled.input`
  color: #04c09e;
  font-size: 18px;
  font-weight: 600;
  line-height: 21px;
  text-align: center;

  background-color: transparent;
  width: ${(p) => p.width};

  outline: none;
  border: none;

  &::placeholder {
    color: #737373;
  }
`;

export default function Input({ name, type, placeholder }) {
  return <StyledInput type={type} name={name} placeholder={placeholder} />;
}

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.oneOf(["text", "number", "password"]),
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  name: "default name",
  type: "text",
};
