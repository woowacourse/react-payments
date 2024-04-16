import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input<{ $isValid: boolean }>`
  width: 100%;
  height: 32px;
  padding: 8px;
  border-radius: 2px;
  border: 1px solid ${(props) => (props.$isValid ? '#acacac' : '#ff3d3d')};
  font-size: 11px;
`;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isValid: boolean;
}

function Input({ type, value, placeholder, onChange, isValid }: InputProps) {
  return <StyledInput $isValid={isValid} type={type} placeholder={placeholder} value={value} onChange={onChange} />;
}

export default Input;
