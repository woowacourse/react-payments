import type { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import type { CardInputProps } from "../types/CardInputTypes";
import { useState } from "react";

interface InputProps {
  maxLength: number;
  placeholder: string;
  inputKey: keyof CardInputProps;
  setCardInput: Dispatch<SetStateAction<CardInputProps>>;
  validate: (value: string) => string | undefined;
  handleErrorMessage: (input: string) => void;
}

const CardInput = ({
  maxLength,
  placeholder,
  inputKey,
  setCardInput,
  validate,
  handleErrorMessage,
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

    handleErrorMessage("");
    setIsError(false);

    setCardInput((prev: CardInputProps) => ({
      ...prev,
      [inputKey]: value,
    }));
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

const InputField = styled.input<{ $isError: boolean }>`
  width: 100%;
  padding: 8px;
  background-color: var(--color-white);
  border: 1px solid var(--color-gray);
  border-color: ${({ $isError }) =>
    $isError ? "var(--color-red)" : "var(--color-gray)"};
  border-radius: 4px;
  &:focus {
    outline: none;
    border-color: ${({ $isError }) =>
      $isError ? "var(--color-red)" : "var(--color-black)"};
  }
`;

export default CardInput;
