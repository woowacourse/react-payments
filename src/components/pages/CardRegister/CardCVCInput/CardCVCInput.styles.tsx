import styled, { DefaultTheme } from 'styled-components';

interface StyledInputProps {
  inputTheme?: keyof DefaultTheme;
}

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 318px;
`;

export const Input = styled.input<StyledInputProps>`
  width: 100%;
  height: 100%;
  font-size: 12px;
  padding: 0 20px;
  border: none;
  border-radius: 7px;
  outline: none;
  background-color: ${(props) =>
    props.inputTheme
      ? props.theme[props.inputTheme].backgroundColor
      : props.theme.pale.backgroundColor};};
`;

export const Label = styled.label`
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

export const Info = styled.button`
  display: center;
  justify-content: center;
  align-items: center;

  color: #444;
  width: 27px;
  height: 27px;
  border-radius: 50%;
  border: 1px solid lightgray;
  background-color: white;
  font-size: 12px;
  margin-left: 10px;
`;

export const Divider = styled.span`
  color: #444;
  font-size: 12px;
`;
