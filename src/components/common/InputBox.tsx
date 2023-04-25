import React from "react";
import { InputProvider } from "../../contexts/inputContext";

export interface InputBoxProps {
  children: React.ReactNode;
  inputState: any;
}

export function InputBox(props: InputBoxProps) {
  const { children, inputState } = props;

  return <InputProvider inputState={inputState}>{children}</InputProvider>;
}
