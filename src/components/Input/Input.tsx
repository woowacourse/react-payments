import React from "react";
import styles from "./Input.module.css";

type InputProps = {
  textType?: TextType;
  onChange: (value: string) => void;
  value: string;
  placeholder?: string;
  errorMessage?: string;
};

export type TextType = "text" | "password";

const DEFAULT_PLACEHOLDER = "1234";
const DEFAULT_ERROR_MESSAGE = "";

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      textType = "text",
      value,
      onChange,
      placeholder = DEFAULT_PLACEHOLDER,
      errorMessage = DEFAULT_ERROR_MESSAGE,
    },
    ref
  ) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    };

    return (
      <input
        ref={ref}
        className={`${styles[`input-text`]} ${
          errorMessage ? styles["error"] : DEFAULT_ERROR_MESSAGE
        }`}
        type={textType === "password" ? "password" : "text"}
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
      />
    );
  }
);

export default Input;
