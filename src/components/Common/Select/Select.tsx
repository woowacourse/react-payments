import React from "react";
import { OptionStyles, SelectStyles } from "./Select.styled";

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
    <SelectStyles $isError={isError} {...props}>
      <OptionStyles value="">{placeholder}</OptionStyles>
      {options.map(({ value, text }) => {
        return (
          <OptionStyles key={value} value={value}>
            {text}
          </OptionStyles>
        );
      })}
    </SelectStyles>
  );
}
