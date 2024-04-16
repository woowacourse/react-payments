import React from 'react';
import styled from 'styled-components';

interface InputProps {
  id: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isError: boolean;
  placeholder: string;
  width?: string;
}

const Input = ({ id, value, handleChange, isError, placeholder, width = '100%' }: InputProps) => {
  return (
    <StyledInput
      id={id}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      width={width}
      isError={isError}
    />
  );
};

interface StyledInputProps {
  width: string;
  isError: boolean;
}

const StyledInput = styled.input<StyledInputProps>`
  width: ${props => props.width};
  padding: 12px 10px;

  border: 1.2px solid ${props => (props.isError ? '#ff3d3d' : '#acacac')};
  border-radius: 5px;
  font-size: 16px;

  &::placeholder {
    color: #acacac;
  }
  &:focus {
    outline: none;
  }
`;

export default Input;
