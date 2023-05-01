import React from "react";
import { InputProvider } from "../../../contexts/inputContext";

export interface InputBoxProps<T> {
  children: React.ReactNode;
  inputState?: {
    value: T;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
}

export function InputBox<T>(props: InputBoxProps<T>) {
  const { children, inputState } = props;

  return <InputProvider inputState={inputState}>{children}</InputProvider>;
}
