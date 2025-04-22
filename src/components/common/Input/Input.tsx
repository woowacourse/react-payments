import { ChangeEvent, ComponentProps } from 'react';
import styled from 'styled-components';

interface InputProps<T> {
  isError?: boolean;
  inputType: 'text' | 'number';
  name: T;
  onChange: ({ name, value }: { name: T; value: string }) => void;
}

function Input<T>({
  isError,
  inputType,
  onChange,
  ...props
}: InputProps<T> & Omit<ComponentProps<'input'>, 'onChange'>) {
  const handleTypeChange = (e: ChangeEvent) => {
    const { value, name } = e.target as HTMLInputElement;

    if (inputType === 'number') {
      const numericValue = value.replace(/[^0-9]/g, '');
      return onChange({ name: name as T, value: numericValue });
    }

    return onChange({ name: name as T, value });
  };

  return (
    <StyledInput
      inputMode={inputType === 'number' ? 'numeric' : 'text'}
      $isError={isError ?? false}
      onChange={handleTypeChange}
      type="text"
      {...props}
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
