import React from "react";

interface Props {
  maxLength: number;
  placeholder: string;
  inputHandler: (inputValue: string) => void;
}

export default function Input({ maxLength, placeholder, inputHandler }: Props) {
  return (
    <>
      <input
        type="text"
        maxLength={maxLength}
        placeholder={placeholder}
        onChange={(e) => inputHandler(e.target.value)}
      ></input>
    </>
  );
}
