import styled from 'styled-components';
import { ReactNode } from 'react';

interface InputLabelProps {
  children: ReactNode;
}

function InputLabel({ children }: InputLabelProps) {
  return <InputLabelText>{children}</InputLabelText>;
}

export default InputLabel;

export const InputLabelText = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: -0.085em;
  color: #525252;
`;
