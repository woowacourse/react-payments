import styled from 'styled-components';
import { useState } from 'react';

interface InputProps {
  maxLength: number;
  placeholder: string;
  validate: (value: string) => string | undefined;
  handleErrorMessage: (input: string) => void;
  onChange: (value: string) => void;
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

const Input = ({
  maxLength,
  placeholder,
  validate,
  handleErrorMessage,
  onChange,
}: InputProps) => {
  const [isError, setIsError] = useState(false);

  const handleCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const errorMessage = validate(value);
    if (errorMessage && errorMessage.length > 0) {
      handleErrorMessage(errorMessage);
      setIsError(true);
      return;
    }

    handleErrorMessage('');
    setIsError(false);
    onChange(value);
  };

  return (
    <InputField
      placeholder={placeholder}
      maxLength={maxLength}
      onChange={handleCardNumber}
      inputMode="numeric"
      pattern="[0-9]*"
      $isError={isError}
    />
  );
};

export default Input;
