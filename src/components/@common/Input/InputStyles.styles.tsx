import styled, { css, DefaultTheme } from "styled-components";

interface StyledInputProps {
  inputTheme?: keyof DefaultTheme;
}
export const Limit = styled.span`
  font-weight: 500;
  font-size: 12px;
  color: #525252;
`;

export const BaseInput = css<StyledInputProps>`
  width: 100%;
  height: 100%;
  font-size: 12px;
  padding: 0;
  border: none;
  border-radius: 7px;
  outline: none;
  padding: 0 20px;
  background-color: ${(props) =>
    props.inputTheme
      ? props.theme[props.inputTheme].backgroundColor
      : props.theme.pale.backgroundColor};

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px #ecebf1 inset !important;
  }
`;
