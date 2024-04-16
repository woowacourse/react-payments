import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input<{ $isValid: boolean }>`
  width: 100%;
  height: 32px;
  padding: 8px;
  border-radius: 2px;
  border: 1px solid ${(props) => (props.$isValid ? '#acacac' : '#ff3d3d')};
  font-size: 11px;

  &:focus {
    border-color: #000;
  }
`;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isValid: boolean;
}

function Input({ type, value, placeholder, maxLength, onChange, isValid }: InputProps) {
  return (
    <StyledInput
      $isValid={isValid}
      type={type}
      placeholder={placeholder}
      maxLength={maxLength}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
