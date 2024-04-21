import styled from "styled-components";
import { useState } from "react";

interface InputProps {
  // index: string;
  index: number;
  type: string;
  placeholder?: string;
  maxLength: number;
  data: string[];
  setData: React.Dispatch<React.SetStateAction<string[]>>;
  setErrorMessage: (errorMessage: string) => void;
  setAllInputValid: (isValidInput: boolean) => void;
  validationRule: (value: string) => boolean;
  errorMessageText?: string;
}

const Input = ({
  index,
  type,
  placeholder,
  maxLength,
  data,
  setData,
  setErrorMessage,
  setAllInputValid,
  validationRule,
  errorMessageText,
}: InputProps) => {
  const [isValidInput, setIsValidInput] = useState(true);

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue = e.target.value;

    setData((prevData) => {
      const newData = [...prevData];
      newData[index] = currentValue;
      return newData;
    });

    if (!validationRule(currentValue)) {
      if (errorMessageText) {
        setErrorMessage(errorMessageText);
      }
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
      key={index}
      value={data[index]}
    ></InputStyled>
  );
};

const InputStyled = styled.input<{ isValidInput: boolean }>`
  width: 100%;
  border: 1px solid ${(props) => (props.isValidInput ? "#acacac" : "red")};
  border-radius: 5px;
  padding: 8px;

  &::placeholder {
    font-size: 11px;
  }

  &:focus {
    border: 1px solid ${(props) => (props.isValidInput ? "#acacac" : "red")};
  }
`;

export default Input;
