import React from "react";
import styled from "styled-components";

import { textColor } from "components/UIComponents/styleConstants";

const widthPreset = {
  sm: "40px",
  default: "70px",
  full: "100%",
};

export const StyledInput = styled.input<{
  isComplete?: boolean;
  textAlign?;
  width?;
}>`
  // 텍스트 선택 커서 색상 설정
  caret-color: #000000;

  color: ${({ isComplete }) =>
    isComplete ? textColor["complete"] : textColor["default"]};
  font-size: 18px;
  font-weight: 600;
  line-height: 21px;
  text-align: ${({ textAlign }) => textAlign};

  background-color: transparent;
  width: ${({ width }) => widthPreset[width]};

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

  &:invalid {
    color: ${textColor["error"]};
  }
`;

type CustomProps = {
  type: "text" | "number" | "password";
  width: "sm" | "default" | "full";
  isComplete?: boolean;
  textAlign;
};

type Props = CustomProps & React.InputHTMLAttributes<HTMLInputElement>;

export default function Input(props: Props) {
  return <StyledInput {...(props as Props)} />;
}

Input.defaultProps = {
  name: "default name",
  type: "text",
  width: "default",
  textAlign: "center",
};
