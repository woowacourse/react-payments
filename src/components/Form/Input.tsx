import styled from "styled-components";
import { useState } from "react";

interface IInputProps {
  index: string;
  type: string;
  placeholder?: string;
  maxLength: number;
  setErrorMessage: (errorMessage: string) => void;
  setAllInputValid: (isValidInput: boolean) => void;
  setData: React.Dispatch<React.SetStateAction<Map<string, string>>>;

  validationRule: (value: string) => boolean;
  errorMessageText: string;
}

const Input = ({
  index,
  type,
  placeholder,
  maxLength,
  setErrorMessage,
  setAllInputValid,
  setData,
  validationRule,
  errorMessageText,
}: IInputProps) => {
  const [currentValue, setCurrentValue] = useState("");
  const [isValidInput, setIsValidInput] = useState(true);

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue = e.target.value;

    setCurrentValue(currentValue);

    setData((prevCardNumbers) =>
      new Map(prevCardNumbers).set(index, currentValue)
    );

    if (!validationRule(currentValue)) {
      setErrorMessage(errorMessageText);
      setIsValidInput(false);
      setAllInputValid(false);
    } else {
      setErrorMessage("");
      setIsValidInput(true);
      setAllInputValid(true);
    }
  };

  return (
    <InputStyled
      isValidInput={isValidInput}
      onChange={inputChangeHandler}
      maxLength={maxLength}
      type={type}
      placeholder={placeholder}
    ></InputStyled>
  );
};

const InputStyled = styled.input<{ isValidInput: boolean }>`
  width: 100%;
  border: 1px solid ${(props) => (props.isValidInput ? "#acacac" : "red")};
  border-radius: 5px;
  padding: 8px;
  box-sizing: border-box;

  &::placeholder {
    font-size: 11px;
  }

  &:focus {
    border: 1px solid ${(props) => (props.isValidInput ? "#acacac" : "red")};
  }
`;

export default Input;
