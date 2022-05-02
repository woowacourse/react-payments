import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export const StyledInput = styled.input`
  // 텍스트 선택 커서 색상 설정
  caret-color: #000000;
  color: ${(props) => (props.isComplete ? "#04c09e" : "#525252")};
  font-size: 18px;
  font-weight: 600;
  line-height: 21px;
  text-align: ${(props) => props.textAlign};

  background-color: transparent;
  width: ${(props) => props.width};

  outline: none;
  border: none;

  /* 숫자 입력란 화살표 숨김 */
  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type="number"] {
    -moz-appearance: textfield;
  }
  /* ************************** */

  &::placeholder {
    font-size: 14px;
    color: #acacac;
  }
`;

const Input = React.forwardRef((props, ref) => {
  return <StyledInput {...props} ref={ref} />;
});

export default Input;

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.oneOf(["text", "number", "password"]),
  placeholder: PropTypes.string,
  width: PropTypes.string,
};

Input.defaultProps = {
  name: "default name",
  type: "text",
  width: "70px",
  textAlign: "center",
};
