import { InputHTMLAttributes, forwardRef } from 'react';
import styled from 'styled-components';

interface InputboxProps {
  children?: JSX.Element | JSX.Element[];
  width?: number;
}

const InputBox = (props: InputboxProps) => {
  const { children } = props;

  return <StyledInputBox children={children}></StyledInputBox>;
};

export const StyledInputBox = styled.div`
  display: flex;
  justify-content: center;
  height: 48px;
  margin-top: 12px;
  background: var(--input-background);
  border-radius: 8px;
`;

export default InputBox;
