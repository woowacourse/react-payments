import { ChangeEvent, ComponentProps } from 'react';
import styled from 'styled-components';

interface InputProps {
  isError?: boolean;
  inputType: 'text' | 'number';
  onChange: ({ name, value }: { name: string; value: string }) => void;
}

function Input({
  isError,
  inputType,
  onChange,
  ...props
}: InputProps & Omit<ComponentProps<'input'>, 'onChange'>) {
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
