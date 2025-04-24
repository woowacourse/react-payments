import { DropdownContainer } from "./Dropdown.style";
import { ChangeEvent } from "react";

type DropdownProps = {
  options: string[];
  value?: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

function Dropdown({options, value, onChange}: DropdownProps) {
  return (
    <select
      css={DropdownContainer}
      name="card-brand"
      id="card-brand-select"
      value={value}
      onChange={onChange}
    >
      {options.map((option) => {
        return <option key={option} value={option}>{option}</option>
      })}
    </select>
  );
}

export default Dropdown;
