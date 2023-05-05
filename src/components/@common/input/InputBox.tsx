import React from "react";
import { InputProvider } from "../../../contexts/inputContext";
import { InputUnit } from "./Input";
import { InputGroup } from "./inputGroup";
import { InputLabel } from "./inputLabel";

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

export const Input = Object.assign(InputBox, {
  Group: InputGroup,
  Label: InputLabel,
  Unit: InputUnit,
});
