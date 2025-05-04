import { ComponentProps } from "react";
import { OptionStyles, SelectStyles } from "./Select.styled";

interface Option {
  value: string;
  text: string;
}

interface SelectProps extends ComponentProps<"select"> {
  isError: boolean;
  placeholder?: string;
  options: Option[];
}

export default function Select({
  isError = false,
  placeholder = "선택해주세요",
  options,
  ref,
  ...props
}: SelectProps) {
  return (
    <SelectStyles $isError={isError} ref={ref} {...props}>
      <OptionStyles value="">{placeholder}</OptionStyles>
      {options.map(({ value, text }) => (
        <OptionStyles key={value} value={value}>
          {text}
        </OptionStyles>
      ))}
    </SelectStyles>
  );
}
