import styled, { DefaultTheme } from 'styled-components';

interface StyledInputProps {
  inputTheme?: keyof DefaultTheme;
}

export const Input = styled.input<StyledInputProps>`
  width: 43px;
  height: 45px;
  font-size: 12px;
  text-align: center;
  padding: 0;
  border: none;
  border-radius: 7px;
  outline: none;
  background-color: ${(props) =>
    props.inputTheme
      ? props.theme[props.inputTheme].backgroundColor
      : props.theme.pale.backgroundColor};};
`;

export const FieldSet = styled.fieldset`
  padding: 0;
  margin: 0;
  border: 0;

  & input:not(:last-child) {
    margin-right: 10px;
  }
`;

export const Legend = styled.legend`
  font-weight: 500;
  font-size: 12px;
  color: #525252;
`;

export const InputBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  border: none;

  background: #ecebf1;
  width: 137px;
  height: 48.75px;
  margin-top: 8px;
`;

export const Divider = styled.span`
  color: #444;
  font-size: 12px;
`;
