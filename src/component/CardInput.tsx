import type { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import type { ComponentProps } from "react";
import type { CardInputProps } from "../types/CardInputTypes";
import { useState } from "react";

interface InputProps extends ComponentProps<"input"> {
  inputKey: keyof CardInputProps;
  setCardInput: Dispatch<SetStateAction<CardInputProps>>;
  validate: (value: string) => string | undefined;
  handleErrorMessage: (input: string) => void;
}

const CardInput = ({
  inputKey,
  setCardInput,
  validate,
  handleErrorMessage,
  ...restProps
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
      {...restProps}
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
