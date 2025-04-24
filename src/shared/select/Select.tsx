import { ComponentProps } from "react";
import { StyledSelect, StyledOption } from "./Select.css";

type SelectProps = ComponentProps<"select"> & {
  options: Array<{ value: string; label: string; default?: boolean }>;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
  width?: string;
};

export default function Select({
  width,
  value,
  onChange,
  options,
}: SelectProps) {
  return (
    <StyledSelect width={width} value={value} onChange={onChange}>
      {options.map((option) => (
        <StyledOption
          key={option.value}
          value={option.value}
          disabled={option.default}
        >
          {option.label}
        </StyledOption>
      ))}
    </StyledSelect>
  );
}
