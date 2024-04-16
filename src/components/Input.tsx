import React from "react";

interface Props {
  idx: number;
  maxLength: number;
  placeholder: string;
  inputHandler: (inputValue: string, index: number) => void;
}

export default function Input({
  idx,
  maxLength,
  placeholder,
  inputHandler,
}: Props) {
  return (
    <>
      <input
        type="text"
        maxLength={maxLength}
        placeholder={placeholder}
        onChange={(e) => inputHandler(e.target.value, idx)}
      ></input>
    </>
  );
}
