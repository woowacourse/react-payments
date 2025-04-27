import { ComponentProps } from "react";
import { StyledSelect, StyledOption } from "../css/Select.css";

type SelectProps = ComponentProps<"select"> & {
  options: Array<{ value: string; label: string }>;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  width?: string;
  placeholder?: string;
};

export default function Select({
  width,
  value,
  onChange,
  options,
  placeholder,
}: SelectProps) {
  return (
    <StyledSelect width={width} value={value} onChange={onChange}>
      <StyledOption value="" disabled>
        {placeholder}
      </StyledOption>
      {options.map((option) => (
        <StyledOption key={option.value} value={option.value}>
          {option.label}
        </StyledOption>
      ))}
    </StyledSelect>
  );
}
