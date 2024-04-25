/** @jsxImportSource @emotion/react */
import React from "react";
import { inputStyle } from "./style";

interface InputProps<T> extends React.InputHTMLAttributes<HTMLInputElement> {
  sizePreset?: SizePresetType;
  name: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>, name?: keyof T) => void;
  isError?: boolean;
}

function FormInputCompound<T>({ sizePreset = "medium", name, isError, onInputChange, ...props }: InputProps<T>) {
  return <input {...props} css={inputStyle(sizePreset, isError)} onChange={(e) => onInputChange(e, name as keyof T)} />;
}

export default FormInputCompound;
