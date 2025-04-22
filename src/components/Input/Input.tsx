import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  isError?: boolean;
  inputType: 'number' | 'text';
  onChange: ({ name, value }: { name: string; value: string }) => void;
}

function Input({
  id,
  placeholder,
  isError,
  value,
  name,
  inputType,
  onChange,
  onBlur,
}: InputProps) {
  const handleTypeChange = (e: ChangeEvent) => {
    const { value, name } = e.target as HTMLInputElement;

    if (inputType === 'number') {
      const numericValue = value.replace(/[^0-9]/g, '');
      return onChange({ value: numericValue, name });
    }

    return onChange({ value, name });
  };

  return (
    <StyledInput
      id={id}
      placeholder={placeholder}
      value={value}
      inputMode={inputType === 'number' ? 'numeric' : 'text'}
      $isError={isError ?? false}
      onChange={handleTypeChange}
      name={name}
      type="text"
      onBlur={onBlur}
    />
  );
}

const StyledInput = styled.input<{ $isError: boolean }>`
  width: 100%;
  height: 32px;
  border: 1px solid;
  border-radius: 2px;
  padding: 8px;
  box-sizing: border-box;
  border-color: ${(props) => (props.$isError ? 'red' : '#acacac')};

  &:focus {
    outline: none;
    border-color: ${(props) => (props.$isError ? 'red' : 'black')};
  }

  &::placeholder {
    font-weight: 400;
    font-size: 11px;
    color: #acacac;
  }
`;

export default Input;
