import styled from 'styled-components';
import type { ComponentProps } from 'react';
import type { CardInputProps } from '../../types/CardInputTypes';

interface InputProps extends ComponentProps<'input'> {
  inputKey: keyof CardInputProps;
  isError: boolean;
  handleCardInput: (inputKey: keyof CardInputProps, value: string) => void;
}

const CardInput = ({ inputKey, isError, handleCardInput, ...restProps }: InputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    handleCardInput(inputKey, value);
  };

  return <InputField {...restProps} onChange={handleChange} $isError={isError} />;
};

const InputField = styled.input<{ $isError: boolean }>`
  width: 100%;
  padding: 8px;
  background-color: var(--color-white);
  border: 1px solid var(--color-gray);
  border-color: ${({ $isError }) => ($isError ? 'var(--color-red)' : 'var(--color-gray)')};
  border-radius: 4px;
  &:focus {
    outline: none;
    border-color: ${({ $isError }) => ($isError ? 'var(--color-red)' : 'var(--color-black)')};
  }
`;

export default CardInput;
