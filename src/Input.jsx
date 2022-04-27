import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export const StyledInput = styled.input`
  // 텍스트 선택 커서 색상 설정
  caret-color: #000000;
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

export default function Input({ name, type, placeholder, value, onChange }) {
  return (
    <StyledInput
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.oneOf(["text", "number", "password"]),
  placeholder: PropTypes.string,
  width: PropTypes.string,
};

Input.defaultProps = {
  name: "default name",
  type: "text",
  width: "100px",
};
