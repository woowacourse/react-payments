import React, { forwardRef, useState } from "react";
import { InputWrapper } from "./Input.styles";

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  onValidate?: (isValid: boolean) => void;
  maxLength?: number;
  placeholder?: string;
  size?: "small" | "medium" | "large";
  validator?: (value: string) => boolean;
  onEnter?: () => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      value,
      onChange,
      onValidate,
      maxLength,
      placeholder,
      size = "medium",
      validator,
      onEnter,
    },
    ref
  ) => {
    const [isValid, setIsValid] = useState(true);
    const [inputSize, _] = useState(size);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      onChange(newValue);

      if (validator && onValidate) {
        const isValid = validator(newValue);
        setIsValid(isValid);
        onValidate(isValid);
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && onEnter) {
        onEnter();
      }
    };

    return (
      <InputWrapper size={inputSize} isValid={isValid}>
        <input
          ref={ref}
          type="text"
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          maxLength={maxLength}
          placeholder={placeholder}
        />
      </InputWrapper>
    );
  }
);

export default Input;
