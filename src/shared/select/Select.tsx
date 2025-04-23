import { ComponentProps } from "react";
import { StyledSelect, StyledOption } from "./Select.css";

type SelectProps = ComponentProps<"select"> & {
  options: Array<{ value: string; label: string }>;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
  isError: boolean;
  width?: string;
};

export default function Select(props: SelectProps) {
  return (
    <StyledSelect {...props}>
      {props.options.map((option) => (
        <StyledOption key={option.value} value={option.value}>
          {option.label}
        </StyledOption>
      ))}
    </StyledSelect>
  );
}
