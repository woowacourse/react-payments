import styled from "styled-components";
import { useState, forwardRef } from "react";

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
  setFocusedInputIndex?: React.Dispatch<React.SetStateAction<string>>;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, IInputProps>(
  (
    {
      index,
      type,
      placeholder,
      maxLength,
      setErrorMessage,
      setAllInputValid,
      setData,
      validationRule,
      errorMessageText,
      setFocusedInputIndex,

      onFocus,
      onBlur,
    },
    ref
  ) => {
    const [currentValue, setCurrentValue] = useState("");
    const [isValidInput, setIsValidInput] = useState(true);

    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      setCurrentValue(value);

      setData((prevData) => new Map(prevData).set(index, value));

      if (!validationRule(value)) {
        setErrorMessage(errorMessageText);
        setIsValidInput(false);
        setAllInputValid(false);
      } else {
        setErrorMessage("");
        setIsValidInput(true);
        setAllInputValid(true);

        if (setFocusedInputIndex && value.length === maxLength) {
          setFocusedInputIndex(index);
        }
      }
    };

    return (
      <InputStyled
        ref={ref}
        currentValue={currentValue}
        isValidInput={isValidInput}
        maxLength={maxLength}
        type={type}
        placeholder={placeholder}
        onChange={inputChangeHandler}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    );
  }
);

const InputStyled = styled.input<{
  currentValue: string;
  isValidInput: boolean;
}>`
  width: 100%;
  border: 1px solid
    ${(props) =>
      props.currentValue !== "" && !props.isValidInput ? "red" : "#acacac"};
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
