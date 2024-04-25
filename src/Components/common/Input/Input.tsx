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
  onEnter?: () => void; // 엔터 키 이벤트 핸들러 추가
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  onValidate,
  maxLength,
  placeholder,
  size = "medium",
  validator,
  onEnter, // 엔터 키 이벤트 핸들러 추가
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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onEnter) {
      onEnter();
    }
  };

  return (
    <InputWrapper size={inputSize} isValid={isValid}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown} // 엔터 키 이벤트 핸들러 추가
        maxLength={maxLength}
        placeholder={placeholder}
      />
    </InputWrapper>
  );
};

export default Input;
