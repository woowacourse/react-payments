import styled from '@emotion/styled';
import React from 'react';

interface SingleInputProps {
  value: string;
  placeholder: string;
  maxLength: number;
  error?: boolean;
  type: 'text' | 'password';
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const SingleInput = React.forwardRef<HTMLInputElement, SingleInputProps>(
  (
    {
      value,
      placeholder,
      maxLength,
      error = false,
      type = 'text',
      onChange,
      onFocus,
      onBlur,
    },
    ref
  ) => {
    return (
      <Input
        ref={ref}
        type={type}
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
        error={error}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    );
  }
);

export default SingleInput;

const Input = styled.input<{ error?: boolean }>`
  width: 100%;
  padding: 8px;
  border: 1px solid ${(props) => (props.error ? 'red' : '#ccc')};
  border-radius: 2px;
  font-size: 11px;
  outline: none;
`;
