import { ChangeEvent } from 'react';
import styled from 'styled-components';

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

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }
`;

function Input({
  placeholder,
  isError,
  value,
  name,
  inputMode,
  onChange,
  onBlur,
}: {
  placeholder: string;
  isError?: boolean;
  value: string;
  name: string;
  inputMode: 'text' | 'numeric';
  onChange: (e: ChangeEvent) => void;
  onBlur?: (e: ChangeEvent) => void;
}) {
  return (
    <StyledInput
      placeholder={placeholder}
      value={value}
      inputMode={inputMode}
      $isError={isError ?? false}
      onChange={onChange}
      name={name}
      type="text"
      onBlur={onBlur}
    ></StyledInput>
  );
}

export default Input;
