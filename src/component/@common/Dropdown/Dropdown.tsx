import { DropdownContainer } from "./Dropdown.style.ts";

type DropdownProps = {
  options: string[];
}

function Dropdown({options}: DropdownProps) {
  return (
    <select css={DropdownContainer} name="pets" id="pet-select">
      {options.map((option) => {
        return <option key={option} value={option}>{option}</option>
      })}
    </select>
  );
}

export default Dropdown;
