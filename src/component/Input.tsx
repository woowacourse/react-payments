import styled from 'styled-components';
import { useState, useRef, forwardRef, useImperativeHandle } from 'react';

export interface InputProps {
  maxLength: number;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  type?: string;
  name?: string;
  isError?: boolean;
  onComplete?: () => void;
}

export interface InputRef {
  focus: () => void;
}

const InputField = styled.input<{ $isError: boolean }>`
  width: 100%;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-color: ${({ $isError, theme }) =>
    $isError ? theme.colors.red : theme.colors.gray};
  border-radius: 4px;
  &:focus {
    outline: none;
    border-color: ${({ $isError, theme }) =>
      $isError ? theme.colors.red : theme.colors.black};
  }
`;

const Input = forwardRef<InputRef, InputProps>(
  (
    {
      maxLength,
      placeholder,
      value,
      onChange,
      onBlur,
      onComplete,
      type = 'text',
      name,
      isError = false,
    },
    ref,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current?.focus();
      },
    }));

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;
      onChange(inputValue);

      if (inputValue.length === maxLength && onComplete) {
        onComplete();
      }
    };

    return (
      <InputField
        ref={inputRef}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={handleChange}
        value={value}
        onBlur={onBlur}
        inputMode="numeric"
        pattern="[0-9]*"
        $isError={isError}
        type={type}
        name={name}
      />
    );
  },
);

export default Input;
