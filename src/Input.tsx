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
`;

function Input({
  placeholder,
  isError,
  value,
  name,
  onChange,
}: {
  placeholder: string;
  isError?: boolean;
  value: string;
  name: string;
  onChange: (e: ChangeEvent) => void;
}) {
  return (
    <StyledInput
      placeholder={placeholder}
      value={value}
      $isError={isError ?? false}
      onChange={onChange}
      name={name}
    ></StyledInput>
  );
}

export default Input;
