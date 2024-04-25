import React, { useState } from "react";
import { InputWrapper } from "./Input.styles";

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  onValidate?: (isValid: boolean) => void;
  maxLength?: number;
  placeholder?: string;
  size?: "small" | "medium" | "large";
  validator?: (value: string) => boolean;
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  onValidate,
  maxLength,
  placeholder,
  size = "medium",
  validator,
}) => {
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

  return (
    <InputWrapper size={inputSize} isValid={isValid}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        maxLength={maxLength}
        placeholder={placeholder}
      />
    </InputWrapper>
  );
};

export default Input;
