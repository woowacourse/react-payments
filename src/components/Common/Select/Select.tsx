import React from "react";
import { OptionCSS, SelectCSS } from "./Select.styled";

interface Option {
  value: string;
  text: string;
}

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  isError: boolean;
  placeholder?: string;
  options: Option[];
}

export default function Select({
  isError = false,
  placeholder = "선택해주세요",
  options,
  ...props
}: SelectProps) {
  return (
    <SelectCSS $isError={isError} {...props}>
      <OptionCSS value="">{placeholder}</OptionCSS>
      {options.map(({ value, text }) => {
        return (
          <OptionCSS key={value} value={value}>
            {text}
          </OptionCSS>
        );
      })}
    </SelectCSS>
  );
}
