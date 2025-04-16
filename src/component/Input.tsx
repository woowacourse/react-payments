import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { CardInputProps } from "../types/CardInputTypes";

type InputKeyType =
  | "first"
  | "second"
  | "third"
  | "fourth"
  | "MM"
  | "YY"
  | "CVC";

interface InputProps {
  maxLength: number;
  placeholder: string;
  isError: boolean;
  inputKey: InputKeyType;
  setCardInput: Dispatch<SetStateAction<CardInputProps>>;
}

const InputField = styled.input`
  width: 100%;
  padding: 8px;
  background-color: var(--color-white);
  border: 1px solid var(--color-gray);
  border-radius: 4px;
  &:focus {
    outline: none;
    border-color: var(--color-black);
  }
`;

const Input = ({
  maxLength,
  placeholder,
  isError = false,
  inputKey,
  setCardInput,
}: InputProps) => {
  const handleCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

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
    />
  );
};

export default Input;
