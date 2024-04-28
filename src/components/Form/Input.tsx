import React, { useState, useRef } from "react";
import styled from "styled-components";

interface InputProps {
  index: number;
  type: string;
  placeholder?: string;
  maxLength: number;
  state: string[];
  setState: React.Dispatch<React.SetStateAction<string[]>>;
  setErrorMessage: (errorMessage: string) => void;
  setAllInputValid: (isValidInput: boolean) => void;
  validationRule: (value: string) => boolean;
  errorMessageText?: string;
  onFocus: (field: string | null) => void;
}

const Styled = {
  InputWrapper: styled.input<{ isValidInput: boolean }>`
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
  `,
};

const Input = ({
  index,
  type,
  placeholder,
  maxLength,
  state,
  setState,
  setErrorMessage,
  setAllInputValid,
  validationRule,
  errorMessageText,
  onFocus,
}: InputProps) => {
  const [isValidInput, setIsValidInput] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue = e.target.value;

    setState((prevData) => {
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

      if (index < state.length - 1 && inputRef.current?.nextSibling instanceof HTMLInputElement) {
        (inputRef.current.nextSibling as HTMLInputElement).focus();
      }
    }
  };

  return (
    <Styled.InputWrapper
      isValidInput={isValidInput}
      onChange={inputChangeHandler}
      maxLength={maxLength}
      type={type}
      placeholder={placeholder}
      key={index}
      value={state[index]}
      ref={inputRef}
      onFocus={() => onFocus?.(type)}
    />
  );
};

export default Input;
